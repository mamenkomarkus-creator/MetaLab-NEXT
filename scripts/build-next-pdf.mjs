import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const PURPLE = rgb(0.361, 0.247, 0.89);
const BLACK = rgb(0.07, 0.07, 0.09);
const MUTED = rgb(0.28, 0.28, 0.32);
const WHITE = rgb(1, 1, 1);
const CARD = rgb(0.97, 0.97, 0.99);

const copy = {
  en: {
    title: "MetaLab",
    subtitle: "MacPaw AI Lab in VRChat for the NEXT-Study Metaverse",
    nomination: "Nomination I  —  Metaverse representation of the university",
    teamLine: "Team MetaLab",
    university: "Igor Sikorsky Kyiv Polytechnic Institute",
    membersLabel: "Team members",
    members: [
      "Sviatoslav Pavlenko, Denys Ilienko, Dmytro Poshytyniuk,",
      "Mark Mamenko, Kateryna Shozda",
    ],
    faculty: "Igor Sikorsky KPI",
    role: "Role in the project",
    people1: [
      ["Sviatoslav Pavlenko", "Team Lead. Coordination, task split, deadlines and communication with the consultant."],
      ["Denys Ilienko", "3D Artist. Room and equipment modelling, retopology, mesh prep for texturing."],
      ["Dmytro Poshytyniuk", "Look Development. PBR textures and Unity materials for realistic surfaces."],
    ],
    people2: [
      ["Mark Mamenko", "UdonSharp Developer. Interactive terminals, object state sync across players."],
      ["Kateryna Shozda", "QA / VR Tester. In-headset checks, FPS, collisions and network stability."],
    ],
    workflowTitle: "How we work",
    workflow:
      "Agile team of five. Modelling, texturing, C# logic and Unity assembly run in parallel, synced over Git. Regular VR playtests.",
    ideaTitle: "Idea and goal",
    ideaKicker: "THE PROBLEM",
    ideaName: "No shared room in remote study",
    ideaUni: "MacPaw AI Lab  ·  NEXT-Study Metaverse",
    ideaBody:
      "MetaLab brings MacPaw AI Lab into VRChat. Seminar rows, boards and workstations live in one multiplayer hall so students can practise together with a sense of real presence.",
    goalsKicker: "PROJECT GOALS",
    goals: [
      "• Visual accuracy: real proportions of furniture and gear",
      "• Functional space for SE and networking practice",
      "• Extensible layout for later AI / simulators",
      "• Stable FPS via retopo, PBR and light baking",
      "• Multiplayer VRChat world for NEXT-Study",
    ],
    locTitle: "Selected Location",
    locName: "MacPaw AI Lab",
    locBody:
      "The world rebuilds MacPaw AI Lab: seminar rows, critique boards, a lounge and workstations. Visitors share one room instead of a video grid.",
    modelTitle: "The space in VRChat",
    artTitle: "Digital Artefacts",
    artNames: ["Classroom layout", "Lounge and boards", "Workstations"],
    artCaps: [
      "Optimised room mesh with baked lighting, PBR materials and collisions for VRChat comfort.",
      "Seminar tables, whiteboards and a rest zone for critiques and informal work.",
      "Interactive ecosystem: terminals, switches, markers — UdonSharp syncs state between users.",
    ],
    tech: [
      [
        "Tools and software",
        "Unity (scene, collisions, light baking) · VRChat SDK3 / Udon · UdonSharp (C#) · Blender · Adobe Substance 3D Painter (PBR) · Git.",
      ],
      [
        "Development process",
        "1) Block out MacPaw AI Lab. 2) Model and retopo furniture and equipment. 3) Paint PBR materials. 4) Bake lighting and collisions in Unity. 5) Add UdonSharp interaction and publish the world.",
      ],
      [
        "VRChat integration",
        "SDK3 Worlds: spawns, audio zones, synced object state. Published world wrld_b1c73436-f022-4f98-9172-671f9f0da989. Prefer PC / PCVR.",
      ],
      [
        "Technical challenges",
        "Polygon and material budgets vs visual fidelity. Baking instead of realtime lights. Keeping FPS high enough to avoid VR sickness. Networking interactive props without breaking the instance.",
      ],
    ],
    next: [
      [
        "Educational use",
        "In NEXT-Study Metaverse a group meets in the same virtual hall for remote practicals, hackathons and applicant tours — with the spatial feel of a real classroom.",
      ],
      [
        "User experience",
        "Spawn, walk the aisles, sit at a workstation, use boards and equipment, see classmates in the same room. Presence replaces a flat video call.",
      ],
      [
        "Further development",
        "Hook AI mentors and network simulators through OSC and HTTP, refine Quest performance, keep adding equipment as modular prefabs.",
      ],
    ],
    demo: "Project demo",
    materials: "Project materials",
    extra: "Additional resources",
    matLines: [
      "GitHub: github.com/mamenkomarkus-creator/MetaLab-NEXT",
      "Docs: docs/README.md · docs/CONCEPT.md · docs/VRCHAT.md",
      "World ID: wrld_b1c73436-f022-4f98-9172-671f9f0da989",
    ],
    extraLines: ["VRChat: hello.vrchat.com     NEXT: nextstudy.eu"],
  },
  uk: {
    title: "MetaLab",
    subtitle: "MacPaw AI Lab у VRChat для метавсесвіту NEXT-Study",
    nomination: "Номінація I  —  Віртуальне Metaverse-представлення університету",
    teamLine: "Команда MetaLab",
    university: "КПІ ім. Ігоря Сікорського",
    membersLabel: "Учасники команди",
    members: [
      "Павленко Святослав, Ільєнко Денис, Пошитнюк Дмитро,",
      "Маменко Марк, Шозда Катерина",
    ],
    faculty: "КПІ ім. Ігоря Сікорського",
    role: "Роль у проєкті",
    people1: [
      ["Павленко Святослав", "Team Lead. Координація команди, розподіл завдань, терміни, комунікація з викладачем."],
      ["Ільєнко Денис", "3D Artist. Моделювання приміщення й обладнання, ретопологія, підготовка до текстур."],
      ["Пошитнюк Дмитро", "Look Development. Реалістичні PBR-текстури та матеріали в Unity."],
    ],
    people2: [
      ["Маменко Марк", "UdonSharp Developer. Інтерактивні термінали, синхронізація стану об’єктів у мережі."],
      ["Шозда Катерина", "QA / VR Tester. Перевірка в шоломі, FPS, колізії та стабільність мережі."],
    ],
    workflowTitle: "Як працюємо",
    workflow:
      "Agile-команда з п’яти осіб. Моделювання, текстури, логіка C# і збірка в Unity паралельно, синхрон через Git. Регулярні VR-прогони.",
    ideaTitle: "Ідея та мета",
    ideaKicker: "ПРОБЛЕМА",
    ideaName: "Немає спільної зали дистанційно",
    ideaUni: "MacPaw AI Lab  ·  метавсесвіт NEXT-Study",
    ideaBody:
      "MetaLab переносить MacPaw AI Lab у VRChat. Семінарські ряди, дошки та робочі станції живуть в одній багатокористувацькій залі — практика разом, з ефектом присутності.",
    goalsKicker: "МЕТА ПРОЄКТУ",
    goals: [
      "• Візуальна точність: реальні пропорції меблів і техніки",
      "• Функціональний простір для ПІ та мереж",
      "• Розширювана структура під AI / симулятори",
      "• Стабільний FPS: ретопологія, PBR, light baking",
      "• Багатокористувацький світ VRChat для NEXT",
    ],
    locTitle: "Обрана локація",
    locName: "MacPaw AI Lab",
    locBody:
      "Світ відтворює MacPaw AI Lab: семінарські ряди, дошки критики, lounge і робочі місця. Відвідувачі ділять одну залу, а не сітку вікон відеозв’язку.",
    modelTitle: "Простір у VRChat",
    artTitle: "Цифрові артефакти",
    artNames: ["Планування зали", "Lounge і дошки", "Робочі місця"],
    artCaps: [
      "Оптимізована кімната: запечене світло, PBR, колізії під вимоги VRChat.",
      "Семінарські столи, маркерні дошки та зона відпочинку для критики й неформальної роботи.",
      "Інтерактив: термінали, комутатори, маркери — UdonSharp синхронізує стан між гравцями.",
    ],
    tech: [
      [
        "Інструменти",
        "Unity (сцена, колізії, baking) · VRChat SDK3 / Udon · UdonSharp (C#) · Blender · Adobe Substance 3D Painter (PBR) · Git.",
      ],
      [
        "Процес розробки",
        "1) Блокаут MacPaw AI Lab. 2) Моделі та ретопологія меблів і обладнання. 3) PBR-текстури. 4) Світло й колізії в Unity. 5) Інтерактив UdonSharp і публікація світу.",
      ],
      [
        "Інтеграція VRChat",
        "SDK3 Worlds: спавни, аудіозони, синхронізація об’єктів. Опублікований світ wrld_b1c73436-f022-4f98-9172-671f9f0da989. Рекомендовано PC / PCVR.",
      ],
      [
        "Технічні виклики",
        "Баланс полігонів і матеріалів із візуальною точністю. Baking замість realtime-світла. FPS, щоб уникати заколисування. Мережа інтерактивних пропів без розвалу інстансу.",
      ],
    ],
    next: [
      [
        "Освітнє використання",
        "У метавсесвіті NEXT-Study група збирається в тій самій віртуальній залі для дистанційних практик, хакатонів і екскурсій — зі відчуттям справжнього навчального простору.",
      ],
      [
        "Досвід відвідувача",
        "Заспавнитися, пройти рядами, сісти за станцію, скористатися дошкою й обладнанням, бачити одногрупників у залі. Присутність замість плоского відео.",
      ],
      [
        "Подальший розвиток",
        "Підключити AI-менторів і мережеві симулятори через OSC/HTTP, підтягнути Quest, додавати обладнання як модульні префаби.",
      ],
    ],
    demo: "Демо проєкту",
    materials: "Матеріали проєкту",
    extra: "Додаткові ресурси",
    matLines: [
      "GitHub: github.com/mamenkomarkus-creator/MetaLab-NEXT",
      "Документи: docs/README.md · docs/CONCEPT.md · docs/VRCHAT.md",
      "World ID: wrld_b1c73436-f022-4f98-9172-671f9f0da989",
    ],
    extraLines: ["VRChat: hello.vrchat.com     NEXT: nextstudy.eu"],
  },
};

