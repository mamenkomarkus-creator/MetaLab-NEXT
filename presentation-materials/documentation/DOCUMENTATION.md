# Документація MetaLab

Номінація I · Erasmus+ NEXT · КПІ ім. Ігоря Сікорського  
Тімлід: Павленко Святослав · парний проєкт: [CodeSensei](https://github.com/mamenkomarkus-creator/CodeSensei)

Світ: https://vrchat.com/home/world/wrld_b1c73436-f022-4f98-9172-671f9f0da989/info  
World ID: `wrld_b1c73436-f022-4f98-9172-671f9f0da989`

## 1. Анотація

У рамках конкурсу ми відтворили університетську лабораторію MacPaw AI Lab як багатокористувацький світ VRChat. Семінарські ряди, lounge, дошки й робочі станції зібрані в одній залі, щоб дистанційна група мала спільний простір, а не сітку вікон відеозв’язку. Світ опубліковано; у репозиторії — сцена Unity, фото нашої зали, презентації UK/EN і спільне демо-відео.

## 2. Вступ

Розробка велася в **Unity 2022.3.22f1** з **VRChat SDK3 Worlds** і **UdonSharp (C#)**. Моделі — **Blender** з ретопологією під полігонний бюджет VRChat. Матеріали — **Adobe Substance 3D Painter (PBR)**. Світло — **light baking** у Unity. Референс — реальна зала MacPaw AI Lab у КПІ (фото в `lab/`). Проєкт відкривається через VRChat Creator Companion, папка `unity/`.

## 3. Практична частина

**Компоненти сцени.** Семінарські столи й стільці, lounge з пуфами, сусідній відсік, маркерні дошки, стелажі, робочі місця. Колізії на підлозі, столах, стінах. Спавни та аудіозони SDK3.

**Рендер і деталі.** PBR-текстури, запечене освітлення (без realtime-ламп у шоломі). Логотип MacPaw AI Lab на торцевій стіні — **растр з фотографії нашої лабораторії**, не стокова генерація.

**Функції.** Ходьба по залі, спільна присутність гравців, інтерактив UdonSharp (тригери, екрани, синхронізація стану). Закладено місце під термінал CodeSensei.

**Як відкрити.** VRChat на PC / PCVR → посилання світу вище. У редакторі: додати `unity/` у Creator Companion, сцена `Assets/Scenes/MetaLab_Main.unity`. Для AI-термінала: Settings → Security → Allow Untrusted URLs.

## 4. Труднощі та ліміти

VRChat жорстко ріже полігони, матеріали й розмір світу. Довелося ретопити меблі й пекти світло, інакше FPS у шоломі падає і з’являється заколисування. Мережеві пропи не можна синхронізувати «як у звичайному Unity» — лише Udon. Quest витягне сцену лише після окремої оптимізації. Публікація світу залежить від SDK і allowlist URL для зовнішнього API.

## 5. Подальший розвиток

Постійно встановити CodeSensei в залі, додати симулятори мереж (OSC/HTTP), різати сцену під Quest, нарощувати обладнання модульними префабами, оформити публічний лістинг світу для екскурсій абітурієнтів.

Як зайти коротко: [VRCHAT.md](VRCHAT.md).

---

# English

## 1. Annotation

Contest deliverable: a published VRChat twin of KPI’s MacPaw AI Lab — seminar, lounge, boards, workstations in one multiplayer hall.

## 2. Introduction

Unity 2022.3.22f1, VRChat SDK3, UdonSharp, Blender retopo, Substance PBR, baked lighting. Reference: our real lab (`lab/` photos).

## 3. Practical part

Collisions, baked lights, raster MacPaw AI Lab wall logo from our photos, UdonSharp sync, spawn/audio zones. Scene `Assets/Scenes/MetaLab_Main.unity`.

## 4. Difficulties and limits

Polygon/material budget, baking vs realtime, headset FPS, Udon networking, Quest.

## 5. Further development

Permanent CodeSensei prefab, OSC/HTTP simulators, Quest pass, modular furniture, public listing.
