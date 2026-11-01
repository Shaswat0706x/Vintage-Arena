/**
 * Vintage Arena - Interactive Controller & Keyboard Simulator
 * Visualizes gamepads & keyboards with live button tester and intuitive explanations.
 */

class ControllerSimulator {
  constructor() {
    this.currentControllerType = 'xbox'; // 'xbox', 'playstation', 'switch'
    this.activeKeyInfo = null;
    this.init();
  }

  init() {
    this.bindKeyboardListener();
    this.bindGamepadPoll();
  }

  bindKeyboardListener() {
    window.addEventListener('keydown', (e) => {
      // Highlight on keyboard visualizer
      const keyId = this.normalizeKey(e.code, e.key);
      this.highlightKey(keyId, true);
    });

    window.addEventListener('keyup', (e) => {
      const keyId = this.normalizeKey(e.code, e.key);
      this.highlightKey(keyId, false);
    });
  }

  normalizeKey(code, key) {
    if (code === 'KeyW' || key === 'w' || key === 'W') return 'key-w';
    if (code === 'KeyA' || key === 'a' || key === 'A') return 'key-a';
    if (code === 'KeyS' || key === 's' || key === 'S') return 'key-s';
    if (code === 'KeyD' || key === 'd' || key === 'D') return 'key-d';
    if (code === 'Space' || key === ' ') return 'key-space';
    if (code === 'ShiftLeft' || code === 'ShiftRight') return 'key-shift';
    if (code === 'KeyE' || key === 'e') return 'key-e';
    if (code === 'KeyQ' || key === 'q') return 'key-q';
    if (code === 'ArrowUp') return 'key-up';
    if (code === 'ArrowDown') return 'key-down';
    if (code === 'ArrowLeft') return 'key-left';
    if (code === 'ArrowRight') return 'key-right';
    if (code === 'Escape') return 'key-esc';
    return null;
  }

  highlightKey(keyId, isActive) {
    if (!keyId) return;
    const el = document.getElementById(keyId);
    if (el) {
      if (isActive) {
        el.classList.add('key-pressed');
        if (window.sfx) window.sfx.click();
      } else {
        el.classList.remove('key-pressed');
      }
    }
  }

