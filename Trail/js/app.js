/**
 * Vintage Arena - In-Depth Senior & Beginner Gaming Academy Coordinator
 * Cool Light Blue & Pure White Theme + Comprehensive Explanations + Floating Feedback.
 * Includes Mega Game Vault & Deep-Dive Codex across all major genres.
 */

class SimpleSilverApp {
  constructor() {
    this.currentStep = 1;
    this.fontSize = localStorage.getItem('silver_font') || 'large';
    this.currentLang = localStorage.getItem('silver_lang') || 'en';
    this.soundsEnabled = true;
    this.onTitleScreen = true;
    this.currentFeedbackRating = 5;
    this.currentSlangTerm = 'gg';
    this.currentButtonCode = 'lstick';
    this.currentBuyingTerm = 'launcher';
    this.currentBuyingPlatform = 'steam';

    // Game Vault State
    this.currentGenreFilter = 'all';
    this.currentGameSearch = '';
    this.activeCodexGame = null;

    // Sapphire/Cyan Embers Particle System for Title Screen
    this.embers = [];
    this.emberCanvas = null;
    this.emberCtx = null;
    this.emberAnimId = null;

    // Slang database
    this.slangData = {
      en: {
        gg: { title: '🌟 "GG" means: Good Game', desc: 'A polite, friendly handshake at the end of a match. Just like saying: "Great game, it was a pleasure playing with you!"' },
        afk: { title: '☕ "AFK" means: Away From Keyboard', desc: 'Temporarily stepping away from the screen (e.g. to answer the front door, make a cup of tea, or stretch).' },
        npc: { title: '🤖 "NPC" means: Non-Player Character', desc: 'Any character in the game controlled by the computer. Like a friendly shopkeeper or neighbor in town who gives you clues.' },
        coop: { title: '🤝 "Co-op" means: Cooperative Play', desc: 'Playing together on the same team towards a shared goal, rather than competing against each other.' },
        loot: { title: '💎 "Loot" means: Treasures & Rewards', desc: 'Valuable items, shiny gems, seeds, or tools you discover while exploring.' },
        respawn: { title: '🌱 "Respawn" means: Starting Fresh', desc: 'When your character comes back to a safe checkpoint after making a mistake. You never lose your permanent progress!' },
        dlc: { title: '🎁 "DLC" means: Downloadable Content', desc: 'Extra bonus chapters, new flower seeds, or cute outfits you can add to a game you already own.' },
        easteregg: { title: '🥚 "Easter Egg" means: Secret Surprise', desc: 'A hidden joke or secret surprise tucked away inside the game by the developers for curious explorers to find.' }
      },
      es: {
        gg: { title: '🌟 "GG" significa: Buen Juego (Good Game)', desc: 'Un saludo deportivo y amistoso al final de una partida. Como decir: "¡Excelente juego, fue un placer jugar contigo!"' },
        afk: { title: '☕ "AFK" significa: Lejos del Teclado (Away From Keyboard)', desc: 'Alejarse un momento de la pantalla (por ejemplo para abrir la puerta, tomar un café o estirar las piernas).' },
        npc: { title: '🤖 "NPC" significa: Personaje No Jugable', desc: 'Cualquier personaje controlado por la computadora. Como un tendero amable o un vecino del pueblo que te ayuda.' },
        coop: { title: '🤝 "Co-op" significa: Juego Cooperativo', desc: 'Jugar juntos en el mismo equipo hacia una meta común, en lugar de competir entre sí.' },
        loot: { title: '💎 "Loot" significa: Botín y Recompensas', desc: 'Tesoros, semillas, herramientas o gemas valiosas que encuentras explorando.' },
        respawn: { title: '🌱 "Respawn" significa: Reaparecer / Nuevo Comienzo', desc: 'Cuando tu personaje vuelve a un lugar seguro tras cometer un error. ¡Nunca pierdes tu avance principal!' },
        dlc: { title: '🎁 "DLC" significa: Contenido Descargable', desc: 'Nuevos capítulos, flores o trajes adicionales que puedes agregar a un juego que ya tienes.' },
        easteregg: { title: '🥚 "Easter Egg" significa: Secreto Oculto', desc: 'Un chiste o sorpresa oculta dentro del juego colocada por los creadores para los exploradores curiosos.' }
      },
      hi: {
        gg: { title: '🌟 "GG" का अर्थ: गुड गेम (Good Game)', desc: 'खेल के अंत में एक विनम्र और दोस्ताना अभिवादन। जैसे कहना: "बहुत अच्छा खेल, आपके साथ खेलकर खुशी हुई!"' },
        afk: { title: '☕ "AFK" का अर्थ: स्क्रीन से कुछ देर दूर होना (Away From Keyboard)', desc: 'कुछ देर के लिए खेल से हटना (जैसे दरवाज़ा खोलना, चाय बनाना या थोड़ा टहलना)।' },
        npc: { title: '🤖 "NPC" का अर्थ: कंप्यूटर द्वारा संचालित पात्र (Non-Player Character)', desc: 'खेल का कोई भी पात्र जिसे कंप्यूटर चलाता है, जैसे दुकान का कोई मददगार व्यापारी।' },
        coop: { title: '🤝 "Co-op" का अर्थ: साथ मिलकर खेलना (Cooperative Play)', desc: 'एक-दूसरे से मुकाबला करने के बजाय एक ही टीम में मिलकर किसी लक्ष्य को पूरा करना।' },
        loot: { title: '💎 "Loot" का अर्थ: ख़ज़ाना और इनाम', desc: 'खोजबीन के दौरान मिलने वाले उपयोगी सामान, सिक्के, बीज या औज़ार।' },
        respawn: { title: '🌱 "Respawn" का अर्थ: सुरक्षित जगह से फिर शुरू होना', desc: 'गलती होने पर किसी सुरक्षित जगह से दोबारा शुरू होना। आपकी मुख्य प्रगति कभी नहीं मिटती!' },
        dlc: { title: '🎁 "DLC" का अर्थ: अतिरिक्त सामग्री (Downloadable Content)', desc: 'अपने पुराने गेम में नई कहानियाँ, स्तर या चीज़ें इंटरनेट से जोड़ना।' },
        easteregg: { title: '🥚 "Easter Egg" का अर्थ: छिपा हुआ राज़ या मज़ाकिया सरप्राइज़', desc: 'गेम बनाने वालों द्वारा छिपाया गया कोई मज़ेदार राज़ जिसे खिलाड़ी ढूँढ सकते हैं।' }
      },
      fr: {
        gg: { title: '🌟 "GG" signifie : Bien Joué (Good Game)', desc: 'Une poignée de main sportive et amicale à la fin d\'une partie. Comme dire : "Excellente partie, ce fut un plaisir !"' },
        afk: { title: '☕ "AFK" signifie : Absent du Clavier (Away From Keyboard)', desc: 'S\'absenter un court instant de l\'écran (pour aller ouvrir la porte, faire une tisane ou s\'étirer).' },
        npc: { title: '🤖 "NPC" (ou PNJ) signifie : Personnage Non Joueur', desc: 'Un personnage dirigé par l\'ordinateur, comme un marchand bienveillant dans un village.' },
        coop: { title: '🤝 "Co-op" signifie : Jeu Coopératif', desc: 'Jouer ensemble dans la même équipe pour réussir une mission commune.' },
        loot: { title: '💎 "Loot" signifie : Butin & Trésors', desc: 'Des objets précieux, des graines ou des outils découverts au cours de votre promenade.' },
        respawn: { title: '🌱 "Respawn" signifie : Réapparition', desc: 'Revenir en toute sécurité à un point de sauvegarde sans perdre sa progression.' },
        dlc: { title: '🎁 "DLC" signifie : Contenu Téléchargeable', desc: 'Des chapitres bonus ou de jolis habits ajoutés à un jeu existant.' },
        easteregg: { title: '🥚 "Easter Egg" signifie : Surprise Cachée', desc: 'Un clin d\'œil ou un secret dissimulé dans le jeu par les créateurs.' }
      },
      de: {
        gg: { title: '🌟 "GG" bedeutet: Gutes Spiel (Good Game)', desc: 'Ein sportlicher, herzlicher Händedruck am Ende eines Spiels: "Tolles Spiel, hat Spaß gemacht!"' },
        afk: { title: '☕ "AFK" bedeutet: Kurz nicht am Platz (Away From Keyboard)', desc: 'Kurz die Pause-Taste drücken, um Tee zu kochen oder an die Haustür zu gehen.' },
        npc: { title: '🤖 "NPC" bedeutet: Nicht-Spieler-Charakter', desc: 'Eine vom Computer gesteuerte Figur, wie ein freundlicher Dorfhändler.' },
        coop: { title: '🤝 "Co-op" bedeutet: Kooperatives Spiel', desc: 'Gemeinsam im selben Team an einem Ziel arbeiten, statt gegeneinander zu spielen.' },
        loot: { title: '💎 "Loot" bedeutet: Beute & Schätze', desc: 'Wertvolle Werkzeuge, Samen oder Edelsteine, die Sie beim Erkunden finden.' },
        respawn: { title: '🌱 "Respawn" bedeutet: Wiedereinstieg', desc: 'Nach einem Fehltritt an einem sicheren Punkt neu starten, ohne den Fortschritt zu verlieren.' },
        dlc: { title: '🎁 "DLC" bedeutet: Zusatzinhalte (Downloadable Content)', desc: 'Zusätzliche Kapitel, Landschaften oder Kostüme zum Erweitern des Spiels.' },
        easteregg: { title: '🥚 "Easter Egg" bedeutet: Verstecktes Geheimnis', desc: 'Eine kleine Überraschung oder ein Witz, den die Entwickler im Spiel versteckt haben.' }
      }
    };

    // Controller details
    this.controllerData = {
      en: {
        lstick: { title: "🕹️ Left Thumbstick", purpose: "Character Movement & Walking", text: "Gently push this small rubber stick in the direction you want to walk. Pushing softly moves slowly; pushing all the way lets you walk faster.", analogy: "Just like walking your feet in any direction or steering a car." },
        rstick: { title: "👀 Right Thumbstick", purpose: "Camera & Looking Around", text: "This controls your eyes/camera view. Move it left or right to look around the scenery, or up and down to look at the sky or ground.", analogy: "Just like turning your head left and right to admire the landscape." },
        action_a: { title: "🟢 Green 'A' Button", purpose: "Talk, Select & Jump", text: "The primary button. Used to say 'Yes', talk to friendly villagers, pick up items from the ground, or jump over small fences.", analogy: "Like clicking 'OK' on your phone or pressing Enter on a keyboard." },
        action_b: { title: "🔴 Red 'B' Button", purpose: "Back, Cancel & Put Away", text: "The cancel button. If you open a menu by accident, pressing 'B' takes you right back to safety.", analogy: "Like the 'Cancel' or 'Back' button on your television remote." },
        triggers: { title: "🎯 Top Triggers (LT / RT)", purpose: "Acceleration & Action Tools", text: "Curved levers located where your index fingers rest comfortably on top. In racing it works as a gas pedal; in fishing it casts your line!", analogy: "Like the gas pedal in a car or squeezing a garden hose sprayer." },
        menu: { title: "⏸️ Menu / Pause Button", purpose: "Pause Game & Save Progress", text: "Freezes the action immediately so you can take a break, answer the phone, adjust the volume, or safely save your game.", analogy: "Like hitting the pause button on your television remote." }
      },
      es: {
        lstick: { title: "🕹️ Palanca Izquierda (Thumbstick)", purpose: "Moverse y Caminar", text: "Empuja suavemente esta palanca en la dirección a la que deseas caminar.", analogy: "Igual que caminar hacia cualquier dirección o girar el volante del auto." },
        rstick: { title: "👀 Palanca Derecha", purpose: "Cámara y Mirar Alrededor", text: "Controla la vista de tus ojos. Muévela a los lados para admirar el paisaje.", analogy: "Como girar tu cabeza para ver el paisaje." },
        action_a: { title: "🟢 Botón Verde 'A'", purpose: "Hablar, Seleccionar y Saltar", text: "El botón principal para interactuar y saltar.", analogy: "Como presionar 'Aceptar' en tu teléfono." },
        action_b: { title: "🔴 Botón Rojo 'B'", purpose: "Volver y Cancelar", text: "Te regresa a un lugar seguro si abres un menú por error.", analogy: "Como el botón 'Atrás' en tu control remoto." },
        triggers: { title: "🎯 Gatillos Superiores (LT / RT)", purpose: "Acelerar y Usar Herramientas", text: "Funciona como pedal de gas o para lanzar el anzuelo.", analogy: "Como el acelerador de un auto." },
        menu: { title: "⏸️ Botón de Menú / Pausa", purpose: "Pausar y Guardar Progreso", text: "Congela el juego al instante para que puedas descansar.", analogy: "Como presionar pausa en la televisión." }
      },
      hi: {
        lstick: { title: "🕹️ बायाँ थंबस्टिक (Left Stick)", purpose: "चलना और दिशा बदलना", text: "जिस दिशा में चलना चाहते हैं, उस तरफ इसे धीरे से घुमाएँ।", analogy: "जैसे अपनी मर्जी से किसी भी दिशा में कदम बढ़ाना।" },
        rstick: { title: "👀 दायाँ थंबस्टिक (Right Stick)", purpose: "चारों तरफ देखना (कैमरा)", text: "दाएँ-बाएँ घुमाकर आस-पास का नज़ारा देखें।", analogy: "जैसे गर्दन को दाएँ-बाएँ घुमाना।" },
        action_a: { title: "🟢 हरा 'A' बटन", purpose: "बात करना और चुनना", text: "मुख्य बटन जो 'हाँ' कहने और चीज़ें उठाने के काम आता है।", analogy: "जैसे फोन में 'OK' दबाना।" },
        action_b: { title: "🔴 लाल 'B' बटन", purpose: "वापस जाना", text: "गलती से खुले मेन्यू से तुरंत बाहर आने के लिए।", analogy: "जैसे रिमोट पर 'Back' दबाना।" },
        triggers: { title: "🎯 ऊपर वाले ट्रिगर (LT / RT)", purpose: "गाड़ी की रेस देना", text: "ड्राइविंग में यह एक्सीलेटर का काम करते हैं!", analogy: "जैसे कार का एक्सीलेटर दबाना।" },
        menu: { title: "⏸️ मेन्यू / पॉज़ बटन", purpose: "गेम रोकना", text: "गेम को तुरंत रोक देता है ताकि आप आराम कर सकें।", analogy: "जैसे Pause बटन दबाना।" }
      },
      fr: {
        lstick: { title: "🕹️ Stick Gauche", purpose: "Se déplacer et Marcher", text: "Poussez doucement pour marcher sereinement.", analogy: "Comme marcher dans la direction souhaitée." },
        rstick: { title: "👀 Stick Droit", purpose: "Caméra et Regard", text: "Contrôle votre regard sur le paysage.", analogy: "Comme tourner la tête." },
        action_a: { title: "🟢 Bouton Vert 'A'", purpose: "Parler et Valider", text: "Le bouton principal pour dire 'Oui'.", analogy: "Comme cliquer sur 'OK'." },
        action_b: { title: "🔴 Bouton Rouge 'B'", purpose: "Retour et Annuler", text: "Vous ramène en arrière en toute sécurité.", analogy: "Comme la touche 'Retour'." },
        triggers: { title: "🎯 Gâchettes (LT / RT)", purpose: "Accélérer & Outils", text: "Sert d'accélérateur en voiture.", analogy: "Comme la pédale d'accélérateur." },
        menu: { title: "⏸️ Bouton Pause", purpose: "Mettre en Pause", text: "Fige l'action pour faire une pause.", analogy: "Comme le bouton Pause de votre TV." }
      },
      de: {
        lstick: { title: "🕹️ Linker Steuerstick", purpose: "Gehen & Bewegen", text: "Drücken Sie sanft in die gewünschte Laufrichtung.", analogy: "Wie das Gehen in eine Richtung." },
        rstick: { title: "👀 Rechter Steuerstick", purpose: "Kamera & Umschauen", text: "Steuert die Blickrichtung.", analogy: "Wie das Drehen des Kopfes." },
        action_a: { title: "🟢 Grüne 'A'-Taste", purpose: "Bestätigen & Sprechen", text: "Die Haupttaste zum Auswählen.", analogy: "Wie die 'OK'-Taste." },
        action_b: { title: "🔴 Rote 'B'-Taste", purpose: "Zurück", text: "Schließt Menüs sofort wieder.", analogy: "Wie die 'Zurück'-Taste." },
        triggers: { title: "🎯 Schultertasten (LT / RT)", purpose: "Gas geben", text: "Fungieren beim Fahren wie ein Gaspedal!", analogy: "Wie das Gaspedal im Auto." },
        menu: { title: "⏸️ Menü / Pause", purpose: "Spiel pausieren", text: "Friert das Spiel sofort ein.", analogy: "Wie die Pause-Taste." }
      }
    };

    this.initBuyingGuideData();
    this.init();
  }

