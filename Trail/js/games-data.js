/**
 * Vintage Arena - Mega Games Database & Interactive Codex
 * 36+ celebrated games across all gaming genres (AAA, Horror, Narrative, Gacha, Shooters, Cozy, Strategy, Sports, Family)
 * Designed with custom logos, rich descriptions, long-bar format, and comprehensive "How to Play" deep dives.
 */

const GAMES_LOGOS = {
  elden_ring: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Elden Ring Logo">
      <defs>
        <radialGradient id="er-gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="60%" stop-color="#eab308" />
          <stop offset="100%" stop-color="#854d0e" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
      <circle cx="50" cy="40" r="24" fill="none" stroke="url(#er-gold)" stroke-width="3" stroke-dasharray="3,2"/>
      <circle cx="36" cy="46" r="20" fill="none" stroke="url(#er-gold)" stroke-width="2.5"/>
      <circle cx="64" cy="46" r="20" fill="none" stroke="url(#er-gold)" stroke-width="2.5"/>
      <circle cx="50" cy="58" r="22" fill="none" stroke="url(#er-gold)" stroke-width="2.5"/>
      <line x1="50" y1="12" x2="50" y2="88" stroke="url(#er-gold)" stroke-width="3"/>
      <path d="M 26 72 Q 50 86 74 72" fill="none" stroke="url(#er-gold)" stroke-width="3"/>
      <text x="50" y="94" font-family="'Cinzel', serif" font-size="8.5" font-weight="900" fill="#fef08a" text-anchor="middle" letter-spacing="1">ELDEN RING</text>
    </svg>
  `,
  witcher_3: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Witcher 3 Logo">
      <defs>
        <linearGradient id="w3-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#991b1b"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#18181b" stroke="#dc2626" stroke-width="2"/>
      <!-- Wolf Head Crest -->
      <polygon points="50,18 36,36 28,26 24,48 38,64 50,82 62,64 76,48 72,26 64,36" fill="#3f3f46" stroke="#e4e4e7" stroke-width="2"/>
      <!-- Glowing Red Eyes -->
      <polygon points="40,44 46,46 42,49" fill="url(#w3-red)"/>
      <polygon points="60,44 54,46 58,49" fill="url(#w3-red)"/>
      <!-- Wolf Fangs -->
      <polygon points="44,62 47,70 50,65 53,70 56,62" fill="#f4f4f5"/>
      <text x="50" y="93" font-family="sans-serif" font-size="8" font-weight="900" fill="#f87171" text-anchor="middle" letter-spacing="1.5">WITCHER III</text>
    </svg>
  `,
  rdr2: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Red Dead Redemption 2 Logo">
      <defs>
        <linearGradient id="rdr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#450a0a"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#rdr-bg)" stroke="#fca5a5" stroke-width="2"/>
      <!-- Wild West Sun & Silhouette -->
      <circle cx="50" cy="46" r="26" fill="#fef08a" opacity="0.9"/>
      <!-- Cowboy Hat & Silhouette -->
      <path d="M 28 50 Q 50 42 72 50 Q 64 38 50 36 Q 36 38 28 50 Z" fill="#18181b"/>
      <path d="M 38 48 Q 50 44 62 48 L 60 40 Q 50 38 40 40 Z" fill="#18181b"/>
      <!-- Big Roman II -->
      <text x="50" y="74" font-family="'Impact', sans-serif" font-size="28" font-weight="900" fill="#ffffff" text-anchor="middle">II</text>
      <text x="50" y="90" font-family="'Impact', sans-serif" font-size="9" fill="#fecaca" text-anchor="middle" letter-spacing="1">RED DEAD</text>
    </svg>
  `,
  god_of_war: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="God of War Logo">
      <defs>
        <linearGradient id="gow-ice" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#1e3a8a"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <!-- Omega Symbol with Spartan Crimson Slash -->
      <path d="M 26 72 L 36 72 Q 38 60 44 54 Q 30 48 30 36 Q 30 20 50 20 Q 70 20 70 36 Q 70 48 56 54 Q 62 60 64 72 L 74 72" fill="none" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round"/>
      <path d="M 32 30 Q 54 44 68 62" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
      <!-- Leviathan Axe Glow -->
      <polygon points="50,22 46,30 50,38 54,30" fill="#38bdf8"/>
      <text x="50" y="90" font-family="sans-serif" font-size="8" font-weight="900" fill="#93c5fd" text-anchor="middle" letter-spacing="1">GOD OF WAR</text>
    </svg>
  `,
  zelda_totk: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Zelda Tears of the Kingdom Logo">
      <defs>
        <linearGradient id="zelda-teal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2dd4bf"/>
          <stop offset="100%" stop-color="#0f766e"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#042f2e" stroke="#2dd4bf" stroke-width="2"/>
      <!-- Triforce -->
      <polygon points="50,20 62,38 38,38" fill="#fbbf24"/>
      <polygon points="38,38 50,56 26,56" fill="#fbbf24"/>
      <polygon points="62,38 74,56 50,56" fill="#fbbf24"/>
      <!-- Zonai Ouroboros Ring -->
      <circle cx="50" cy="46" r="28" fill="none" stroke="url(#zelda-teal)" stroke-width="3" stroke-dasharray="8,3"/>
      <!-- Master Sword Blade -->
      <line x1="50" y1="28" x2="50" y2="76" stroke="#e0f2fe" stroke-width="3"/>
      <polygon points="50,14 47,24 53,24" fill="#38bdf8"/>
      <text x="50" y="91" font-family="'Cinzel', serif" font-size="8.5" font-weight="900" fill="#a7f3d0" text-anchor="middle" letter-spacing="1">ZELDA: TOTK</text>
    </svg>
  `,
  cyberpunk_2077: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Cyberpunk 2077 Logo">
      <rect width="100" height="100" rx="20" fill="#fcee0a" stroke="#00f0ff" stroke-width="2.5"/>
      <!-- Glitch Cut Background -->
      <polygon points="12,18 88,18 80,78 12,78" fill="#000000"/>
      <!-- Samurai Oni Mask / 2077 -->
      <text x="50" y="48" font-family="'Impact', sans-serif" font-size="16" font-weight="900" fill="#00f0ff" text-anchor="middle" letter-spacing="1">CYBERPUNK</text>
      <text x="50" y="70" font-family="'Impact', sans-serif" font-size="20" font-weight="900" fill="#ff003c" text-anchor="middle" letter-spacing="2">2077</text>
      <line x1="18" y1="52" x2="82" y2="52" stroke="#fcee0a" stroke-width="1.5"/>
      <text x="50" y="91" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#000000" text-anchor="middle" letter-spacing="1">NIGHT CITY</text>
    </svg>
  `,
  skyrim: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Skyrim Logo">
      <defs>
        <linearGradient id="skyrim-silver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Akatosh Imperial Dragon Crest -->
      <path d="M 50 16 C 48 24, 44 26, 40 32 C 44 34, 46 38, 46 44 L 32 38 L 30 52 L 44 56 C 42 64, 44 70, 50 78 C 56 70, 58 64, 56 56 L 70 52 L 68 38 L 54 44 C 54 38, 56 34, 60 32 C 56 26, 52 24, 50 16 Z" fill="url(#skyrim-silver)" stroke="#0f172a" stroke-width="1"/>
      <text x="50" y="91" font-family="'Cinzel', serif" font-size="9" font-weight="900" fill="#e2e8f0" text-anchor="middle" letter-spacing="1.5">SKYRIM</text>
    </svg>
  `,
  hogwarts_legacy: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Hogwarts Legacy Logo">
      <defs>
        <linearGradient id="hw-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#1e1b4b" stroke="#ca8a04" stroke-width="2"/>
      <!-- Shield Crest -->
      <path d="M 30 22 L 70 22 L 70 52 C 70 66, 50 78, 50 78 C 50 78, 30 66, 30 52 Z" fill="#312e81" stroke="url(#hw-gold)" stroke-width="2.5"/>
      <!-- Hogwarts 'H' & Magic Spark -->
      <text x="50" y="55" font-family="'Cinzel', serif" font-size="26" font-weight="900" fill="url(#hw-gold)" text-anchor="middle">H</text>
      <polygon points="50,14 52,19 57,21 52,23 50,28 48,23 43,21 48,19" fill="#fef08a"/>
      <text x="50" y="91" font-family="'Cinzel', serif" font-size="7.5" font-weight="900" fill="#fde047" text-anchor="middle" letter-spacing="1">HOGWARTS</text>
    </svg>
  `,
  re4_remake: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Resident Evil 4 Logo">
      <rect width="100" height="100" rx="20" fill="#1c1917" stroke="#dc2626" stroke-width="2"/>
      <!-- Biohazard Symbol -->
      <circle cx="50" cy="44" r="12" fill="none" stroke="#ef4444" stroke-width="3"/>
      <circle cx="42" cy="36" r="10" fill="none" stroke="#ef4444" stroke-width="2.5"/>
      <circle cx="58" cy="36" r="10" fill="none" stroke="#ef4444" stroke-width="2.5"/>
      <circle cx="50" cy="54" r="10" fill="none" stroke="#ef4444" stroke-width="2.5"/>
      <text x="50" y="74" font-family="'Impact', sans-serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle">RE 4</text>
      <text x="50" y="90" font-family="sans-serif" font-size="8" font-weight="900" fill="#f87171" text-anchor="middle" letter-spacing="1">BIOHAZARD</text>
    </svg>
  `,
  silent_hill_2: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Silent Hill 2 Logo">
      <defs>
        <radialGradient id="sh-fog" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#94a3b8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#sh-fog)" stroke="#64748b" stroke-width="2"/>
      <!-- Foggy Tree Line & Rusty Pyramid Symbol -->
      <polygon points="50,22 72,62 28,62" fill="none" stroke="#dc2626" stroke-width="3"/>
      <circle cx="50" cy="46" r="14" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="50" y="78" font-family="sans-serif" font-size="9" font-weight="900" fill="#f8fafc" text-anchor="middle" letter-spacing="1.5">SILENT HILL</text>
      <text x="50" y="92" font-family="sans-serif" font-size="11" font-weight="900" fill="#ef4444" text-anchor="middle">2</text>
    </svg>
  `,
  last_of_us: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="The Last of Us Logo">
      <rect width="100" height="100" rx="20" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
      <!-- Firefly Wing Symbol -->
      <circle cx="50" cy="42" r="18" fill="none" stroke="#86efac" stroke-width="2"/>
      <line x1="50" y1="18" x2="50" y2="66" stroke="#86efac" stroke-width="2.5"/>
      <line x1="28" y1="42" x2="72" y2="42" stroke="#86efac" stroke-width="2.5"/>
      <!-- Foliage / Fern Sprigs -->
      <path d="M 36 30 Q 50 38 64 30" fill="none" stroke="#4ade80" stroke-width="2"/>
      <path d="M 36 54 Q 50 46 64 54" fill="none" stroke="#4ade80" stroke-width="2"/>
      <text x="50" y="80" font-family="'Impact', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">THE LAST OF US</text>
      <text x="50" y="92" font-family="sans-serif" font-size="7.5" font-weight="800" fill="#86efac" text-anchor="middle">PART I</text>
    </svg>
  `,
  dead_space: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Dead Space Logo">
      <rect width="100" height="100" rx="20" fill="#09090b" stroke="#06b6d4" stroke-width="2"/>
      <!-- Isaac Clarke Helmet RIG Visor (Cyan Glow) -->
      <rect x="26" y="24" width="48" height="42" rx="8" fill="#27272a" stroke="#52525b" stroke-width="2"/>
      <line x1="32" y1="36" x2="68" y2="36" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>
      <line x1="32" y1="44" x2="68" y2="44" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>
      <line x1="32" y1="52" x2="68" y2="52" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>
      <text x="50" y="84" font-family="'Impact', sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">DEAD SPACE</text>
    </svg>
  `,
  detroit_become_human: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Detroit Become Human Logo">
      <defs>
        <linearGradient id="detroit-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#082f49" stroke="#38bdf8" stroke-width="2"/>
      <!-- Cybernetic Android LED Temple Ring -->
      <circle cx="50" cy="42" r="22" fill="none" stroke="#0284c7" stroke-width="4"/>
      <circle cx="50" cy="42" r="22" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="25,50"/>
      <!-- Deviant Triangle -->
      <polygon points="50,28 64,52 36,52" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <text x="50" y="78" font-family="'Helvetica Neue', sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">DETROIT</text>
      <text x="50" y="90" font-family="sans-serif" font-size="7" font-weight="800" fill="#7dd3fc" text-anchor="middle">BECOME HUMAN</text>
    </svg>
  `,
  baldurs_gate_3: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Baldur's Gate 3 Logo">
      <defs>
        <linearGradient id="bg3-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c084fc"/>
          <stop offset="100%" stop-color="#6b21a8"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#2e1065" stroke="#c084fc" stroke-width="2"/>
      <!-- Mind Flayer Crest & D20 Die -->
      <polygon points="50,18 72,32 72,58 50,72 28,58 28,32" fill="#581c87" stroke="#e9d5ff" stroke-width="2"/>
      <polygon points="50,18 72,58 28,58" fill="none" stroke="#c084fc" stroke-width="1.5"/>
      <text x="50" y="50" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#fef08a" text-anchor="middle">III</text>
      <text x="50" y="88" font-family="'Cinzel', serif" font-size="7.5" font-weight="900" fill="#e9d5ff" text-anchor="middle" letter-spacing="1">BALDUR'S GATE</text>
    </svg>
  `,
  edith_finch: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Edith Finch Logo">
      <rect width="100" height="100" rx="20" fill="#134e4a" stroke="#2dd4bf" stroke-width="2"/>
      <!-- Whimsical Finch House & Flying Bird -->
      <polygon points="50,18 64,32 36,32" fill="#2dd4bf"/>
      <rect x="40" y="32" width="20" height="22" fill="#115e59" stroke="#99f6e4" stroke-width="1.5"/>
      <polygon points="46,38 54,38 54,46 46,46" fill="#fef08a"/>
      <!-- Finch Bird in Flight -->
      <path d="M 62 26 Q 70 20 78 28 Q 70 30 66 36 Z" fill="#fde047"/>
      <text x="50" y="74" font-family="'Georgia', serif" font-size="8.5" font-weight="900" fill="#ffffff" text-anchor="middle">EDITH FINCH</text>
      <text x="50" y="88" font-family="sans-serif" font-size="6.5" fill="#a7f3d0" text-anchor="middle">WHAT REMAINS OF</text>
    </svg>
  `,
  life_is_strange: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Life is Strange Logo">
      <rect width="100" height="100" rx="20" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2"/>
      <!-- Blue Butterfly -->
      <path d="M 50 44 Q 30 18 24 36 Q 22 52 50 48 Q 78 52 76 36 Q 70 18 50 44 Z" fill="#38bdf8" stroke="#bae6fd" stroke-width="1.5"/>
      <path d="M 50 48 Q 34 54 32 66 Q 44 72 50 56 Q 56 72 68 66 Q 66 54 50 48 Z" fill="#0284c7" stroke="#bae6fd" stroke-width="1.5"/>
      <circle cx="50" cy="46" r="2" fill="#ffffff"/>
      <text x="50" y="82" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">LIFE IS STRANGE</text>
    </svg>
  `,
  genshin_impact: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Genshin Impact Logo">
      <defs>
        <linearGradient id="genshin-star" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="#67e8f9"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
      <!-- Primogem 4-point Diamond Star -->
      <polygon points="50,14 58,38 82,46 58,54 50,78 42,54 18,46 42,38" fill="url(#genshin-star)" stroke="#e0f2fe" stroke-width="1.5"/>
      <circle cx="50" cy="46" r="6" fill="#fef08a"/>
      <text x="50" y="90" font-family="'Cinzel', serif" font-size="8" font-weight="900" fill="#e0f2fe" text-anchor="middle" letter-spacing="1">GENSHIN IMPACT</text>
    </svg>
  `,
  honkai_star_rail: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Honkai Star Rail Logo">
      <rect width="100" height="100" rx="20" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
      <!-- Astral Express Train & Galactic Ring -->
      <circle cx="50" cy="44" r="26" fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="4,3"/>
      <!-- Celestial Train Engine -->
      <polygon points="50,22 68,44 50,62 32,44" fill="#4338ca" stroke="#c7d2fe" stroke-width="2"/>
      <circle cx="50" cy="44" r="7" fill="#fbbf24"/>
      <polygon points="50,16 52,22 58,24 52,26 50,32 48,26 42,24 48,22" fill="#ffffff"/>
      <text x="50" y="80" font-family="sans-serif" font-size="8.5" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">STAR RAIL</text>
      <text x="50" y="92" font-family="sans-serif" font-size="6.5" font-weight="800" fill="#a5b4fc" text-anchor="middle">HONKAI</text>
    </svg>
  `,
  zenless_zone_zero: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Zenless Zone Zero Logo">
      <rect width="100" height="100" rx="20" fill="#18181b" stroke="#eab308" stroke-width="2"/>
      <!-- Hazard ZZZ Street Style -->
      <polygon points="16,24 84,24 74,40 38,40 84,68 84,76 16,76 26,60 62,60 16,32" fill="#eab308"/>
      <circle cx="50" cy="48" r="8" fill="#18181b"/>
      <circle cx="50" cy="48" r="4" fill="#22c55e"/>
      <text x="50" y="92" font-family="'Impact', sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">ZENLESS ZONE ZERO</text>
    </svg>
  `,
  valorant: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Valorant Logo">
      <rect width="100" height="100" rx="20" fill="#0f172a" stroke="#ff4655" stroke-width="2.5"/>
      <!-- Iconic Valorant V Slash -->
      <polygon points="26,22 46,22 68,64 48,64" fill="#ff4655"/>
      <polygon points="74,22 58,54 58,40 68,22" fill="#ff4655"/>
      <text x="50" y="86" font-family="'Impact', sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">VALORANT</text>
    </svg>
  `,
  overwatch_2: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Overwatch 2 Logo">
      <defs>
        <linearGradient id="ow-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fb923c"/>
          <stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#1e293b" stroke="#f97316" stroke-width="2"/>
      <!-- Overwatch Ring Emblem -->
      <circle cx="50" cy="42" r="24" fill="none" stroke="#64748b" stroke-width="6"/>
      <path d="M 32 30 C 40 22, 60 22, 68 30" fill="none" stroke="url(#ow-orange)" stroke-width="6"/>
      <polygon points="44,34 50,44 56,34" fill="#ffffff"/>
      <polygon points="40,56 46,46 54,46 60,56" fill="#f8fafc"/>
      <text x="50" y="82" font-family="'Impact', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">OVERWATCH</text>
      <text x="80" y="82" font-family="'Impact', sans-serif" font-size="11" font-weight="900" fill="#f97316" text-anchor="middle">2</text>
    </svg>
  `,
  apex_legends: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Apex Legends Logo">
      <rect width="100" height="100" rx="20" fill="#18181b" stroke="#ef4444" stroke-width="2"/>
      <!-- Apex Arrow Crest -->
      <polygon points="50,18 78,68 62,68 50,46 38,68 22,68" fill="#ef4444"/>
      <polygon points="50,30 64,58 58,58 50,44 42,58 36,58" fill="#18181b"/>
      <text x="50" y="88" font-family="'Impact', sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">APEX LEGENDS</text>
    </svg>
  `,
  animal_crossing: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Animal Crossing Logo">
      <rect width="100" height="100" rx="20" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
      <!-- Iconic Nook Leaf -->
      <path d="M 50 18 C 30 26, 24 50, 40 68 C 58 84, 76 66, 74 44 C 72 26, 62 18, 50 18 Z" fill="#10b981" stroke="#a7f3d0" stroke-width="2"/>
      <!-- Leaf Cutout Hole -->
      <circle cx="58" cy="40" r="5" fill="#064e3b"/>
      <!-- Leaf Vein -->
      <path d="M 50 24 Q 48 48 38 64" fill="none" stroke="#064e3b" stroke-width="2"/>
      <text x="50" y="90" font-family="'Comic Sans MS', 'Chalkboard SE', cursive, sans-serif" font-size="7.5" font-weight="900" fill="#ecfdf5" text-anchor="middle">ANIMAL CROSSING</text>
    </svg>
  `,
  stardew_valley: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Stardew Valley Logo">
      <defs>
        <linearGradient id="sv-sky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#sv-sky)" stroke="#f59e0b" stroke-width="2"/>
      <!-- Stardrop / Starfruit -->
      <polygon points="50,18 56,32 70,34 60,44 63,58 50,50 37,58 40,44 30,34 44,32" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
      <!-- Green Rolling Farm Hills -->
      <circle cx="34" cy="74" r="24" fill="#22c55e"/>
      <circle cx="68" cy="74" r="26" fill="#16a34a"/>
      <text x="50" y="88" font-family="sans-serif" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">STARDEW VALLEY</text>
    </svg>
  `,
  flight_sim: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Microsoft Flight Simulator Logo">
      <rect width="100" height="100" rx="20" fill="#075985" stroke="#38bdf8" stroke-width="2"/>
      <!-- Pilot Wings & Horizon -->
      <circle cx="50" cy="44" r="24" fill="#0284c7" stroke="#e0f2fe" stroke-width="1.5"/>
      <line x1="26" y1="44" x2="74" y2="44" stroke="#fef08a" stroke-width="2"/>
      <!-- Airplane Icon -->
      <polygon points="50,26 53,38 68,44 53,46 52,56 56,59 50,58 44,59 48,56 47,46 32,44 47,38" fill="#ffffff"/>
      <text x="50" y="82" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">FLIGHT SIMULATOR</text>
      <text x="50" y="93" font-family="sans-serif" font-size="6" font-weight="800" fill="#bae6fd" text-anchor="middle">MICROSOFT</text>
    </svg>
  `,
  sims_4: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="The Sims 4 Logo">
      <defs>
        <linearGradient id="plumbob-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="100%" stop-color="#15803d"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <!-- Iconic Green Plumbob Diamond -->
      <polygon points="50,14 66,42 50,48 34,42" fill="#86efac"/>
      <polygon points="50,48 66,42 50,76 34,42" fill="url(#plumbob-glow)" stroke="#166534" stroke-width="1.5"/>
      <text x="50" y="90" font-family="sans-serif" font-size="9" font-weight="900" fill="#86efac" text-anchor="middle" letter-spacing="1">THE SIMS 4</text>
    </svg>
  `,
  dorfromantik: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Dorfromantik Logo">
      <rect width="100" height="100" rx="20" fill="#064e3b" stroke="#6ee7b7" stroke-width="2"/>
      <!-- Hexagonal Countryside Landscape Tile -->
      <polygon points="50,16 76,31 76,61 50,76 24,61 24,31" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
      <!-- Windmill & River -->
      <path d="M 26 50 Q 50 42 74 54" fill="none" stroke="#38bdf8" stroke-width="4"/>
      <polygon points="50,30 54,48 46,48" fill="#ffffff"/>
      <line x1="42" y1="36" x2="58" y2="36" stroke="#fbbf24" stroke-width="2"/>
      <text x="50" y="90" font-family="'Cinzel', serif" font-size="8" font-weight="900" fill="#d1fae5" text-anchor="middle">DORFROMANTIK</text>
    </svg>
  `,
  minecraft: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Minecraft Logo">
      <rect width="100" height="100" rx="20" fill="#14532d" stroke="#86efac" stroke-width="2"/>
      <!-- Minecraft Block Isometric -->
      <polygon points="50,20 76,34 50,48 24,34" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
      <polygon points="24,34 50,48 50,74 24,60" fill="#78350f" stroke="#451a03" stroke-width="2"/>
      <polygon points="76,34 50,48 50,74 76,60" fill="#92400e" stroke="#451a03" stroke-width="2"/>
      <!-- Diamond Pickaxe Hint -->
      <rect x="46" y="24" width="8" height="8" fill="#38bdf8"/>
      <text x="50" y="90" font-family="'Impact', sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">MINECRAFT</text>
    </svg>
  `,
  civ_6: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Civilization VI Logo">
      <defs>
        <linearGradient id="civ-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#451a03" stroke="#ca8a04" stroke-width="2"/>
      <!-- Laurel Wreath & Atlas Globe -->
      <circle cx="50" cy="42" r="22" fill="#78350f" stroke="url(#civ-gold)" stroke-width="2"/>
      <text x="50" y="50" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="url(#civ-gold)" text-anchor="middle">VI</text>
      <text x="50" y="80" font-family="'Cinzel', serif" font-size="8.5" font-weight="900" fill="#fde047" text-anchor="middle" letter-spacing="1">CIVILIZATION</text>
      <text x="50" y="92" font-family="sans-serif" font-size="6.5" font-weight="800" fill="#fef08a" text-anchor="middle">SID MEIER'S</text>
    </svg>
  `,
  portal_2: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Portal 2 Logo">
      <rect width="100" height="100" rx="20" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <!-- Blue Portal -->
      <ellipse cx="36" cy="46" rx="14" ry="24" fill="none" stroke="#0284c7" stroke-width="4"/>
      <!-- Orange Portal -->
      <ellipse cx="64" cy="46" rx="14" ry="24" fill="none" stroke="#f97316" stroke-width="4"/>
      <!-- Running Stickman -->
      <circle cx="50" cy="34" r="4" fill="#ffffff"/>
      <line x1="50" y1="38" x2="50" y2="52" stroke="#ffffff" stroke-width="2.5"/>
      <line x1="42" y1="44" x2="58" y2="40" stroke="#ffffff" stroke-width="2.5"/>
      <line x1="50" y1="52" x2="42" y2="64" stroke="#ffffff" stroke-width="2.5"/>
      <line x1="50" y1="52" x2="60" y2="62" stroke="#ffffff" stroke-width="2.5"/>
      <text x="50" y="88" font-family="'Impact', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">PORTAL 2</text>
    </svg>
  `,
  tetris_effect: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Tetris Effect Logo">
      <rect width="100" height="100" rx="20" fill="#09090b" stroke="#a855f7" stroke-width="2"/>
      <!-- Glowing Tetrominoes -->
      <rect x="36" y="22" width="12" height="12" rx="2" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
      <rect x="48" y="22" width="12" height="12" rx="2" fill="#f97316" stroke="#ffffff" stroke-width="1"/>
      <rect x="60" y="22" width="12" height="12" rx="2" fill="#eab308" stroke="#ffffff" stroke-width="1"/>
      <rect x="48" y="34" width="12" height="12" rx="2" fill="#3b82f6" stroke="#ffffff" stroke-width="1"/>
      <rect x="36" y="46" width="12" height="12" rx="2" fill="#a855f7" stroke="#ffffff" stroke-width="1"/>
      <rect x="48" y="46" width="12" height="12" rx="2" fill="#22c55e" stroke="#ffffff" stroke-width="1"/>
      <text x="50" y="76" font-family="'Impact', sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">TETRIS</text>
      <text x="50" y="90" font-family="sans-serif" font-size="7" font-weight="900" fill="#c084fc" text-anchor="middle" letter-spacing="1">EFFECT CONNECTED</text>
    </svg>
  `,
  ea_fc: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="EA FC 24 Logo">
      <rect width="100" height="100" rx="20" fill="#064e3b" stroke="#22c55e" stroke-width="2"/>
      <!-- Triangle Football Crest -->
      <polygon points="50,18 80,70 20,70" fill="#0f172a" stroke="#22c55e" stroke-width="2.5"/>
      <text x="50" y="52" font-family="'Impact', sans-serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">FC</text>
      <text x="50" y="66" font-family="'Impact', sans-serif" font-size="12" font-weight="900" fill="#22c55e" text-anchor="middle">24</text>
      <text x="50" y="88" font-family="sans-serif" font-size="8" font-weight="900" fill="#86efac" text-anchor="middle" letter-spacing="1">EA SPORTS FC</text>
    </svg>
  `,
  rocket_league: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Rocket League Logo">
      <defs>
        <linearGradient id="rl-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#1e40af"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#rl-blue)" stroke="#60a5fa" stroke-width="2"/>
      <!-- Rocket Octane Car Silhouette & Ball -->
      <circle cx="68" cy="34" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
      <!-- Car Body -->
      <path d="M 22 56 L 36 44 L 56 44 L 66 52 L 72 56 L 22 56 Z" fill="#f97316" stroke="#ffffff" stroke-width="1.5"/>
      <!-- Wheels -->
      <circle cx="32" cy="56" r="6" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="62" cy="56" r="6" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Rocket Booster Flame -->
      <polygon points="22,50 12,46 16,52 10,54 22,54" fill="#fde047"/>
      <text x="50" y="86" font-family="'Impact', sans-serif" font-size="9.5" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">ROCKET LEAGUE</text>
    </svg>
  `,
  gran_turismo: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Gran Turismo 7 Logo">
      <rect width="100" height="100" rx="20" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
      <!-- Iconic Red/Blue GT Monogram -->
      <path d="M 28 32 C 28 22, 48 22, 50 32 L 50 48 C 50 58, 30 58, 28 48 Z" fill="#ef4444"/>
      <path d="M 52 24 L 74 24 L 74 34 L 64 34 L 64 62 L 52 62 Z" fill="#3b82f6"/>
      <circle cx="38" cy="40" r="4" fill="#0f172a"/>
      <text x="50" y="80" font-family="'Impact', sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">GRAN TURISMO</text>
      <text x="50" y="93" font-family="'Impact', sans-serif" font-size="11" font-weight="900" fill="#ef4444" text-anchor="middle">7</text>
    </svg>
  `,
  mario_odyssey: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Super Mario Odyssey Logo">
      <rect width="100" height="100" rx="20" fill="#991b1b" stroke="#f87171" stroke-width="2"/>
      <!-- Mario Red Cap with Eyes (Cappy) -->
      <path d="M 24 50 Q 50 32 76 50 Q 82 56 64 58 Q 50 56 36 58 Q 18 56 24 50 Z" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
      <!-- Cappy Eyes -->
      <ellipse cx="44" cy="46" rx="3" ry="5" fill="#ffffff"/>
      <ellipse cx="56" cy="46" rx="3" ry="5" fill="#ffffff"/>
      <circle cx="44" cy="46" r="2" fill="#0284c7"/>
      <circle cx="56" cy="46" r="2" fill="#0284c7"/>
      <!-- Golden Power Moon -->
      <path d="M 68 20 C 60 20, 56 28, 58 36 C 66 36, 74 30, 74 20 Z" fill="#fde047"/>
      <text x="50" y="78" font-family="'Impact', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">MARIO</text>
      <text x="50" y="92" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#fde047" text-anchor="middle">ODYSSEY</text>
    </svg>
  `,
  fall_guys: `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="Fall Guys Logo">
      <defs>
        <linearGradient id="fg-pink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#ec4899"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#fg-pink)" stroke="#fbcfe8" stroke-width="2"/>
      <!-- Cute Jellybean Guy Faceplate -->
      <ellipse cx="50" cy="44" rx="22" ry="18" fill="#ffffff" stroke="#f472b6" stroke-width="2"/>
      <!-- Black Oval Eyes -->
      <ellipse cx="42" cy="44" rx="3" ry="5" fill="#0f172a"/>
      <ellipse cx="58" cy="44" rx="3" ry="5" fill="#0f172a"/>
      <!-- Golden Crown -->
      <polygon points="38,24 44,16 50,22 56,16 62,24" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
      <text x="50" y="80" font-family="'Impact', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">FALL GUYS</text>
      <text x="50" y="92" font-family="sans-serif" font-size="6.5" font-weight="900" fill="#fef08a" text-anchor="middle">ULTIMATE KNOCKOUT</text>
    </svg>
  `
};

// Fallback dynamic logo creator if specific SVG is not registered
function getGameLogoSvg(game) {
  if (GAMES_LOGOS[game.id]) {
    return GAMES_LOGOS[game.id];
  }
  return `
    <svg viewBox="0 0 100 100" class="game-svg-logo" aria-label="${game.title} Logo">
      <rect width="100" height="100" rx="20" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="50" cy="42" r="22" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <text x="50" y="49" font-size="24" text-anchor="middle">${game.icon || '🎮'}</text>
      <text x="50" y="84" font-family="sans-serif" font-size="8.5" font-weight="900" fill="#ffffff" text-anchor="middle">${game.title.slice(0, 12).toUpperCase()}</text>
    </svg>
  `;
}

window.GAMES_LOGOS = GAMES_LOGOS;
window.getGameLogoSvg = getGameLogoSvg;

const GAMES_CODEX_DATABASE = [
  // =========================================================================
  // 1. MAJOR AAA MASTERPIECES
  // =========================================================================
  {
    id: "elden_ring",
    title: "Elden Ring",
    genreCategory: "aaa",
    genreLabel: "AAA Open-World Action RPG",
    studio: "FromSoftware / Bandai Namco",
    year: "2022",
    icon: "👑",
    bannerGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    accentColor: "#eab308",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One"],
    difficulty: "High Challenge (Mastery & Patience)",
    difficultyLevel: "hard",
    ageRating: "ESRB Mature 17+",
    shortDesc: "A breathtaking fantasy epic across the mystical Lands Between. Ride horseback through golden autumn forests, discover secret dungeons, and uncover ancient demigods at your own pace.",
    about: "Elden Ring is a celebrated masterpiece set in a vast, ruined realm called the Lands Between. The golden order of the world has shattered, and demigod warlords have claimed shards of the Great Ring. You play as a humble 'Tarnished' exile guided by a shimmering ray of golden light (Grace), exploring castles, underground starry rivers, misty swamps, and towering golden trees on horseback.",
    howItWorks: "The game offers complete, unrestricted freedom. From the moment you step outside into the sunlit meadow of Limgrave, you can ride your spectral steed in any direction. When you discover ancient ruins or catacombs, you search for treasures, battle monsters with swords, bows, or sorcery, and level up your character's health, stamina, and magic.",
    whatToDo: "1. Explore the massive open landscape and discover hidden dungeons, caves, and friendly merchants.\n2. Defeat ancient demigod rulers to gather their Great Runes.\n3. Ascend to the foot of the giant glowing Erdtree in the capital city to repair the Elden Ring and become the new Elden Lord.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controller & Keyboard Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Movement:</strong> Left Stick (Console) or <code>W/A/S/D</code> (PC) to walk, jog, and ride your steed.</li>
          <li><strong>Camera / Looking:</strong> Right Stick (Console) or Mouse to pan the cinematic camera.</li>
          <li><strong>Attack & Sorcery:</strong> Right Bumper (<code>R1/RB</code>) for light attack, Right Trigger (<code>R2/RT</code>) for heavy swing. Left Click on PC.</li>
          <li><strong>Guard & Parry:</strong> Left Bumper (<code>L1/LB</code>) raises your shield to block incoming strikes safely.</li>
          <li><strong>Dodge Roll & Sprint:</strong> Hold 'B' or Circle to sprint; tap it to roll out of danger.</li>
          <li><strong>Horseback Mounting:</strong> Tap 'X' / Square from your quick item pouch to summon your spectral horse Torrent.</li>
        </ul>
      </div>
      <div class="htp-step-box" style="margin-top: 14px;">
        <h5>🗺️ Step-by-Step Beginner Walkthrough (First 30 Mins)</h5>
        <ol class="htp-walkthrough-list">
          <li><strong>Pick an Elder-Friendly Class:</strong> Choose the 'Vagabond' (starts with a 100% physical damage-blocking metal shield) or 'Astrologer' (shoots blue magic glintstones from safe distance).</li>
          <li><strong>Follow the Golden Rays:</strong> Touch the glowing golden Sites of Grace to rest, restore your health flasks, and save your game.</li>
          <li><strong>Get Your Horse Immediately:</strong> Rest at the 'Gatefront Ruins' campfire to meet Melina, who gives you your steed whistle.</li>
          <li><strong>Summon Ghost Companions:</strong> Ring the Spirit Calling Bell to summon friendly spectral wolves who distract difficult bosses for you!</li>
        </ol>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      action: "R1/RB (Attack) / Left Click",
      defense: "L1/LB (Block with Shield)",
      dodge: "B/Circle (Roll)",
      interact: "Y/Triangle (Talk / Loot)",
      pause: "Options/Menu (Pause & Map)"
    },
    accessibility: "While the combat is famously demanding, you can summon magical ghostly spirit companions (like wolves or spirit knights) to fight alongside you, or play cooperative multiplayer with a grandchild to help defeat tough bosses!",
    grandkidAppeal: "One of the most celebrated and awarded video games in history. Your grandkids will be amazed and thrilled if you recognize characters like Malenia, Ranni the Witch, or General Radahn!",
    proTips: [
      "If a boss or castle is too difficult, simply ride away in another direction—the open world has 100+ other friendly areas to explore first!",
      "Always raise your shield (L1) when entering dark doorways to prevent surprise attacks.",
      "Spend your gathered Runes at campfires promptly so you never worry about losing them."
    ]
  },
  {
    id: "witcher_3",
    title: "The Witcher 3: Wild Hunt",
    genreCategory: "aaa",
    genreLabel: "AAA Story-Driven Fantasy RPG",
    studio: "CD Projekt Red",
    year: "2015",
    icon: "🐺",
    bannerGradient: "linear-gradient(135deg, #334155 0%, #1e293b 100%)",
    accentColor: "#ef4444",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Nintendo Switch"],
    difficulty: "Customizable (Easy Story Mode available)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Mature 17+",
    shortDesc: "A rich, mature dark fantasy detective story following Geralt of Rivia across wartorn medieval kingdoms, tavern towns, and enchanted islands.",
    about: "You step into the boots of Geralt of Rivia, a seasoned professional monster hunter known as a 'Witcher'. In a gritty, realistic medieval world inspired by Slavic mythology, Geralt searches for his beloved adopted daughter Ciri, a young woman pursued by an otherworldly spectral army called the Wild Hunt.",
    howItWorks: "Plays like a giant interactive HBO fantasy series. You ride your horse Roach across bustling towns, tavern-filled ports, and windy mountain peaks. You track monsters using supernatural Witcher senses (detecting footprints, scents, and clues), brew herbal potions, and make profound moral choices where there is rarely a simple 'good' or 'bad' answer.",
    whatToDo: "1. Accept monster contracts from villagers on local tavern notice boards for gold coins.\n2. Investigate crime scenes and mythical curses using your heightened detective senses.\n3. Track down clues across vast continents to find Ciri and prepare for the final confrontation with the Wild Hunt.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Basics</h5>
        <ul class="htp-control-list">
          <li><strong>Movement:</strong> Left Stick to steer Geralt and whistle for his horse Roach (double tap Left Stick).</li>
          <li><strong>Witcher Senses:</strong> Hold Left Trigger (<code>L2/LT</code>) to highlight clues, monster tracks, and hidden loot in glowing red and yellow.</li>
          <li><strong>Combat:</strong> Square/X for fast sword slashes; Triangle/Y for heavy strikes. Cast magic signs with Right Trigger (<code>R2</code>).</li>
          <li><strong>Quen Shield:</strong> Select the 'Quen' sign to surround Geralt in a glowing golden energy bubble that absorbs 100% of the next enemy hit!</li>
        </ul>
      </div>
      <div class="htp-step-box" style="margin-top: 14px;">
        <h5>🗺️ Beginner Walkthrough</h5>
        <ol class="htp-walkthrough-list">
          <li><strong>Select 'Just the Story' Difficulty:</strong> Enemies have low health and deals minimal damage so you can enjoy the story like a novel.</li>
          <li><strong>Read the Monster Bestiary:</strong> The in-game glossary tells you exactly which sword oil or magic sign defeats every creature.</li>
          <li><strong>Play Gwent in Taverns:</strong> Enjoy the cozy, addictive tavern card minigame against local innkeepers.</li>
        </ol>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      action: "Square/X (Sword Attack)",
      detect: "L2/LT (Witcher Senses)",
      magic: "R2/RT (Cast Magic Sign)",
      interact: "Cross/A (Talk / Loot)",
      pause: "Options (Quest Log & Map)"
    },
    accessibility: "Features a dedicated 'Just the Story' difficulty setting where combat is very gentle, allowing anyone to enjoy the world-class novel-quality writing and beautiful acoustic music without stress.",
    grandkidAppeal: "Beloved worldwide and adapted into a hit Netflix television series. Playing or discussing the game connects directly to modern fantasy pop culture.",
    proTips: [
      "Always keep the Quen golden shield active in fights—it completely prevents damage!",
      "Loot all herbal plants along roadways to brew healing swallow potions for free.",
      "Talk to every tavern innkeeper to buy Gwent cards and hear fascinating local folklore."
    ]
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    genreCategory: "aaa",
    genreLabel: "AAA Open-World Western Adventure",
    studio: "Rockstar Games",
    year: "2018",
    icon: "🤠",
    bannerGradient: "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)",
    accentColor: "#ef4444",
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    difficulty: "Accessible (Heavy Aim-Assist Available)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Mature 17+",
    shortDesc: "The pinnacle of digital realism: live as an outlaw in 1899 America as the Wild West frontier gives way to modern civilization.",
    about: "Set in America at the dawn of the 20th century (1899), you play Arthur Morgan, a loyal senior lieutenant in Dutch van der Linde's outlaw gang. As federal marshals and industrialization close in on the frontier, the gang is forced to flee across breathtaking snowy peaks, muddy cattle towns, bayous, and thriving industrial cities.",
    howItWorks: "Arguably the most detailed living world ever crafted in software. Every animal (over 200 species) has realistic behavior; you can fish along tranquil streams, groom and feed your horse, play poker in saloons, chop firewood at camp, or hunt for deer with a bow.",
    whatToDo: "1. Provide food, medical supplies, and funds for your outlaw gang's traveling camp.\n2. Embark on cinematic story missions, train robberies, and frontier rescue operations.\n3. Choose whether Arthur behaves with honor and compassion or ruthlessness, which changes how townspeople greet you.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Interaction</h5>
        <ul class="htp-control-list">
          <li><strong>Walk & Ride:</strong> Left Stick to walk; tap 'A' / Cross in rhythm with your horse's gallop to conserve stamina.</li>
          <li><strong>Greet & Interact:</strong> Hold Left Trigger (<code>L2/LT</code>) to focus on any person, then press 'X' to politely say hello or 'Y' to defuse arguments.</li>
          <li><strong>Dead Eye (Slow Motion Aim):</strong> While aiming with <code>L2</code>, click the Right Thumbstick (<code>R3</code>) to slow down time to a crawl and paint targets calmly!</li>
          <li><strong>Auto-Aim Assist:</strong> Tapping <code>L2</code> automatically snaps your crosshair directly onto the nearest target.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      action: "R2/RT (Fire / Reel Fish)",
      aim: "L2/LT (Aim & Lock Target)",
      deadeye: "R3 (Slow-Motion Time)",
      horse: "A/Cross (Spur Horse)",
      pause: "Options (Camp & Map)"
    },
    accessibility: "Full lock-on auto-aiming means you don't need fast reflexes. The slow, cinematic pacing and breathtaking nature scenery make it feel like walking inside an authentic John Wayne western film.",
    grandkidAppeal: "Universally acclaimed as one of the greatest narrative achievements in modern art. Generations often bond over watching or exploring its realistic frontier world together.",
    proTips: [
      "Enable 'Auto-Aim: Wide' in controller settings so aiming is 100% automated.",
      "Brush and feed your horse regularly to increase its bonding level and health.",
      "Take your time to fish and camp under starry skies—it's the ultimate relaxing virtual vacation."
    ]
  },
  {
    id: "god_of_war",
    title: "God of War Ragnarök",
    genreCategory: "aaa",
    genreLabel: "AAA Cinematic Mythological Action",
    studio: "Santa Monica Studio / Sony PlayStation",
    year: "2022",
    icon: "🪓",
    bannerGradient: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
    accentColor: "#38bdf8",
    platforms: ["PlayStation 5", "PlayStation 4", "PC"],
    difficulty: "Full Difficulty Settings (Story Mode Available)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Mature 17+",
    shortDesc: "An emotional father-and-son journey across the 9 Norse realms facing gods, fate, and family reconciliation.",
    about: "Kratos, a battle-hardened Spartan warrior seeking peaceful retirement, journeys across the snowy nine realms of Norse mythology with his teenage son Atreus. Together, they must navigate ancient prophecies, overcome grief, and decide whether to wage war against Odin and Thor to protect each other.",
    howItWorks: "Seamless single-shot cinematic camera (zero loading screens or cuts). You explore mythological Norse lands, solve environmental puzzles by throwing and magically recalling a frost axe (Leviathan Axe), and engage in dynamic combat alongside your son, who shoots arrows on your command.",
    whatToDo: "1. Travel across nine mythical realms (like the elven paradise of Alfheim or the dwarven mountains of Svartalfheim).\n2. Solve environmental river and gate puzzles using your axe's freezing power.\n3. Build a trusting relationship between father and son while protecting the realm from Ragnarök.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Moves</h5>
        <ul class="htp-control-list">
          <li><strong>Throw & Recall Axe:</strong> Hold <code>L2</code> to aim and tap <code>R2</code> to throw your Leviathan Axe; tap <strong>Triangle</strong> to magically fly the axe back into your hand!</li>
          <li><strong>Son's Support:</strong> Tap <strong>Square</strong> anytime to command Atreus to shoot sonic arrows at puzzles or enemies.</li>
          <li><strong>Shield Block & Parry:</strong> Tap <code>L1</code> to raise your guardian shield.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      axeThrow: "L2 + R2 (Throw Axe)",
      axeRecall: "Triangle (Recall Axe)",
      sonCommand: "Square (Shoot Arrows)",
      block: "L1 (Shield Guard)",
      pause: "Options (Skill Trees & Map)"
    },
    accessibility: "Award-winning suite of over 60 accessibility settings, including text enlargement, automated puzzle hints, auto-pickup for items, and generous timing windows.",
    grandkidAppeal: "A PlayStation flagship masterpiece with Hollywood-caliber motion capture and an emotional parenting storyline that deeply touches older players.",
    proTips: [
      "Enable 'Puzzle Timing: Extended' in accessibility so environmental puzzles never rush you.",
      "Use your axe to freeze water wheels and gears in ancient ruins to open locked gates.",
      "Listen to Mimir, the wise talking head strapped to your belt, for hilarious stories and combat warnings."
    ]
  },
  {
    id: "zelda_totk",
    title: "The Legend of Zelda: Tears of the Kingdom",
    genreCategory: "aaa",
    genreLabel: "Creative Open-World Adventure & Physics",
    studio: "Nintendo",
    year: "2023",
    icon: "🗡️",
    bannerGradient: "linear-gradient(135deg, #065f46 0%, #022c22 100%)",
    accentColor: "#2dd4bf",
    platforms: ["Nintendo Switch"],
    difficulty: "Gentle & Creative Problem Solving",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Everyone 10+",
    shortDesc: "A magical adventure across sky islands, rolling green meadows, and deep underground caverns where you can build anything you imagine.",
    about: "You play Link, a courageous young hero who awakens in the magical kingdom of Hyrule. When ancient malevolent forces cause the land to fracture and floating islands to appear in the clouds, Link must rescue Princess Zelda and restore harmony to the kingdom.",
    howItWorks: "The ultimate digital physics playground. Link gains magical abilities like 'Ultrahand' (gluing logs, wheels, fans, and sails together to construct functioning boats, cars, or flying gliders) and 'Ascend' (swimming upwards through solid rock ceilings to reach mountain summits instantly).",
    whatToDo: "1. Explore floating sky islands, peaceful grasslands, and volcanic valleys.\n2. Complete 152 puzzle shrines that test your logic and physics ingenuity.\n3. Build customized vehicles and tools to help friendly villagers and defeat the Demon King.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Nintendo Switch Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Move & Jump:</strong> Left Stick to walk; tap 'X' to jump and open your glider parachute in mid-air.</li>
          <li><strong>Ultrahand (Building Power):</strong> Hold 'L' to select Ultrahand; press 'A' to grab objects and 'A' to glue them together like high-tech LEGO!</li>
          <li><strong>Fuse Power:</strong> Attach rocks to sticks or apples to arrows to make customized weapons.</li>
          <li><strong>Ascend:</strong> Swim upward through any cave roof or stone overhang to pop out at the top.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick",
      look: "Right Stick",
      jumpGlider: "X (Jump / Paraglider)",
      powers: "L (Ultrahand / Fuse / Ascend)",
      attack: "Y (Sword Strike)",
      shield: "ZL (Shield / Lock On)",
      pause: "+ (Inventory & Map)"
    },
    accessibility: "No blood, peaceful orchestral piano music, and unlimited creative ways to solve puzzles. If a monster is too tough, you can build a wooden catapult or rolling boulder trap to defeat it safely from afar!",
    grandkidAppeal: "One of the most family-friendly and beloved gaming franchises in history. Grandparents and grandkids routinely spend hours building hilarious inventions together.",
    proTips: [
      "Always carry a few spicy peppers or warm jackets before climbing cold snowy peaks.",
      "Attach a rocket or fan to your shield to launch yourself 100 feet into the air anytime!",
      "Cooking apples and mushrooms in pots at stables creates delicious meals that heal all your hearts."
    ]
  },
  {
    id: "cyberpunk_2077",
    title: "Cyberpunk 2077: Phantom Liberty",
    genreCategory: "aaa",
    genreLabel: "AAA Sci-Fi Cyberpunk Action RPG",
    studio: "CD Projekt Red",
    year: "2023",
    icon: "⚡",
    bannerGradient: "linear-gradient(135deg, #854d0e 0%, #18181b 100%)",
    accentColor: "#fcee0a",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    difficulty: "Customizable (Easy / Story Mode)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Mature 17+",
    shortDesc: "Venture into the neon-drenched futuristic metropolis of Night City alongside rockstar rebel Keanu Reeves.",
    about: "In the cybernetic metropolis of Night City in 2077, you play V, a mercenary fighting for survival after a biochip carrying the digitized soul of rocker-revolutionary Johnny Silverhand (played by Keanu Reeves) gets stuck in your head. Together, you unravel conspiracies and upgrade your body with cybernetic enhancements.",
    howItWorks: "First-person open-world immersion. Drive futuristic cars and motorcycles through neon skyscrapers, hack security cameras and enemy cyberware with your mind, or talk your way through gripping crime noir storylines.",
    whatToDo: "1. Upgrade your character with cyberware (like double-jump legs or optical camouflage).\n2. Explore vibrant districts from Chinatown markets to luxury corporate penthouses.\n3. Make high-stakes story choices that decide the fate of your friends and the city.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Hacking</h5>
        <ul class="htp-control-list">
          <li><strong>First-Person View:</strong> Look with Right Stick/Mouse and steer with Left Stick/WASD.</li>
          <li><strong>Quickhack Scanner:</strong> Hold <code>L1/Tab</code> to pause action and hack security turrets or distract guards from across the room.</li>
          <li><strong>Driving:</strong> Right Trigger accelerates your supercar through rain-soaked neon highways.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      shoot: "R2/RT / Left Click",
      aim: "L2/LT / Right Click",
      quickhack: "L1 / Tab (Cyber Scanner)",
      drive: "R2 (Gas) / L2 (Brake)",
      pause: "Options (Cyberware & Map)"
    },
    accessibility: "Full Story Mode difficulty, generous auto-aim, text scaling, and driving camera toggles make exploring Night City comfortable for everyone.",
    grandkidAppeal: "Features Hollywood superstar Keanu Reeves and was adapted into the award-winning anime series Cyberpunk: Edgerunners.",
    proTips: [
      "Invest in Netrunning (hacking) to disable enemies silently without firing a single bullet.",
      "Turn on your car's radio to enjoy jazz, classical, and retro synthwave while cruising the city.",
      "Visit Viktor the Ripperdoc early to get your eye implants upgraded for clear enemy scanning."
    ]
  },
  {
    id: "skyrim",
    title: "The Elder Scrolls V: Skyrim",
    genreCategory: "aaa",
    genreLabel: "AAA Nordic Fantasy Epic RPG",
    studio: "Bethesda Game Studios",
    year: "2021",
    icon: "🐉",
    bannerGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    accentColor: "#94a3b8",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    difficulty: "Novice Mode (100% Relaxing Fantasy)",
    difficultyLevel: "easy",
    ageRating: "ESRB Mature 17+",
    shortDesc: "The legendary fantasy sandbox: live a second life as a wizard, blacksmith, or Dragonborn in snowy Nordic mountains.",
    about: "You are the Dragonborn, a hero born with the soul of a dragon who can speak ancient Thu'um shouts that shake the mountains. Across the northern province of Skyrim, you explore ancient barrows, join magic colleges, buy cottages, get married, and protect the realm from ancient dragons.",
    howItWorks: "100% freeform sandbox. You improve skills naturally simply by using them—swing a sword to get stronger, brew potions to become an herbalist, or read books in libraries to master magical flames.",
    whatToDo: "1. Climb the 7,000 steps to the monastery atop the Throat of the World.\n2. Master dragon shouts like 'Unrelenting Force' (Fus Ro Dah) to blow away foes.\n3. Build and furnish your own custom lakeside manor with gardens and trophy rooms.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Magic</h5>
        <ul class="htp-control-list">
          <li><strong>Dual Hands:</strong> Left Trigger controls your Left Hand (e.g. Healing magic or Shield), Right Trigger controls your Right Hand (e.g. Steel Sword or Fireball).</li>
          <li><strong>Dragon Shouts:</strong> Tap <code>R1/RB</code> to unleash voice shouts like 'Fus Ro Dah'.</li>
          <li><strong>Favorites Menu:</strong> Press Up on D-pad to switch between bows, spells, and potions instantly.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      leftHand: "L2/LT (Shield / Spell)",
      rightHand: "R2/RT (Sword / Spell)",
      shout: "R1/RB (Dragon Voice)",
      interact: "Cross/A / E (Talk / Loot)",
      wait: "Touchpad / T (Rest / Pass Time)",
      pause: "Options (Skills & Quests)"
    },
    accessibility: "Features 'Novice' difficulty where enemies deal nearly zero damage. Beloved by 88-year-old YouTube legend 'Skyrim Grandma' (Shirley Curry).",
    grandkidAppeal: "One of the most famous fantasy games of all time with millions of funny memes and generations of fans.",
    proTips: [
      "Set difficulty to 'Novice' in gameplay settings for a peaceful, stress-free fantasy adventure.",
      "Hire a loyal follower like Lydia at Dragonsreach castle to carry your bags and fight beside you.",
      "Pick blue mountain flowers and butterfly wings to brew valuable healing potions."
    ]
  },
  {
    id: "hogwarts_legacy",
    title: "Hogwarts Legacy",
    genreCategory: "aaa",
    genreLabel: "AAA Wizarding World Action Adventure",
    studio: "Avalanche Software / Warner Bros",
    year: "2023",
    icon: "🏰",
    bannerGradient: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
    accentColor: "#ca8a04",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Nintendo Switch"],
    difficulty: "Story Mode (Gentle Magic Duels)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Teen 13+",
    shortDesc: "Attend classes at Hogwarts in the 1800s, fly on a broomstick over the Scottish Highlands, and tame magical beasts.",
    about: "Step into the iconic halls of Hogwarts Castle in the late 1800s as a gifted fifth-year student holding the key to an ancient magical secret. Sort into your favorite house (Gryffindor, Ravenclaw, Hufflepuff, or Slytherin), attend Potions and Herbology classes, fly broomsticks over Hogsmeade village, and rescue magical beasts in your personal Room of Requirement.",
    howItWorks: "Explore every nook and cranny of the fully realized 1:1 scale Hogwarts castle—from moving staircases and secret passages to the Great Hall and Forbidden Forest. Cast spells with your wand, brew glowing potions, and solve ancient Merlin riddles.",
    whatToDo: "1. Attend classes to unlock spells like Levioso (levitation), Lumos (light), and Incendio (fire).\n2. Fly your customized broomstick or Hippogriff across the Scottish countryside.\n3. Build a personal sanctuary for magical creatures like Nifflers, Mooncalfs, and Thestrals.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Wand Spellcasting Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Basic Cast:</strong> Tap Right Trigger (<code>R2</code>) to shoot red sparks from your wand.</li>
          <li><strong>Spell Wheel:</strong> Hold <code>R2</code> and press a face button (Square/Triangle/Circle/Cross) to cast assigned charms like Levioso or Accio.</li>
          <li><strong>Revelio (Scanner):</strong> Press Left on D-pad to highlight hidden field guide pages and treasure chests through castle walls!</li>
          <li><strong>Broom Flight:</strong> Hold <code>L1</code> and press Circle/B to hop onto your broom and soar into the sky.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      basicCast: "R2/RT (Wand Spark)",
      spellMenu: "R2 + Face Buttons",
      revelio: "D-Pad Left (Reveal Magic)",
      broom: "L1 + Circle (Mount Broom)",
      pause: "Options (Field Guide & Map)"
    },
    accessibility: "Dedicated 'Story Mode' includes automatic QTE puzzle completions, simplified spell minigames, and virtually harmless enemy spells.",
    grandkidAppeal: "The dream Harry Potter experience. Grandparents and grandkids love comparing which Hogwarts house they were sorted into!",
    proTips: [
      "Spam the 'Revelio' chime constantly while walking through Hogwarts to discover secret rooms and lore pages.",
      "Unlock the Room of Requirement to grow potion ingredients and craft infinite healing wiggenweld potions.",
      "Visit Tomes and Scrolls in Hogsmeade to buy furniture blueprints for your pet vivarium."
    ]
  },

  // =========================================================================
  // 2. HORROR & SURVIVAL
  // =========================================================================
  {
    id: "re4_remake",
    title: "Resident Evil 4",
    genreCategory: "horror",
    genreLabel: "Survival Horror & Action Thriller",
    studio: "Capcom",
    year: "2023",
    icon: "☣️",
    bannerGradient: "linear-gradient(135deg, #450a0a 0%, #1c1917 100%)",
    accentColor: "#ef4444",
    platforms: ["PlayStation 5", "PlayStation 4", "Xbox Series X/S", "PC", "Apple iOS / iPad"],
    difficulty: "Adjustable (Assisted Mode Available)",
    difficultyLevel: "med-to-hard",
    ageRating: "ESRB Mature 17+",
    shortDesc: "Special Agent Leon S. Kennedy investigates a terrifying isolated European village to rescue the President's kidnapped daughter.",
    about: "Six years after surviving a biological disaster, government agent Leon S. Kennedy is sent alone to a remote European village where the residents have been infected by an ancient mind-controlling parasite called 'Las Plagas'. Leon must brave dark forests, gothic castles, and cult laboratories to rescue Ashley Graham, the President's daughter.",
    howItWorks: "A masterclass in tension and resource management. You navigate eerie cobblestone paths and medieval hallways, manage your limited briefcase inventory (organizing ammo, green medical herbs, and treasures), and parry enemy pitchforks and scythes with a combat knife.",
    whatToDo: "1. Manage your ammunition carefully and craft shotgun shells and healing sprays.\n2. Solve environmental mechanical puzzles inside ancient gothic castles and clocktowers.\n3. Protect Ashley and escort her safely to rescue helicopters.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Survival Tactics</h5>
        <ul class="htp-control-list">
          <li><strong>Aim & Fire:</strong> Hold Left Trigger (<code>L2/LT</code>) to aim laser sight and Right Trigger (<code>R2/RT</code>) to fire.</li>
          <li><strong>Knife Parry:</strong> Tap <code>L1/LB</code> right as an enemy swings to deflect their weapon with sparks!</li>
          <li><strong>Melee Kick:</strong> When an enemy staggers from a headshot, run up and press Cross/A to deliver a roundhouse kick that knocks down surrounding foes.</li>
          <li><strong>Attache Case:</strong> Press Triangle/Y to open your briefcase and organize your ammo, fish, and green herbs.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      shoot: "L2 + R2 (Aim & Shoot)",
      parry: "L1 / Space (Knife Deflect)",
      melee: "Cross/A (Roundhouse Kick)",
      inventory: "Triangle / Tab (Briefcase)",
      pause: "Options (Game Menu)"
    },
    accessibility: "Includes 'Assisted Mode' that automatically snaps your gun barrel onto enemy weak spots, generous health recovery, and auto-sorting for your inventory briefcase.",
    grandkidAppeal: "A cornerstone of gaming culture and horror cinema that established modern third-person camera design.",
    proTips: [
      "Shoot enemies in the knee or head to stagger them, then save ammo by finishing them with a melee kick.",
      "Combine Green Herb + Red Herb in your briefcase to create a full health restoration potion.",
      "Listen for the friendly Merchant's torchlight—he sells larger briefcases and gun upgrades."
    ]
  },
  {
    id: "silent_hill_2",
    title: "Silent Hill 2",
    genreCategory: "horror",
    genreLabel: "Psychological Survival Horror & Mystery",
    studio: "Konami / Bloober Team",
    year: "2024",
    icon: "🌫️",
    bannerGradient: "linear-gradient(135deg, #1e293b 0%, #090d16 100%)",
    accentColor: "#94a3b8",
    platforms: ["PlayStation 5", "PC"],
    difficulty: "Separate Puzzle & Combat Difficulty Sliders",
    difficultyLevel: "med",
    ageRating: "ESRB Mature 17+",
    shortDesc: "A grief-stricken widower is drawn to a foggy lakeside town after receiving an impossible letter from his deceased wife.",
    about: "James Sunderland receives a mysterious letter written in his late wife Mary's handwriting, beckoning him to their 'special place' in the quiet resort town of Silent Hill. When he arrives, the town is shrouded in an unnatural, dense white fog and populated by surreal, nightmarish manifestations of his own inner guilt and sorrow.",
    howItWorks: "Focuses deeply on psychological atmosphere, haunting melancholy music by Akira Yamaoka, and intricate riddle-solving rather than fast gunplay. You carry a pocket radio that emits eerie static whenever otherworldly creatures draw near through the fog.",
    whatToDo: "1. Navigate misty deserted streets, abandoned apartment complexes, and decrepit hospitals using a handheld street map.\n2. Decipher cryptic poem riddles, clock puzzles, and locked door mechanisms.\n3. Uncover the truth behind James's tragic past and Mary's illness.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Navigation</h5>
        <ul class="htp-control-list">
          <li><strong>Flashlight:</strong> Click Right Stick to toggle your chest pocket flashlight on/off (turning it off helps sneak past monsters in dark rooms).</li>
          <li><strong>Radio Static:</strong> Listen to the radio's audio crackle—the faster it crackles, the closer a hidden creature is.</li>
          <li><strong>Handheld Map:</strong> Press Touchpad/M to check your map; James automatically marks locked doors, keys, and puzzle hints with red pencil.</li>
          <li><strong>Combat & Dodge:</strong> Tap Circle/B to dodge enemy lunges, then strike with a wooden plank or steel pipe.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      strike: "R2/RT / Left Click",
      dodge: "Circle / Space",
      map: "Touchpad / M (Street Map)",
      flashlight: "R3 / F (Toggle Light)",
      pause: "Options (Game Menu)"
    },
    accessibility: "Outstanding feature: You can independently adjust the combat difficulty (set to 'Light') and the puzzle difficulty (from simple to complex riddles) to match your personal comfort level.",
    grandkidAppeal: "Renowned as one of the greatest psychological stories in interactive entertainment history, often studied in university literature and game design courses.",
    proTips: [
      "Set Puzzle Difficulty to 'Easy' if you prefer direct clues rather than abstract poetry riddles.",
      "Check James's handwritten map frequently—he notes down every important locked door automatically.",
      "Conserve handgun bullets by finishing downed creatures with your wooden plank."
    ]
  },
  {
    id: "last_of_us",
    title: "The Last of Us Part I",
    genreCategory: "horror",
    genreLabel: "Cinematic Post-Apocalyptic Drama & Stealth",
    studio: "Naughty Dog / Sony PlayStation",
    year: "2022",
    icon: "🌿",
    bannerGradient: "linear-gradient(135deg, #14532d 0%, #052e16 100%)",
    accentColor: "#22c55e",
    platforms: ["PlayStation 5", "PC"],
    difficulty: "Fully Customizable (Very Light to Grounded)",
    difficultyLevel: "easy-to-hard",
    ageRating: "ESRB Mature 17+",
    shortDesc: "A hardened survivor escorts a 14-year-old immune girl across a reclaimed, overgrown American wasteland.",
    about: "Twenty years after a mutant fungal outbreak decimated civilization and turned infected humans into blind, clicking predators ('Clickers'), nature has reclaimed the cities with lush ivy and roaming wildlife. Joel, a world-weary smuggler grieving the loss of his daughter, is hired to escort Ellie, a spirited 14-year-old orphan who holds the biological key to a cure.",
    howItWorks: "Masterful blend of heartfelt dialogue, stealth, and realistic scavenging. You search overgrown buildings for scissors, alcohol, and rags to craft medkits, smoke bombs, and shivs, using stealth to bypass both infected monsters and hostile human scavengers.",
    whatToDo: "1. Guide Ellie across flooded subways, autumn forests, and snowy university campuses.\n2. Scavenge gears and tools to customize your hunting rifle, shotgun, and bow at wooden workbenches.\n3. Make moral decisions to keep Ellie safe as their bond evolves from strangers to father and daughter.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Stealth</h5>
        <ul class="htp-control-list">
          <li><strong>Crouch Stealth:</strong> Tap Circle/C to crouch quietly behind tables and counters.</li>
          <li><strong>Listen Mode:</strong> Hold <code>R1</code> to listen closely—Joel visualizes the white silhouettes of all nearby enemies through solid walls!</li>
          <li><strong>Crafting On the Fly:</strong> Press Touchpad/Tab to open your backpack and combine rags + alcohol to make medkits anytime.</li>
          <li><strong>Brick & Bottle Distraction:</strong> Throw glass bottles with <code>R2</code> to make enemies walk away from your path.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      listenMode: "R1 / Ctrl (See Through Walls)",
      crouch: "Circle / C",
      shoot: "L2 + R2 (Aim & Fire)",
      crafting: "Touchpad / Tab (Backpack)",
      pause: "Options (Game Menu)"
    },
    accessibility: "Industry gold standard for accessibility with over 70 features: full screen narration, high-contrast visual modes, navigation assistance that draws an arrow to your next objective, and infinite breath underwater.",
    grandkidAppeal: "The inspiration behind HBO's record-breaking Emmy-winning television drama. One of the most emotionally profound stories ever told.",
    proTips: [
      "Blind 'Clickers' hunt by sound—move your thumbstick very gently to sneak right behind them without being heard.",
      "Always carry at least one crafted Shiv in your pocket to unlock secret supply doors.",
      "Enable 'Navigation Assistance' in accessibility settings to press L3 anytime to see an arrow pointing to the next door."
    ]
  },
  {
    id: "dead_space",
    title: "Dead Space",
    genreCategory: "horror",
    genreLabel: "Sci-Fi Deep Space Survival Horror",
    studio: "Motive Studio / EA",
    year: "2023",
    icon: "🚀",
    bannerGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    accentColor: "#22d3ee",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    difficulty: "Story Mode (Immortal Health Available)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Mature 17+",
    shortDesc: "Ship engineer Isaac Clarke fights to repair the derelict USG Ishimura mining ship overrun by mutated alien Necromorphs.",
    about: "Engineer Isaac Clarke is sent to repair the communications array on the colossal planet-cracker mining ship USG Ishimura. Upon docking, he discovers the crew was slaughtered and infected by an alien artifact ('The Marker'). Armed only with engineering tools like the Plasma Cutter, Isaac must survive zero-gravity sectors and find his lost girlfriend Nicole.",
    howItWorks: "Unique 'Strategic Dismemberment' combat where headshots do not work—you must slice off alien limbs using energy cutting tools. Isaac's health bar is integrated seamlessly into the glowing blue spine of his engineering suit with zero screen clutter.",
    whatToDo: "1. Use Stasis energy to freeze fast-moving hydraulic doors and alien creatures in slow motion.\n2. Use Kinesis telekinesis to grab explosive canisters and throw them with your mind.\n3. Float through zero-gravity ship hulls using suit thrusters.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Engineering Tools</h5>
        <ul class="htp-control-list">
          <li><strong>Plasma Cutter:</strong> Aim with <code>L2</code> and press <code>R1</code> to rotate the cutting laser between Horizontal (for legs) and Vertical (for arms).</li>
          <li><strong>Stasis Freeze:</strong> Aim with <code>L2</code> and press Triangle/Y to freeze a creature in slow motion for 10 seconds.</li>
          <li><strong>Locator Breadcrumb:</strong> Click the Right Stick (<code>R3</code>) anytime to draw a bright glowing blue line on the floor showing the exact path to your next objective!</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      cut: "L2 + R2 (Aim & Fire Laser)",
      rotateBlade: "R1 (Horizontal / Vertical)",
      stasis: "L2 + Triangle (Freeze Target)",
      locator: "R3 / X (Draw Floor Line)",
      pause: "Options (Suit Inventory)"
    },
    accessibility: "Features 'Story Mode' where Isaac takes virtually no damage and weapons reload automatically. The locator line makes getting lost completely impossible.",
    grandkidAppeal: "A landmark sci-fi horror masterpiece praised for incredible futuristic engineering sound design and lighting.",
    proTips: [
      "Click R3 whenever you feel lost—the glowing blue laser on the floor guides you directly to your goal.",
      "Target the knees and elbows of Necromorphs with the Plasma Cutter to dismember them quickly.",
      "Use Kinesis (L2 + Circle) to impale monsters with their own severed claws to save ammunition!"
    ]
  },

  // =========================================================================
  // 3. STORY-RICH & INTERACTIVE NARRATIVE CINEMA
  // =========================================================================
  {
    id: "detroit_become_human",
    title: "Detroit: Become Human",
    genreCategory: "story",
    genreLabel: "Interactive Branching Sci-Fi Cinema",
    studio: "Quantic Dream",
    year: "2018",
    icon: "🤖",
    bannerGradient: "linear-gradient(135deg, #0284c7 0%, #082f49 100%)",
    accentColor: "#38bdf8",
    platforms: ["PlayStation 4", "PlayStation 5", "PC"],
    difficulty: "Casual / Storyteller Mode (Zero Fast Reflexes)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Mature 17+",
    shortDesc: "Shape the future of humanity in 2038 Detroit across 3 android perspectives where every dialogue choice changes the plot.",
    about: "In the near future (2038), human-like androids handle all domestic chores, elder care, and industrial labor. When several androids suddenly begin experiencing real human emotions, empathy, and fear ('Deviants'), the world stands on the brink of revolution. You control three distinct characters: Connor (a police detective android), Kara (a nanny android protecting an abused girl), and Markus (an artist's assistant who leads a peaceful civil rights march).",
    howItWorks: "Plays like an ultra-high-definition interactive movie. There are no complicated combat mechanics or platforms to jump across; instead, you investigate crime scenes, make high-stakes dialogue choices under time limits, and choose whether to respond with violence or peaceful protest.",
    whatToDo: "1. Inspect clues, reconstruct crime events in virtual memory, and negotiate hostage situations.\n2. Choose dialogue responses that build trust, friendships, or rivalries.\n3. Explore massive branching flowchart trees at the end of each chapter showing all the alternate paths you could have unlocked.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Beginner-Friendly Story Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Walking:</strong> Push Left Stick to walk around living rooms, parks, and police stations.</li>
          <li><strong>Dialogue Choices:</strong> When talking to characters, tap the face button matching your desired reply (e.g. 'Reasonable', 'Sympathetic', 'Direct').</li>
          <li><strong>Mind Palace / Clue Scan:</strong> Hold <code>R2</code> to pause the world and highlight all interactive objects in bright yellow.</li>
          <li><strong>Action Prompts:</strong> Simply follow the gentle on-screen icons (like tilting the stick forward to open a window).</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      dialogue: "Face Buttons (Choose Answer)",
      scan: "R2 / Right Click (Mind Palace)",
      interact: "Right Stick Prompts",
      pause: "Options (Branching Flowchart)"
    },
    accessibility: "Casual Mode simplifies all button prompts to single-key presses with generous timers. You can pause anytime to deliberate on story decisions.",
    grandkidAppeal: "Fantastic for family movie nights! Groups often gather around the television to vote and debate on which moral choices the characters should make.",
    proTips: [
      "Select 'Casual Mode' so you never fail time-sensitive action prompts.",
      "Check the Flowchart at the end of each chapter to see how your decisions influenced the story.",
      "Building a friendly, trusting relationship with detective Hank as Connor leads to one of the most heartwarming friendships in gaming."
    ]
  },
  {
    id: "baldurs_gate_3",
    title: "Baldur's Gate 3",
    genreCategory: "story",
    genreLabel: "Grand Fantasy Dungeons & Dragons RPG",
    studio: "Larian Studios",
    year: "2023",
    icon: "🎲",
    bannerGradient: "linear-gradient(135deg, #581c87 0%, #2e1065 100%)",
    accentColor: "#c084fc",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Apple Mac"],
    difficulty: "Explorer Mode (Tactical & Story Focus)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Mature 17+",
    shortDesc: "The Game of the Year: an epic D&D adventure with unmatched freedom, colorful companions, and turn-based tactical battles.",
    about: "Captured aboard an alien flying nautiloid ship, a sinister mind-flayer tadpole is implanted behind your eye. As you fight to cure yourself before transforming into a monster, you discover this parasite also grants you strange psychic powers. Together with a ragtag band of eccentric, charming companions, you embark on a grand quest toward the legendary coastal city of Baldur's Gate.",
    howItWorks: "100% turn-based. In combat, the game pauses completely—you take as many minutes as you need to decide whether to cast a fire spell, push a goblin off a cliff, or heal a wounded ally. Outside combat, you can talk your way out of fights, pet dogs, play instruments, or transform into a cat to crawl through small pipes.",
    whatToDo: "1. Create your own custom hero (elf, dwarf, human wizard, paladin, or bard).\n2. Roll a 20-sided die (D20) on screen to persuade kings, deceive guards, or disarm ancient booby traps.\n3. Make choices that radically alter the fate of entire cities and your companions' lives.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Turn-Based Chess-Like Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Zero Reflexes Needed:</strong> Combat pauses automatically. Take all the time in the world on your turn.</li>
          <li><strong>Moving Units:</strong> Point and click on the ground to walk your hero or companion into position.</li>
          <li><strong>Action Wheels:</strong> Tap <code>R1</code> to open your spell and ability radial wheel (cast Fireball, Heal, or Throw a health potion).</li>
          <li><strong>Rolling the D20 Die:</strong> When a conversation requires convincing someone, tap 'Roll Die' to roll the animated 20-sided die on screen!</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Click Ground / Left Stick",
      actionWheel: "R1/RB (Spells & Attacks)",
      endTurn: "Hold Triangle / Y (Pass Turn)",
      camera: "Right Stick (Pan & Zoom)",
      examine: "D-Pad Down / T (Inspect Foe)",
      pause: "Options (Party Camp & Map)"
    },
    accessibility: "Turn-based structure means zero manual dexterity or fast reflexes are required. Explorer difficulty gives your party massive health bonuses and makes persuasion rolls much easier.",
    grandkidAppeal: "The single biggest breakout gaming phenomenon of the decade. Features 4-player co-op so family members can play through the entire 100-hour fantasy campaign together!",
    proTips: [
      "Set difficulty to 'Explorer' so combat is relaxed and your characters have double health.",
      "You can throw healing potions onto downed allies from across the room to revive them instantly!",
      "Take Long Rests at camp frequently to see heartwarming bedtime stories and banter with your companions."
    ]
  },
  {
    id: "edith_finch",
    title: "What Remains of Edith Finch",
    genreCategory: "story",
    genreLabel: "Heartfelt Narrative Walking Simulator",
    studio: "Giant Sparrow / Annapurna Interactive",
    year: "2017",
    icon: "📖",
    bannerGradient: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
    accentColor: "#2dd4bf",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox", "Nintendo Switch", "iOS"],
    difficulty: "Zero Combat (100% Story Walkthrough)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Teen 13+",
    shortDesc: "A poetic, moving 2-hour exploration of an eccentric family mansion discovering short stories of past generations.",
    about: "Edith Finch returns to her colossal, rambling ancestral family home on the Washington coast. As the last living member of her family, she explores locked bedrooms left untouched for decades, reading diaries and poems that bring the imaginative final moments of each relative's life to magical reality.",
    howItWorks: "A pure narrative walking experience. Each family member's bedroom contains a diary that transports you into a unique 5-minute interactive story: flying through the sky as a kite, slicing fish in a cannery while daydreaming a royal coronation, or swinging on a tree swing over the ocean.",
    whatToDo: "1. Walk through the cozy, book-lined corridors of the whimsical Finch house.\n2. Open secret passages, keyholes, and journal diaries.\n3. Uncover the bittersweet truth about the family's supposed generational curse.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Pure Walking & Exploring Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Walk & Look:</strong> Left Stick walks forward at a gentle pace; Right Stick looks around the beautiful book-filled rooms.</li>
          <li><strong>Interact:</strong> Pull Right Trigger (<code>R2</code>) or tap 'E' to open diary books, turn door handles, and open music boxes.</li>
          <li><strong>No Enemies:</strong> There are zero monsters, no timers, and no ways to fail.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      interact: "R2 / Left Click (Open / Touch)",
      pause: "Options (Chapter Menu)"
    },
    accessibility: "100% gentle and peaceful. Can be completed comfortably in a single afternoon (approximately 2 hours).",
    grandkidAppeal: "Won the British Academy (BAFTA) Best Game Award. Ideal introductory title for anyone who loves literature, poetry, and thoughtful family memoirs.",
    proTips: [
      "Sit back with a warm cup of tea and enjoy it in one or two relaxing afternoon sessions.",
      "Look closely at the books on the shelves and photographs on the walls for touching family details.",
      "Follow the floating poetic words that appear in the air as Edith narrates her thoughts."
    ]
  },
  {
    id: "life_is_strange",
    title: "Life is Strange",
    genreCategory: "story",
    genreLabel: "Emotional Time-Rewind Mystery Drama",
    studio: "Don't Nod / Square Enix",
    year: "2015",
    icon: "🦋",
    bannerGradient: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)",
    accentColor: "#38bdf8",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "iOS / Android"],
    difficulty: "Zero Combat (Time Rewind Mechanics)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Mature 17+",
    shortDesc: "Photography student Max Caulfield discovers she can rewind time to change past conversations and solve a coastal mystery.",
    about: "Max Caulfield, an 18-year-old photography student at Blackwell Academy in the scenic coastal town of Arcadia Bay, Oregon, suddenly discovers she has the supernatural power to rewind time by holding out her hand. Reunited with her rebellious childhood best friend Chloe Price, they investigate the disappearance of a fellow student while facing a looming supernatural storm.",
    howItWorks: "Whenever you make a dialogue mistake or see an accident happen, you hold a button to rewind time backward like a VCR tape and choose a different response using your new foreknowledge!",
    whatToDo: "1. Rewind conversations to learn secrets and change character relationships.\n2. Take optional vintage Polaroid photos of squirrels, statues, and scenery for your journal.\n3. Solve the mystery behind Rachel Amber's disappearance.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Time Rewind Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Rewind Time:</strong> Hold Left Trigger (<code>L2/LT</code>) to rewind time backward smoothly.</li>
          <li><strong>Quick Rewind:</strong> Tap <code>L1</code> to jump back to the start of a conversation.</li>
          <li><strong>Polaroid Camera:</strong> Walk up to interesting scenery and tap 'A' to snap an artistic photo.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      rewind: "L2/LT / Right Click (Rewind)",
      dialogue: "Face Buttons (Select Line)",
      journal: "Touchpad / Tab (Photo Diary)",
      pause: "Options (Game Menu)"
    },
    accessibility: "Because you can rewind time whenever you make a mistake, there is zero anxiety or penalty for picking the 'wrong' choice.",
    grandkidAppeal: "Beloved for its acoustic indie-folk soundtrack, photography themes, and deep emotional teenage friendship.",
    proTips: [
      "If someone reacts poorly to what you say, simply hold L2 to rewind and pick the better answer with zero consequences!",
      "Sit on park benches, guitar beds, and docks to listen to peaceful acoustic music moments.",
      "Check Max's SMS text messages and diary for funny high school gossip."
    ]
  },

  // =========================================================================
  // 4. GACHA & ANIME RPGs
  // =========================================================================
  {
    id: "genshin_impact",
    title: "Genshin Impact",
    genreCategory: "gacha",
    genreLabel: "Free-to-Play Anime Open-World RPG",
    studio: "HoYoverse",
    year: "2020",
    icon: "✨",
    bannerGradient: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
    accentColor: "#38bdf8",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "iOS / iPad", "Android"],
    difficulty: "Gentle to Moderate (Casual Friendly)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Teen 13+",
    shortDesc: "A colorful, free-to-play fantasy wonderland with 7 elemental magic kingdoms, lovable anime characters, and relaxing exploration.",
    about: "You play as the 'Traveler', a cosmic twin separated from your sibling by an unknown deity. You awaken on the shores of Teyvat, a breathtaking continent ruled by seven elemental Archons (gods of Wind, Earth, Lightning, Nature, Water, Fire, and Ice). Accompanied by your tiny flying fairy companion Paimon, you journey across magical nations inspired by Germany, China, Japan, France, and Sumer.",
    howItWorks: "100% free to download and play. You explore rolling green hills and snowy peaks, glide through the air with wings, cook delicious regional dishes, and combine elemental magic (e.g. wet water enemies + lightning electricity = electro-charged explosion).",
    whatToDo: "1. Explore vast open kingdoms, climb cliffs, open treasure chests, and gather sweet flowers.\n2. Collect and build a party of 4 unique anime heroes (swordsmen, archers, and mages).\n3. Participate in seasonal festivals like lantern rite fireworks or windblume music concerts.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Controls & Elemental Magic</h5>
        <ul class="htp-control-list">
          <li><strong>Party Swapping:</strong> Tap the D-Pad arrows (1, 2, 3, 4 on PC) to swap instantly between your 4 party characters in real time!</li>
          <li><strong>Gliding in Air:</strong> Tap 'X' / Spacebar while jumping off a cliff to unfurl beautiful glider wings and soar across valleys.</li>
          <li><strong>Elemental Skill & Burst:</strong> Right Trigger (<code>R2</code>) casts your elemental skill; Triangle/Y unleashes your cinematic ultimate burst!</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      swapHero: "D-Pad (1, 2, 3, 4)",
      glideJump: "X / Spacebar (Wings)",
      elementalSkill: "R2 / E (Magic)",
      ultimate: "Triangle / Q (Burst)",
      pause: "Options / ESC (Paimon Menu)"
    },
    accessibility: "The main story is very relaxing and forgiving. You can pause anytime in single-player mode, and all voice dialogue is fully voiced with subtitles.",
    grandkidAppeal: "One of the most massive global pop culture phenomena among teenagers and young adults worldwide. Playing together in co-op is completely free!",
    proTips: [
      "Combine elements for huge bonus effects: Pyro (Fire) + Hydro (Water) creates 'Vaporize' for double damage!",
      "Collect floating blue Anemoculi orbs to permanently expand your stamina meter at statues.",
      "You do not need to spend any real money—the free starter heroes can comfortably complete the entire story!"
    ]
  },
  {
    id: "honkai_star_rail",
    title: "Honkai: Star Rail",
    genreCategory: "gacha",
    genreLabel: "Turn-Based Sci-Fi Space Fantasy RPG",
    studio: "HoYoverse",
    year: "2023",
    icon: "🚂",
    bannerGradient: "linear-gradient(135deg, #4338ca 0%, #1e1b4b 100%)",
    accentColor: "#818cf8",
    platforms: ["PC", "PlayStation 5", "iOS / iPad", "Android"],
    difficulty: "Turn-Based Strategy (Zero Fast Reflexes)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Teen 13+",
    shortDesc: "Board the Astral Express, a celestial space train traveling between unique alien planets to solve cosmic mysteries.",
    about: "You awaken aboard a space station implanted with a destructive cosmic seed called a 'Stellaron'. Rescued by the cheerful crew of the Astral Express (an interstellar space train), you voyage across the galaxy from frozen Victorian steampunk cities to futuristic Chinese silkpunk space flagships.",
    howItWorks: "Classic turn-based party RPG. When you encounter alien monsters or robots, combat pauses on a battlefield. You command 4 characters, balancing basic attacks, tactical skill points, and cinematic ultimate animations.",
    whatToDo: "1. Board the space train and visit diverse alien planets.\n2. Talk with quirky companions and solve planetary political crises.\n3. Strategically build turn-based teams using ice, fire, quantum, and imaginary elements.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Turn-Based Space Battles</h5>
        <ul class="htp-control-list">
          <li><strong>Zero Reflexes:</strong> The battlefield pauses on every character's turn.</li>
          <li><strong>Basic Attack vs Skill:</strong> Tap Cross/A for a basic attack (generates a skill point) or Triangle/Y for a special tactical skill (uses a skill point).</li>
          <li><strong>Instant Ultimate:</strong> When an ultimate meter fills, press <code>L2/R2</code> to interrupt the turn order and unleash a devastating cinematic attack immediately!</li>
          <li><strong>Auto-Battle Mode:</strong> Press the 'Auto' toggle button on routine fights to let your team battle automatically while you sip tea!</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      attack: "Cross/A / Left Click",
      skill: "Triangle/Y / E",
      ultimate: "L2/R2 / 1,2,3,4 (Instant Burst)",
      autoBattle: "Touchpad / V (Auto Toggle)",
      speedUp: "R1 / B (2X Speed)",
      pause: "Options / ESC (Phone Menu)"
    },
    accessibility: "Includes an optional 'Auto-Battle' and speed-up toggle so routine battles can play themselves while you relax and enjoy the story!",
    grandkidAppeal: "Won Mobile Game of the Year worldwide. Features a witty, humorous story with lots of pop culture jokes that kids and teens love.",
    proTips: [
      "Always match your attackers' element to the white weakness symbols above enemy heads to break their shields.",
      "Keep March 7th or Natasha in your party to provide protective ice shields and healing to low-health allies.",
      "Enjoy the humor: inspect trash cans and mailboxes in Belobog city for hilarious easter egg dialogues!"
    ]
  },
  {
    id: "zenless_zone_zero",
    title: "Zenless Zone Zero",
    genreCategory: "gacha",
    genreLabel: "Urban Anime Action & Retro Cyber Style",
    studio: "HoYoverse",
    year: "2024",
    icon: "📼",
    bannerGradient: "linear-gradient(135deg, #18181b 0%, #27272a 100%)",
    accentColor: "#eab308",
    platforms: ["PC", "PlayStation 5", "iOS / iPad", "Android"],
    difficulty: "Casual Mode (Assisted Parries)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Teen 13+",
    shortDesc: "Run a retro VHS video rental shop in the futuristic metropolis of New Eridu while guiding agents through supernatural Hollows.",
    about: "In the post-apocalyptic metropolis of New Eridu, mysterious supernatural rifts called 'Hollows' threaten civilization. You play as siblings Wise and Belle, who run a cozy retro VHS rental store as a front while operating as legendary digital guides ('Proxies') named Phaethon.",
    howItWorks: "Fast, stylish, rhythmic beat-'em-up combat combined with comic-book dialogue scenes and nostalgic 90s cassette-futurism aesthetics.",
    whatToDo: "1. Rent VHS tapes and manage your cozy Sixth Street storefront.\n2. Assemble a squad of 3 stylish agents with swords, heavy hammers, and dual pistols.\n3. Execute flash parries when golden sparks flash on screen.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Flash Assist & Combo System</h5>
        <ul class="htp-control-list">
          <li><strong>Basic Attacks:</strong> Mash Square/X to perform smooth martial arts combos.</li>
          <li><strong>Golden Flash Assist:</strong> When you see a golden flash on an enemy attack, tap <code>R1/Space</code> to swap in your next teammate who parries the blow automatically!</li>
          <li><strong>Chain Attacks:</strong> Stagger tough foes to trigger slow-motion team tag-team attacks.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      attack: "Square/X / Left Click",
      parryAssist: "R1 / Spacebar (Tag Parry)",
      dodge: "Circle / Right Click",
      ultimate: "Triangle / Q",
      pause: "Options / ESC"
    },
    accessibility: "Features a dedicated 'Casual Mode' with automatic timing assistance for defensive parries.",
    grandkidAppeal: "High-energy anime aesthetic, cute robotic mascot pets called Bangboos, and trendy retro fashion.",
    proTips: [
      "Select 'Casual Mode' in combat settings to make team assist parries virtually automatic.",
      "Visit the ramen shop on Sixth Street before missions to get delicious stat-boosting noodle bowls.",
      "Pet the friendly neighborhood dog 'Officer Mewmew' to earn free upgrade currency!"
    ]
  },

  // =========================================================================
  // 5. ACTION & TACTICAL SHOOTERS
  // =========================================================================
  {
    id: "valorant",
    title: "Valorant",
    genreCategory: "shooter",
    genreLabel: "Tactical 5v5 Hero Shooter & Precision",
    studio: "Riot Games",
    year: "2020",
    icon: "🎯",
    bannerGradient: "linear-gradient(135deg, #e11d48 0%, #881337 100%)",
    accentColor: "#ff4655",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    difficulty: "High Reflexes & Precision Aim",
    difficultyLevel: "hard",
    ageRating: "ESRB Teen 13+",
    shortDesc: "The premier competitive tactical shooter where hyper-precise shooting meets unique supernatural Agent abilities.",
    about: "In a near-future Earth, an event known as 'First Light' gives certain individuals superhuman abilities (called 'Radiants'). Players divide into two teams of 5: Attackers (trying to plant a tech device called the Spike) and Defenders (trying to defuse it or eliminate the attacking squad).",
    howItWorks: "High-stakes round-based combat. If your character is hit, you cannot respawn until the next 2-minute round. Players buy firearms (pistols, rifles, snipers) at the start of each round using credits earned from previous rounds and combine gunplay with smoke walls, flashbangs, and healing spells.",
    whatToDo: "1. Communicate coordinates and enemy sightings with your 4 teammates.\n2. Position crosshairs at head height and stand still before firing for pinpoint accuracy.\n3. Deploy Agent abilities (like placing a healing orb or scouting with a robotic drone arrow).",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Precision Tactical Shooting</h5>
        <ul class="htp-control-list">
          <li><strong>Stand Still to Shoot:</strong> In Valorant, moving while shooting causes bullets to spray wildly. You must stop moving before clicking to shoot accurately.</li>
          <li><strong>Crosshair Placement:</strong> Keep your aim reticle at head height near doorway corners.</li>
          <li><strong>Agent Sage (Beginner Recommended):</strong> Play Sage so you can heal wounded teammates and place ice walls to block off hallways safely.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "WASD / Left Stick",
      aim: "Mouse / Right Stick",
      fire: "Left Click / R2",
      abilities: "C, Q, E, X / L1, R1, L2, Triangle",
      plantSpike: "Hold 4 / Square",
      buyMenu: "B / Touchpad (Shop)"
    },
    accessibility: "Features custom enemy highlight outlines (yellow, red, or purple for high visibility) and customizable crosshairs.",
    grandkidAppeal: "The biggest competitive esports game for teenagers today. Knowing terms like 'Spike', 'Headshot', 'Eco Round', or Agents like Jett and Sage will earn instant respect from grandkids!",
    proTips: [
      "Set enemy outlines to 'Yellow Deuteranopia' in video settings for the highest possible visual clarity.",
      "Play with Support Agents like Sage or Killjoy so you contribute massive team value without needing fast reflex duels.",
      "Practice shooting stationary bots in the free practice shooting range to warm up comfortably."
    ]
  },
  {
    id: "overwatch_2",
    title: "Overwatch 2",
    genreCategory: "shooter",
    genreLabel: "Vibrant Team-Based Hero Shooter",
    studio: "Blizzard Entertainment",
    year: "2022",
    icon: "🛡️",
    bannerGradient: "linear-gradient(135deg, #ea580c 0%, #7c2d12 100%)",
    accentColor: "#f97316",
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Nintendo Switch"],
    difficulty: "Moderate (Great for Support & Healing roles)",
    difficultyLevel: "med",
    ageRating: "ESRB Teen 13+",
    shortDesc: "A colorful, optimistic sci-fi team shooter featuring 40+ diverse heroes including scientists, cyborg ninjas, and gorilla doctors.",
    about: "In an optimistic, colorful global future, a peacekeeping task force called Overwatch reunites to protect the world from rogue omnic robots and terror organizations. Two teams of 5 heroes clash across famous world cities (London, Tokyo, Rio de Janeiro) to push payload carts or capture objectives.",
    howItWorks: "Focuses on team synergy across three roles: **Tanks** (giant armored heroes with energy shields like Reinhardt), **Damage** (sharpshooters and flyers like Tracer), and **Support** (healers like Mercy and Lifeweaver who boost allies' health and revive fallen friends).",
    whatToDo: "1. Work with your 4 teammates to push a robotic delivery vehicle safely to the goal.\n2. Use defensive energy barriers to shield teammates from incoming fire.\n3. Charge up your team-wiping 'Ultimate' ability and unleash it during decisive team battles.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Playing Support & Tanks</h5>
        <ul class="htp-control-list">
          <li><strong>Play Mercy (Zero Aim Required):</strong> Hold Right Trigger to connect a glowing golden healing beam to an ally—it locks on automatically and stays attached even while you look around!</li>
          <li><strong>Guardian Angel Wings:</strong> Tap <code>L1</code> as Mercy to fly smoothly through the air straight to a teammate's side.</li>
          <li><strong>Reinhardt Shield:</strong> Hold Right Click / <code>L2</code> as Reinhardt to project a colossal 12-foot glowing energy wall that blocks all enemy bullets for your team.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      primaryBeam: "R2 / Left Click (Heal)",
      boostBeam: "R1 / Right Click (Damage Boost)",
      flyToAlly: "L1 / Shift (Guardian Angel)",
      revive: "L2 / E (Resurrect Fallen Friend)",
      ultimate: "Triangle / Q (Valkyrie Wings)"
    },
    accessibility: "100% free to play. Excellent subtitles, sound direction cues, and friendly character designs with zero gore.",
    grandkidAppeal: "Very popular across all ages. Grandparents can easily team up as healers or shield tanks to support their grandchildren in co-op matches!",
    proTips: [
      "Playing Mercy or Moira lets you heal your team without needing precision crosshair aim.",
      "Stay behind your team's tank shield for maximum protection.",
      "Use the communication wheel (press Down on D-pad) to say 'Group Up with Me' or 'Thanks!'."
    ]
  },
  {
    id: "apex_legends",
    title: "Apex Legends",
    genreCategory: "shooter",
    genreLabel: "Squad Hero Battle Royale & Movement",
    studio: "Respawn Entertainment / EA",
    year: "2019",
    icon: "🔥",
    bannerGradient: "linear-gradient(135deg, #991b1b 0%, #18181b 100%)",
    accentColor: "#ef4444",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    difficulty: "High Movement & Battle Royale",
    difficultyLevel: "hard",
    ageRating: "ESRB Teen 13+",
    shortDesc: "20 trios skydive onto an island arena. Loot gear, use unique Legend abilities, and be the last squad standing.",
    about: "In the sci-fi Outlands, legendary competitors known as 'Legends' battle in the televised Apex Games. Squads of 3 skydive onto a giant island ring surrounded by a closing energy forcefield, scavenging weapons and armor while using abilities like ziplines, smoke bombs, and healing drones.",
    howItWorks: "Fast-paced battle royale. As the ring shrinks over 20 minutes, teams clash until only one surviving champion squad remains. Features the legendary 'Smart Ping' system allowing full communication without voice chat.",
    whatToDo: "1. Skydive together and loot body shields, medical syringes, and energy rifles.\n2. Ping enemy sightings and high-tier loot for your squad with one button.\n3. Utilize your Legend's unique powers (like Lifeline's automated care package drops).",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Smart Ping System</h5>
        <ul class="htp-control-list">
          <li><strong>One-Button Ping:</strong> Tap <code>R1/RB</code> (Middle Click on PC) on anything to tell your squad: 'Enemy over here!', 'Loot here!', or 'Let's go this way!'.</li>
          <li><strong>Sliding:</strong> Hold crouch while running down any hill to slide at super-speed!</li>
          <li><strong>Lifeline Medic:</strong> Play as Lifeline to summon healing DOC drones and revive teammates hands-free.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      shoot: "R2 / Left Click",
      aim: "L2 / Right Click",
      ping: "R1 / Middle Click (Smart Ping)",
      tactical: "L1 / Q (Healing Drone)",
      ultimate: "L1 + R1 / Z (Care Package)"
    },
    accessibility: "The revolutionary Ping system allows seamless squad teamwork without needing microphone headsets.",
    grandkidAppeal: "Extremely popular battle royale title with fast pacing, fluid sliding movement, and cool hero characters.",
    proTips: [
      "Play Lifeline or Gibraltar to provide defensive shields and medical healing for your squad.",
      "Ping weapon attachments and armor for your teammates frequently to keep everyone equipped.",
      "Slide down slopes to travel fast and become a much harder target to hit."
    ]
  },

  // =========================================================================
  // 6. COZY, SIMULATION & RELAXATION
  // =========================================================================
  {
    id: "animal_crossing",
    title: "Animal Crossing: New Horizons",
    genreCategory: "cozy",
    genreLabel: "Island Life & Nature Simulation",
    studio: "Nintendo",
    year: "2020",
    icon: "🏝️",
    bannerGradient: "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
    accentColor: "#10b981",
    platforms: ["Nintendo Switch"],
    difficulty: "Zero Pressure (Play at Your Own Pace)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Everyone",
    shortDesc: "Escape to a peaceful deserted tropical island, plant fruit orchards, catch butterflies, and design your dream cottage.",
    about: "You take a deserted island getaway package from a friendly raccoon named Tom Nook. Arriving on a pristine island with a tent and a smartphone, you gradually turn the wild island into a thriving paradise filled with cute talking animal neighbors, flower gardens, bridges, and museum exhibits.",
    howItWorks: "Synced to the real-world 24-hour clock and 4 real seasons. When it is morning outside your window, it is morning on your island; when it snows in winter, snowflakes fall on your cottage roof. There are no time limits, no health bars, and no way to lose.",
    whatToDo: "1. Catch gentle butterflies, fish along ocean beaches, and dig up dinosaur fossils for the town museum.\n2. Design and decorate your personal home with wallpaper, cozy couches, and tea sets.\n3. Visit your friends' and grandchildren's islands over Wi-Fi to swap fruit and flower seeds.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Gentle Island Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Walking & Jogging:</strong> Gently push the Left Stick to stroll along sandy beaches and flower gardens.</li>
          <li><strong>Tool Actions:</strong> Press <strong>'A'</strong> to swing your butterfly net, cast your fishing bobber into the river, or plant flowers.</li>
          <li><strong>Pocket Backpack:</strong> Press <strong>'X'</strong> to open your pocket backpack and hold tools or eat peaches.</li>
          <li><strong>Talking:</strong> Walk up to any friendly animal neighbor and press 'A' to chat with them.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick (Gentle Stroll)",
      useTool: "A (Fish / Catch / Dig)",
      pocketMenu: "X (Backpack)",
      swapTool: "D-Pad Left/Right",
      nookPhone: "ZL (Island Phone)",
      pause: "- (Save & Finish)"
    },
    accessibility: "The ultimate relaxing elder-friendly video game. Millions of seniors over 60 play daily for calming morning relaxation and mindfulness.",
    grandkidAppeal: "One of the top games grandchildren love to visit and share with grandparents. You can send in-game postcards with sweet presents attached!",
    proTips: [
      "Listen for the gentle 'plop' splash sound while fishing before pressing 'A' to reel in the fish.",
      "Plant different fruits (pears, cherries, oranges, apples) to grow colorful orchards.",
      "Donate new fish, bugs, and fossils to Blathers at the island museum to see them displayed in gorgeous aquariums."
    ]
  },
  {
    id: "stardew_valley",
    title: "Stardew Valley",
    genreCategory: "cozy",
    genreLabel: "Country Farm & Community RPG",
    studio: "ConcernedApe",
    year: "2016",
    icon: "🌾",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    accentColor: "#f59e0b",
    platforms: ["PC", "Nintendo Switch", "PlayStation", "Xbox", "iPad / iPhone", "Android"],
    difficulty: "Peaceful & Wholesome",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Everyone 10+",
    shortDesc: "Inherit your grandfather's old overgrown farm in a charming coastal valley. Plant crops, raise happy animals, and revitalize the village.",
    about: "Tired of stressful corporate office life, you open a sealed letter left to you by your grandfather. You inherit his plot of farmland in Pelican Town, Stardew Valley. With a few coins and hand-me-down tools, you set out to learn to live off the land and restore the community center.",
    howItWorks: "A charming 2D pixel-art sandbox. You clear weeds, till fertile soil, plant seasonal strawberries and pumpkins, water your garden, raise clucking chickens, attend seasonal harvest festivals, and befriend 30 unique town villagers.",
    whatToDo: "1. Plant and harvest seasonal vegetables and brew artisanal jams and cheeses.\n2. Attend town events like the Egg Festival, Stardew Valley Fair, and Feast of the Winter Star.\n3. Rebuild the abandoned Community Center by donating bundles of crops and artisan goods.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Farming & Village Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Till Soil & Plant:</strong> Select your Hoe tool and tap 'A' / Left Click to till brown soil, then select seeds to plant.</li>
          <li><strong>Watering Can:</strong> Water each crop every morning until green sprouts bloom into harvestable vegetables.</li>
          <li><strong>Befriend Villagers:</strong> Give flowers and fresh vegetables as gifts to villagers to unlock heartwarming cutscenes.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD / Touch",
      useTool: "Cross/A / Left Click (Hoe/Water)",
      toolbar: "L1/R1 / Scroll Wheel",
      inventory: "Triangle/Y / E (Backpack)",
      pause: "+ / ESC (Settings & Map)"
    },
    accessibility: "Can be played on virtually any device, including touchscreens (iPad/tablet) with zero complex button combinations.",
    grandkidAppeal: "Created entirely by a single passionate developer. Supports 4-player cooperative farming so entire families can share a farm together!",
    proTips: [
      "Check the weather on the TV in your cabin every morning—rainy days water all your crops for free!",
      "Upgrade your watering can at Clint the blacksmith to water 3 tiles at once.",
      "Pet your chickens and cows every day to make them happy and produce gold-star quality eggs and milk."
    ]
  },
  {
    id: "flight_sim",
    title: "Microsoft Flight Simulator",
    genreCategory: "cozy",
    genreLabel: "Photorealistic Global Aviation Simulator",
    studio: "Asobo Studio / Xbox Game Studios",
    year: "2020",
    icon: "✈️",
    bannerGradient: "linear-gradient(135deg, #0284c7 0%, #075985 100%)",
    accentColor: "#38bdf8",
    platforms: ["PC", "Xbox Series X/S", "Cloud Gaming"],
    difficulty: "Adjustable from Casual Sightseeing to Real Cockpit",
    difficultyLevel: "easy-to-hard",
    ageRating: "ESRB Everyone",
    shortDesc: "Fly real airplanes over 1:1 satellite recreation of Earth. Visit your childhood hometown, Paris, the Grand Canyon, or the Swiss Alps.",
    about: "Using real-time Bing Maps satellite imagery, cloud artificial intelligence, and live global weather data, Microsoft Flight Simulator recreates the **entire planet Earth in 1:1 scale**. Every airport (over 37,000), town, mountain range, river, and coastline on Earth is rendered in photorealistic detail.",
    howItWorks: "You choose an airplane (from a light Cessna propeller plane to a Boeing 747 airliner), pick any runway or landmark on Earth, and take off. Real-world live weather matches what is happening right now outside—if it is raining in London, it is raining in your virtual cockpit.",
    whatToDo: "1. Take off from your local municipal airport and fly right over your own neighborhood or childhood home.\n2. Embark on scenic 'Bush Trips' through the Norwegian fjords, African savannas, or Hawaiian islands.\n3. Practice gentle takeoffs, visual navigation, and smooth runway landings.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Casual Sightseeing Pilot Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Steering the Yoke:</strong> Gently push Left Stick forward to pitch down, pull back to climb into the sky, and tilt left/right to bank wings.</li>
          <li><strong>Throttle (Engine Power):</strong> Press 'A' / F3 to increase engine power for takeoff; press 'B' / F2 to throttle back for smooth landing glide.</li>
          <li><strong>Camera Views:</strong> Press the View button (or 'End' key) to switch between realistic cockpit view and glorious external scenic camera!</li>
          <li><strong>AI Co-Pilot:</strong> Turn on 'AI Piloting' in the top menu to let the computer fly the plane while you just look out the window!</li>
        </ul>
      </div>
    `,
    controls: {
      yokeSteer: "Left Stick (Pitch & Bank)",
      throttleUp: "A / F3 (More Power)",
      throttleDown: "B / F2 (Less Power)",
      rudder: "LT/RT / Num 0,Enter",
      cameraView: "Select / End (Cockpit/Outside)",
      pause: "Options / ESC (Active Pause)"
    },
    accessibility: "Zero violence, zero rush. It is a peaceful, awe-inspiring virtual sightseeing vacation from the comfort of your living room sofa.",
    grandkidAppeal: "Astonishes people of all ages. Kids and grandparents love pointing out familiar vacation spots, landmarks like the Eiffel Tower, and family homes from the air.",
    proTips: [
      "Use the 'Search' bar on the world map to type in your exact street address or hometown airport.",
      "Enable 'Active Pause' anytime to freeze the plane in mid-air and take gorgeous photographs of sunsets and mountains.",
      "Fly over world landmarks like the Egyptian Pyramids, Mount Everest, or New York skyline for unforgettable vistas."
    ]
  },
  {
    id: "sims_4",
    title: "The Sims 4",
    genreCategory: "cozy",
    genreLabel: "Life, Family & Home Architecture Simulator",
    studio: "Maxis / Electronic Arts",
    year: "2014",
    icon: "💎",
    bannerGradient: "linear-gradient(135deg, #15803d 0%, #052e16 100%)",
    accentColor: "#22c55e",
    platforms: ["PC", "Mac", "PlayStation", "Xbox"],
    difficulty: "Zero Combat (100% Free Sandbox)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Teen 13+",
    shortDesc: "Design dream homes, create quirky virtual families, guide careers, and watch heartwarming everyday stories unfold.",
    about: "Create unique virtual humans ('Sims') with customizable personalities, styles, and ambitions. Build their dream cottages and multi-story mansions with easy architectural tools, guide their careers (from chef to astronaut), fulfill their lifelong wishes, and watch their friendships and romances blossom.",
    howItWorks: "100% free-to-play digital dollhouse. You control the flow of time (pause, normal speed, fast-forward) and fulfill your Sims' basic needs like Hunger, Social, Fun, and Energy while designing cozy rooms with wallpaper, rugs, and fireplaces.",
    whatToDo: "1. Build and landscape dream houses with gardens, swimming pools, and libraries.\n2. Guide Sims to cook gourmet dinners, paint masterpieces, or play violin.\n3. Throw birthday parties, neighborhood barbecues, and holiday celebrations.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Point-and-Click Life Simulation</h5>
        <ul class="htp-control-list">
          <li><strong>Ordering Actions:</strong> Click on any object (e.g. Fridge -> 'Cook Grilled Cheese' or Bookshelf -> 'Read Novel').</li>
          <li><strong>Controlling Time:</strong> Tap 1 for normal speed, 2 for fast speed, and 0 / Spacebar to pause time whenever you need to think!</li>
          <li><strong>Build Mode:</strong> Click the Hammer icon in the top right to instantly place walls, windows, furniture, and flowers.</li>
        </ul>
      </div>
    `,
    controls: {
      select: "Left Click / Cross",
      cameraRotate: "Right Click & Drag / Right Stick",
      pauseTime: "Spacebar / 0",
      speedUp: "1, 2, 3 (Time Speed)",
      buildMode: "F2 / Top Bar Icon"
    },
    accessibility: "100% free to download on PC, Mac, and consoles. Pausable at any millisecond so there is never any time pressure.",
    grandkidAppeal: "One of the most widely played creative simulation games for all generations. Grandparents love building replicas of their real homes!",
    proTips: [
      "Press Spacebar to pause time whenever you want to queue up tasks like bathing, cooking, and sleeping.",
      "Use the 'Search' bar in Build Mode to find exact furniture items like 'Grandfather Clock' or 'Fireplace'.",
      "Have your Sims practice painting on an easel to earn quick extra simoleons (money) for home renovations."
    ]
  },
  {
    id: "dorfromantik",
    title: "Dorfromantik",
    genreCategory: "cozy",
    genreLabel: "Peaceful Countryside Landscape Puzzle",
    studio: "Toukana Interactive",
    year: "2022",
    icon: "🧩",
    bannerGradient: "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
    accentColor: "#34d399",
    platforms: ["PC", "Nintendo Switch"],
    difficulty: "Pure Relaxation (Zero Time Limit)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Everyone",
    shortDesc: "Place picturesque hexagonal tiles to build an endless countryside of forests, rivers, windmills, and gentle railway tracks.",
    about: "Dorfromantik is a soothing building strategy puzzle game where you expand an idyllic countryside by placing hexagonal landscape tiles. Fit matching edges together—connecting forests to forests, rivers to lakes, and wheat fields to windmills—accompanied by the gentle sound of chirping birds and acoustic melodies.",
    howItWorks: "You draw tiles from a stack one by one. There are no timers, no enemies, and no ways to lose; matching quests (like 'Connect a forest with 50 trees') awards you bonus tiles so you can continue growing your miniature world forever.",
    whatToDo: "1. Rotate tiles to align rivers, train tracks, and village cottages seamlessly.\n2. Complete quests marked by friendly flags to unlock new colorful biomes.\n3. Enjoy 'Creative Mode' for infinite tiles and pure landscaping freedom.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Hexagonal Tile Placement</h5>
        <ul class="htp-control-list">
          <li><strong>Rotate Tile:</strong> Tap 'R' or Shoulder Buttons (<code>L1/R1</code>) to rotate your current tile until the edges match the surrounding scenery.</li>
          <li><strong>Place Tile:</strong> Tap Cross/A or Left Click to snap the tile into place.</li>
          <li><strong>Pan & Zoom:</strong> Drag the mouse or move the right stick to admire your sprawling rural countryside.</li>
        </ul>
      </div>
    `,
    controls: {
      moveCursor: "Left Stick / Mouse",
      placeTile: "A / Left Click",
      rotateTile: "L1/R1 / R, Space",
      cameraPan: "Right Stick / Right Drag",
      creativeMode: "Menu (Infinite Tiles)"
    },
    accessibility: "Zero timers, zero violence. Perfect for gentle brain agility, spatial awareness, and deep relaxation.",
    grandkidAppeal: "Like building a digital model train set and jigsaw puzzle combined. Loved by players of all ages.",
    proTips: [
      "Look for the white numbers on flag tiles—they show how many matching trees or fields are needed to complete the quest.",
      "Try 'Creative Mode' if you just want to build endless gorgeous train tracks and river canals without worrying about tile counts.",
      "Listen with headphones to enjoy the soothing binaural nature sounds of rustling leaves and birdsong."
    ]
  },

  // =========================================================================
  // 7. STRATEGY, PUZZLE & SANDBOX
  // =========================================================================
  {
    id: "minecraft",
    title: "Minecraft",
    genreCategory: "strategy",
    genreLabel: "Creative 3D Sandbox & Infinite Digital LEGO",
    studio: "Mojang Studios / Xbox",
    year: "2011",
    icon: "🧱",
    bannerGradient: "linear-gradient(135deg, #15803d 0%, #14532d 100%)",
    accentColor: "#22c55e",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "iPad / Tablet", "Mobile"],
    difficulty: "Creative Mode (Invincible & Free Building)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Everyone 10+",
    shortDesc: "The best-selling video game of all time: an infinite blocky world where you can build cottages, castles, and mechanisms with zero limits.",
    about: "Minecraft generates an endless, procedurally generated 3D world made of cube blocks representing wood, stone, water, sand, and iron. In 'Creative Mode', you have infinite blocks and flight powers to build anything you can imagine. In 'Survival Mode', you chop wood, build a shelter before nighttime, and mine deep for diamonds.",
    howItWorks: "Complete creative freedom. Every single block in the world can be broken down and placed anywhere else. You can build functional mechanical roller coasters, automated farm harvesters using 'Redstone' (virtual electricity circuits), or replica historic castles.",
    whatToDo: "1. Build cozy log cabins, flower gardens, and stone bridges in Creative Mode.\n2. In Survival Mode, gather wool to craft a bed, cook food, and tame horses and wolves.\n3. Explore deep underground caverns filled with sparkling amethyst geodes and underground waterfalls.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ 3D Building & Mining Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Break / Mine Block:</strong> Hold Left Trigger (<code>L2</code> on console / Left Click on PC) to mine the block in front of you.</li>
          <li><strong>Place Block:</strong> Tap Right Trigger (<code>R2</code> on console / Right Click on PC) to place the selected block in your hand.</li>
          <li><strong>Fly in Creative:</strong> Double-tap Jump ('A' / Spacebar) to float into the sky and build high roofs effortlessly!</li>
          <li><strong>Open Inventory:</strong> Press 'Y' / 'E' to choose from hundreds of colorful blocks, flowers, and stained glass.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      mineBreak: "L2 / Left Click",
      placeBlock: "R2 / Right Click",
      jumpFly: "A / Spacebar (Double tap to fly)",
      inventory: "Y / E (Block Palette)",
      pause: "Options / ESC"
    },
    accessibility: "'Peaceful' and 'Creative' modes remove all monsters, hunger, and falling damage, turning the game into a tranquil creative art canvas.",
    grandkidAppeal: "The undisputed #1 game among children, grandchildren, and teenagers worldwide (over 300 million copies sold). Grandparents who play Minecraft are universally revered by their grandkids!",
    proTips: [
      "Select 'Creative Mode' and 'Peaceful Difficulty' for an endless, zero-stress architectural playground.",
      "Craft a Bed with 3 wool and 3 wood planks so you can sleep through the nighttime instantly.",
      "Hold a bone in your hand to tame wild wolves into loyal pet dogs with cute red collars!"
    ]
  },
  {
    id: "civ_6",
    title: "Civilization VI",
    genreCategory: "strategy",
    genreLabel: "Turn-Based Historical Empire Builder",
    studio: "Firaxis Games / 2K",
    year: "2016",
    icon: "🏛️",
    bannerGradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    accentColor: "#ca8a04",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "iPad / Tablet"],
    difficulty: "Turn-Based (Settler Easy Mode Available)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Everyone 10+",
    shortDesc: "Lead a historical civilization from the Stone Age stone axes to the modern Space Age on a hexagonal world map.",
    about: "You select a famous historical leader (such as Abraham Lincoln, Queen Victoria, Mahatma Gandhi, or Julius Caesar) and found your first stone-age village in 4000 BC. Across hundreds of turns, you research writing, philosophy, steam engines, and space travel, building a global empire that stands the test of time.",
    howItWorks: "A grand turn-based strategy board game on a hexagonal grid map. You move settlers and workers, build world wonders like the Pyramids and Eiffel Tower, establish trade routes, send out religious missionaries, and negotiate peace treaties with neighboring world leaders.",
    whatToDo: "1. Expand your cities and construct specialized cultural, scientific, and industrial districts.\n2. Win the game through multiple peaceful pathways: **Culture Victory** (tourism and art), **Science Victory** (landing on Mars), or **Diplomatic Victory** (world peace in the United Nations).\n3. Trade luxury silks, spices, and copper with other civilizations.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Turn-Based Grand Strategy Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Zero Reflexes:</strong> The entire world waits for you. Give orders to units at your own comfortable pace.</li>
          <li><strong>Move Units:</strong> Click a unit (like your Warrior or Settler), then right-click on the destination hex tile.</li>
          <li><strong>Choose Production:</strong> In cities, select what to build next (e.g. Granary, Library, or Wonder).</li>
          <li><strong>Next Turn Button:</strong> When all orders are given, click the large round 'Next Turn' button in the bottom right corner.</li>
        </ul>
      </div>
    `,
    controls: {
      selectUnit: "Left Click / Cross",
      moveDestination: "Right Click / A",
      researchTree: "Top Left Menu (Techs & Civics)",
      nextTurn: "Bottom Right Button / Enter",
      civilopedia: "Top Right '?' (History Encyclopedia)",
      pause: "Options / ESC"
    },
    accessibility: "Outstanding for history buffs, chess players, and puzzle lovers. Features rich historical encyclopedia civilopedia entries explaining real-world history for every building and technology.",
    grandkidAppeal: "A deeply intellectual and satisfying game that parents, grandparents, and teenagers often spend hours discussing history over.",
    proTips: [
      "Select 'Settler' difficulty when starting your first game for friendly, peaceful AI neighbors.",
      "Win peacefully through Culture by building theater squares and collecting famous world artwork.",
      "Click the '?' Civilopedia icon anytime to read fascinating real-world historical articles about world leaders and wonders."
    ]
  },
  {
    id: "portal_2",
    title: "Portal 2",
    genreCategory: "strategy",
    genreLabel: "Physics Comedy Puzzle Masterpiece",
    studio: "Valve",
    year: "2011",
    icon: "🌀",
    bannerGradient: "linear-gradient(135deg, #0284c7 0%, #ea580c 100%)",
    accentColor: "#38bdf8",
    platforms: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
    difficulty: "Logic & Spatial Reasoning Puzzles",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Everyone 10+",
    shortDesc: "Armed with a portal gun that links two locations, solve hilarious physics test chambers guided by a witty, sarcastic AI.",
    about: "Trapped inside the sprawling subterranean Aperture Science research facility, you hold a handheld 'Aperture Science Handheld Portal Device'. Guided (and mocked) by a hilariously passive-aggressive artificial intelligence named GLaDOS, you must use spatial logic to escape.",
    howItWorks: "You shoot a blue portal on one wall and an orange portal on another wall. Stepping into the blue portal instantly brings you out of the orange portal while preserving all your physical momentum and speed!",
    whatToDo: "1. Place portals on walls, floors, and ceilings to bridge impassable gaps.\n2. Use bouncy laser gels, speed accelerators, and weighted storage cubes to trigger pressure buttons.\n3. Enjoy one of the funniest, smartest written scripts in entertainment history.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Portal Gun Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Blue Portal:</strong> Pull Left Trigger (<code>L2/LT</code> / Left Click) to place a Blue portal.</li>
          <li><strong>Orange Portal:</strong> Pull Right Trigger (<code>R2/RT</code> / Right Click) to place an Orange portal.</li>
          <li><strong>Walk Through:</strong> Step right into either portal to instantly emerge from the other!</li>
          <li><strong>Pick Up Cubes:</strong> Press 'E' / Cross to carry metal companion cubes onto red floor buttons.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      bluePortal: "L2 / Left Click",
      orangePortal: "R2 / Right Click",
      grabCube: "X/E (Pick Up Item)",
      zoom: "R3 / Middle Click",
      pause: "Options / ESC"
    },
    accessibility: "Zero gore, clever family-friendly humor, and a dedicated 2-player cooperative campaign where you and a partner play as cute robots Atlas and P-Body.",
    grandkidAppeal: "Universally rated as one of the top 10 video games ever created. Brilliant for exercising 3D spatial logic and problem-solving together!",
    proTips: [
      "Remember momentum: 'Speedy thing goes in, speedy thing comes out!' Falling from high into a floor portal launches you high across the room.",
      "Look for white flat concrete walls—portals can only be placed on white surfaces.",
      "Play the 2-player Co-op campaign with a grandchild for hours of shared laughter and teamwork."
    ]
  },
  {
    id: "tetris_effect",
    title: "Tetris Effect: Connected",
    genreCategory: "strategy",
    genreLabel: "Sensory Audio-Visual Puzzle Masterpiece",
    studio: "Enhance Games",
    year: "2020",
    icon: "✨",
    bannerGradient: "linear-gradient(135deg, #581c87 0%, #0f172a 100%)",
    accentColor: "#a855f7",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    difficulty: "Adjustable (Relax Mode Available)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Everyone",
    shortDesc: "The timeless puzzle game reinvented with breathtaking musical reactive landscapes, ocean dolphins, and starry galaxies.",
    about: "Tetris Effect transforms the classic 1984 block-stacking puzzle into a magical, synesthetic musical journey. Every tile rotation and line clear creates musical notes, chimes, fireworks, and swimming glowing sea creatures that evolve with the world-class soundtrack.",
    howItWorks: "Falling geometric tetromino blocks (lines, squares, L-shapes, T-shapes) must be rotated and arranged into solid horizontal lines to clear them. Features the 'Zone' mechanic where you can stop time and clear 20 lines simultaneously in one burst!",
    whatToDo: "1. Arrange falling blocks into solid rows to clear lines.\n2. Trigger 'Zone' mode to freeze falling blocks when things get fast.\n3. Explore 'Relax Mode' with zero game over screens and pure musical meditation.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Classic Tetris Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Move Left/Right:</strong> D-Pad Left & Right to slide blocks.</li>
          <li><strong>Rotate Block:</strong> Tap 'A' / Cross to rotate clockwise; tap 'B' / Circle for counter-clockwise.</li>
          <li><strong>Hard Drop:</strong> Press Up on D-pad to slam the block down instantly into place.</li>
          <li><strong>Hold Piece:</strong> Tap <code>L1/LB</code> to save a long line piece in your pocket for later!</li>
        </ul>
      </div>
    `,
    controls: {
      moveBlock: "D-Pad Left / Right",
      softDrop: "D-Pad Down",
      hardDrop: "D-Pad Up (Instant Place)",
      rotate: "A / B (Rotate Piece)",
      holdPiece: "L1 / Shift (Store Block)",
      zoneTimeStop: "LT / RT (Stop Time)",
      pause: "Options (Relax Mode)"
    },
    accessibility: "Includes dedicated 'Relax Effect Modes' (like Sea of Wind and Playlist modes) where there is zero fail state and blocks never stack too fast.",
    grandkidAppeal: "Tetris is universally understood across all generations. The stunning particle effects and uplifting music make it mesmerizing to watch.",
    proTips: [
      "Store a long 4-block straight bar in your Hold slot (L1) to clear 4 lines at once (a 'Tetris') for huge bonus points.",
      "Try 'Relax Mode' in the Effect Modes menu for a calming evening sensory decompression.",
      "Wear headphones to experience the music reacting to your every button press."
    ]
  },

  // =========================================================================
  // 8. ESPORTS, SPORTS & PARTY
  // =========================================================================
  {
    id: "ea_fc",
    title: "EA Sports FC 24 (FIFA)",
    genreCategory: "esports",
    genreLabel: "Global Football & Soccer Simulation",
    studio: "EA Sports",
    year: "2023",
    icon: "⚽",
    bannerGradient: "linear-gradient(135deg, #15803d 0%, #064e3b 100%)",
    accentColor: "#22c55e",
    platforms: ["PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Nintendo Switch", "PC"],
    difficulty: "Adjustable AI (Beginner to Professional)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Everyone",
    shortDesc: "The world's game: step onto realistic pitches with thousands of real clubs, authentic stadiums, and world-class commentary.",
    about: "The most authentic football simulation on Earth, featuring over 19,000 fully licensed players, 700+ real teams, and 30+ official leagues (including the Premier League, UEFA Champions League, and MLS).",
    howItWorks: "Control 11-player soccer matches with realistic physics, turf degradation, crowd chanting, and authentic broadcast camera angles. You can manage a club as a manager, create a custom rookie player, or play friendly exhibition matches with family.",
    whatToDo: "1. Pass, cross, and shoot for the top corner of the goal net.\n2. Build and manage your dream squad of global soccer legends.\n3. Play casual 2-player couch multiplayer matches right on the living room TV.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Simplified Two-Button & Classic Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Two-Button Mode:</strong> In controller settings, switch to 'Two-Button' mode: one button passes, one button shoots!</li>
          <li><strong>Classic Passing:</strong> Cross/A for short ground pass; Triangle/Y for through ball into open grass; Square/X for high lofted cross.</li>
          <li><strong>Shooting:</strong> Circle/B powers up your shot toward the goal net.</li>
          <li><strong>Sprinting:</strong> Hold Right Trigger (<code>R2/RT</code>) to sprint down the wing.</li>
        </ul>
      </div>
    `,
    controls: {
      dribble: "Left Stick",
      passGround: "Cross/A / S",
      throughBall: "Triangle/Y / W",
      shoot: "Circle/B / D",
      crossAir: "Square/X / A",
      sprint: "R2/RT / Shift",
      pause: "Options / ESC"
    },
    accessibility: "Full control remapping and two-button gameplay options allow anyone to pick up a controller and score goals in minutes.",
    grandkidAppeal: "Massive international appeal across all sports fans and grandchildren who follow European football and MLS.",
    proTips: [
      "Select 'Two-Button Control Scheme' in the main settings for immediate, effortless pick-up-and-play fun.",
      "Pass the ball backward to midfielders when defenders press you to find open passing lanes.",
      "Play Kick-Off exhibition mode with a family member on the same couch!"
    ]
  },
  {
    id: "rocket_league",
    title: "Rocket League",
    genreCategory: "esports",
    genreLabel: "Arcade Car Soccer & High-Fly Physics",
    studio: "Psyonix / Epic Games",
    year: "2015",
    icon: "🏎️",
    bannerGradient: "linear-gradient(135deg, #0284c7 0%, #1e3a8a 100%)",
    accentColor: "#38bdf8",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    difficulty: "Easy to Learn, Infinite Fun",
    difficultyLevel: "easy",
    ageRating: "ESRB Everyone",
    shortDesc: "A brilliant, joyful concept: high-powered rocket cars playing soccer with a giant bouncing ball in futuristic neon stadiums.",
    about: "Rocket League takes the rules of soccer and replaces the human players with rocket-boosted acrobatic cars! In futuristic glass-domed arenas, 3v3 teams drive up walls, jump into the air, and ram a giant soccer ball into the opposing net for explosive goal celebrations.",
    howItWorks: "Pure physics-based fun. There are no power-ups or complicated stats; every car has the exact same speed, boost, and jump height. It is 100% about positioning, bouncing angles, and teamwork.",
    whatToDo: "1. Drive forward and boost across the neon turf toward the giant ball.\n2. Jump and flip your car in mid-air to header the ball into the net.\n3. Make diving goalie saves along the goal line to protect your team's lead.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Car Soccer Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Drive & Reverse:</strong> Right Trigger (<code>R2</code>) accelerates like a real car gas pedal; Left Trigger (<code>L2</code>) brakes and reverses.</li>
          <li><strong>Jump & Flip:</strong> Tap <strong>'A' / Cross</strong> to jump; tap it again while tilting the stick forward to perform a front-flip shot!</li>
          <li><strong>Rocket Boost:</strong> Hold <strong>'B' / Circle</strong> to fire rocket boosters and speed across the arena.</li>
          <li><strong>Ball Cam:</strong> Tap 'Y' / Triangle to lock the camera directly onto the bouncing soccer ball.</li>
        </ul>
      </div>
    `,
    controls: {
      steer: "Left Stick",
      gas: "R2/RT (Drive Forward)",
      brakeReverse: "L2/LT (Brakes)",
      jump: "Cross/A (Jump / Flip)",
      boost: "Circle/B (Rocket Speed)",
      ballCam: "Triangle/Y (Lock on Ball)",
      pause: "Options (Game Menu)"
    },
    accessibility: "100% free to download and play. Zero violence, instant respawns, and split-screen couch multiplayer so up to 4 family members can play together on a single TV.",
    grandkidAppeal: "Pure, joyful laughter from the first second you pick up the controller. Kids love playing on the same team as their grandparents!",
    proTips: [
      "Keep 'Ball Cam' (Triangle) turned on so you always see where the ball is bouncing.",
      "Drive over the glowing yellow pads on the field to refill your rocket boost tank to 100%.",
      "Stay slightly behind your teammate to defend the goal net when they rush forward."
    ]
  },
  {
    id: "gran_turismo",
    title: "Gran Turismo 7",
    genreCategory: "esports",
    genreLabel: "The Real Driving Simulator & Auto Heritage",
    studio: "Polyphony Digital / Sony PlayStation",
    year: "2022",
    icon: "🏎️",
    bannerGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    accentColor: "#ef4444",
    platforms: ["PlayStation 5", "PlayStation 4"],
    difficulty: "Full Driving Assists (Braking & Steering Assist)",
    difficultyLevel: "easy-to-med",
    ageRating: "ESRB Everyone",
    shortDesc: "A breathtaking tribute to automotive culture. Drive over 400 iconic classic and modern cars across world-famous raceways.",
    about: "Gran Turismo 7 is a love letter to automotive history and realistic driving. Visit the GT Café to collect historic cars (from vintage 1960s Corvettes and Aston Martins to modern electric supercars), learn car heritage from original automobile designers, and cruise through laser-scanned international circuits.",
    howItWorks: "Unsurpassed driving physics and haptic feedback. Feel every road bump, rain puddle, and tire grip transition through the PlayStation 5 controller's adaptive triggers.",
    whatToDo: "1. Complete GT Café Menu Books to unlock classic vintage cars and learn their history.\n2. Earn License test medals to master smooth braking lines and apex cornering.\n3. Customize cars with authentic paint colors, vintage decals, and engine upgrades.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Driving Controls & Motion Steering</h5>
        <ul class="htp-control-list">
          <li><strong>Steering Options:</strong> Steer with Left Stick, OR hold your controller in two hands and turn it in the air like a real steering wheel (Motion Sensor Steering)!</li>
          <li><strong>Gas & Brake:</strong> Right Trigger (<code>R2</code>) accelerates smoothly; Left Trigger (<code>L2</code>) brakes with realistic anti-lock pedal resistance.</li>
          <li><strong>Visual Racing Line:</strong> Turn on 'Driving Line' and 'Braking Area' guides to see glowing yellow markers showing exactly when to brake for corners.</li>
        </ul>
      </div>
    `,
    controls: {
      steer: "Left Stick or Controller Tilt",
      accelerate: "R2/RT (Gas Pedal)",
      brake: "L2/LT (Brake Pedal)",
      handbrake: "Circle / B",
      changeView: "R1 (Cockpit / Chase)",
      pause: "Options (Replay & Map)"
    },
    accessibility: "Full suite of beginner assists: Auto-Braking, Auto-Steering, and Glowing Driving Lines make it effortless for anyone who knows how to drive a real car.",
    grandkidAppeal: "Spectacular visual photorealism and car museum heritage. Car enthusiast grandparents and grandkids spend hours admiring vintage automobiles.",
    proTips: [
      "Try 'Motion Sensor Steering' in settings—turning the controller like a real car steering wheel is remarkably intuitive!",
      "Visit the GT Café to receive free cars simply by completing relaxed historical challenges.",
      "Brake before entering a corner, and only press the gas pedal once your car is straightening out."
    ]
  },
  {
    id: "mario_odyssey",
    title: "Super Mario Odyssey",
    genreCategory: "aaa",
    genreLabel: "Joyful 3D Globe-Trotting Platformer",
    studio: "Nintendo",
    year: "2017",
    icon: "🎩",
    bannerGradient: "linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)",
    accentColor: "#ef4444",
    platforms: ["Nintendo Switch"],
    difficulty: "Assist Mode (Arrows & Regeneration)",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Everyone 10+",
    shortDesc: "Join Mario on a joyful globe-trotting adventure aboard an airship collecting Power Moons with your magical throwing cap Cappy.",
    about: "When Bowser kidnaps Princess Peach to stage a forced wedding, Mario teams up with Cappy, a magical cap spirit from the Cap Kingdom. Aboard their hat-shaped airship the Odyssey, they voyage across imaginative global kingdoms—from the prehistoric Cascade Kingdom with friendly T-Rex dinosaurs to the bustling 1930s skyscrapers of New Donk City.",
    howItWorks: "Pure, joyful 3D platforming. By throwing Cappy onto creatures and objects, Mario can 'capture' them and take over their abilities: swimming as a fast Cheep Cheep fish, stretching as a tall Tropical Wiggler, or flying as a Bullet Bill.",
    whatToDo: "1. Explore colorful sandbox kingdoms and discover hidden golden Power Moons.\n2. Throw Cappy to capture over 50 unique characters, vehicles, and creatures.\n3. Power up the Odyssey airship to voyage to the Moon and save the wedding.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Nintendo Switch Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Run & Jump:</strong> Push Left Stick to run; tap 'B' / 'A' to jump joyfully into the air.</li>
          <li><strong>Throw Cappy:</strong> Tap 'Y' / 'X' to throw Mario's red cap forward to smash crates or collect coins.</li>
          <li><strong>Capture Creature:</strong> Throw Cappy at a friendly frog or Goomba to jump inside and control them!</li>
          <li><strong>Assist Mode:</strong> Turn on 'Assist Mode' in options—bright blue arrows appear on the ground guiding you everywhere, and falling off cliffs simply floats you back safely in a bubble!</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick",
      jump: "B / A",
      throwCap: "Y / X (Throw Cappy)",
      groundPound: "ZL in Mid-Air",
      crouch: "ZL on Ground",
      map: "- (Kingdom Travel Guide)",
      pause: "+ (Assist Mode Toggle)"
    },
    accessibility: "Dedicated 'Assist Mode' gives Mario double health, automatic health regeneration when standing still, and guides you with clear arrows on the floor.",
    grandkidAppeal: "One of the highest-rated games in entertainment history. Grandchildren love playing 2-player co-op where one player controls Mario and the other controls Cappy!",
    proTips: [
      "Turn on 'Assist Mode' in the options menu for the most relaxing, cheerful experience.",
      "In 2-player mode, hand Player 2 the Cappy cap—they can fly around freely collecting coins and protecting Mario.",
      "Visit Crazy Cap shops in each town to buy cute outfits like painter smocks, safari gear, and tuxedos."
    ]
  },
  {
    id: "fall_guys",
    title: "Fall Guys",
    genreCategory: "esports",
    genreLabel: "Hilarious Party Knockout Obstacle Royale",
    studio: "Mediatonic / Epic Games",
    year: "2020",
    icon: "👑",
    bannerGradient: "linear-gradient(135deg, #f43f5e 0%, #db2777 100%)",
    accentColor: "#f472b6",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    difficulty: "Pure Laughter & Party Fun",
    difficultyLevel: "very-easy",
    ageRating: "ESRB Everyone",
    shortDesc: "Up to 32 adorable jellybean contestants stumble, tumble, and dodge giant rotating windmills and slime obstacles in hilarious game show rounds.",
    about: "Inspired by TV game shows like *Wipeout* and *Takeshi's Castle*, Fall Guys drops colorful, stumbling jellybean characters onto whimsical pastel obstacle courses. Dodge giant swinging pendulums, balance on see-saws, carry giant soccer balls, and dive across finish lines to qualify for the final Crown round.",
    howItWorks: "Pure slapstick comedy. There is zero violence or gore; when beans bump into bouncy trampolines or giant foam bananas, they bounce harmlessly and tumble over each other in cartoon physics.",
    whatToDo: "1. Run, jump, and dive through rotating windmills and spinning doors.\n2. Work in teams in party games like tail tag, egg collection, and giant ball rolling.\n3. Grab the floating Golden Crown at the summit of Fall Mountain to win the championship.",
    howToPlay: `
      <div class="htp-step-box">
        <h5>🕹️ Simple 3-Button Party Controls</h5>
        <ul class="htp-control-list">
          <li><strong>Run:</strong> Push Left Stick to waddle your jellybean forward.</li>
          <li><strong>Jump:</strong> Tap <strong>'A' / Cross</strong> to leap over spinning logs and gap chasms.</li>
          <li><strong>Dive Forward:</strong> Tap <strong>'X' / Square</strong> in mid-air to belly-flop forward across finish lines!</li>
          <li><strong>Grab Ledges:</strong> Hold <strong>Right Trigger (<code>R2/RT</code>)</strong> to pull yourself up high ledges or hug fellow beans.</li>
        </ul>
      </div>
    `,
    controls: {
      move: "Left Stick / WASD",
      look: "Right Stick / Mouse",
      jump: "Cross/A / Spacebar",
      dive: "Square/X / Ctrl (Belly Flop)",
      grab: "R2/RT / Shift (Ledge Grab)",
      emote: "D-Pad (Wave & Cheer)",
      pause: "Options / ESC"
    },
    accessibility: "100% free to download. Only 3 buttons (Jump, Dive, Grab). Completely non-violent and full of cheerful cartoon sound effects.",
    grandkidAppeal: "One of the absolute top multiplayer games that grandkids and grandparents laugh uncontrollably playing together!",
    proTips: [
      "Dive (Square/X) at the very end of a jump to travel further across large gaps.",
      "Don't rush to the front of crowds on door dash games—let other beans bump the fake doors first!",
      "Equip fun free costumes like duckies, hot dogs, and astronaut helmets in the locker room."
    ]
  }
];

window.GAMES_CODEX_DATABASE = GAMES_CODEX_DATABASE;
