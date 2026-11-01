/**
 * Vintage Arena - Educational Gaming Database
 * Comprehensive educational content tailored for seniors and beginners.
 */

const SILVER_DATA = {
  // Daily Inspiring Gaming Facts
  dailyFacts: [
    {
      fact: "Over 45 million adults aged 50+ in the United States play video games regularly!",
      source: "AARP Research Study"
    },
    {
      fact: "Shirley Curry, an 88-year-old grandmother known as 'Skyrim Grandma', has over 1.3 million YouTube fans who watch her explore fantasy games.",
      source: "Guinness World Records"
    },
    {
      fact: "Playing 3D puzzle and adventure games can improve spatial memory and cognitive processing in seniors by up to 30%.",
      source: "University of California, Irvine Study"
    },
    {
      fact: "The video game industry generates more revenue annually ($180+ Billion) than Hollywood box office and music industries combined!",
      source: "Newzoo Global Games Report"
    },
    {
      fact: "A Swedish senior esports team called the 'Silver Snipers' (average age 71) competes internationally in tactical video games!",
      source: "Lenovo Esports"
    }
  ],

  // Gaming Glossary with Simple Explanations & Real-World Analogies
  glossary: [
    {
      id: "npc",
      term: "NPC (Non-Player Character)",
      category: "basics",
      definition: "Any character inside the game world that is controlled by the computer, not a human player.",
      analogy: "Like a friendly shopkeeper or background actor in a movie who gives you clues or sells items.",
      example: "When you talk to the mayor in Animal Crossing, that mayor is an NPC."
    },
    {
      id: "co-op",
      term: "Co-op (Cooperative Play)",
      category: "multiplayer",
      definition: "Playing on the same team with friends or family members to achieve a common goal together, rather than fighting against each other.",
      analogy: "Like baking a cake or gardening together with your grandchild instead of playing a tennis match against them.",
      example: "You and your grandkid can build a wooden cabin together in Minecraft co-op."
    },
    {
      id: "respawn",
      term: "Respawn",
      category: "basics",
      definition: "When your character comes back to life at a safe checkpoint after making a mistake or losing all health.",
      analogy: "Like erasing a wrong crossword pencil mark and starting fresh at the beginning of the clue.",
      example: "Don't worry if you fall into the water; your character will instantly respawn nearby!"
    },
    {
      id: "dlc",
      term: "DLC (Downloadable Content)",
      category: "industry",
      definition: "Extra bonus levels, new stories, or cute outfits that you can download over the internet to expand a game you already own.",
      analogy: "Like buying an expansion chapter or companion recipe booklet for your favorite cookbook.",
      example: "Mario Kart offers bonus tracks as DLC so you can race across new countries."
    },
    {
      id: "crossplay",
      term: "Cross-Play",
      category: "multiplayer",
      definition: "The ability for people on different devices (e.g. an iPad and a PlayStation) to play together in the same game.",
      analogy: "Like being able to call an iPhone user from an Android phone or landline.",
      example: "You can play Minecraft on your tablet while your grandchild plays on their Nintendo Switch."
    },
    {
      id: "fps",
      term: "FPS (Frames Per Second / First-Person Shooter)",
      category: "hardware",
      definition: "1) Visual smoothness (e.g. 60 FPS means 60 smooth pictures per second). 2) A game genre where you see the world directly through your character's eyes.",
      analogy: "A higher frame rate is like a super smooth flipbook with hundreds of pages rather than a jittery slideshow.",
      example: "At 60 frames per second, swimming underwater in a fishing game looks buttery smooth."
    },
    {
      id: "rpg",
      term: "RPG (Role-Playing Game)",
      category: "genres",
      definition: "A game where you create or inhabit a character, make story choices, level up your skills, and embark on a grand adventure.",
      analogy: "Like an interactive choose-your-own-adventure novel where your decisions shape the ending.",
      example: "In a fantasy RPG, you might play as a wise herbalist who learns magic potions."
    },
    {
      id: "save-point",
      term: "Save Point / Checkpoint",
      category: "basics",
      definition: "A safe spot where the game automatically records your progress so you can turn off the console and continue later without losing anything.",
      analogy: "Like placing a physical bookmark in your favorite novel before turning off the bedside lamp.",
      example: "Most modern games save automatically every few minutes, so you never lose your progress."
    },
    {
      id: "cloud-gaming",
      term: "Cloud Gaming",
      category: "hardware",
      definition: "Playing games streamed over the high-speed internet directly to your TV or tablet without needing a bulky, expensive gaming computer.",
      analogy: "Like watching a movie on Netflix, but when you press a button on your remote, the character moves instantly.",
      example: "Services like Xbox Cloud Gaming let you play on a Samsung smart TV with just an internet connection."
    },
    {
      id: "hud",
      term: "HUD (Heads-Up Display)",
      category: "basics",
      definition: "The on-screen information icons, such as your health bar, compass, inventory bag, or mini-map.",
      analogy: "Like the dashboard in your automobile showing your speedometer, gas gauge, and GPS route.",
      example: "The top-left corner of the screen shows a heart icon representing how much energy you have."
    },
    {
      id: "esports",
      term: "Esports (Electronic Sports)",
      category: "industry",
      definition: "Organized, competitive video gaming where skilled teams play in tournaments with commentators and audiences, similar to tennis or golf.",
      analogy: "Like the Olympic Games or Wimbledon, but played with controllers and keyboards on digital stages.",
      example: "Millions of spectators tune in to watch world championships in games like League of Legends and Rocket League."
    },
    {
      id: "microtransactions",
      term: "Microtransactions (In-App Purchases)",
      category: "industry",
      definition: "Small purchases made within a game for virtual items, costumes, or extra lives. Usually optional.",
      analogy: "Like buying an extra scoop of sprinkles or a souvenir keychain at an amusement park.",
      example: "We recommend setting a password lock on tablets so grandchildren don't accidentally buy virtual coins."
    },
    {
      id: "mod",
      term: "Mod (Modification)",
      category: "basics",
      definition: "Custom changes created by fans and players to add new features, clothes, or graphics to a computer game.",
      analogy: "Like sewing custom embroidery onto a jacket or adding a personal custom spice blend to a recipe.",
      example: "Players made a mod for Flight Simulator that added historic vintage 1940s airplanes."
    },
    {
      id: "sandbox",
      term: "Sandbox Game",
      category: "genres",
      definition: "A game with no strict rules or ticking timer, where you have complete creative freedom to build, explore, and relax at your own pace.",
      analogy: "Like a real children's sandbox with buckets and shovels, or a table filled with endless Lego bricks.",
      example: "Minecraft and Townscaper are soothing sandbox games where you design pretty islands."
    }
  ],

  // Slang Translator Pre-sets & Dictionary
  slangDictionary: [
    {
      slang: "GG (or GG WP)",
      translation: "Good Game (Well Played)",
      explanation: "A polite, sportsmanlike handshake at the end of a match, like saying 'Great match, pleasure playing with you!'"
    },
    {
      slang: "AFK",
      translation: "Away From Keyboard",
      explanation: "Temporarily stepping away from the computer or TV (e.g. to answer the door or make a cup of tea)."
    },
    {
      slang: "Buff / Nerf",
      translation: "Strengthened / Weakened",
      explanation: "'Buff' means the game creators made something stronger and better. 'Nerf' means they made it softer or less powerful (like a Nerf foam toy)."
    },
    {
      slang: "Noob / Newbie",
      translation: "New Player / Beginner",
      explanation: "Someone who is brand new to a game. Everyone starts here! It's a badge of curiosity."
    },
    {
      slang: "Loot",
      translation: "Treasures & Rewards",
      explanation: "Valuable items, gold, tools, or gems gathered during an adventure."
    },
    {
      slang: "Camping",
      translation: "Hiding in one spot",
      explanation: "When a player stays stationary in a single corner waiting for others to walk by, instead of exploring."
    },
    {
      slang: "Glitch / Bug",
      translation: "Computer Mistake",
      explanation: "An unintended visual or technical quirk in the game software that the programmers need to fix."
    },
    {
      slang: "Easter Egg",
      translation: "Hidden Secret or Joke",
      explanation: "A secret message, funny picture, or surprise feature hidden inside a game by the programmers for curious players to find."
    },
    {
      slang: "POG / POGGERS",
      translation: "Amazing / Awesome!",
      explanation: "An expression of pure excitement and celebration when something spectacular happens."
    },
    {
      slang: "RNG (Random Number Generator)",
      translation: "Pure Luck / Chance",
      explanation: "When an outcome depends on mathematical chance, just like rolling a pair of dice or shuffling a deck of cards."
    }
  ],

  // Recommended Games for Seniors & Beginners
  games: [
    {
      id: "animal-crossing",
      title: "Animal Crossing: New Horizons",
      platforms: ["Nintendo Switch"],
      genre: "Relaxing Island Life Simulation",
      pace: "Gentle & Untimed",
      comfortRating: "5/5 (Zero Stress)",
      description: "Move to a deserted island paradise! Plant orchards, catch gentle butterflies, decorate your cottage, and make friends with cute animal neighbors. The game follows real-world clock time and seasons.",
      whySeniorsLoveIt: "No enemies, no time limits, peaceful acoustic music, and you can invite your grandchildren to visit your island virtually.",
      imageKeyword: "nature-island"
    },
    {
      id: "stardew-valley",
      title: "Stardew Valley",
      platforms: ["iPad / Tablet", "Nintendo Switch", "PC", "PlayStation", "Xbox"],
      genre: "Country Farming & Village Life",
      pace: "Relaxed",
      comfortRating: "5/5 (Heartwarming)",
      description: "Inherit your grandfather's old farm plot in a charming seaside valley. Grow heirloom vegetables, raise happy chickens, attend seasonal festivals, and revitalize the town community center.",
      whySeniorsLoveIt: "Deeply nostalgic 16-bit art style, rewarding garden management, and wonderful classical-inspired melodies.",
      imageKeyword: "farming-cottage"
    },
    {
      id: "dorfromantik",
      title: "Dorfromantik",
      platforms: ["Nintendo Switch", "PC"],
      genre: "Soothing Landscape Puzzle",
      pace: "Turn-Based / Zero Pressure",
      comfortRating: "5/5 (Meditation in a Game)",
      description: "A peaceful building strategy and puzzle game where you place hexagonal tiles to expand a scenic, ever-growing countryside of forests, rivers, windmills, and railway tracks.",
      whySeniorsLoveIt: "Feels like building a living miniature train set or completing an infinite jigsaw puzzle with tranquil bird songs.",
      imageKeyword: "landscape-puzzle"
    },
    {
      id: "switch-sports",
      title: "Nintendo Switch Sports",
      platforms: ["Nintendo Switch"],
      genre: "Gentle Motion Active Sports",
      pace: "Active & Fun",
      comfortRating: "4.5/5 (Great for Mobility)",
      description: "Hold the wireless Joy-Con controller in your hand and gently swing it like a bowling ball, tennis racket, or golf club right from your living room chair or standing up.",
      whySeniorsLoveIt: "Terrific for gentle physical activity, hand-eye coordination, and unbeatable fun when family visits for Sunday dinner.",
      imageKeyword: "motion-sports"
    },
    {
      id: "flight-simulator",
      title: "Microsoft Flight Simulator",
      platforms: ["PC", "Xbox Series X/S", "Cloud Gaming on Tablet"],
      genre: "Global Flight & Travel Exploration",
      pace: "Leisurely / Scenic",
      comfortRating: "4.5/5 (Breathtaking Views)",
      description: "Take to the skies in historic Cessna planes or modern jets. Fly over your hometown, visit the Pyramids of Giza, the Grand Canyon, or Paris with 1:1 photorealistic satellite mapping.",
      whySeniorsLoveIt: "Virtual travel at its finest. You can revisit places you traveled to in your youth with serene, realistic weather.",
      imageKeyword: "aviation-travel"
    },
    {
      id: "unpacking",
      title: "Unpacking",
      platforms: ["iPad / Mobile", "Nintendo Switch", "PC", "PlayStation", "Xbox"],
      genre: "Zen Storytelling & Organizing Puzzle",
      pace: "Zero Pressure",
      comfortRating: "5/5 (Deeply Satisfying)",
      description: "A meditative puzzle game about the familiar experience of pulling possessions out of moving boxes and finding the perfect place for them in a new room across eight life milestones.",
      whySeniorsLoveIt: "Delightfully satisfying organization with soothing tactile sound effects and a gentle story told through nostalgic objects.",
      imageKeyword: "zen-organization"
    },
    {
      id: "civilization-6",
      title: "Sid Meier's Civilization VI",
      platforms: ["PC", "iPad / Tablet", "Nintendo Switch", "PlayStation", "Xbox"],
      genre: "Grand Turn-Based History & Strategy",
      pace: "Turn-Based (Think as long as you wish)",
      comfortRating: "4/5 (Brain Exercise)",
      description: "Lead an ancient civilization (like Rome, Egypt, or Greece) from the Stone Age into the Information Age. Build wonders like the Colosseum, fund science, and foster cultural diplomacy.",
      whySeniorsLoveIt: "Like an immense game of digital chess steeped in real world history, geography, and classical symphonic music.",
      imageKeyword: "history-chess"
    },
    {
      id: "a-short-hike",
      title: "A Short Hike",
      platforms: ["Nintendo Switch", "PC", "PlayStation", "Xbox"],
      genre: "Gentle Nature Exploration",
      pace: "Calm Adventure",
      comfortRating: "5/5 (Wholesome)",
      description: "Hike, glide, and fish through the peaceful provincial park of Hawk Peak. Meet quirky animal hikers, soak in hot springs, and enjoy a breezy autumn morning stroll.",
      whySeniorsLoveIt: "Short, sweet (takes 2-3 hours), easy to master, and guaranteed to leave a warm smile on your face.",
      imageKeyword: "nature-hike"
    }
  ],

  // Interactive Controller Explanations
  controllerParts: {
    xbox: [
      {
        name: "Left Thumbstick (L-Stick)",
        code: "lstick",
        purpose: "Character Movement & Walking",
        detail: "Gently push in the direction you want your character or car to travel. Pushing a little walks slowly; pushing fully runs."
      },
      {
        name: "Right Thumbstick (R-Stick)",
        code: "rstick",
        purpose: "Camera & Looking Around",
        detail: "Acts like turning your head in real life. Push left/right to look around the scenery, up/down to look at the sky or ground."
      },
      {
        name: "D-Pad (Directional Pad)",
        code: "dpad",
        purpose: "Menu Selection & Quick Items",
        detail: "The cross-shaped button. Used to navigate menus up/down/left/right, or switch tools like choosing a watering can or fishing rod."
      },
      {
        name: "Action Buttons (A, B, X, Y)",
        code: "action",
        purpose: "Primary Actions (Jump, Talk, Confirm, Cancel)",
        detail: "The 'A' button (Green) is usually 'Yes / Talk / Jump'. The 'B' button (Red) is usually 'Cancel / Go Back'. 'X' & 'Y' are for special tools or opening your bag."
      },
      {
        name: "Triggers (LT / RT) & Bumpers (LB / RB)",
        code: "triggers",
        purpose: "Acceleration, Casting, and Actions",
        detail: "Located on the top edge where your index fingers rest naturally. Right Trigger (RT) works like a gas pedal or casting a fishing rod!"
      },
      {
        name: "Pause / Menu Button",
        code: "menu",
        purpose: "Pause Game & Options",
        detail: "Instantly freezes the game so you can take a break, adjust volume, or save your progress."
      }
    ]
  },

  // Interactive Quiz Questions
  quizQuestions: [
    {
      id: 1,
      question: "What does 'Co-op' mean in video games?",
      options: [
        "A chicken coop in a farming game",
        "Playing together on the same team towards a shared goal",
        "A high-speed racing competition",
        "A game with only computer players"
      ],
      correct: 1,
      explanation: "Co-op is short for 'Cooperative play', where friends or family work together as teammates!"
    },
    {
      id: 2,
      question: "If your grandchild sends you a message saying 'GG WP', what are they saying?",
      options: [
        "Get Going, We're Passing",
        "Good Game, Well Played",
        "Grandma's Gardening Was Perfect",
        "Great Graphics With Pixels"
      ],
      correct: 1,
      explanation: "'GG WP' stands for 'Good Game, Well Played' — the traditional friendly handshake in gaming!"
    },
    {
      id: 3,
      question: "Which of these game styles is ideal if you prefer playing at your own pace with NO time pressure?",
      options: [
        "High-speed tactical reflex shooters",
        "Turn-based puzzles and cozy simulators like Animal Crossing or Stardew Valley",
        "Fast arcade racing games",
        "Timed bomb defusal challenges"
      ],
      correct: 1,
      explanation: "Turn-based and cozy simulation games wait for you to make moves whenever you are ready!"
    },
    {
      id: 4,
      question: "What is an 'NPC'?",
      options: [
        "New Player Controller",
        "National Puzzle Championship",
        "Non-Player Character (a character controlled by the computer)",
        "Network Power Cable"
      ],
      correct: 2,
      explanation: "An NPC (Non-Player Character) is an in-game person, guide, or shopkeeper driven by the computer."
    },
    {
      id: 5,
      question: "What is the simplest way to prevent accidental in-game credit card purchases on a family tablet?",
      options: [
        "Never turn on the tablet",
        "Enable password or PIN requirement for purchases in the device settings",
        "Only play games outdoors",
        "Disconnect the home electricity"
      ],
      correct: 1,
      explanation: "Setting a required PIN/password or disabling In-App Purchases in your device settings keeps your finances 100% secure."
    }
  ]
};