  initBuyingGuideData() {
    this.buyingTermsData = {
      en: {
        launcher: {
          title: "🏪 Store Client / Launcher",
          badge: "DESKTOP APPLICATION",
          desc: "A dedicated software application (such as the Steam program or Epic Games Launcher) installed on your computer. It serves as your personal storefront, download manager, and game launcher.",
          analogy: "Like having the <strong>Kindle app</strong> or <strong>Netflix app</strong> on your tablet: one single organized hub where you browse, store, and open all your titles.",
          tip: "🛡️ <strong>Parent Safety Rule:</strong> Only download launchers from their official websites (<em>steampowered.com</em> or <em>store.epicgames.com</em>). Never download games from random third-party web search results."
        },
        library: {
          title: "📚 Digital Game Library",
          badge: "CLOUD BOOKSHELF",
          desc: "Your personal virtual bookshelf in the cloud. Every game you purchase or claim as a free gift is permanently attached to your child's account forever.",
          analogy: "Like your digital photo library or Amazon Kindle bookshelf. Even if you delete a game to free up computer storage, you still own it forever and can re-download it anytime for free.",
          tip: "💡 <strong>Elder-Friendly Benefit:</strong> No physical discs to get lost, scratched by pets, or stepped on. Your family's games can never be permanently ruined!"
        },
        specs: {
          title: "⚡ System Requirements (GPU, CPU & RAM)",
          badge: "HARDWARE POWER",
          desc: "The technical horsepower a computer needs to run a specific game. 'Minimum Specs' is the baseline to make it run; 'Recommended Specs' allows smooth 60fps animations and crisp graphics.",
          analogy: "Think of a restaurant kitchen: <strong>CPU</strong> is the head chef (brain), <strong>RAM</strong> is the size of the cutting board (workspace), and <strong>GPU</strong> is the skilled artist plating beautiful dishes.",
          tip: "🎯 <strong>Parent Shortcut:</strong> Home consoles (Nintendo Switch, PS5, Xbox) never need spec checks! For PC games, check the 'Minimum Requirements' box at the bottom of the Steam or Epic store page before paying."
        },
        cloud: {
          title: "☁️ Cloud Saves",
          badge: "AUTOMATIC BACKUP",
          desc: "A feature that automatically uploads your child's game progress, level completions, and saved characters to secure internet servers when they close the game.",
          analogy: "Just like Google Docs or Word Online automatically saving your letter as you type so you never lose your work when the power flickers.",
          tip: "✅ <strong>Zero Frustration:</strong> If your child gets a new computer or visits Grandma's house, they log in and their game picks up at the exact same chapter!"
        },
        dlc: {
          title: "🎁 DLC & Season Passes (Expansion Packs)",
          badge: "OPTIONAL ADD-ONS",
          desc: "<strong>D</strong>ownloadable <strong>C</strong>ontent: optional bonus chapters, extra mystery levels, or character outfits released by the developers months after the main game.",
          analogy: "Like buying an expansion set of extra rooms for a dollhouse, or a bonus chapter of holiday recipes for a cookbook you already own.",
          tip: "⚠️ <strong>Budget Tip:</strong> In 95% of cases, the Standard base game alone provides 40+ hours of entertainment. Never buy DLC upfront unless your child has completed the base game."
        },
        mrx: {
          title: "💎 Microtransactions & Virtual Currency",
          badge: "IN-GAME PURCHASES",
          desc: "Small in-game purchases inside free-to-play games (such as 'V-Bucks' in Fortnite or 'Robux' in Roblox) used to buy cosmetic superhero costumes, dances, or weapon colors.",
          analogy: "Like buying extra tickets at a carnival fair for cotton candy or a novelty souvenir hat. They are optional decorations and do not make players win.",
          tip: "🔐 <strong>Golden Parent Rule:</strong> Never leave an unrestricted credit card saved on a child's device! In store settings, always turn on 'Require Password/PIN for every purchase'."
        },
        drm: {
          title: "🔒 DRM (Digital Rights Management)",
          badge: "COPY PROTECTION",
          desc: "A digital security certificate that confirms the user's account legally owns the game, preventing counterfeit distribution.",
          analogy: "Like the electronic keycard you use to unlock your hotel room door, or the ticket barcode scanned at the cinema entrance.",
          tip: "ℹ️ <strong>Peace of Mind:</strong> Legitimate stores like Steam, Epic, and Nintendo handle DRM invisibly in the background. You never have to memorize 30-digit activation serial codes."
        },
        key: {
          title: "🔑 Product Key / Redeem Code",
          badge: "ACTIVATION CODE",
          desc: "A unique 15-to-25 character alphanumeric code (like <code>ABCD-1234-EFGH-5678</code>) found on retail store receipts or scratch-off gift cards.",
          analogy: "Just like entering a gift voucher promotional code at checkout on Amazon to load store credit onto your account.",
          tip: "🏷️ <strong>Safety Rule:</strong> Each code can only be used once. Once typed into Steam, Nintendo eShop, or PlayStation Store, the money or game is permanently bound to that account."
        },
        early: {
          title: "🚧 Early Access",
          badge: "IN DEVELOPMENT",
          desc: "A game published in a playable state while the software developers are still coding, testing, and adding final levels.",
          analogy: "Like touring an architect's beautiful model home while the decorators are still painting the upstairs walls.",
          tip: "👶 <strong>Guidance:</strong> Early Access games can contain occasional glitches or unfinished storylines. For younger children and beginners, look for 'Full Release' games instead."
        },
        parental: {
          title: "🛡️ Parental Controls & Family View",
          badge: "PARENT PROTECTION",
          desc: "Built-in protection settings that allow parents to lock the store, block adult-rated games, restrict chat with strangers, and set daily screen time limits.",
          analogy: "Like childproof safety locks on your medicine cabinet, or setting up a 'Kids Profile' on Netflix with a master PIN.",
          tip: "⭐ <strong>Essential Setup:</strong> Steam 'Family View' and the free Nintendo Switch Parental Controls smartphone app allow parents to manage screen time and spending in under 3 minutes."
        }
      },
      es: {
        launcher: {
          title: "🏪 Lanzador / Tienda Digital (Launcher)",
          badge: "APLICACIÓN DE ESCRITORIO",
          desc: "El programa oficial instalado en la computadora (como Steam o Epic Games) donde compras, descargas y abres todos tus videojuegos.",
          analogy: "Como la app de <strong>Netflix</strong> o <strong>Kindle</strong>: un único lugar ordenado donde están todas tus obras listas para abrir.",
          tip: "🛡️ <strong>Regla de Oro:</strong> Descarga siempre desde las webs oficiales (steampowered.com o epicgames.com). Nunca descargues de enlaces desconocidos."
        },
        library: {
          title: "📚 Biblioteca Digital de Juegos",
          badge: "ESTANTERÍA EN LA NUBE",
          desc: "Tu estantería virtual personal. Cada juego comprado o recibido como regalo queda guardado para siempre en tu cuenta.",
          analogy: "Como tu álbum de fotos en la nube. Aunque borres un juego para ganar espacio, sigue siendo tuyo y puedes volver a descargarlo gratis.",
          tip: "💡 <strong>Ventaja para Mayores:</strong> Sin discos de plástico que se rayen, se pierdan o se rompan."
        },
        specs: {
          title: "⚡ Requisitos del Sistema (GPU, CPU y RAM)",
          badge: "POTENCIA TÉCNICA",
          desc: "La potencia que necesita una computadora para mover un juego. Los requisitos mínimos son para que arranque; los recomendados son para disfrutarlo con fluidez.",
          analogy: "Como una cocina: la <strong>CPU</strong> es el chef principal, la <strong>RAM</strong> es la tabla de picar, y la <strong>GPU</strong> es el artista que emplata.",
          tip: "🎯 <strong>Atajo:</strong> ¡En consolas (Switch, PS5, Xbox) nunca hay que mirar requisitos, funcionan siempre al 100%!"
        },
        cloud: {
          title: "☁️ Guardado en la Nube (Cloud Saves)",
          badge: "COPIA DE SEGURIDAD",
          desc: "Copia de seguridad automática por internet de tus avances, personajes y niveles superados.",
          analogy: "Como escribir en Google Docs: tus avances se guardan solos en internet sin riesgo de perderlos.",
          tip: "✅ Si cambias de ordenador, basta con iniciar sesión y continuarás exactamente donde lo dejaste."
        },
        dlc: {
          title: "🎁 DLC y Pases de Temporada (Expansiones)",
          badge: "EXTRAS OPCIONALES",
          desc: "Contenido Descargable adicional: nuevas misiones o trajes que se venden meses después del juego principal.",
          analogy: "Como comprar un set de habitaciones extra para una casa de muñecas o un anexo de recetas.",
          tip: "⚠️ El juego estándar ofrece decenas de horas de diversión. No compres DLCs de entrada sin haberlo terminado."
        },
        mrx: {
          title: "💎 Microtransacciones y Moneda Virtual",
          badge: "COMPRAS DENTRO DEL JUEGO",
          desc: "Pequeñas compras opcionales en juegos gratuitos (como los 'PaVos' en Fortnite o 'Robux' en Roblox) para trajes y bailes.",
          analogy: "Como comprar boletos en una feria para una gorra de recuerdo. Son adornos que no hacen ganar partidas.",
          tip: "🔐 No dejes tu tarjeta bancaria guardada. Activa siempre el 'Pedir contraseña o PIN para cada compra'."
        },
        drm: {
          title: "🔒 DRM (Gestión de Derechos Digitales)",
          badge: "PROTECCIÓN ANTICOPY",
          desc: "Certificado digital que confirma que la cuenta es la dueña legítima del juego.",
          analogy: "Como la tarjeta electrónica con la que abres la puerta de tu habitación de hotel.",
          tip: "ℹ️ Steam y las consolas gestionan el DRM de forma invisible en segundo plano, sin molestias."
        },
        key: {
          title: "🔑 Clave de Producto / Código de Canje",
          badge: "CÓDIGO DE ACTIVACIÓN",
          desc: "Código de 15 a 25 letras y números impreso en tarjetas de regalo o recibos que añade fondos o juegos a la cuenta.",
          analogy: "Como un cupón de regalo con código al comprar en tiendas online.",
          tip: "🏷️ Cada código solo puede canjearse una vez; queda asignado de por vida a esa cuenta."
        },
        early: {
          title: "🚧 Acceso Anticipado (Early Access)",
          badge: "EN DESARROLLO",
          desc: "Un juego puesto a la venta mientras los creadores aún están programando y afinando los últimos detalles.",
          analogy: "Como visitar una casa piloto mientras los pintores terminan las habitaciones superiores.",
          tip: "👶 Para niños pequeños y principiantes, es preferible elegir juegos marcados como 'Lanzamiento Completo'."
        },
        parental: {
          title: "🛡️ Control Parental y Modo Familiar",
          badge: "PROTECCIÓN FAMILIAR",
          desc: "Herramientas oficiales para bloquear compras, limitar horarios de juego y ocultar contenidos no aptos bajo un PIN.",
          analogy: "Como los seguros de niños en los armarios o el perfil infantil de Netflix.",
          tip: "⭐ Se configura en solo 2 minutos y brinda total tranquilidad a los padres."
        }
      },
      hi: {
        launcher: {
          title: "🏪 स्टोर ऐप / लॉन्चर (Launcher)",
          badge: "कंप्यूटर ऐप",
          desc: "कंप्यूटर में चलने वाला आधिकारिक प्रोग्राम (जैसे Steam या Epic Games) जहाँ से आप सुरक्षित रूप से गेम खोजते, खरीदते और शुरू करते हैं।",
          analogy: "जैसे आपके फोन में <strong>Kindle ऐप</strong> या <strong>Netflix ऐप</strong>: एक ही जगह जहाँ आपकी सारी चीज़ें सजी रहती हैं।",
          tip: "🛡️ हमेशा आधिकारिक वेबसाइट (steampowered.com) से ही डाउनलोड करें। कभी किसी अनजान लिंक से गेम न लें।"
        },
        library: {
          title: "📚 डिजिटल गेम लाइब्रेरी (Library)",
          badge: "इंटरनेट अलमारी",
          desc: "इंटरनेट पर आपकी निजी अलमारी। खरीदा गया हर गेम आपके बच्चे के खाते से हमेशा के लिए जुड़ जाता है।",
          analogy: "जैसे आपकी डिजिटल फोटो एलबम। कंप्यूटर से गेम हटाने पर भी वह मिटता नहीं, कभी भी मुफ्त में दोबारा डाउनलोड कर सकते हैं।",
          tip: "💡 प्लास्टिक की सीडी की तरह यह कभी घिसती या टूटती नहीं है।"
        },
        specs: {
          title: "⚡ सिस्टम आवश्यकताएँ (GPU, CPU और RAM)",
          badge: "कंप्यूटर की ताकत",
          desc: "कंप्यूटर के अंदरूनी पुर्जे। CPU दिमाग है, RAM काम करने की मेज़ है, और GPU खूबसूरत तस्वीरें बनाता है।",
          analogy: "रसोईघर की तरह: <strong>CPU</strong> मुख्य रसोइया है, <strong>RAM</strong> चॉपिंग बोर्ड है, और <strong>GPU</strong> सजावट करने वाला कलाकार है।",
          tip: "🎯 कंसोल (Switch, PS5) में यह कभी नहीं देखना पड़ता—वे हमेशा सीधे चलते हैं!"
        },
        cloud: {
          title: "☁️ क्लाउड सेव (Cloud Saves)",
          badge: "स्वचालित बैकअप",
          desc: "गेम की प्रगति और स्तरों का इंटरनेट पर अपने आप सुरक्षित हो जाना।",
          analogy: "जैसे गूगल डॉक्स में लिखते ही सब कुछ अपने आप सेव हो जाता है।",
          tip: "✅ नया कंप्यूटर लेने पर भी खेल वहीं से शुरू होता है जहाँ छोड़ा था।"
        },
        dlc: {
          title: "🎁 DLC और सीज़न पास (अतिरिक्त सामग्री)",
          badge: "वैकल्पिक सामग्री",
          desc: "गेम रिलीज़ होने के बाद बेचे जाने वाले नए अध्याय, कपड़े या स्तर।",
          analogy: "जैसे पुरानी कहानी की किताब के साथ नया अतिरिक्त अध्याय मिलना।",
          tip: "⚠️ मुख्य गेम ही बहुत बड़ा होता है; शुरुआत में अतिरिक्त DLC खरीदने की ज़रूरत नहीं होती।"
        },
        mrx: {
          title: "💎 माइक्रो-ट्रांजेक्शन (खेल के अंदर खरीदारी)",
          badge: "वैकल्पिक चीजें",
          desc: "मुफ्त गेम्स में कपड़े या सजावट खरीदने के लिए होने वाले छोटे खर्च (जैसे Fortnite में V-Bucks)।",
          analogy: "मेले में खिलौने या टोपी खरीदने के लिए लिए गए टोकन की तरह। इनसे जीत-हार पर कोई असर नहीं पड़ता।",
          tip: "🔐 कार्ड कभी सेव न रखें। 'हर खरीदारी के लिए पिन माँगें' का विकल्प हमेशा चालू रखें।"
        },
        drm: {
          title: "🔒 DRM (डिजिटल सुरक्षा)",
          badge: "अधिकार सुरक्षा",
          desc: "डिजिटल ताला जो यह पक्का करता है कि गेम असली और वैध तरीके से खरीदा गया है।",
          analogy: "होटल के कमरे का ताला खोलने वाले डिजिटल कार्ड की तरह।",
          tip: "ℹ️ यह अपने आप पर्दे के पीछे काम करता है; आपको कुछ नहीं करना होता।"
        },
        key: {
          title: "🔑 रिडीम कोड / प्रोडक्ट की (Redeem Code)",
          badge: "15 अंकों का कोड",
          desc: "गिफ्ट कार्ड पर लिखा 15 अक्षरों का कोड जिसे स्टोर में डालने पर पैसे या गेम जुड़ जाते हैं।",
          analogy: "अमेज़न पर डिस्काउंट या वाउचर कोड डालने की तरह।",
          tip: "🏷️ एक कोड केवल एक बार इस्तेमाल होता है और हमेशा के लिए उस खाते से जुड़ जाता है।"
        },
        early: {
          title: "🚧 अर्ली एक्सेस (निर्माणाधीन गेम)",
          badge: "शुरुआती दौर",
          desc: "ऐसा गेम जिसे बनाने वाले अभी पूरा कर रहे हैं लेकिन खिलाड़ी पहले से खेल सकते हैं।",
          analogy: "जैसे किसी नए मकान को बनने के दौरान ही देख लेना।",
          tip: "👶 छोटे बच्चों के लिए केवल 'पूर्ण रूप से तैयार' (Full Release) गेम्स ही चुनें।"
        },
        parental: {
          title: "🛡️ पेरेंटल कंट्रोल और पिन (Family View)",
          badge: "अभिभावक सुरक्षा",
          desc: "स्टोर पर खरीदारी रोकने, खेलने का समय तय करने और सुरक्षित गेम दिखाने वाला 4 अंकों का पिन।",
          analogy: "दवा की अलमारी पर लगे सुरक्षा ताले की तरह।",
          tip: "⭐ इसे सेट करने में केवल 2 मिनट लगते हैं और अभिभावकों को पूरी मानसिक शांति मिलती है।"
        }
      },
      fr: {
        launcher: {
          title: "🏪 Boutique & Lanceur (Launcher)",
          badge: "APPLICATION BUREAU",
          desc: "Le programme officiel installé sur l'ordinateur (comme Steam ou Epic Games) qui sert de magasin et de lanceur pour tous vos jeux.",
          analogy: "Comme l'application <strong>Kindle</strong> ou <strong>Netflix</strong> : un point central où tous vos titres sont réunis et prêts à démarrer.",
          tip: "🛡️ Téléchargez toujours les lanceurs depuis les sites officiels (steampowered.com ou epicgames.com)."
        },
        library: {
          title: "📚 Bibliothèque Numérique",
          badge: "RAYON VIRTUEL",
          desc: "Votre étagère personnelle dans le nuage (cloud). Chaque jeu acheté y reste lié à vie sur le compte de votre enfant.",
          analogy: "Comme vos albums photos numériques. Même si vous supprimez un jeu pour libérer de l'espace, vous pouvez le réinstaller gratuitement.",
          tip: "💡 Aucun disque plastique à rayer ou à égarer !"
        },
        specs: {
          title: "⚡ Configuration Requise (GPU, CPU & RAM)",
          badge: "PUISSANCE MATÉRIELLE",
          desc: "La puissance minimale de l'ordinateur pour faire tourner le jeu. 'Minimale' pour démarrer, 'Recommandée' pour une fluidité parfaite.",
          analogy: "Comme une brigade de cuisine : <strong>CPU</strong> est le chef cuisinier, <strong>RAM</strong> le plan de travail, et <strong>GPU</strong> le pâtissier dresseur.",
          tip: "🎯 Les consoles (Switch, PS5) ne nécessitent aucune vérification : tout fonctionne à 100% sans réglage !"
        },
        cloud: {
          title: "☁️ Sauvegardes dans le Cloud",
          badge: "COPIE AUTOMATIQUE",
          desc: "Sauvegarde automatique sur internet de vos parties, niveaux franchis et personnages.",
          analogy: "Comme la sauvegarde automatique d'un document texte en ligne.",
          tip: "✅ Sur un nouvel ordinateur, votre enfant retrouve immédiatement sa partie exactement là où il s'était arrêté."
        },
        dlc: {
          title: "🎁 DLC & Pass Saisonnier (Extensions)",
          badge: "CONTENUS OPTIONNELS",
          desc: "Contenus téléchargeables supplémentaires : nouvelles aventures ou tenues vendues après la sortie du jeu de base.",
          analogy: "Comme acheter des pièces supplémentaires pour une maison de poupée.",
          tip: "⚠️ Le jeu standard offre déjà des dizaines d'heures de jeu. N'achetez pas de DLC au tout début."
        },
        mrx: {
          title: "💎 Microtransactions & Monnaies Virtuelles",
          badge: "ACHATS EN JEU",
          desc: "Petits achats cosmétiques dans les jeux gratuits (comme les 'V-Bucks' de Fortnite) pour changer d'habit ou de danse.",
          analogy: "Comme acheter des tickets de fête foraine pour une peluche ou un chapeau rigolo. Cela ne fait pas gagner.",
          tip: "🔐 Ne laissez pas votre carte bancaire enregistrée. Activez le code PIN obligatoire à chaque achat."
        },
        drm: {
          title: "🔒 DRM (Gestion des Droits Numériques)",
          badge: "PROTECTION OFFICIELLE",
          desc: "Verrou informatique confirmant que le compte détient une licence légitime du jeu.",
          analogy: "Comme le pass magnétique qui ouvre la porte de votre chambre d'hôtel.",
          tip: "ℹ️ Tout est géré en toute discrétion en arrière-plan sans aucune manipulation requise."
        },
        key: {
          title: "🔑 Clé Produit / Code d'Activation",
          badge: "CODE À 15 CHIFFRES",
          desc: "Un code imprimé sur les cartes cadeaux permettant de charger de l'argent ou d'activer un jeu sur la boutique.",
          analogy: "Comme un bon d'achat cadeau à saisir lors d'une commande en ligne.",
          tip: "🏷️ Le code ne sert qu'une seule fois et associe définitivement le contenu au compte."
        },
        early: {
          title: "🚧 Accès Anticipé (Early Access)",
          badge: "EN DÉVELOPPEMENT",
          desc: "Un jeu mis à disposition alors que les créateurs sont encore en train de programmer les derniers chapitres.",
          analogy: "Comme visiter une maison témoin alors que la peinture du premier étage est en train de sécher.",
          tip: "👶 Pour les jeunes enfants et les débutants, privilégiez les jeux en 'Version Définitive'."
        },
        parental: {
          title: "🛡️ Contrôle Parental & Mode Famille",
          badge: "SÉCURITÉ FAMILLE",
          desc: "Dispositif officiel permettant de bloquer les achats, d'interdire les contenus adultes et de limiter le temps d'écran par un code PIN.",
          analogy: "Comme les sécurités enfants sur les tiroirs de cuisine.",
          tip: "⭐ Se configure en moins de 3 minutes pour une tranquillité totale des parents et grands-parents."
        }
      },
      de: {
        launcher: {
          title: "🏪 Store-App / Launcher",
          badge: "DESKTOP-PROGRAMM",
          desc: "Das offizielle Programm (wie Steam oder Epic Games), das auf dem PC installiert wird, um Spiele zu kaufen, zu laden und zu starten.",
          analogy: "Wie die <strong>Kindle-App</strong> oder <strong>Netflix-App</strong>: Eine aufgeräumte Zentrale für all Ihre Titel.",
          tip: "🛡️ Nur von offiziellen Websites laden (steampowered.com oder epicgames.com)."
        },
        library: {
          title: "📚 Digitale Spiele-Bibliothek",
          badge: "ONLINE-REGAL",
          desc: "Das persönliche virtuelle Regal. Jedes Spiel bleibt für immer mit dem Spielerkonto verknüpft.",
          analogy: "Wie digitale Fotoalben. Selbst wenn ein Spiel gelöscht wird, kann man es jederzeit gratis neu laden.",
          tip: "💡 Keine Plastikhüllen oder zerkratzte Discs mehr im Wohnzimmer!"
        },
        specs: {
          title: "⚡ Systemanforderungen (GPU, CPU & RAM)",
          badge: "PC-LEISTUNG",
          desc: "Die Hardware-Leistung, die ein Computer benötigt. 'Minimum' zum Starten, 'Empfohlen' für flüssige, schöne Bilder.",
          analogy: "Wie in der Restaurantküche: <strong>CPU</strong> ist der Küchenchef, <strong>RAM</strong> das Schneidebrett und <strong>GPU</strong> der Meisterkonditor.",
          tip: "🎯 Bei Konsolen (Switch, PS5, Xbox) muss man nie nachdenken – dort läuft alles zu 100%!"
        },
        cloud: {
          title: "☁️ Cloud-Speicherstände",
          badge: "AUTOMATISCHE SICHERUNG",
          desc: "Automatisches Hochladen von Spielfortschritten und Figuren auf sichere Server.",
          analogy: "Wie das automatische Speichern von Textdokumenten im Internet.",
          tip: "✅ An einem neuen Computer meldet sich das Kind an und spielt genau an derselben Stelle weiter."
        },
        dlc: {
          title: "🎁 DLC & Season Pass (Zusatzinhalte)",
          badge: "OPTIONALE ERWEITERUNGEN",
          desc: "Zusätzliche Kapitel oder Kostüme, die nach Erscheinen des Hauptspiels angeboten werden.",
          analogy: "Wie zusätzliche Zimmer für ein Puppenhaus oder neue Rezeptseiten.",
          tip: "⚠️ Das Hauptspiel bietet meist 40+ Stunden Spielspaß. Zu Beginn nie voreilig DLCs kaufen."
        },
        mrx: {
          title: "💎 Mikrotransaktionen & In-Game-Währung",
          badge: "KÄUFE IM SPIEL",
          desc: "Kleine freiwillige Käufe in Gratis-Spielen (wie V-Bucks in Fortnite) für Kostüme oder Tänze.",
          analogy: "Wie Wertmarken auf dem Jahrmarkt für Zuckerwatte oder ein Souvenir. Sie bringen keine Spielvorteile.",
          tip: "🔐 Keine Zahlungsdaten speichern. Immer die Abfrage einer Eltern-PIN für Einkäufe aktivieren."
        },
        drm: {
          title: "🔒 DRM (Kopierschutz)",
          badge: "LIZENZSCHUTZ",
          desc: "Ein digitales Zertifikat, das bestätigt, dass das Konto das Spiel rechtmäßig besitzt.",
          analogy: "Wie die Magnetkarte, die Ihre Zimmertür im Hotel öffnet.",
          tip: "ℹ️ Läuft vollautomatisch im Hintergrund, ohne dass man Codes abtippen muss."
        },
        key: {
          title: "🔑 Produktschlüssel / Aktivierungscode",
          badge: "GUTHABENCODE",
          desc: "Ein 15-stelliger Code von Kassenbons oder Guthabenkarten, der im Store eingegeben wird.",
          analogy: "Wie ein Gutscheincode beim Online-Shopping.",
          tip: "🏷️ Jeder Code funktioniert nur einmal und ist danach fest an das Konto gebunden."
        },
        early: {
          title: "🚧 Early Access (Vorabzugang)",
          badge: "IN ENTWICKLUNG",
          desc: "Ein Spiel, das bereits spielbar ist, während die Entwickler noch an den letzten Kapiteln feilen.",
          analogy: "Wie der Besuch eines Musterhauses, während im Dachgeschoss noch tapeziert wird.",
          tip: "👶 Für Einsteiger und Kinder besser Spiele wählen, die als 'Vollversion' gekennzeichnet sind."
        },
        parental: {
          title: "🛡️ Jugendschutz & Familienansicht",
          badge: "ELTERNSCHUTZ",
          desc: "Eingebaute Schutzfunktionen, um Käufe zu sperren, Altersgrenzen zu erzwingen und Spielzeit zu begrenzen.",
          analogy: "Wie eine Kindersicherung an Schränken.",
          tip: "⭐ In 2 Minuten eingerichtet und schenkt Eltern und Großeltern völlige Gelassenheit."
        }
      }
    };

    this.platformStoreData = {
      en: {
        steam: {
          name: "Steam",
          maker: "Valve Corporation • PC, Mac & Steam Deck",
          icon: "💨",
          badge: "WORLD'S #1 PC STORE (50,000+ GAMES)",
          url: "https://store.steampowered.com",
          bestFor: "The undisputed king of computer gaming. Has the largest selection, incredible seasonal sales (50% to 85% off during Summer and Winter sales!), and built-in Family Sharing.",
          howWorks: "Download the free Steam client from <em>steampowered.com</em>. Create a free account. Search for a game, and click <strong>'Purchase as a Gift'</strong> to send it directly to your child's username or email with a custom greeting card.",
          refundPolicy: "<strong>100% Money-Back Guarantee:</strong> If played under 2 hours and requested within 14 days of purchase, Steam refunds your money with zero questions asked.",
          parentSafety: "<strong>Steam Family View:</strong> Set a 4-digit master PIN that blocks access to the store, community forums, and games rated for older audiences."
        },
        epic: {
          name: "Epic Games Store",
          maker: "Epic Games • PC & Mac",
          icon: "⚡",
          badge: "HOME OF FORTNITE & WEEKLY FREE GAMES",
          url: "https://store.epicgames.com",
          bestFor: "Famous as the home of <em>Fortnite</em>, <em>Rocket League</em>, and <em>Fall Guys</em>. Also gives away <strong>1 to 2 completely free full games every single Thursday</strong> to keep forever!",
          howWorks: "Install the free Epic Games Launcher. Your child can claim high-quality games weekly without ever needing a credit card on file, building a huge library for $0.",
          refundPolicy: "Full refunds within 14 days if the game has been played for less than 2 hours, matching Steam's gold-standard consumer protections.",
          parentSafety: "Offers <strong>'Cabined Accounts'</strong> for kids under 13 with parental consent rules, custom purchase PIN codes, and screen time limits."
        },
        playstation: {
          name: "PlayStation Store",
          maker: "Sony Interactive Entertainment • PS4 & PS5",
          icon: "🎮",
          badge: "OFFICIAL SONY LIVING ROOM STORE",
          url: "https://store.playstation.com",
          bestFor: "Cinematic, story-driven masterpieces like <em>Spider-Man</em>, <em>Gran Turismo</em>, and <em>God of War</em> played directly on your living room TV.",
          howWorks: "Accessed directly from the PlayStation 4 or 5 home menu. You can buy directly with a card, or redeem safe physical PlayStation gift cards from any supermarket.",
          refundPolicy: "Refunds can be requested within 14 days provided you have not yet started downloading the game to the console.",
          parentSafety: "Console settings allow parents to set monthly spending budgets (e.g. $0 or $20 maximum per month) and require password confirmation at checkout."
        },
        nintendo: {
          name: "Nintendo eShop",
          maker: "Nintendo • Nintendo Switch & Switch OLED",
          icon: "🍄",
          badge: "FAMILY & COZY GAMING KING",
          url: "https://www.nintendo.com/store",
          bestFor: "The most beloved, gentle, family-friendly gaming world: <em>Mario</em>, <em>Animal Crossing</em>, <em>Pokémon</em>, and <em>The Legend of Zelda</em>.",
          howWorks: "Tap the bright orange shopping bag icon on the Switch screen. Browse cozy games, download game demos for free, and buy using Nintendo eShop gift cards.",
          refundPolicy: "Digital purchases are generally final once downloaded; using fixed $20 or $50 gift cards is the safest practice for parents.",
          parentSafety: "<strong>Nintendo Switch Parental Controls App:</strong> A free app on your smartphone that shows what games your child played, sets daily bedtime alarms, and locks the eShop."
        },
        xbox: {
          name: "Xbox & Microsoft Store",
          maker: "Microsoft • Xbox Series X/S & Windows PC",
          icon: "🟢",
          badge: "XBOX GAME PASS & PC GAMING",
          url: "https://www.xbox.com",
          bestFor: "Home to <strong>Xbox Game Pass</strong>—often called 'the Netflix of video games'—giving unlimited access to over 400 games for one flat monthly price.",
          howWorks: "Built into both Windows computers and Xbox consoles. Games can be purchased individually or enjoyed through the Game Pass subscription with cloud streaming.",
          refundPolicy: "Generous refund requests allowed within 14 days if total playtime is under 2 hours via <em>account.microsoft.com</em>.",
          parentSafety: "<strong>Microsoft Family Safety:</strong> Comprehensive screen time schedules, web content filters, and instant notifications whenever a child asks to buy a title."
        }
      },
      es: {
        steam: {
          name: "Steam",
          maker: "Valve Corporation • PC, Mac y Steam Deck",
          icon: "💨",
          badge: "LA TIENDA DE PC #1 DEL MUNDO (+50.000 JUEGOS)",
          url: "https://store.steampowered.com",
          bestFor: "El rey indiscutible de los videojuegos en PC. Tiene el mayor catálogo, rebajas gigantescas (50% al 85% en verano e invierno) y modo Préstamo Familiar.",
          howWorks: "Descarga la app gratuita desde steampowered.com, crea tu cuenta y pulsa 'Comprar como regalo' para enviarlo al usuario de tu nieto con una felicitación.",
          refundPolicy: "100% de reembolso garantizado si se ha jugado menos de 2 horas y dentro de los primeros 14 días. Sin preguntas.",
          parentSafety: "Modo Familiar de Steam: Bloquea con un PIN de 4 dígitos el acceso a la tienda y los juegos para mayores."
        },
        epic: {
          name: "Epic Games Store",
          maker: "Epic Games • PC y Mac",
          icon: "⚡",
          badge: "CASA DE FORTNITE Y JUEGOS GRATIS CADA SEMANA",
          url: "https://store.epicgames.com",
          bestFor: "Famosa por Fortnite, Rocket League y Fall Guys. ¡Regala 1 o 2 juegos completos GRATIS todos los jueves para siempre!",
          howWorks: "Instala el lanzador de Epic. Tu hijo puede reclamar juegos gratis semanalmente sin necesidad de tarjeta bancaria.",
          refundPolicy: "Reembolso íntegro dentro de los primeros 14 días con menos de 2 horas de juego.",
          parentSafety: "Cuentas protegidas para menores de 13 años con consentimiento paterno y PIN para compras."
        },
        playstation: {
          name: "PlayStation Store",
          maker: "Sony Interactive Entertainment • PS4 y PS5",
          icon: "🎮",
          badge: "TIENDA OFICIAL DE CONSOLAS SONY",
          url: "https://store.playstation.com",
          bestFor: "Grandes aventuras cinematográficas para jugar en la televisión del salón como Spider-Man o Gran Turismo.",
          howWorks: "Se accede desde el menú principal de la consola o la app móvil. Puedes canjear tarjetas de prepago del supermercado.",
          refundPolicy: "Reembolsos dentro de 14 días si aún no has comenzado la descarga a la consola.",
          parentSafety: "Límites de gasto mensual por cuenta infantil y solicitud de contraseña al pagar."
        },
        nintendo: {
          name: "Nintendo eShop",
          maker: "Nintendo • Nintendo Switch",
          icon: "🍄",
          badge: "EL REY DE LOS JUEGOS FAMILIARES Y TRANQUILOS",
          url: "https://www.nintendo.com/store",
          bestFor: "Los juegos más familiares y pacíficos del mundo: Mario, Animal Crossing, Pokémon y Zelda.",
          howWorks: "Toca el icono de la bolsa naranja en la pantalla de Switch. Navega y paga con tarjetas prepago eShop.",
          refundPolicy: "Las compras digitales son definitivas; usar tarjetas regalo prepago es la forma más segura de fijar un presupuesto.",
          parentSafety: "App Control Parental de Nintendo Switch: Te avisa al móvil del tiempo de juego y bloquea la tienda."
        },
        xbox: {
          name: "Xbox & Microsoft Store",
          maker: "Microsoft • Consolas Xbox y Windows PC",
          icon: "🟢",
          badge: "XBOX GAME PASS Y PC",
          url: "https://www.xbox.com",
          bestFor: "Ofrece Xbox Game Pass, el 'Netflix de los videojuegos', con más de 400 títulos por una suscripción mensual.",
          howWorks: "Integrado en Windows y consolas Xbox. Permite comprar juegos sueltos o disfrutarlos con Game Pass.",
          refundPolicy: "Reembolsos solicitables en account.microsoft.com con menos de 2 horas jugadas en 14 días.",
          parentSafety: "Microsoft Family Safety: Gestión de tiempo de pantalla y avisos de autorización de compra en tu móvil."
        }
      },
      hi: {
        steam: {
          name: "Steam (स्टीम)",
          maker: "Valve Corporation • कंप्यूटर और लैपटॉप",
          icon: "💨",
          badge: "दुनिया का सबसे बड़ा पीसी स्टोर (50,000+ गेम्स)",
          url: "https://store.steampowered.com",
          bestFor: "कंप्यूटर गेमिंग का सबसे बड़ा स्टोर। गर्मियों और सर्दियों में 50% से 80% तक की भारी छूट मिलती है।",
          howWorks: "steampowered.com से मुफ्त ऐप डाउनलोड करें। 'Purchase as a Gift' चुनकर अपने पोते-पोती को सीधे उनके जन्मदिन पर उपहार भेजें।",
          refundPolicy: "2 घंटे से कम खेलने और 14 दिनों के भीतर 100% पैसे वापस मिलने की पूरी गारंटी।",
          parentSafety: "फैमिली व्यू (Family View) द्वारा 4 अंकों का पिन लगाकर स्टोर और बड़ों वाले गेम्स को लॉक करें।"
        },
        epic: {
          name: "Epic Games Store (एपिक गेम्स)",
          maker: "Epic Games • कंप्यूटर और मैक",
          icon: "⚡",
          badge: "हर गुरुवार को मुफ्त गेम्स और Fortnite",
          url: "https://store.epicgames.com",
          bestFor: "Fortnite और Fall Guys का आधिकारिक घर। हर गुरुवार को 1-2 पूरे गेम्स जीवन भर के लिए बिल्कुल मुफ्त देता है!",
          howWorks: "एपिक लॉन्चर इंस्टॉल करें। बिना कोई बैंक कार्ड जोड़े बच्चे हर हफ़्ते मुफ्त में बेहतरीन गेम्स अपनी लाइब्रेरी में जोड़ सकते हैं।",
          refundPolicy: "स्टीम की तरह 14 दिनों के भीतर और 2 घंटे से कम खेलने पर पूरा रिफंड मिलता है।",
          parentSafety: "13 साल से छोटे बच्चों के लिए अभिभावक सहमति और खरीदारी पर 4 अंकों का पिन कोड।"
        },
        playstation: {
          name: "PlayStation Store (प्लेस्टेशन)",
          maker: "Sony • टीवी कंसोल (PS4 और PS5)",
          icon: "🎮",
          badge: "सोनी टीवी कंसोल का आधिकारिक स्टोर",
          url: "https://store.playstation.com",
          bestFor: "घर के टीवी पर खेले जाने वाले शानदार रोमांचक गेम्स जैसे स्पाइडर-मैन और ग्रांड टूरिज्मो।",
          howWorks: "टीवी स्क्रीन पर प्लेस्टेशन मेन्यू से सीधे चालू होता है। दुकान से खरीदे गए गिफ़्ट कार्ड कोड से सुरक्षित भुगतान करें।",
          refundPolicy: "डाउनलोड शुरू न होने की स्थिति में 14 दिनों के भीतर रिफंड माँगा जा सकता है।",
          parentSafety: "बच्चों के खाते में महीने का खर्च सीमित करें और हर खरीदारी पर पासवर्ड अनिवार्य रखें।"
        },
        nintendo: {
          name: "Nintendo eShop (निन्टेंडो ई-शॉप)",
          maker: "Nintendo • निन्टेंडो स्विच",
          icon: "🍄",
          badge: "पारिवारिक और प्यारे गेम्स का बादशाह",
          url: "https://www.nintendo.com/store",
          bestFor: "बच्चों और परिवारों के सबसे पसंदीदा और सुरक्षित गेम्स: मारियो (Mario), पोकेमोन और एनिमल क्रॉसिंग।",
          howWorks: "स्विच स्क्रीन पर नारंगी बैग वाले आइकन पर टैप करें। गिफ़्ट कार्ड से सुरक्षित रिचार्ज करें।",
          refundPolicy: "डिजिटल खरीद पक्की होती है, इसलिए ₹1000 या ₹2000 का गिफ़्ट कार्ड इस्तेमाल करना सबसे सुरक्षित है।",
          parentSafety: "फोन में 'Nintendo Parental Controls' ऐप डालकर खेलने का समय तय करें और स्टोर को बंद रखें।"
        },
        xbox: {
          name: "Xbox & Microsoft Store (एक्सबॉक्स)",
          maker: "Microsoft • एक्सबॉक्स कंसोल और विंडोज पीसी",
          icon: "🟢",
          badge: "Xbox Game Pass और पीसी गेमिंग",
          url: "https://www.xbox.com",
          bestFor: "Xbox Game Pass उपलब्ध कराता है, जिसे गेम्स का नेटफ्लिक्स कहा जाता है—एक महीने की फीस में 400+ गेम्स!",
          howWorks: "विंडोज़ कंप्यूटर और एक्सबॉक्स में पहले से मौजूद होता है। सीधे खेलें या गेम पास से आनंद लें।",
          refundPolicy: "14 दिनों के अंदर और 2 घंटे से कम खेलने पर microsoft.com से रिफंड मिल जाता है।",
          parentSafety: "माइक्रोसॉफ्ट फैमिली सेफ्टी ऐप से बच्चे की स्क्रीन टाइमिंग और खरीदारी पर नज़र रखें।"
        }
      },
      fr: {
        steam: {
          name: "Steam",
          maker: "Valve Corporation • PC, Mac et Steam Deck",
          icon: "💨",
          badge: "BOUTIQUE PC N°1 MONDIALE (+50 000 JEUX)",
          url: "https://store.steampowered.com",
          bestFor: "Le géant incontesté du jeu PC. Immenses soldes d'été et d'hiver (-50% à -85%), et partage familial intégré.",
          howWorks: "Téléchargez l'application sur steampowered.com. Cliquez sur 'Acheter pour offrir' pour envoyer un jeu avec une carte d'anniversaire.",
          refundPolicy: "Remboursement à 100% garanti si le jeu a tourné moins de 2 heures et dans les 14 jours.",
          parentSafety: "Mode Famille Steam : Verrouillez la boutique et les jeux non adaptés par un code PIN à 4 chiffres."
        },
        epic: {
          name: "Epic Games Store",
          maker: "Epic Games • PC et Mac",
          icon: "⚡",
          badge: "FORTNITE ET JEUX GRATUITS CHAQUE JEUDI",
          url: "https://store.epicgames.com",
          bestFor: "Maison de Fortnite, Rocket League et Fall Guys. Offre 1 à 2 jeux complets GRATUITS chaque jeudi à vie !",
          howWorks: "Installez le lanceur Epic. Votre enfant peut récupérer des jeux gratuits chaque semaine sans carte bancaire.",
          refundPolicy: "Garantie 14 jours et moins de 2 heures de jeu alignée sur les standards Steam.",
          parentSafety: "Comptes contrôlés pour les moins de 13 ans avec accord parental et code PIN d'achat."
        },
        playstation: {
          name: "PlayStation Store",
          maker: "Sony Interactive Entertainment • PS4 et PS5",
          icon: "🎮",
          badge: "BOUTIQUE OFFICIELLE SONY SALON",
          url: "https://store.playstation.com",
          bestFor: "Grands jeux d'aventure sur la télévision du salon comme Spider-Man, Horizon ou Gran Turismo.",
          howWorks: "Accessible directement depuis la console. Rechargeable par carte bancaire ou cartes cadeaux en magasin.",
          refundPolicy: "Remboursement possible sous 14 jours tant que le téléchargement n'a pas débuté.",
          parentSafety: "Plafonds de dépenses mensuelles pour enfants et mot de passe requis au paiement."
        },
        nintendo: {
          name: "Nintendo eShop",
          maker: "Nintendo • Nintendo Switch",
          icon: "🍄",
          badge: "LE ROI DU JEU FAMILIAL ET COSY",
          url: "https://www.nintendo.com/store",
          bestFor: "Les chefs-d'œuvre familiaux les plus doux : Mario, Animal Crossing, Pokémon et Zelda.",
          howWorks: "Touchez l'icône de sac cabas orange sur la Switch. Achetez avec des cartes prépayées eShop en toute sécurité.",
          refundPolicy: "Achats fermes après téléchargement : les cartes cadeaux prépayées restent la solution idéale.",
          parentSafety: "Application Contrôle Parental Switch sur mobile : surveillez le temps d'écran et verrouillez la boutique."
        },
        xbox: {
          name: "Xbox & Microsoft Store",
          maker: "Microsoft • Consoles Xbox et PC Windows",
          icon: "🟢",
          badge: "XBOX GAME PASS ET PC",
          url: "https://www.xbox.com",
          bestFor: "Propose le Xbox Game Pass (le Netflix du jeu vidéo) donnant accès à plus de 400 jeux pour un abonnement modique.",
          howWorks: "Intégré d'office dans Windows et les consoles Xbox. Jeux achetables à l'unité ou via Game Pass.",
          refundPolicy: "Remboursements accordés sous 14 jours si le temps de jeu est inférieur à 2 heures.",
          parentSafety: "Microsoft Family Safety : Rapports de temps d'écran et alertes instantanées d'autorisation d'achat."
        }
      },
      de: {
        steam: {
          name: "Steam",
          maker: "Valve Corporation • PC, Mac & Steam Deck",
          icon: "💨",
          badge: "WELTWEITE NR. 1 FÜR PC (+50.000 SPIELE)",
          url: "https://store.steampowered.com",
          bestFor: "Die führende PC-Plattform weltweit mit riesigen Sommer- und Winterschlussverkäufen (-50% bis -85%) und Familienbibliothek.",
          howWorks: "Kostenlose App von steampowered.com laden. 'Als Geschenk kaufen' wählen, um Enkeln ein Spiel mit Grußkarte zu schenken.",
          refundPolicy: "100% Geld-zurück-Garantie bei unter 2 Stunden Spielzeit innerhalb von 14 Tagen. Völlig unkompliziert.",
          parentSafety: "Steam-Familienansicht: Sperrt Store und nicht altersgerechte Spiele hinter einer 4-stelligen PIN."
        },
        epic: {
          name: "Epic Games Store",
          maker: "Epic Games • PC und Mac",
          icon: "⚡",
          badge: "FORTNITE & WOCHENTLICHE GRATISSPIELE",
          url: "https://store.epicgames.com",
          bestFor: "Heimat von Fortnite und Fall Guys. Verschenkt jeden Donnerstag 1 bis 2 Vollversionen dauerhaft kostenlos!",
          howWorks: "Epic-Launcher installieren. Kinder können wöchentlich Gratisspiele sichern – ganz ohne Zahlungsdaten.",
          refundPolicy: "Volle Rückerstattung innerhalb von 14 Tagen bei unter 2 Stunden Spielzeit.",
          parentSafety: "Geschützte Konten für unter 13-Jährige mit Zustimmungspflicht und Kauf-PIN."
        },
        playstation: {
          name: "PlayStation Store",
          maker: "Sony Interactive Entertainment • PS4 & PS5",
          icon: "🎮",
          badge: "OFFIZIELLER SONY WOHNZIMMER-STORE",
          url: "https://store.playstation.com",
          bestFor: "Große filmreife Abenteuer für den Fernseher wie Spider-Man, God of War und Gran Turismo.",
          howWorks: "Direkt im Konsolenmenü aufrufbar. Sicher mit Guthabenkarten aus dem Supermarkt aufladbar.",
          refundPolicy: "Rückerstattung innerhalb von 14 Tagen möglich, solange der Download noch nicht begonnen hat.",
          parentSafety: "Monatliche Ausgabenlimits für Kinderkonten und Passwortabfrage beim Bezahlen."
        },
        nintendo: {
          name: "Nintendo eShop",
          maker: "Nintendo • Nintendo Switch",
          icon: "🍄",
          badge: "KÖNIG DES FAMILIEN- & ENTSPANNTEN GAMINGS",
          url: "https://www.nintendo.com/store",
          bestFor: "Die beliebtesten, friedlichsten Familienspiele: Mario, Animal Crossing, Pokémon und Zelda.",
          howWorks: "Orangefarbene Einkaufstasche auf der Switch antippen. Bequem mit Nintendo-Guthabenkarten zahlen.",
          refundPolicy: "Digitalkäufe sind verbindlich; Prepaid-Guthabenkarten sind die sicherste Budgetgrenze.",
          parentSafety: "Kostenlose Nintendo Switch Altersbeschränkungen-App fürs Smartphone zum Einstellen von Spielzeiten."
        },
        xbox: {
          name: "Xbox & Microsoft Store",
          maker: "Microsoft • Xbox Konsolen & Windows-PC",
          icon: "🟢",
          badge: "XBOX GAME PASS & PC-GAMING",
          url: "https://www.xbox.com",
          bestFor: "Bietet den Xbox Game Pass ('das Netflix für Videospiele') mit Zugriff auf über 400 Spiele zum Monatspreis.",
          howWorks: "Bereits in Windows und Xbox-Konsolen integriert. Einzelkauf oder Flatrate über Game Pass.",
          refundPolicy: "Kulante Erstattungen bei unter 2 Stunden Spielzeit innerhalb von 14 Tagen auf account.microsoft.com.",
          parentSafety: "Microsoft Family Safety: Bildschirmzeitkontingente und Kaufanfragen direkt aufs Elternhandy."
        }
      }
    };
  }