function wrap(font, text, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const trial = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(trial, size) <= maxWidth) line = trial;
    else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function cover(page, x, y, w, h, color = WHITE) {
  page.drawRectangle({ x, y, width: w, height: h, color });
}

function wipeBody(page) {
  cover(page, 12, 34, 936, 412, WHITE);
}

function drawLines(page, font, lines, { x, yTop, size, color, gap = 1.28, maxWidth }) {
  let y = yTop - size;
  for (const raw of lines) {
    const wrapped = wrap(font, raw, size, maxWidth ?? 800);
    for (const line of wrapped) {
      page.drawText(line, { x, y, size, font, color });
      y -= size * gap;
    }
  }
  return y;
}

function fitImage(page, img, x, y, w, h) {
  const scale = Math.min(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  page.drawImage(img, {
    x: x + (w - dw) / 2,
    y: y + (h - dh) / 2,
    width: dw,
    height: dh,
  });
}

async function embedAny(pdf, filePath) {
  const buf = fs.readFileSync(filePath);
  if (filePath.toLowerCase().endsWith(".png")) return pdf.embedPng(buf);
  return pdf.embedJpg(buf);
}

async function build(lang, outFile) {
  const t = copy[lang];
  const templatePath = path.join(root, "docs/presentation/_next-template.pdf");
  const labDir = path.join(root, "docs/presentation/lab");
  const qrGitPath = path.join(root, "docs/presentation/qr-github.png");
  const qrWorldPath = path.join(root, "docs/presentation/qr-world.png");

  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  const template = await PDFDocument.load(fs.readFileSync(templatePath));
  const pages = await pdf.copyPages(template, template.getPageIndices());
  pages.forEach((p) => pdf.addPage(p));
  const [teamClone] = await pdf.copyPages(pdf, [1]);
  pdf.insertPage(2, teamClone);

  const arial = await pdf.embedFont(fs.readFileSync("/System/Library/Fonts/Supplemental/Arial.ttf"));
  const arialBd = await pdf.embedFont(fs.readFileSync("/System/Library/Fonts/Supplemental/Arial Bold.ttf"));
  const imgs = [
    await embedAny(pdf, path.join(labDir, "01-overview.jpg")),
    await embedAny(pdf, path.join(labDir, "02-lounge.jpg")),
    await embedAny(pdf, path.join(labDir, "03-adjacent-bay.jpg")),
    await embedAny(pdf, path.join(labDir, "04-seminar.jpg")),
  ];
  const qrGit = await pdf.embedPng(fs.readFileSync(qrGitPath));
  const qrWorld = await pdf.embedPng(fs.readFileSync(qrWorldPath));

  function setTitle(page, title) {
    cover(page, 16, 448, 760, 90, WHITE);
    const size = arialBd.widthOfTextAtSize(title, 26) > 700 ? 20 : 26;
    page.drawText(title, { x: 26, y: 505, size, font: arialBd, color: PURPLE });
  }
  function setPageNo(page, n) {
    cover(page, 868, 6, 82, 26, WHITE);
    const s = String(n);
    const w = arial.widthOfTextAtSize(s, 10);
    page.drawText(s, { x: 938 - w, y: 16, size: 10, font: arial, color: MUTED });
  }
  function teamCard(page, x, name, role) {
    page.drawRectangle({ x, y: 46, width: 250, height: 230, color: CARD });
    page.drawRectangle({ x, y: 46, width: 5, height: 230, color: PURPLE });
    page.drawText(name, { x: x + 16, y: 240, size: 12, font: arialBd, color: BLACK });
    page.drawText(t.faculty, { x: x + 16, y: 222, size: 10, font: arial, color: MUTED });
    page.drawText(t.role, { x: x + 16, y: 196, size: 11, font: arialBd, color: BLACK });
    drawLines(page, arial, [role], { x: x + 16, yTop: 184, size: 11, color: BLACK, maxWidth: 220, gap: 1.3 });
  }
  function infoCard(page, x, title, body) {
    page.drawRectangle({ x, y: 46, width: 250, height: 230, color: CARD });
    page.drawRectangle({ x, y: 46, width: 5, height: 230, color: PURPLE });
    page.drawText(title, { x: x + 16, y: 240, size: 12, font: arialBd, color: BLACK });
    drawLines(page, arial, [body], { x: x + 16, yTop: 214, size: 11, color: BLACK, maxWidth: 220, gap: 1.3 });
  }

  const p0 = pdf.getPage(0);
  cover(p0, 22, 20, 640, 410);
  p0.drawText(t.title, { x: 26, y: 392, size: 36, font: arialBd, color: PURPLE });
  drawLines(p0, arial, [t.subtitle], { x: 26, yTop: 372, size: 13, color: MUTED, maxWidth: 560, gap: 1.25 });
  p0.drawText(t.nomination, { x: 26, y: 318, size: lang === "uk" ? 12 : 14, font: arialBd, color: BLACK });
  p0.drawText(t.teamLine, { x: 26, y: 286, size: 16, font: arial, color: BLACK });
  p0.drawText(t.university, { x: 26, y: 264, size: 13, font: arial, color: MUTED });
  p0.drawText(t.membersLabel, { x: 26, y: 226, size: 15, font: arialBd, color: BLACK });
  drawLines(p0, arial, t.members, { x: 26, yTop: 216, size: 13, color: BLACK, maxWidth: 560 });

  const p1 = pdf.getPage(1);
  wipeBody(p1);
  setTitle(p1, lang === "uk" ? "Наша команда" : "Our Team");
  teamCard(p1, 54, t.people1[0][0], t.people1[0][1]);
  teamCard(p1, 354, t.people1[1][0], t.people1[1][1]);
  teamCard(p1, 654, t.people1[2][0], t.people1[2][1]);
  cover(p1, 10, 6, 850, 38, WHITE);

  const p2 = pdf.getPage(2);
  wipeBody(p2);
  setTitle(p2, lang === "uk" ? "Наша команда" : "Our Team");
  teamCard(p2, 54, t.people2[0][0], t.people2[0][1]);
  teamCard(p2, 354, t.people2[1][0], t.people2[1][1]);
  infoCard(p2, 654, t.workflowTitle, t.workflow);
  cover(p2, 10, 6, 850, 38, WHITE);

  const p3 = pdf.getPage(3);
  wipeBody(p3);
  setTitle(p3, t.ideaTitle);
  p3.drawText(t.ideaKicker, { x: 48, y: 410, size: 11, font: arialBd, color: PURPLE });
  p3.drawText(t.ideaName, { x: 48, y: 386, size: lang === "uk" ? 13 : 16, font: arialBd, color: BLACK });
  p3.drawText(t.ideaUni, { x: 48, y: 368, size: 10, font: arial, color: MUTED });
  drawLines(p3, arial, [t.ideaBody], { x: 48, yTop: 348, size: 12, color: BLACK, maxWidth: 400, gap: 1.35 });
  p3.drawText(t.goalsKicker, { x: 500, y: 410, size: 11, font: arialBd, color: PURPLE });
  drawLines(p3, arial, t.goals, { x: 500, yTop: 392, size: 12, color: BLACK, maxWidth: 400, gap: 1.45 });

  const p4 = pdf.getPage(4);
  wipeBody(p4);
  setTitle(p4, t.locTitle);
  p4.drawText(t.locName, { x: 36, y: 420, size: 12, font: arialBd, color: BLACK });
  drawLines(p4, arial, [t.locBody], { x: 36, yTop: 414, size: 10, color: MUTED, maxWidth: 900, gap: 1.2 });
  fitImage(p4, imgs[0], 28, 42, 560, 318);
  fitImage(p4, imgs[1], 600, 206, 328, 154);
  fitImage(p4, imgs[3], 600, 42, 328, 154);

  const p5 = pdf.getPage(5);
  wipeBody(p5);
  setTitle(p5, t.modelTitle);
  fitImage(p5, imgs[2], 28, 42, 450, 370);
  fitImage(p5, imgs[3], 490, 42, 440, 370);

  const p6 = pdf.getPage(6);
  wipeBody(p6);
  setTitle(p6, t.artTitle);
  p6.drawText(t.artNames[0], { x: 34, y: 404, size: 12, font: arialBd, color: BLACK });
  p6.drawText(t.artNames[1], { x: 352, y: 404, size: 12, font: arialBd, color: BLACK });
  p6.drawText(t.artNames[2], { x: 670, y: 404, size: 12, font: arialBd, color: BLACK });
  fitImage(p6, imgs[0], 18, 136, 292, 252);
  fitImage(p6, imgs[1], 332, 136, 292, 252);
  fitImage(p6, imgs[2], 648, 136, 292, 252);
  drawLines(p6, arial, [t.artCaps[0]], { x: 20, yTop: 128, size: 9, color: BLACK, maxWidth: 288, gap: 1.22 });
  drawLines(p6, arial, [t.artCaps[1]], { x: 336, yTop: 128, size: 9, color: BLACK, maxWidth: 288, gap: 1.22 });
  drawLines(p6, arial, [t.artCaps[2]], { x: 652, yTop: 128, size: 9, color: BLACK, maxWidth: 288, gap: 1.22 });

  const p7 = pdf.getPage(7);
  wipeBody(p7);
  setTitle(p7, lang === "uk" ? "Технічна реалізація" : "Technical Implementation");
  let y = 420;
  for (const [title, body] of t.tech) {
    p7.drawText(title, { x: 36, y, size: 13, font: arialBd, color: PURPLE });
    y = drawLines(p7, arial, [body], { x: 36, yTop: y - 4, size: 11, color: BLACK, maxWidth: 880, gap: 1.28 }) - 10;
  }

  const p8 = pdf.getPage(8);
  wipeBody(p8);
  setTitle(p8, lang === "uk" ? "Інтеграція в метавсесвіт NEXT-Study" : "Integration into NEXT-Study Metaverse");
  y = 420;
  for (const [title, body] of t.next) {
    p8.drawText(title, { x: 36, y, size: 13, font: arialBd, color: PURPLE });
    y = drawLines(p8, arial, [body], { x: 36, yTop: y - 4, size: 12, color: BLACK, maxWidth: 880, gap: 1.3 }) - 14;
  }

  const p9 = pdf.getPage(9);
  wipeBody(p9);
  setTitle(p9, lang === "uk" ? "Демо та матеріали проєкту" : "Demo and Project Materials");
  p9.drawText(t.demo, { x: 36, y: 410, size: 13, font: arialBd, color: PURPLE });
  drawLines(
    p9,
    arial,
    ["https://vrchat.com/home/world/wrld_b1c73436-f022-4f98-9172-671f9f0da989/info"],
    { x: 36, yTop: 398, size: 11, color: BLACK, maxWidth: 640 },
  );
  p9.drawText(t.materials, { x: 36, y: 320, size: 13, font: arialBd, color: PURPLE });
  drawLines(p9, arial, t.matLines, { x: 36, yTop: 308, size: 12, color: BLACK, maxWidth: 620, gap: 1.32 });
  p9.drawText(t.extra, { x: 36, y: 210, size: 13, font: arialBd, color: PURPLE });
  drawLines(p9, arial, t.extraLines, { x: 36, yTop: 198, size: 12, color: BLACK, maxWidth: 620, gap: 1.32 });
  p9.drawImage(qrGit, { x: 700, y: 250, width: 88, height: 88 });
  p9.drawText("GitHub", { x: 722, y: 236, size: 9, font: arial, color: MUTED });
  p9.drawImage(qrWorld, { x: 810, y: 250, width: 88, height: 88 });
  p9.drawText("VRChat", { x: 830, y: 236, size: 9, font: arial, color: MUTED });
  fitImage(p9, imgs[0], 700, 48, 198, 170);

  if (lang === "uk") {
    const p10 = pdf.getPage(10);
    cover(p10, 220, 220, 520, 140, WHITE);
    p10.drawText("Дякуємо!", { x: 360, y: 310, size: 36, font: arialBd, color: PURPLE });
    p10.drawText("Питання?", { x: 390, y: 262, size: 24, font: arial, color: PURPLE });
  }

  for (let i = 1; i < pdf.getPageCount(); i++) setPageNo(pdf.getPage(i), i + 1);

  fs.writeFileSync(outFile, await pdf.save());
  console.log("wrote", outFile, fs.statSync(outFile).size);
}

const lang = process.argv[2] || "both";
const outDir = path.join(root, "docs/presentation");
if (lang === "en" || lang === "both") await build("en", path.join(outDir, "MetaLab-NEXT-EN.pdf"));
if (lang === "uk" || lang === "both") await build("uk", path.join(outDir, "MetaLab-NEXT-UK.pdf"));
