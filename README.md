# MetaLab

**Команда Bilka** · проєкт MetaLab

Віртуальна зала **MacPaw AI Lab** у VRChat для метавсесвіту NEXT-Study. Номінація I конкурсу Erasmus+ NEXT, КПІ ім. Ігоря Сікорського. Тімлід — **Павленко Святослав**.

Це не абстрактний «офіс майбутнього». Ми перенесли нашу лабораторію: семінар, lounge, дошки й робочі місця. Парний проєкт ментора, який ставиться в цю залу: [CodeSensei](https://github.com/mamenkomarkus-creator/CodeSensei).

[Відкрити світ](https://vrchat.com/home/world/wrld_b1c73436-f022-4f98-9172-671f9f0da989/info) · [Відео](presentation-materials/demo-video.mp4) · [Презентація UK](presentation-materials/MetaLab-NEXT-UK.pdf) · [Презентація EN](presentation-materials/MetaLab-NEXT-EN.pdf) · [Документація](presentation-materials/documentation/DOCUMENTATION.md) · [Google Диск](https://drive.google.com/drive/folders/1uw6UPaKP2u9v4NyBnryPq3I7B9trUXIB?usp=sharing)

<p align="center">
  <img src="presentation-materials/lab/01-overview.jpg" alt="MetaLab — наша лабораторія" width="880">
</p>


## Склад команди Bilka

| Ім’я | Роль |
| --- | --- |
| **Павленко Святослав** | Тімлід · координація, збірка світу |
| Ільєнко Денис | 3D · моделі зали й ретопологія |
| Пошитнюк Дмитро | PBR · матеріали в Unity |
| Маменко Марк | UdonSharp · мережева синхронізація |
| Шозда Катерина | Перевірка у VR · кадри, колізії, мережа |

Повний розподіл: [AUTHORS.md](AUTHORS.md).

## 1. Анотація

У межах конкурсу ми зібрали багатокористувацьку копію університетської лабораторії MacPaw AI Lab. Семінарські ряди, зона з пуфами, маркерні дошки й робочі столи стоять в одній залі. Група може зійтися на практику, хакатон або екскурсію і бачити одне одного поруч, а не в сітці вікон відеозв’язку.

Світ опубліковано у VRChat. У репозиторії — сцена Unity, презентації українською та англійською, спільне демо-відео і кадри саме цієї зали. Стокових офісів і згенерованих інтер’єрів у матеріалах немає.

## 2. Вступ

Середовище — **Unity 2022.3.22f1** і **VRChat SDK3 Worlds**. Інтерактив написано на **UdonSharp (C#)**. Геометрія — **Blender** з ретопологією під ліміт полігонів платформи. Матеріали — **PBR у Substance 3D Painter**. Світло запечене в Unity, щоб шолом не рахував лампи щокадру.

Референс — реальна лабораторія в КПІ. Кадри в `presentation-materials/lab/` зняті з нашої сцени: загальний план, lounge, сусідній відсік, семінар. Проєкт відкривається через VRChat Creator Companion з папки `unity/`.

## 3. Практична частина

У залі є семінарські столи з помаранчевими стільцями, дошки, стелажі, робочі місця і lounge з круглими пуфами. Пропорції взяті з нашої кімнати. Логотип MacPaw AI Lab на стіні — растрове зображення з референсу лабораторії, не згенерована картинка.

Колізії стоять на підлозі, столах і стінах. SDK3 дає точки появи й аудіозони. UdonSharp синхронізує стан інтерактивних об’єктів між гравцями в одному інстансі. Окремо залишено місце під термінал CodeSensei: зала вже працює як місце зустрічі, а ментор додає в неї практику з коду.

Що виміряно. У сцені `MetaLab_Main` з репозиторію: 22 об’єкти, 14 екземплярів префабів, 6 джерел світла, 2 lightmap-и 1024 × 1024 і 1 reflection probe. Трикутники, батчі, розмір збірки й кадрову частоту опублікованого світу ще не виміряно: потрібен повний проєкт Unity і шолом. Протокол: [`docs/evaluation/README.md`](docs/evaluation/README.md); статистика сцени — `python3 scripts/scene_stats.py`.

Як зайти. VRChat на PC або PCVR, акаунт, посилання на світ вище. World ID: `wrld_b1c73436-f022-4f98-9172-671f9f0da989`. Якщо в залі має відповідати ментор, увімкніть **Settings → Security → Allow Untrusted URLs** і перезайдіть. У редакторі сцена — `unity/Assets/Scenes/MetaLab_Main.unity`. Коротко: [presentation-materials/documentation/VRCHAT.md](presentation-materials/documentation/VRCHAT.md).

## 4. Труднощі та ліміти

VRChat обмежує полігони, матеріали й розмір світу. Детальна копія кожного стільця не проходить, тож сітку спрощено ретопологією: інакше падають кадри і з’являється заколисування. Динамічне світло довелося замінити запеченим. Інтерактив не переноситься з звичайного Unity; синхронізувати можна лише те, що описано в Udon. Quest потребує окремого проходу. Запити CodeSensei назовні VRChat блокує, доки гравець сам не дозволить ненадійні адреси. Репозиторій не містить вихідних моделей і чотирьох префабів, на які посилається сцена, тому збірка з нуля не відтворюється. Докладніше: розділ 4 [документації](presentation-materials/documentation/DOCUMENTATION.md).

## 5. Подальший розвиток

Залишити термінал CodeSensei в залі як постійний префаб. Додати невеликі симулятори мереж через OSC або HTTP. Зібрати обладнання модулями, щоб залу можна було доповнювати без повного перезбирання. Зробити прохід під Quest. Оформити публічну картку світу для екскурсій.

---

# English

**Team Bilka** · project MetaLab

A VRChat twin of **MacPaw AI Lab** for the NEXT-Study metaverse. Nomination I of the Erasmus+ NEXT contest at Igor Sikorsky KPI. Team lead: **Sviatoslav Pavlenko**. This is our laboratory, not a generic future office. The mentor that belongs in the room is [CodeSensei](https://github.com/mamenkomarkus-creator/CodeSensei) (team KP_Devs).

## 1. Annotation

We published a multiplayer copy of the university lab: seminar rows, a lounge, boards, and workstations in one hall. A group can meet for a practical, a hackathon, or a tour and stand in the same room instead of a grid of video windows. The world is live. Slides and photos show this laboratory only.

## 2. Introduction

Built in **Unity 2022.3.22f1** and **VRChat SDK3**, with **UdonSharp**, **Blender** retopology, **Substance 3D Painter** PBR, and **baked lighting**. The reference is the real MacPaw AI Lab at KPI. Images in `presentation-materials/lab/` are our scene. Open `unity/` in VRChat Creator Companion.

## 3. Practical part

Seminar tables, orange chairs, whiteboards, shelves, workstations, and a lounge of round poufs. The wall logo is a raster from our lab reference. Colliders cover the floor, tables, and walls. SDK3 provides spawns and audio zones. UdonSharp syncs interactive state. Room is left for the CodeSensei terminal.

Measured: the repository’s `MetaLab_Main` scene has 22 objects, 14 prefab instances, 6 light sources, 2 lightmaps of 1024 × 1024, and 1 reflection probe. Triangles, batches, build size, and frame rate of the published world are not measured yet: the full Unity project and a headset are needed. Protocol: [`docs/evaluation/README.md`](docs/evaluation/README.md); scene statistics via `python3 scripts/scene_stats.py`.

Join on PC or PCVR with a VRChat account. World ID: `wrld_b1c73436-f022-4f98-9172-671f9f0da989`. For the mentor, enable **Allow Untrusted URLs** and rejoin. Scene: `unity/Assets/Scenes/MetaLab_Main.unity`. Short steps: [presentation-materials/documentation/VRCHAT.md](presentation-materials/documentation/VRCHAT.md).

## 4. Difficulties and limits

Polygon, material, and download budgets forced retopology, or the headset frame rate drops and motion sickness appears. Lighting is baked instead of realtime. Interaction cannot be copied from ordinary Unity. Quest needs another pass. Outbound CodeSensei calls stay blocked until each player allows untrusted URLs. The repository does not contain the source models and the four prefabs the scene refers to, so the build cannot be reproduced from scratch. More on these limits is in section 4 of the [documentation](presentation-materials/documentation/DOCUMENTATION.md).

## 5. Further development

Keep the CodeSensei terminal as a permanent prefab. Add small network simulators over OSC or HTTP. Split equipment into modules. Make a Quest-oriented build. Publish a public world card for tours.