  init() {
    this.setFontSize(this.fontSize);
    this.setLanguage(this.currentLang);
    this.renderBlueGamepadSVG();
    this.initEmbersCanvas();
    this.bindHoverSFX();
    this.bindKeyboardPressToStart();
    this.renderGameCards();
    this.showBuyingTerm(this.currentBuyingTerm || 'launcher');
    this.selectBuyingPlatform(this.currentBuyingPlatform || 'steam');
  }

  bindHoverSFX() {
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('button, .feature-box, .career-card, .game-simple-card, .sidebar-step-btn, .game-long-bar, .game-codex-card, .game-filter-btn');
      if (target && window.sfx && this.soundsEnabled) {
        window.sfx.hover();
      }
    });
  }

  /* ==========================================================
     TITLE SCREEN BACKGROUND SETUP (CLEAN & SIMPLE)
     ========================================================== */
  initEmbersCanvas() {
    this.emberCanvas = document.getElementById('embers-canvas');
    if (!this.emberCanvas) return;
    this.emberCtx = this.emberCanvas.getContext('2d');
    this.emberCtx.clearRect(0, 0, this.emberCanvas.width, this.emberCanvas.height);
  }

  bindKeyboardPressToStart() {
    window.addEventListener('keydown', (e) => {
      if (this.onTitleScreen) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          this.enterAcademy(1);
        }
      } else {
        if (e.key === 'Escape') {
          this.closeGameCodex();
          this.closeFeedbackModal();
        }
      }
    });
  }

  enterAcademy(stepNum = 1) {
    if (window.sfx && this.soundsEnabled) window.sfx.startTransition();
    this.onTitleScreen = false;

    const titleScreen = document.getElementById('title-screen');
    if (titleScreen) {
      titleScreen.classList.add('screen-hidden');
    }

    if (this.emberAnimId) {
      cancelAnimationFrame(this.emberAnimId);
    }

    this.goToStep(stepNum);
  }

  returnToTitleScreen() {
    if (window.sfx && this.soundsEnabled) window.sfx.click();
    this.onTitleScreen = true;

    const titleScreen = document.getElementById('title-screen');
    if (titleScreen) {
      titleScreen.classList.remove('screen-hidden');
    }

    this.initEmbersCanvas();
  }

  /* ==========================================================
     GAME VAULT & DEEP-DIVE CODEX SYSTEM (LONG BAR FORMAT)
     ========================================================== */
  renderGameCards(filter = this.currentGenreFilter, query = this.currentGameSearch) {
    const grid = document.getElementById('games-vault-grid');
    if (!grid) return;

    const database = window.GAMES_CODEX_DATABASE || [];
    const dict = SILVER_TRANSLATIONS[this.currentLang] || SILVER_TRANSLATIONS.en;

    const filteredGames = database.filter(game => {
      const matchesGenre = (filter === 'all' || game.genreCategory === filter);
      if (!matchesGenre) return false;

      if (!query) return true;

      const q = query.toLowerCase();
      const searchableText = `${game.title} ${game.genreLabel} ${game.studio} ${game.shortDesc} ${game.about} ${game.platforms.join(' ')}`.toLowerCase();
      return searchableText.includes(q);
    });

    if (filteredGames.length === 0) {
      grid.innerHTML = `
        <div class="clean-white-card" style="grid-column: 1 / -1; text-align: center; padding: 48px 24px;">
          <span style="font-size: 3rem; display: block; margin-bottom: 12px;">🔍</span>
          <h3 style="font-size: 1.6rem; color: var(--color-primary-dark); margin-bottom: 8px;">${dict.vaultNoGamesFound || 'No Games Found'}</h3>
          <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 500px; margin: 0 auto 20px auto;">
            ${(dict.vaultNoGamesFoundDesc || 'We couldn\'t find any games matching "{query}". Try clearing your search or picking another genre!').replace('{query}', escapeHTML(query))}
          </p>
          <button class="btn-nav-action btn-nav-next" onclick="window.app.filterGames('all', document.querySelector('.game-filter-btn[data-filter=all]')); document.getElementById('game-search-input').value=''; window.app.handleGameSearch('');" style="margin: 0 auto;">
            ${dict.vaultShowAll || '🔄 Show All Games (36+)'}
          </button>
        </div>
      `;
      return;
    }

    const howToPlayLabel = dict.vaultHowToPlay || 'How to Play';

    grid.innerHTML = filteredGames.map((game, index) => {
      const logoSvg = window.getGameLogoSvg ? window.getGameLogoSvg(game) : (window.GAMES_LOGOS && window.GAMES_LOGOS[game.id]) || `<div class="game-fallback-logo">${game.icon || '🎮'}</div>`;

      let diffText = game.difficulty;
      if (game.difficultyLevel === 'easy' && dict.vaultDiffEasy) diffText = dict.vaultDiffEasy;
      else if (game.difficultyLevel === 'medium' && dict.vaultDiffMed) diffText = dict.vaultDiffMed;
      else if (game.difficultyLevel === 'hard' && dict.vaultDiffHard) diffText = dict.vaultDiffHard;

      return `
        <article class="game-long-bar" onclick="window.app.openGameCodex('${game.id}')" tabindex="0" role="button" aria-label="Inspect ${escapeHTML(game.title)} and see how to play">
          <!-- Left Decorative Accent Strip -->
          <div class="game-bar-accent-strip" style="background: ${game.bannerGradient || 'linear-gradient(180deg, #0284c7, #0369a1)'};"></div>

          <!-- Left: Game Logo / Emblem -->
          <div class="game-bar-logo-wrap" style="background: ${game.bannerGradient || '#0f172a'};" title="${escapeHTML(game.title)} Official Emblem">
            ${logoSvg}
          </div>

          <!-- Center-Left: Game Title, Meta, and Description Beneath Name -->
          <div class="game-bar-content">
            <div class="game-bar-header">
              <div class="game-bar-title-wrap">
                <h3 class="game-bar-title">${escapeHTML(game.title)}</h3>
                <span class="game-bar-genre-badge">${escapeHTML(game.genreLabel)}</span>
              </div>

              <div class="game-bar-meta-tags">
                <span class="game-bar-meta-item">🏛️ ${escapeHTML(game.studio)}</span>
                <span class="game-bar-meta-item">📅 ${escapeHTML(game.year)}</span>
                <span class="game-bar-age-badge">${escapeHTML(game.ageRating)}</span>
              </div>
            </div>

            <!-- Description beneath the name of the game -->
            <p class="game-bar-desc">${escapeHTML(game.shortDesc)}</p>

            <div class="game-bar-footer-row">
              <div class="game-bar-platforms-list">
                ${game.platforms.map(plat => `<span class="game-platform-pill">${escapeHTML(plat)}</span>`).join('')}
              </div>

              <div class="game-bar-difficulty-badge ${game.difficultyLevel || 'easy'}">
                <span>${escapeHTML(diffText)}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Right: Stylish Animated Arrow Action Button -->
          <div class="game-bar-arrow-wrap">
            <div class="game-bar-arrow-btn">
              <span class="game-bar-arrow-text">${howToPlayLabel}</span>
              <span class="game-bar-arrow-icon" aria-hidden="true">➔</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  filterGames(category, btnEl) {
    this.currentGenreFilter = category;
    if (window.sfx && this.soundsEnabled) window.sfx.click();

    document.querySelectorAll('.game-filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    if (btnEl) {
      btnEl.classList.add('active');
    } else {
      const target = document.querySelector(`.game-filter-btn[data-filter="${category}"]`);
      if (target) target.classList.add('active');
    }

    this.renderGameCards();
  }

  handleGameSearch(query) {
    this.currentGameSearch = (query || '').trim();
    this.renderGameCards();
  }

  openGameCodex(gameId) {
    const database = window.GAMES_CODEX_DATABASE || [];
    const gameIndex = database.findIndex(g => g.id === gameId);
    if (gameIndex === -1) return;

    const game = database[gameIndex];
    this.activeCodexGame = game;
    this.activeCodexGameIndex = gameIndex;
    if (window.sfx && this.soundsEnabled) window.sfx.questStep();

    const dict = SILVER_TRANSLATIONS[this.currentLang] || SILVER_TRANSLATIONS.en;

    // Populate Modal Header
    const logoWrap = document.getElementById('codex-modal-logo-wrap');
    const genreEl = document.getElementById('codex-modal-genre');
    const ageEl = document.getElementById('codex-modal-age');
    const titleEl = document.getElementById('codex-modal-title');
    const studioEl = document.getElementById('codex-modal-studio');
    const yearEl = document.getElementById('codex-modal-year');
    const heroEl = document.getElementById('codex-modal-hero');
    const counterEl = document.getElementById('codex-game-counter');

    const logoSvg = window.getGameLogoSvg ? window.getGameLogoSvg(game) : (window.GAMES_LOGOS && window.GAMES_LOGOS[game.id]) || `<div class="game-fallback-logo">${game.icon || '🎮'}</div>`;

    if (logoWrap) logoWrap.innerHTML = logoSvg;
    if (genreEl) genreEl.textContent = game.genreLabel;
    if (ageEl) ageEl.textContent = game.ageRating;
    if (titleEl) titleEl.textContent = game.title;
    if (studioEl) studioEl.textContent = `🏛️ ${game.studio}`;
    if (yearEl) yearEl.textContent = `📅 ${game.year}`;
    if (heroEl && game.bannerGradient) heroEl.style.background = game.bannerGradient;
    if (counterEl) counterEl.textContent = (dict.codexGameCounter || 'Game {current} of {total}').replace('{current}', gameIndex + 1).replace('{total}', database.length);

    // Format Controls & Pro-Tips
    const controlsTableHtml = `
      <div class="codex-controls-table-wrap">
        <table class="codex-controls-table">
          <thead>
            <tr>
              <th>${dict.codexColAction || '🎮 Action Category'}</th>
              <th>${dict.codexColGamepad || '🕹️ Gamepad / Controller Button'}</th>
              <th>${dict.codexColKeyboard || '⌨️ Keyboard / Mouse'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${dict.codexActMovement || '🏃 Character Movement'}</strong></td>
              <td><code>Left Thumbstick</code> (Walk / Steer)</td>
              <td><code>W / A / S / D</code> (Arrow Keys)</td>
            </tr>
            <tr>
              <td><strong>${dict.codexActCamera || '👀 Camera & Aiming'}</strong></td>
              <td><code>Right Thumbstick</code> (Pan View)</td>
              <td><code>Mouse Movement</code> (Look Around)</td>
            </tr>
            <tr>
              <td><strong>${dict.codexActPrimary || '⚔️ Primary Action / Attack'}</strong></td>
              <td><code>R1 / R2 / Right Trigger</code></td>
              <td><code>Left Mouse Button</code></td>
            </tr>
            <tr>
              <td><strong>${dict.codexActSecondary || '🛡️ Secondary Action / Guard / Aim'}</strong></td>
              <td><code>L1 / L2 / Left Trigger</code></td>
              <td><code>Right Mouse Button</code></td>
            </tr>
            <tr>
              <td><strong>${dict.codexActInteract || '💬 Interact / Talk / Loot'}</strong></td>
              <td><code>Face Button (Cross / 'A' / 'X')</code></td>
              <td><code>'E' / 'F' / Spacebar</code></td>
            </tr>
            <tr>
              <td><strong>${dict.codexActPause || '⏸️ Pause, Inventory & Map'}</strong></td>
              <td><code>Options / Start / Touchpad</code></td>
              <td><code>ESC / Tab / 'M'</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const proTipsListHtml = (game.proTips && game.proTips.length > 0) ? `
      <div class="codex-protips-box">
        <h4 style="color: #b45309; margin-bottom: 12px;">${dict.codexSec5Title || '💡 3 Golden Pro-Tips for New Players'}</h4>
        <ul class="codex-protip-list">
          ${game.proTips.map(tip => `<li>✨ ${escapeHTML(tip)}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    // Populate Modal Body Content with every little detail and how to play
    const bodyEl = document.getElementById('codex-modal-body-content');
    if (bodyEl) {
      bodyEl.innerHTML = `
        <!-- Quick Specs Ribbon -->
        <div class="codex-meta-ribbon">
          <div class="codex-meta-item">
            <span class="label">${dict.codexStudioLabel || '🏢 Studio:'}</span>
            <span>${escapeHTML(game.studio)}</span>
          </div>
          <div class="codex-meta-item">
            <span class="label">${dict.codexYearLabel || '📅 Release Year:'}</span>
            <span>${escapeHTML(game.year)}</span>
          </div>
          <div class="codex-meta-item">
            <span class="label">${dict.codexAgeLabel || '⭐ Age Rating:'}</span>
            <span>${escapeHTML(game.ageRating)}</span>
          </div>
          <div class="codex-meta-item">
            <span class="label">${dict.codexDiffLabel || '⚡ Difficulty:'}</span>
            <span>${escapeHTML(game.difficulty)}</span>
          </div>
          <div class="codex-meta-item">
            <span class="label">${dict.codexPlatLabel || '🎮 Platforms:'}</span>
            <span>${escapeHTML(game.platforms.join(', '))}</span>
          </div>
        </div>

        <!-- Comprehensive Details Sections Grid -->
        <div class="codex-sections-grid">
          <!-- 1. What is the Game About? -->
          <div class="codex-section-card full-width">
            <div class="card-telemetry-header">
              <span class="telemetry-node">CODEX // LORE_ARCHIVE</span>
              <span class="telemetry-code">TOPIC: NARRATIVE & UNIVERSE</span>
              <span class="telemetry-badge">CHAPTER 01</span>
            </div>
            <h4>${dict.codexSec1Title || '📖 1. What is this Game About? (Story, Concept & World)'}</h4>
            <p class="deep-explainer-text">${escapeHTML(game.about)}</p>
          </div>

          <!-- 2. How Does It Work? -->
          <div class="codex-section-card">
            <div class="card-telemetry-header">
              <span class="telemetry-node">CORE_ENGINE // SYSTEMS</span>
              <span class="telemetry-badge">CHAPTER 02</span>
            </div>
            <h4>${dict.codexSec2Title || '⚙️ 2. How Does the Game Work? (Core Systems & Mechanics)'}</h4>
            <p>${escapeHTML(game.howItWorks)}</p>
          </div>

          <!-- 3. What Do You Have to Do? -->
          <div class="codex-section-card">
            <div class="card-telemetry-header">
              <span class="telemetry-node">OBJECTIVES // MISSIONS</span>
              <span class="telemetry-badge">CHAPTER 03</span>
            </div>
            <h4>${dict.codexSec3Title || '🎯 3. What Do You Have to Do? (Goals & Objectives)'}</h4>
            <div style="font-size: 1.05rem; color: var(--text-main); line-height: 1.7; white-space: pre-line;">
              ${escapeHTML(game.whatToDo)}
            </div>
          </div>

          <!-- 4. HOW TO PLAY & CONTROLS MASTERCLASS (SPECIAL EMPHASIS!) -->
          <div class="codex-section-card full-width htp-highlight-card">
            <div class="card-telemetry-header">
              <span class="telemetry-node" style="color: #0284c7;">ACADEMY_TRAINING // HOW_TO_PLAY</span>
              <span class="telemetry-code">CONTROLLER & KEYBOARD TUTORIAL</span>
              <span class="telemetry-badge" style="color: #0284c7;">CRUCIAL CHAPTER</span>
            </div>
            
            <h3 class="htp-section-title">🕹️ ${escapeHTML(game.title)} - ${dict.codexSec4Title || 'Controls & Beginner Guide'}</h3>
            <p class="deep-explainer-text" style="margin-bottom: 16px;">
              Here is your step-by-step masterclass on how to pick up the controller, take your first steps, and enjoy playing with zero confusion:
            </p>

            <div class="htp-body-wrapper">
              ${game.howToPlay}
            </div>

            <!-- Full Key Mapping Reference Table -->
            <h5 style="font-size: 1.15rem; color: var(--color-primary-dark); margin: 20px 0 10px 0;">🎮 ${dict.codexSec4Title || 'Button Mapping Reference'}</h5>
            ${controlsTableHtml}

            <!-- 3 Pro-Tips -->
            ${proTipsListHtml}
          </div>

          <!-- 5. Elder & Beginner Accessibility Blueprint -->
          <div class="codex-section-card" style="border-left-color: #22c55e;">
            <div class="card-telemetry-header">
              <span class="telemetry-node" style="color: #166534;">ACCESSIBILITY // 100% VERIFIED</span>
              <span class="telemetry-badge" style="color: #166534;">COMFORT</span>
            </div>
            <h4 style="color: #166534;">👴 5. Elder & Beginner Accessibility</h4>
            <p>${escapeHTML(game.accessibility)}</p>
          </div>

          <!-- 6. Grandkid & Family Fun -->
          <div class="codex-section-card" style="border-left-color: #f59e0b; background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%);">
            <div class="card-telemetry-header">
              <span class="telemetry-node" style="color: #b45309;">FAMILY_BONDING // MULTIPLAYER</span>
              <span class="telemetry-badge" style="color: #b45309;">GENERATIONS</span>
            </div>
            <h4 style="color: #b45309;">🤝 6. Why Grandkids Love It & Family Connection</h4>
            <p>${escapeHTML(game.grandkidAppeal)}</p>
          </div>
        </div>
      `;
    }

    const modal = document.getElementById('game-codex-modal');
    if (modal) {
      modal.classList.add('active');
      modal.scrollTop = 0;
      const card = modal.querySelector('.game-codex-modal-card');
      if (card) card.scrollTop = 0;
      document.body.style.overflow = 'hidden';
    }
  }

  navigateGameCodex(direction = 1) {
    const database = window.GAMES_CODEX_DATABASE || [];
    if (database.length === 0) return;

    let currentIndex = this.activeCodexGameIndex ?? 0;
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) nextIndex = database.length - 1;
    if (nextIndex >= database.length) nextIndex = 0;

    const nextGame = database[nextIndex];
    if (nextGame) {
      this.openGameCodex(nextGame.id);
    }
  }

  closeGameCodex() {
    const modal = document.getElementById('game-codex-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (window.narrator && window.narrator.isPlaying) {
      window.narrator.stop();
    }

    if (window.sfx && this.soundsEnabled) window.sfx.click();
    this.activeCodexGame = null;
    this.activeCodexGameIndex = -1;
  }

  readGameCodex() {
    if (!this.activeCodexGame || !window.narrator) return;
    const g = this.activeCodexGame;

    const readText = `
      ${g.title}. ${g.genreLabel}. Developed by ${g.studio}.
      What is this game about: ${g.about}
      How does the game work: ${g.howItWorks}
      What do you have to do: ${g.whatToDo}
      How to play: Use the controller or keyboard to move and explore. ${g.accessibility}
      Why grandkids love it: ${g.grandkidAppeal}
    `;

    const bodyEl = document.getElementById('codex-modal-body-content');
    window.narrator.speak(readText, bodyEl);
  }

  /* ==========================================================
     FEEDBACK SYSTEM
     ========================================================== */
  openFeedbackModal() {
    if (window.sfx && this.soundsEnabled) window.sfx.click();
    const modal = document.getElementById('feedback-modal');
    if (modal) modal.classList.add('active');
  }

  closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (modal) modal.classList.remove('active');
  }

  setRating(stars) {
    this.currentFeedbackRating = stars;
    if (window.sfx && this.soundsEnabled) window.sfx.click();

    document.querySelectorAll('.feedback-star').forEach(star => {
      const r = parseInt(star.getAttribute('data-rating'), 10);
      star.classList.toggle('active', r <= stars);
    });
  }

  submitFeedback(event) {
    event.preventDefault();
    if (window.sfx && this.soundsEnabled) window.sfx.success();

    const category = document.getElementById('feedback-category')?.value || 'general';
    const name = document.getElementById('feedback-name')?.value || 'Anonymous Learner';
    const msg = document.getElementById('feedback-msg')?.value || '';

    const feedbackEntry = {
      date: new Date().toISOString(),
      rating: this.currentFeedbackRating,
      category: category,
      name: name,
      message: msg
    };

    const saved = JSON.parse(localStorage.getItem('silver_feedbacks') || '[]');
    saved.push(feedbackEntry);
    localStorage.setItem('silver_feedbacks', JSON.stringify(saved));

    this.closeFeedbackModal();

    const toast = document.getElementById('feedback-toast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4500);
    }

    document.getElementById('feedback-form')?.reset();
    this.setRating(5);
  }

  /* ==========================================================
     MULTILINGUAL & SETTINGS
     ========================================================== */
  setLanguage(langCode) {
    if (!SILVER_TRANSLATIONS[langCode]) langCode = 'en';
    this.currentLang = langCode;
    localStorage.setItem('silver_lang', langCode);

    const dict = SILVER_TRANSLATIONS[langCode];

    ['title-lang-select', 'hub-lang-select'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = langCode;
    });

    // 1. Static i18n text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // 2. Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // 3. Title attributes (tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.title = dict[key];
      }
    });

    // 4. Voice Reader locale
    if (window.narrator) {
      window.narrator.setLanguage(dict.voiceLang || 'en-US');
    }

    // 5. Active HUD module & quest status
    const activeTitleEl = document.getElementById('hud-active-module-title');
    const questStatusEl = document.getElementById('hud-quest-status');
    const moduleNameKey = `module${this.currentStep}Name`;
    const questStatusKey = `hudQuest${this.currentStep}`;
    if (activeTitleEl && dict[moduleNameKey]) activeTitleEl.textContent = dict[moduleNameKey];
    if (questStatusEl && dict[questStatusKey]) questStatusEl.textContent = dict[questStatusKey];

    // 6. Sound Toggle Button text
    const soundBtn = document.getElementById('sound-btn');
    if (soundBtn) {
      soundBtn.textContent = this.soundsEnabled ? (dict.soundOn || '🔔 Sound: ON') : (dict.soundOff || '🔕 Sound: OFF');
    }

    // 7. Re-render dynamic components
    this.renderBlueGamepadSVG();
    this.showSlang(this.currentSlangTerm || 'gg');
    this.inspectButton(this.currentButtonCode || 'lstick');
    this.renderGameCards();

    // 8. If Game Codex modal is open, re-render
    if (this.activeCodexGame) {
      this.openGameCodex(this.activeCodexGame.id);
    }

    // 9. If Certificate is open, re-draw
    const certBox = document.getElementById('cert-wrapper-box');
    if (certBox && certBox.style.display !== 'none') {
      this.drawCertificate();
    }

    // 10. Refresh Parent Buying Guide showcases
    this.showBuyingTerm(this.currentBuyingTerm || 'launcher');
    this.selectBuyingPlatform(this.currentBuyingPlatform || 'steam');

    if (window.sfx && this.soundsEnabled) window.sfx.click();
  }

  goToStep(stepNum) {
    this.currentStep = stepNum;
    if (window.sfx && this.soundsEnabled) window.sfx.questStep();

    document.querySelectorAll('.step-page-section').forEach(sec => sec.classList.remove('active-section'));
    const targetSection = document.getElementById(`step-${stepNum}`);
    if (targetSection) targetSection.classList.add('active-section');

    document.querySelectorAll('.sidebar-step-btn, .step-nav-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', (idx + 1) === stepNum);
    });

    const dict = SILVER_TRANSLATIONS[this.currentLang] || SILVER_TRANSLATIONS.en;
    const moduleNameKey = `module${stepNum}Name`;
    const questStatusKey = `hudQuest${stepNum}`;

    const xpValues = [140, 280, 420, 560, 700, 850, 1000];
    const xpPercent = [14, 28, 42, 57, 71, 85, 100];

    const activeTitleEl = document.getElementById('hud-active-module-title');
    const questStatusEl = document.getElementById('hud-quest-status');
    const xpDisplayEl = document.getElementById('hud-xp-display');
    const xpBarFillEl = document.getElementById('hud-xp-bar-fill');

    if (activeTitleEl) activeTitleEl.textContent = dict[moduleNameKey] || `📘 Module ${stepNum}`;
    if (questStatusEl) questStatusEl.textContent = dict[questStatusKey] || `⚔️ Active Quest: ${stepNum} of 7`;
    if (xpDisplayEl) xpDisplayEl.textContent = `XP: ${xpValues[stepNum - 1]} / 1000 (${xpPercent[stepNum - 1]}%)`;
    if (xpBarFillEl) xpBarFillEl.style.width = `${xpPercent[stepNum - 1]}%`;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainArea = document.querySelector('.dashboard-main-area');
    if (mainArea) mainArea.scrollTop = 0;
  }

  setFontSize(size) {
    this.fontSize = size;
    localStorage.setItem('silver_font', size);
    document.documentElement.setAttribute('data-font-size', size);

    document.querySelectorAll('.font-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === size);
    });
  }

  toggleSounds() {
    this.soundsEnabled = !this.soundsEnabled;
    if (window.sfx) window.sfx.toggleSound(this.soundsEnabled);
    const btn = document.getElementById('sound-btn');
    const dict = SILVER_TRANSLATIONS[this.currentLang] || SILVER_TRANSLATIONS.en;
    if (btn) {
      btn.textContent = this.soundsEnabled ? (dict.soundOn || '🔔 Sound: ON') : (dict.soundOff || '🔕 Sound: OFF');
      btn.classList.toggle('active', this.soundsEnabled);
    }
  }

  readCurrentSection(stepId) {
    const sec = document.getElementById(stepId);
    if (!sec || !window.narrator) return;
    const text = sec.innerText;
    window.narrator.speak(text, sec);
  }

  inspectButton(code) {
    if (window.sfx && this.soundsEnabled) window.sfx.click();
    this.currentButtonCode = code;

    const langSet = this.controllerData[this.currentLang] || this.controllerData.en;
    const info = langSet[code] || langSet.lstick;

    const titleEl = document.getElementById('panel-btn-title');
    const purposeEl = document.getElementById('panel-btn-purpose');
    const textEl = document.getElementById('panel-btn-text');
    const analogyEl = document.getElementById('panel-btn-analogy');

    if (titleEl) titleEl.textContent = info.title;
    if (purposeEl) purposeEl.textContent = info.purpose;
    if (textEl) textEl.textContent = info.text;
    if (analogyEl) analogyEl.textContent = info.analogy;

    document.querySelectorAll('.btn-inspect-part').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(code));
    });

    document.querySelectorAll('.gp-part').forEach(p => p.classList.remove('gp-highlight'));
    const svgTarget = document.getElementById(`svg-part-${code}`);
    if (svgTarget) svgTarget.classList.add('gp-highlight');
  }

  showSlang(termCode) {
    if (window.sfx && this.soundsEnabled) window.sfx.click();
    this.currentSlangTerm = termCode;

    const langSet = this.slangData[this.currentLang] || this.slangData.en;
    const data = langSet[termCode] || langSet.gg;

    const titleEl = document.getElementById('slang-term-title');
    const descEl = document.getElementById('slang-term-desc');

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.innerHTML = data.desc;
  }

  completeQuiz() {
    if (window.sfx && this.soundsEnabled) window.sfx.fanfare();

    const certBox = document.getElementById('cert-wrapper-box');
    if (certBox) {
      certBox.style.display = 'block';
      this.drawCertificate();
      certBox.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ==========================================================
     COOL LIGHT BLUE & PURE WHITE OFFICIAL CERTIFICATE
     ========================================================== */
  drawCertificate() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const dict = SILVER_TRANSLATIONS[this.currentLang] || SILVER_TRANSLATIONS.en;
    const nameInput = document.getElementById('student-name-input');
    const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : (dict.certDefaultName || 'Honored Learner');

    canvas.width = 880;
    canvas.height = 580;

    // Background Pure White & Parchment Gradient
    const grad = ctx.createLinearGradient(0, 0, 880, 580);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(1, '#f0f7ff');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 880, 580);

    // Ocean Sapphire Outer Border
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 12;
    ctx.strokeRect(18, 18, 844, 544);

    // Inner Sky Blue & Gold Border
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 30, 820, 520);

    // Title
    ctx.fillStyle = '#0369a1';
    ctx.font = 'bold 20px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(dict.certHeader || '⭐ VINTAGE ARENA GAMING ACADEMY // OFFICIAL CREDENTIAL ⭐', 440, 85);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 36px Georgia, serif';
    ctx.fillText(dict.certTitle || 'Certificate of Mastery', 440, 140);

    ctx.fillStyle = '#475569';
    ctx.font = 'italic 18px "Lexend", sans-serif';
    ctx.fillText(dict.certCertifies || 'This official credential certifies that', 440, 190);

    // Student Name
    ctx.fillStyle = '#0284c7';
    ctx.font = 'bold 38px Georgia, serif';
    ctx.fillText(name, 440, 255);

    // Divider Line
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(220, 275);
    ctx.lineTo(660, 275);
    ctx.stroke();

    // Body Text
    ctx.fillStyle = '#334155';
    ctx.font = '18px "Lexend", sans-serif';
    ctx.fillText(dict.certBody1 || 'has successfully mastered the fundamentals of modern video gaming,', 440, 325);
    ctx.fillText(dict.certBody2 || 'technical architecture, health benefits, industry careers, and gamer culture.', 440, 355);

    // Sapphire & Gold Medal Seal
    ctx.beginPath();
    ctx.arc(440, 435, 42, 0, Math.PI * 2);
    ctx.fillStyle = '#0284c7';
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('👑', 440, 442);
    ctx.font = 'bold 10px "Outfit", sans-serif';
    ctx.fillText(dict.certBadge || 'CERTIFIED', 440, 460);

    // Date
    const localesMap = { en: 'en-US', es: 'es-ES', hi: 'hi-IN', fr: 'fr-FR', de: 'de-DE' };
    const locale = localesMap[this.currentLang] || 'en-US';
    const today = new Date().toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
    ctx.fillStyle = '#64748b';
    ctx.font = '16px "Lexend", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${dict.certDate || 'Date:'} ${today}`, 80, 520);

    // Signature
    ctx.textAlign = 'right';
    ctx.font = 'italic 19px Georgia, serif';
    ctx.fillStyle = '#0369a1';
    ctx.fillText(dict.certSign || 'Vintage Arena Mentors & Directorate', 800, 515);
  }

  downloadCert() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Vintage-Arena-Senior-Gamer-Certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    if (window.sfx && this.soundsEnabled) window.sfx.success();
  }

  /* ==========================================================
     MODULE 7: PARENT'S PURCHASING GUIDE INTERACTIVE CONTROLLERS
     ========================================================== */
  showBuyingTerm(termCode) {
    if (window.sfx && this.soundsEnabled) window.sfx.click();
    this.currentBuyingTerm = termCode;

    const langSet = (this.buyingTermsData && (this.buyingTermsData[this.currentLang] || this.buyingTermsData.en)) || {};
    const data = langSet[termCode] || (this.buyingTermsData && this.buyingTermsData.en && this.buyingTermsData.en[termCode]) || {
      title: 'Term', badge: 'TECH TERM', desc: '', analogy: '', tip: ''
    };

    const titleEl = document.getElementById('buying-term-title');
    const badgeEl = document.getElementById('buying-term-badge');
    const descEl = document.getElementById('buying-term-desc');
    const analogyEl = document.getElementById('buying-term-analogy-text');
    const tipEl = document.getElementById('buying-term-tip-text');

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (descEl) descEl.innerHTML = data.desc;
    if (analogyEl) analogyEl.innerHTML = data.analogy;
    if (tipEl) tipEl.innerHTML = data.tip;

    document.querySelectorAll('.buying-term-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-term') === termCode);
    });
  }

  selectBuyingPlatform(platformKey) {
    if (window.sfx && this.soundsEnabled) window.sfx.click();
    this.currentBuyingPlatform = platformKey;

    const langSet = (this.platformStoreData && (this.platformStoreData[this.currentLang] || this.platformStoreData.en)) || {};
    const p = langSet[platformKey] || (this.platformStoreData && this.platformStoreData.en && this.platformStoreData.en[platformKey]) || {};

    const iconEl = document.getElementById('platform-showcase-icon');
    const nameEl = document.getElementById('platform-showcase-name');
    const makerEl = document.getElementById('platform-showcase-maker');
    const badgeEl = document.getElementById('platform-showcase-badge');
    const linkEl = document.getElementById('platform-showcase-link');
    const bestForEl = document.getElementById('platform-feat-bestfor');
    const howWorksEl = document.getElementById('platform-feat-howworks');
    const refundEl = document.getElementById('platform-feat-refund');
    const parentTipEl = document.getElementById('platform-feat-parenttip');

    if (iconEl) iconEl.textContent = p.icon || '🏪';
    if (nameEl) nameEl.textContent = p.name || platformKey;
    if (makerEl) makerEl.textContent = p.maker || '';
    if (badgeEl) badgeEl.textContent = p.badge || 'OFFICIAL STORE';
    if (linkEl && p.url) {
      linkEl.href = p.url;
      linkEl.textContent = `🔗 Open ${p.name || 'Store'} Website ➔`;
    }
    if (bestForEl) bestForEl.innerHTML = p.bestFor || '';
    if (howWorksEl) howWorksEl.innerHTML = p.howWorks || '';
    if (refundEl) refundEl.innerHTML = p.refundPolicy || '';
    if (parentTipEl) parentTipEl.innerHTML = p.parentSafety || '';

    document.querySelectorAll('.store-platform-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-platform') === platformKey);
    });
  }

  answerBuyingScenario(scenNum, optIdx, isCorrect, feedbackMsg) {
    const feedbackEl = document.getElementById(`scenario-feedback-${scenNum}`);
    const parentCard = document.getElementById(`scenario-card-${scenNum}`);

    if (parentCard) {
      parentCard.querySelectorAll('.scenario-option-btn').forEach((btn, idx) => {
        btn.classList.remove('correct', 'wrong');
        if (idx === optIdx) {
          btn.classList.add(isCorrect ? 'correct' : 'wrong');
        }
      });
    }

    if (feedbackEl) {
      feedbackEl.className = `scenario-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
      feedbackEl.innerHTML = feedbackMsg;
    }

    if (isCorrect) {
      if (window.sfx && this.soundsEnabled) window.sfx.success();
    } else {
      if (window.sfx && this.soundsEnabled) window.sfx.hover();
    }
  }

  openParentGuideFromCodex() {
    this.closeGameCodex();
    this.goToStep(7);
  }

  renderBlueGamepadSVG() {
    const container = document.getElementById('simple-gamepad-svg');
    if (!container) return;

    const dict = SILVER_TRANSLATIONS[this.currentLang] || SILVER_TRANSLATIONS.en;
    const walkLabel = dict.padWalk || 'WALK';
    const lookLabel = dict.padLook || 'LOOK';

    container.innerHTML = `
      <svg viewBox="0 0 500 320" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="valBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#0369a1" />
          </linearGradient>
        </defs>

        <path d="M 140,70 C 200,60 300,60 360,70 C 420,80 470,150 450,260 C 440,300 390,290 370,240 C 330,200 310,200 250,200 C 190,200 170,200 130,240 C 110,290 60,300 50,260 C 30,150 80,80 140,70 Z" 
              fill="url(#valBlueGrad)" stroke="#38bdf8" stroke-width="4" />

        <g id="svg-part-triggers" class="gp-part" style="cursor:pointer;" onclick="window.app.inspectButton('triggers')">
          <rect x="110" y="32" width="70" height="28" rx="8" fill="#0c4a6e" stroke="#7dd3fc" stroke-width="2"/>
          <text x="145" y="52" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="bold" font-size="12" text-anchor="middle">LT / LB</text>
          
          <rect x="320" y="32" width="70" height="28" rx="8" fill="#0c4a6e" stroke="#7dd3fc" stroke-width="2"/>
          <text x="355" y="52" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="bold" font-size="12" text-anchor="middle">RT / RB</text>
        </g>

        <g id="svg-part-lstick" class="gp-part gp-highlight" style="cursor:pointer;" onclick="window.app.inspectButton('lstick')">
          <circle cx="150" cy="130" r="32" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="150" cy="130" r="22" fill="#1e293b"/>
          <text x="150" y="135" fill="#38bdf8" font-family="'Outfit', sans-serif" font-size="11" font-weight="bold" text-anchor="middle">${walkLabel}</text>
        </g>

        <g id="svg-part-rstick" class="gp-part" style="cursor:pointer;" onclick="window.app.inspectButton('rstick')">
          <circle cx="310" cy="180" r="32" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="310" cy="180" r="22" fill="#1e293b"/>
          <text x="310" y="185" fill="#38bdf8" font-family="'Outfit', sans-serif" font-size="11" font-weight="bold" text-anchor="middle">${lookLabel}</text>
        </g>

        <g style="cursor:pointer;">
          <circle id="svg-part-action_a" class="gp-part" cx="370" cy="150" r="14" fill="#16a34a" stroke="#86efac" stroke-width="2" onclick="window.app.inspectButton('action_a')"/>
          <text x="370" y="155" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="900" font-size="13" text-anchor="middle" pointer-events="none">A</text>

          <circle id="svg-part-action_b" class="gp-part" cx="395" cy="125" r="14" fill="#dc2626" stroke="#fca5a5" stroke-width="2" onclick="window.app.inspectButton('action_b')"/>
          <text x="395" y="130" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="900" font-size="13" text-anchor="middle" pointer-events="none">B</text>
        </g>

        <g id="svg-part-menu" class="gp-part" style="cursor:pointer;" onclick="window.app.inspectButton('menu')">
          <circle cx="250" cy="130" r="12" fill="#0f172a" stroke="#bae6fd" stroke-width="2"/>
          <text x="250" y="134" fill="#ffffff" font-size="11" text-anchor="middle">⏸️</text>
        </g>
      </svg>
    `;
  }
}

// Utility helper to prevent XSS in dynamic rendering
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new SimpleSilverApp();
});
