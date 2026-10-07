#!/usr/bin/env python3
"""Статистика сцени Unity прямо з YAML-файлу (без запуску Unity).

Рахує об'єкти за типами компонентів, джерела світла, запечені lightmap-и та
перевіряє, чи є в репозиторії префаби, на які посилається сцена.
Використання: python3 scripts/scene_stats.py [unity/Assets/Scenes/MetaLab_Main.unity]
"""
import collections, json, os, re, sys

CLASS = {1: "GameObject", 23: "MeshRenderer", 33: "MeshFilter", 64: "MeshCollider",
         65: "BoxCollider", 135: "SphereCollider", 136: "CapsuleCollider", 108: "Light",
         114: "MonoBehaviour", 82: "AudioSource", 1001: "PrefabInstance", 223: "Canvas"}
LIGHT_TYPE = {0: "spot", 1: "directional", 2: "point", 3: "area"}


def main(scene):
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(scene))))  # unity/
    text = open(scene, encoding="utf-8").read()
    docs = re.split(r"\n--- !u!", text)[1:]
    counts = collections.Counter()
    lights = []
    for d in docs:
        cid = int(re.match(r"(\d+) &", d).group(1))
        counts[CLASS.get(cid, f"class{cid}")] += 1
        if cid == 108:
            lights.append({
                "type": LIGHT_TYPE.get(int(re.search(r"^  m_Type: (\d+)", d, re.M).group(1)), "?"),
                "m_Lightmapping_raw": int(re.search(r"m_Lightmapping: (\d+)", d).group(1)),
            })
    prefabs = set(re.findall(r"m_SourcePrefab: \{fileID: \d+, guid: ([0-9a-f]{32})", text))
    metas = []
    for dp, _, fs in os.walk(os.path.join(root, "Assets")):
        metas += [os.path.join(dp, f) for f in fs if f.endswith(".meta")]
    known = set()
    for m in metas:
        g = re.search(r"guid: ([0-9a-f]{32})", open(m, encoding="utf-8", errors="ignore").read())
        if g:
            known.add(g.group(1))
    lm_dir = os.path.splitext(scene)[0]
    lightmaps = sorted(f for f in os.listdir(lm_dir) if f.startswith("Lightmap-") and f.endswith("_comp_light.exr")) \
        if os.path.isdir(lm_dir) else []
    mesh_refs = collections.Counter(re.findall(r"m_Mesh: \{fileID: (\d+), guid: ([0-9a-f]+)", text))
    out = {
        "scene_file_bytes": os.path.getsize(scene),
        "components": dict(counts),
        "lights": lights,
        "prefab_guids_referenced": len(prefabs),
        "prefab_guids_present_in_repo": len(prefabs & known),
        "lightmaps": [{"file": f, "bytes": os.path.getsize(os.path.join(lm_dir, f))} for f in lightmaps],
        "mesh_references_builtin_only": all(g == "0000000000000000e000000000000000" for _, g in mesh_refs),
        "static_flags_overrides_in_prefab_instances": len(re.findall(r"propertyPath: m_StaticEditorFlags", text)),
    }
    print(json.dumps(out, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "unity/Assets/Scenes/MetaLab_Main.unity")