  bindGamepadPoll() {
    // Poll for physical Gamepads plugged into browser
    window.addEventListener("gamepadconnected", (e) => {
      const statusEl = document.getElementById('gamepad-detect-status');
      if (statusEl) {
        statusEl.innerHTML = `<span class="badge badge-success">✨ Controller Connected: ${e.gamepad.id.split('(')[0]}</span>`;
      }
    });

    window.addEventListener("gamepaddisconnected", () => {
      const statusEl = document.getElementById('gamepad-detect-status');
      if (statusEl) {
        statusEl.innerHTML = `<span class="badge badge-neutral">No physical controller connected (Click on buttons below to test!)</span>`;
      }
    });

    const pollGamepads = () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      for (const gp of gamepads) {
        if (gp) {
          // Check buttons
          gp.buttons.forEach((btn, index) => {
            const btnEl = document.querySelector(`[data-gp-btn="${index}"]`);
            if (btnEl) {
              if (btn.pressed) {
                btnEl.classList.add('active-gp-btn');
              } else {
                btnEl.classList.remove('active-gp-btn');
              }
            }
          });
        }
      }
      requestAnimationFrame(pollGamepads);
    };
    requestAnimationFrame(pollGamepads);
  }

  renderControllerExplainer(targetContainerId, controllerType = 'xbox') {
    this.currentControllerType = controllerType;
    const container = document.getElementById(targetContainerId);
    if (!container) return;

    const data = SILVER_DATA.controllerParts[controllerType] || SILVER_DATA.controllerParts.xbox;

    let html = `
      <div class="controller-interactive-wrapper">
        <div class="controller-tabs-row">
          <button class="tab-btn ${controllerType === 'xbox' ? 'active' : ''}" onclick="window.sim.renderControllerExplainer('${targetContainerId}', 'xbox')">
            🟢 Xbox & PC Style
          </button>
          <button class="tab-btn ${controllerType === 'playstation' ? 'active' : ''}" onclick="window.sim.renderControllerExplainer('${targetContainerId}', 'playstation')">
            🔵 PlayStation Style
          </button>
          <button class="tab-btn ${controllerType === 'switch' ? 'active' : ''}" onclick="window.sim.renderControllerExplainer('${targetContainerId}', 'switch')">
            🔴 Nintendo Switch Style
          </button>
        </div>

        <div class="controller-visual-layout">
          <!-- Interactive Controller SVG Canvas -->
          <div class="controller-svg-box">
            <div class="controller-hint-bubble">
              💡 <strong>Tip:</strong> Click on any button or stick below to learn what it does!
            </div>
            
            <div class="svg-gamepad-container" id="svg-gamepad">
              ${this.generateControllerSVG(controllerType)}
            </div>

            <div id="gamepad-detect-status" class="detect-status-bar">
              <span class="badge badge-neutral">🎮 Press buttons or click them above to inspect</span>
            </div>
          </div>

          <!-- Explanation Panel -->
          <div class="controller-info-box" id="controller-detail-card">
            <div class="info-card-header">
              <span class="info-icon">🕹️</span>
              <div>
                <h3 id="info-part-name">Left Thumbstick</h3>
                <span class="info-subtitle" id="info-part-purpose">Character Movement & Walking</span>
              </div>
            </div>
            <div class="info-card-body">
              <p id="info-part-detail" class="large-body-text">
                Gently push this small rubber stick in any direction you wish to walk. Pushing softly moves you slowly; pushing all the way lets your character run smoothly!
              </p>
              <div class="analogy-callout">
                <span class="analogy-icon">💡</span>
                <div>
                  <strong>Everyday Analogy:</strong>
                  <p id="info-part-analogy" style="margin: 4px 0 0 0;">Just like turning the steering wheel in your car or walking in a peaceful park.</p>
                </div>
              </div>
              <button class="tts-inline-btn" onclick="window.narrator.speak(document.getElementById('info-part-detail').textContent + ' ' + document.getElementById('info-part-analogy').textContent, document.getElementById('controller-detail-card'))">
                🔊 Read this explanation aloud
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  showButtonDetail(partCode) {
    const nameEl = document.getElementById('info-part-name');
    const purposeEl = document.getElementById('info-part-purpose');
    const detailEl = document.getElementById('info-part-detail');
    const analogyEl = document.getElementById('info-part-analogy');

    if (!nameEl) return;

    if (window.sfx) window.sfx.click();

    // Highlight SVG part
    document.querySelectorAll('.gp-clickable').forEach(el => el.classList.remove('selected-part'));
    const target = document.querySelector(`[data-part="${partCode}"]`);
    if (target) target.classList.add('selected-part');

    const details = {
      lstick: {
        name: "Left Thumbstick (L-Stick)",
        purpose: "Character Movement & Steering",
        detail: "This thumbstick moves your character around the world. Push gently forward to walk, or further forward to run. It lets you move in any 360-degree direction smoothly.",
        analogy: "Like walking your feet in whatever direction you wish to travel."
      },
      rstick: {
        name: "Right Thumbstick (R-Stick)",
        purpose: "Camera & Looking Around",
        detail: "This controls your eyes/camera view. Move it left or right to look around the landscape, or up and down to look at the sky or the path in front of you.",
        analogy: "Just like turning your head left and right to admire the scenery."
      },
      dpad: {
        name: "D-Pad (Directional Pad)",
        purpose: "Menu Browsing & Quick Item Select",
        detail: "The plus-shaped cross buttons. Used to scroll through menus one option at a time, or quickly switch your active tool (e.g. from a watering can to a fishing rod).",
        analogy: "Like the arrow keys on your TV remote control."
      },
      action: {
        name: "Action Buttons (A / B / X / Y)",
        purpose: "Primary Interaction (Talk, Jump, Confirm, Cancel)",
        detail: "The bottom button (A / Cross) is used to say 'Yes', talk to friendly neighbors, or jump. The right button (B / Circle) is 'Cancel' or 'Back'. Top and left buttons open your backpack or use tools.",
        analogy: "Like the 'Enter' and 'Escape' keys on a computer, or 'OK' and 'Back' on a phone."
      },
      triggers: {
        name: "Triggers (LT / RT) & Bumpers (LB / RB)",
        purpose: "Acceleration, Casting, and Actions",
        detail: "Curved levers where your index fingers rest comfortably on top. In driving games, the Right Trigger (RT) works like a gas pedal. In fishing games, it casts your fishing line!",
        analogy: "Like the gas and brake pedals in your car, or the trigger on a garden hose spray nozzle."
      },
      menu: {
        name: "Pause / Menu / Start Button",
        purpose: "Pause Game & Save Progress",
        detail: "Freezes the action instantly so you can step away, grab a glass of water, adjust the volume, or safely save your game.",
        analogy: "Like hitting the pause button on your DVD player or television remote."
      }
    };

    const info = details[partCode] || details.lstick;
    nameEl.textContent = info.name;
    purposeEl.textContent = info.purpose;
    detailEl.textContent = info.detail;
    analogyEl.textContent = info.analogy;
  }

  generateControllerSVG(type) {
    const isXbox = type === 'xbox';
    const isPS = type === 'playstation';
    const isSwitch = type === 'switch';

    const btnBottom = isXbox ? 'A' : (isPS ? '✕' : 'B');
    const btnRight = isXbox ? 'B' : (isPS ? '○' : 'A');
    const btnLeft = isXbox ? 'X' : (isPS ? '□' : 'Y');
    const btnTop = isXbox ? 'Y' : (isPS ? '△' : 'X');

    return `
      <svg viewBox="0 0 600 380" class="gamepad-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2a3342" />
            <stop offset="100%" stop-color="#18202d" />
          </linearGradient>
          <linearGradient id="gripGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b485d" />
            <stop offset="100%" stop-color="#141a24" />
          </linearGradient>
        </defs>

        <!-- Controller Body Silhouette -->
        <path d="M 170,90 C 240,80 360,80 430,90 C 490,100 560,180 540,320 C 530,370 470,360 440,300 C 400,240 370,240 300,240 C 230,240 200,240 160,300 C 130,360 70,370 60,320 C 40,180 110,100 170,90 Z" 
              fill="url(#bodyGrad)" stroke="#4a5d78" stroke-width="4" />

        <!-- Grips texture -->
        <path d="M 90,240 C 70,310 120,340 150,300" fill="none" stroke="#3b485d" stroke-width="8" stroke-linecap="round"/>
        <path d="M 510,240 C 530,310 480,340 450,300" fill="none" stroke="#3b485d" stroke-width="8" stroke-linecap="round"/>

        <!-- Top Triggers & Bumpers -->
        <g class="gp-clickable" data-part="triggers" onclick="window.sim.showButtonDetail('triggers')">
          <rect x="140" y="45" width="90" height="35" rx="10" fill="#3b485d" stroke="#60789b" stroke-width="3"/>
          <text x="185" y="68" fill="#e2e8f0" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">LB / LT</text>
          
          <rect x="370" y="45" width="90" height="35" rx="10" fill="#3b485d" stroke="#60789b" stroke-width="3"/>
          <text x="415" y="68" fill="#e2e8f0" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">RB / RT</text>
        </g>

        <!-- D-Pad (Left or Lower Left depending on console) -->
        <g class="gp-clickable" data-part="dpad" onclick="window.sim.showButtonDetail('dpad')">
          <g transform="translate(${isPS ? 180 : 190}, ${isPS ? 160 : 210})">
            <!-- Cross shape -->
            <rect x="-12" y="-38" width="24" height="76" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
            <rect x="-38" y="-12" width="76" height="24" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
            <circle cx="0" cy="0" r="8" fill="#0f172a"/>
            <text x="0" y="-18" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">▲</text>
            <text x="0" y="27" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">▼</text>
            <text x="-24" y="5" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">◀</text>
            <text x="24" y="5" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">▶</text>
          </g>
        </g>

        <!-- Left Thumbstick -->
        <g class="gp-clickable selected-part" data-part="lstick" onclick="window.sim.showButtonDetail('lstick')">
          <g transform="translate(${isPS ? 235 : 180}, ${isPS ? 225 : 155})">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#64748b" stroke-width="4"/>
            <circle cx="0" cy="0" r="28" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="0" cy="0" r="14" fill="#475569"/>
            <text x="0" y="5" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">L-STICK</text>
            <!-- direction arrows -->
            <path d="M 0,-24 L -4,-18 L 4,-18 Z" fill="#94a3b8" />
            <path d="M 0,24 L -4,18 L 4,18 Z" fill="#94a3b8" />
            <path d="M -24,0 L -18,-4 L -18,4 Z" fill="#94a3b8" />
            <path d="M 24,0 L 18,-4 L 18,4 Z" fill="#94a3b8" />
          </g>
        </g>

        <!-- Right Thumbstick -->
        <g class="gp-clickable" data-part="rstick" onclick="window.sim.showButtonDetail('rstick')">
          <g transform="translate(${isPS ? 365 : 365}, ${isPS ? 225 : 215})">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#64748b" stroke-width="4"/>
            <circle cx="0" cy="0" r="28" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="0" cy="0" r="14" fill="#475569"/>
            <text x="0" y="5" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">R-STICK</text>
            <!-- direction arrows -->
            <path d="M 0,-24 L -4,-18 L 4,-18 Z" fill="#94a3b8" />
            <path d="M 0,24 L -4,18 L 4,18 Z" fill="#94a3b8" />
            <path d="M -24,0 L -18,-4 L -18,4 Z" fill="#94a3b8" />
            <path d="M 24,0 L 18,-4 L 18,4 Z" fill="#94a3b8" />
          </g>
        </g>

        <!-- Center Menu / Pause Buttons -->
        <g class="gp-clickable" data-part="menu" onclick="window.sim.showButtonDetail('menu')">
          <circle cx="265" cy="140" r="12" fill="#334155" stroke="#64748b" stroke-width="2"/>
          <text x="265" y="144" fill="#e2e8f0" font-size="11" text-anchor="middle">☰</text>

          <circle cx="335" cy="140" r="12" fill="#334155" stroke="#64748b" stroke-width="2"/>
          <text x="335" y="145" fill="#e2e8f0" font-size="12" text-anchor="middle">▶</text>

          <!-- Center Logo -->
          <circle cx="300" cy="115" r="20" fill="#0f172a" stroke="#38bdf8" stroke-width="3" filter="url(#soft-glow)"/>
          <text x="300" y="121" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">🎮</text>
        </g>

        <!-- 4 Action Buttons -->
        <g class="gp-clickable" data-part="action" onclick="window.sim.showButtonDetail('action')">
          <g transform="translate(425, 155)">
            <!-- Top Button (Y/Triangle/X) -->
            <circle cx="0" cy="-28" r="15" fill="#1e293b" stroke="#eab308" stroke-width="3"/>
            <text x="0" y="-22" fill="#fef08a" font-family="sans-serif" font-weight="bold" font-size="15" text-anchor="middle">${btnTop}</text>

            <!-- Bottom Button (A/Cross/B) -->
            <circle cx="0" cy="28" r="15" fill="#1e293b" stroke="#22c55e" stroke-width="3"/>
            <text x="0" y="34" fill="#86efac" font-family="sans-serif" font-weight="bold" font-size="15" text-anchor="middle">${btnBottom}</text>

            <!-- Left Button (X/Square/Y) -->
            <circle cx="-28" cy="0" r="15" fill="#1e293b" stroke="#3b82f6" stroke-width="3"/>
            <text x="-28" y="6" fill="#93c5fd" font-family="sans-serif" font-weight="bold" font-size="15" text-anchor="middle">${btnLeft}</text>

            <!-- Right Button (B/Circle/A) -->
            <circle cx="28" cy="0" r="15" fill="#1e293b" stroke="#ef4444" stroke-width="3"/>
            <text x="28" y="6" fill="#fca5a5" font-family="sans-serif" font-weight="bold" font-size="15" text-anchor="middle">${btnRight}</text>
          </g>
        </g>
      </svg>
    `;
  }
}

const sim = new ControllerSimulator();
window.sim = sim;
