# Документація MetaLab

Номінація I · Erasmus+ NEXT · КПІ ім. Ігоря Сікорського  
Тімлід: Павленко Святослав · парний проєкт ментора: [CodeSensei](https://github.com/mamenkomarkus-creator/CodeSensei)

Світ: https://vrchat.com/home/world/wrld_b1c73436-f022-4f98-9172-671f9f0da989/info  
World ID: `wrld_b1c73436-f022-4f98-9172-671f9f0da989`

## 1. Анотація

У межах конкурсу NEXT ми відтворили університетську лабораторію MacPaw AI Lab як багатокористувацький світ VRChat. Семінарські ряди, зона lounge, маркерні дошки й робочі місця зібрані в одній залі. Дистанційна група може зійтися на практику, хакатон або екскурсію і бачити одне одного в спільному просторі, а не в сітці вікон відеозв’язку.

Світ уже опубліковано. У репозиторії лежать сцена Unity, кадри саме цієї зали, презентації українською та англійською і спільне з CodeSensei демо-відео. На слайдах немає стокових офісів і згенерованих інтер’єрів: лише наша лабораторія.

## 2. Вступ

Розробка велася в **Unity 2022.3.22f1** з **VRChat SDK3 Worlds**. Логіка інтерактиву — **UdonSharp (C#)**. Геометрію зали, меблів і обладнання зібрано в **Blender** і спрощено ретопологією, щоб укластися в полігонний бюджет VRChat і не втрачати кадри в шоломі. Матеріали — **PBR у Adobe Substance 3D Painter**. Світло запечене в Unity (**light baking**): у шоломі немає набору realtime-ламп, які з’їдають продуктивність.

Референс — реальна зала MacPaw AI Lab у КПІ. Кадри в папці `lab/` зняті з нашої сцени: загальний план, lounge, сусідній відсік і семінар. Проєкт відкривається через VRChat Creator Companion, папка `unity/`.

Команда з п’яти осіб. Координація і збірка світу — Павленко Святослав. Моделі й ретопологія — Ільєнко Денис. PBR і матеріали Unity — Пошитнюк Дмитро. Мережевий інтерактив UdonSharp — Маменко Марк. Перевірка в шоломі, колізії і стабільність — Шозда Катерина.

## 3. Практична частина

### З чого складається зала

Семінарські столи з помаранчевими стільцями, маркерні дошки, стелажі, робочі місця і lounge з круглими пуфами. Є сусідній відсік із окремими столами. Пропорції взяті з реальної лабораторії, а не з абстрактного «офісу майбутнього».

На торцевій стіні — логотип MacPaw AI Lab. Це **растрове зображення з референсу нашої лабораторії**, не згенерована картинка і не чужий кампус.

### Рендер і технічні деталі

Колізії стоять на підлозі, столах і стінах, щоб аватар не провалювався крізь меблі. Світло запечене: тіні й заливка вже в текстурах освітлення, тож шолом не рахує лампи щокадру. Матеріали PBR тримають дерево, метал стільців і пластик пуфів без зайвих шарів.

SDK3 дає точки появи і аудіозони. Стан інтерактивних об’єктів синхронізується через UdonSharp, тож перемикач або екран, який зачепив один гравець, бачать інші в тому самому інстансі.

Окремо залишено місце під термінал **CodeSensei** — AI-ментора з ООП. Це другий репозиторій команди. Зала без нього вже придатна для зустрічі; з ним у тому самому просторі з’являється практика з коду.

### Як відкрити

1. Встановити VRChat на PC або PCVR ([hello.vrchat.com](https://hello.vrchat.com/)).
2. Увійти в акаунт і відкрити [світ](https://vrchat.com/home/world/wrld_b1c73436-f022-4f98-9172-671f9f0da989/info).
3. Для термінала CodeSensei ввімкнути **Settings → Security → Allow Untrusted URLs** і перезайти.

У редакторі: додати `unity/` у VRChat Creator Companion, дочекатися пакетів VPM, відкрити сцену `Assets/Scenes/MetaLab_Main.unity`.

Короткий шлях заходу також лежить у [VRCHAT.md](VRCHAT.md).

## 4. Труднощі та ліміти

**Бюджет сцени.** VRChat жорстко обмежує полігони, кількість матеріалів і розмір світу. Детальна копія кожного стільця «як у CAD» не проходить. Довелося спрощувати сітку ретопологією і збирати повторювані меблі акуратно, інакше кадри в шоломі падають і з’являється заколисування.

**Світло.** Динамічні лампи виглядають живіше, але в VR вони дорогі. Запечене світло стабільніше, зате після зсуву меблів заливання треба перепікати.

**Мережа.** Інтерактив не переноситься з звичайного Unity «як є». Синхронізувати можна лише те, що описано в Udon. Зайві синхронізовані об’єкти роздувають інстанс.

**Quest.** Поточна сцена розрахована на PC і PCVR. Окрема мобільна збірка потребує ще одного проходу по полігонах і текстурах.

**Зовнішні URL.** Якщо в залі стоїть CodeSensei, VRChat не пустить запит на Render, доки гравець сам не дозволить ненадійні адреси.

## 5. Подальший розвиток

Поставити термінал CodeSensei в залі як постійний префаб, а не як окреме демо. Додати прості симулятори мереж через OSC або HTTP, не ламаючи бюджет сцени. Нарізати обладнання модульними префабами, щоб залу можна доповнювати без повної перезбірки. Зробити прохід під Quest. Оформити публічну картку світу для екскурсій абітурієнтів.

---

# English

## 1. Annotation

For the NEXT contest we rebuilt KPI’s MacPaw AI Lab as a multiplayer VRChat world: seminar rows, a lounge, boards, and workstations in one hall. A remote group can meet for a practical, a hackathon, or a tour and share a room instead of a grid of video windows.

The world is published. The repository holds the Unity scene, photos of this laboratory only, Ukrainian and English slides, and a demo video shared with CodeSensei. There are no stock offices and no generated interiors.

## 2. Introduction

Built in **Unity 2022.3.22f1** with **VRChat SDK3 Worlds** and **UdonSharp**. Meshes are modelled in **Blender** and retopologised for the VRChat polygon budget. Materials are **PBR in Substance 3D Painter**. Lighting is **baked** so the headset is not shading a set of realtime lamps.

The reference is the real MacPaw AI Lab at KPI. Images in `lab/` are our scene: overview, lounge, the side bay, and the seminar rows. Open `unity/` in VRChat Creator Companion.

## 3. Practical part

The hall has seminar tables and orange chairs, whiteboards, shelves, workstations, and a lounge of round poufs, plus a side bay. Proportions follow the real room.

The MacPaw AI Lab mark on the end wall is a **raster taken from our laboratory reference**, not a generated picture and not another campus.

Colliders sit on the floor, tables, and walls. Baked light keeps shadows stable. SDK3 provides spawn points and audio zones. UdonSharp syncs interactive state so one player’s change is visible to the others.

Space is left for **CodeSensei**, the paired OOP mentor. The hall already works as a meeting place; the terminal adds code practice in the same room.

Join on PC or PCVR via the world link above. For the mentor, enable **Allow Untrusted URLs** and rejoin. In the editor, open `Assets/Scenes/MetaLab_Main.unity`. See also [VRCHAT.md](VRCHAT.md).

## 4. Difficulties and limits

VRChat caps polygons, materials, and world size, so furniture had to be retopologised or the headset frame rate drops and motion sickness appears. Realtime lights look better and cost too much; baked light is stable but must be rebaked after a layout change. Interaction cannot be copied from ordinary Unity; only Udon-synced state is safe, and too much of it hurts the instance. Quest needs a separate pass. External CodeSensei calls stay blocked until each player allows untrusted URLs.

## 5. Further development

Keep the CodeSensei terminal in the hall as a permanent prefab. Add small network simulators over OSC or HTTP. Split equipment into modular prefabs. Make a Quest-oriented build. Publish a public world listing for applicant tours.
