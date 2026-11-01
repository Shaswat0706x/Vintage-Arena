/**
 * Vintage Arena - Interactive Practice Zone (Mini-Trainers)
 * Safe, zero-pressure training mini-games to build muscle memory, mouse precision, and key familiarity.
 */

class MiniTrainers {
  constructor() {
    this.bubbleCanvas = null;
    this.bubbleCtx = null;
    this.bubbles = [];
    this.bubbleScore = 0;
    this.bubbleRunning = false;
    this.bubbleAnimId = null;

    // Garden Trainer
    this.gardenGridSize = 6;
    this.playerPos = { x: 0, y: 0 };
    this.stars = [];
    this.starsCollected = 0;
    this.totalStars = 5;

    // Key Match Trainer
    this.currentMatchKey = null;
    this.matchScore = 0;
    this.matchKeysList = [
      { key: ' ', code: 'Space', label: 'SPACEBAR', desc: 'Used for Jumping or Pausing in many games' },
      { key: 'w', code: 'KeyW', label: 'W Key (or ↑ Up Arrow)', desc: 'Move Forward / Walk Up' },
      { key: 's', code: 'KeyS', label: 'S Key (or ↓ Down Arrow)', desc: 'Move Backward / Walk Down' },
      { key: 'a', code: 'KeyA', label: 'A Key (or ← Left Arrow)', desc: 'Move Left / Steer Left' },
      { key: 'd', code: 'KeyD', label: 'D Key (or → Right Arrow)', desc: 'Move Right / Steer Right' },
      { key: 'e', code: 'KeyE', label: 'E Key', desc: 'Interact, Talk, or Open Doors' },
      { key: 'Enter', code: 'Enter', label: 'ENTER Key', desc: 'Confirm Selection or Send Message' }
    ];
  }

  /* ==========================================================
     1. BUBBLE POP (Mouse Aim & Click Trainer)
     ========================================================== */
  initBubbleTrainer(canvasId, scoreElId) {
    this.bubbleCanvas = document.getElementById(canvasId);
    if (!this.bubbleCanvas) return;
    this.bubbleCtx = this.bubbleCanvas.getContext('2d');
    this.bubbleScoreEl = document.getElementById(scoreElId);
    this.bubbleScore = 0;
    this.updateBubbleScore();

    // Adjust canvas size
    const rect = this.bubbleCanvas.parentElement.getBoundingClientRect();
    this.bubbleCanvas.width = rect.width || 600;
    this.bubbleCanvas.height = 340;

    this.bubbles = [];
    for (let i = 0; i < 6; i++) {
      this.spawnBubble();
    }

    this.bubbleCanvas.onmousedown = (e) => this.handleBubbleClick(e);
    this.bubbleRunning = true;
    this.animateBubbles();
  }

  spawnBubble() {
    if (!this.bubbleCanvas) return;
    const colors = ['#60a5fa', '#34d399', '#f472b6', '#fbbf24', '#a78bfa', '#38bdf8'];
    const radius = Math.random() * 20 + 26; // nice large comfortable target
    this.bubbles.push({
      x: Math.random() * (this.bubbleCanvas.width - radius * 2) + radius,
      y: this.bubbleCanvas.height + radius + Math.random() * 50,
      radius: radius,
      speedY: Math.random() * 0.8 + 0.5, // gentle float
      speedX: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.85,
      popped: false,
      popAnim: 0
    });
  }

  handleBubbleClick(e) {
    const rect = this.bubbleCanvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    let hit = false;
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      if (b.popped) continue;

      const dist = Math.hypot(clickX - b.x, clickY - b.y);
      if (dist <= b.radius) {
        b.popped = true;
        hit = true;
        this.bubbleScore += 10;
        this.updateBubbleScore();
        if (window.sfx) window.sfx.pop();
        if (window.app) window.app.addXP(5);
        break;
      }
    }

    if (!hit) {
      if (window.sfx) window.sfx.softNotice();
    }
  }

  updateBubbleScore() {
    if (this.bubbleScoreEl) {
      this.bubbleScoreEl.textContent = `${this.bubbleScore} Points`;
    }
  }

  animateBubbles() {
    if (!this.bubbleRunning || !this.bubbleCtx) return;

    this.bubbleCtx.clearRect(0, 0, this.bubbleCanvas.width, this.bubbleCanvas.height);

    // Background gradient
    const bgGrad = this.bubbleCtx.createLinearGradient(0, 0, 0, this.bubbleCanvas.height);
    bgGrad.addColorStop(0, '#0f172a');
    bgGrad.addColorStop(1, '#1e293b');
    this.bubbleCtx.fillStyle = bgGrad;
    this.bubbleCtx.fillRect(0, 0, this.bubbleCanvas.width, this.bubbleCanvas.height);

    // Update and draw bubbles
    for (let i = 0; i < this.bubbles.length; i++) {
      const b = this.bubbles[i];

      if (b.popped) {
        b.popAnim += 0.1;
        b.alpha -= 0.08;
        this.bubbleCtx.beginPath();
        this.bubbleCtx.arc(b.x, b.y, b.radius * (1 + b.popAnim), 0, Math.PI * 2);
        this.bubbleCtx.strokeStyle = b.color;
        this.bubbleCtx.lineWidth = 3;
        this.bubbleCtx.stroke();
      } else {
        b.y -= b.speedY;
        b.x += b.speedX;

        // Draw bubble body
        this.bubbleCtx.save();
        this.bubbleCtx.beginPath();
        this.bubbleCtx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        this.bubbleCtx.fillStyle = b.color + '44';
        this.bubbleCtx.fill();
        this.bubbleCtx.strokeStyle = b.color;
        this.bubbleCtx.lineWidth = 2.5;
        this.bubbleCtx.stroke();

        // Shiny reflection highlight
        this.bubbleCtx.beginPath();
        this.bubbleCtx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.3, 0, Math.PI * 2);
        this.bubbleCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        this.bubbleCtx.fill();
        this.bubbleCtx.restore();

        // Recycle if floated off top
        if (b.y < -b.radius) {
          b.y = this.bubbleCanvas.height + b.radius;
          b.x = Math.random() * (this.bubbleCanvas.width - b.radius * 2) + b.radius;
        }
      }
    }

    // Clean up popped bubbles and spawn new ones
    this.bubbles = this.bubbles.filter(b => b.alpha > 0);
    while (this.bubbles.length < 6) {
      this.spawnBubble();
    }

    this.bubbleAnimId = requestAnimationFrame(() => this.animateBubbles());
  }

  stopBubbleTrainer() {
    this.bubbleRunning = false;
    if (this.bubbleAnimId) {
      cancelAnimationFrame(this.bubbleAnimId);
    }
  }

  /* ==========================================================
     2. PIP'S GARDEN (WASD / Arrow Keys Movement Trainer)
     ========================================================== */
  initGardenTrainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.playerPos = { x: 0, y: 0 };
    this.starsCollected = 0;
    this.stars = [
      { x: 1, y: 2, collected: false },
      { x: 3, y: 0, collected: false },
      { x: 4, y: 4, collected: false },
      { x: 2, y: 5, collected: false },
      { x: 5, y: 2, collected: false }
    ];

    this.renderGardenGrid(container);
    this.bindGardenControls();
  }

  renderGardenGrid(container) {
    let gridHtml = `<div class="garden-grid" id="garden-grid-board">`;

    for (let y = 0; y < this.gardenGridSize; y++) {
      for (let x = 0; x < this.gardenGridSize; x++) {
        const isPlayer = this.playerPos.x === x && this.playerPos.y === y;
        const star = this.stars.find(s => s.x === x && s.y === y && !s.collected);
        
        let cellContent = '';
        let cellClass = 'garden-cell';

        if (isPlayer) {
          cellContent = '<span class="avatar-pip">🤖</span>';
          cellClass += ' cell-player';
        } else if (star) {
          cellContent = '<span class="collectible-star">⭐</span>';
          cellClass += ' cell-star';
        } else {
          // decorative grass/flowers
          if ((x + y) % 3 === 0) cellContent = '<span class="deco-flower">🌸</span>';
          else if ((x + y) % 5 === 0) cellContent = '<span class="deco-flower">🌿</span>';
        }

        gridHtml += `<div class="${cellClass}" data-x="${x}" data-y="${y}">${cellContent}</div>`;
      }
    }

    gridHtml += `</div>`;

    let statusHtml = `
      <div class="garden-status-bar">
        <div class="garden-stars-count">
          <span>Stars Collected: </span>
          <strong>${this.starsCollected} / ${this.totalStars}</strong>
        </div>
        <div class="garden-key-hints">
          Use <strong>W/A/S/D</strong> or <strong>Arrow Keys</strong> (or touch buttons below)
        </div>
      </div>

      <!-- On-Screen D-Pad / Touch Arrows for convenience -->
      <div class="onscreen-dpad">
        <div class="dpad-row">
          <button class="dpad-btn" onclick="window.trainers.moveGardenPlayer(0, -1)" title="Move Up">⬆️ Up (W)</button>
        </div>
        <div class="dpad-row">
          <button class="dpad-btn" onclick="window.trainers.moveGardenPlayer(-1, 0)" title="Move Left">⬅️ Left (A)</button>
          <button class="dpad-btn" onclick="window.trainers.moveGardenPlayer(0, 1)" title="Move Down">⬇️ Down (S)</button>
          <button class="dpad-btn" onclick="window.trainers.moveGardenPlayer(1, 0)" title="Move Right">➡️ Right (D)</button>
        </div>
      </div>
    `;

    container.innerHTML = gridHtml + statusHtml;

    if (this.starsCollected >= this.totalStars) {
      this.showGardenVictory(container);
    }
  }

  bindGardenControls() {
    if (this.gardenKeyHandler) {
      window.removeEventListener('keydown', this.gardenKeyHandler);
    }

    this.gardenKeyHandler = (e) => {
      // Only react if garden container is currently in viewport
      const garden = document.getElementById('garden-trainer-container');
      if (!garden) return;

      let dx = 0, dy = 0;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') { dy = -1; e.preventDefault(); }
      else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') { dy = 1; e.preventDefault(); }
      else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') { dx = -1; e.preventDefault(); }
      else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') { dx = 1; e.preventDefault(); }

      if (dx !== 0 || dy !== 0) {
        this.moveGardenPlayer(dx, dy);
      }
    };

    window.addEventListener('keydown', this.gardenKeyHandler);
  }

  moveGardenPlayer(dx, dy) {
    const newX = Math.max(0, Math.min(this.gardenGridSize - 1, this.playerPos.x + dx));
    const newY = Math.max(0, Math.min(this.gardenGridSize - 1, this.playerPos.y + dy));

    if (newX !== this.playerPos.x || newY !== this.playerPos.y) {
      this.playerPos.x = newX;
      this.playerPos.y = newY;
      if (window.sfx) window.sfx.step();

      // Check if stepped on a star
      const foundStar = this.stars.find(s => s.x === newX && s.y === newY && !s.collected);
      if (foundStar) {
        foundStar.collected = true;
        this.starsCollected++;
        if (window.sfx) window.sfx.success();
        if (window.app) window.app.addXP(20);
      }

      const container = document.getElementById('garden-trainer-container');
      if (container) this.renderGardenGrid(container);
    }
  }

  showGardenVictory(container) {
    const victoryBanner = document.createElement('div');
    victoryBanner.className = 'garden-victory-modal';
    victoryBanner.innerHTML = `
      <div class="victory-content">
        <span class="victory-icon">🎉 🌟 🏆</span>
        <h3>Wonderful Job, Explorer!</h3>
        <p class="large-body-text">You successfully guided Pip through the entire garden using directional movement keys!</p>
        <button class="btn btn-primary" onclick="window.trainers.initGardenTrainer('garden-trainer-container')">
          🔄 Play Again & Practice
        </button>
      </div>
    `;
    container.appendChild(victoryBanner);
    if (window.sfx) window.sfx.fanfare();
    if (window.app) window.app.unlockBadge('garden_master', '🌸 Master of Garden Navigation');
  }

  /* ==========================================================
     3. BUTTON MATCH & RHYTHM (Key Familiarity Practice)
     ========================================================== */
  initKeyMatchTrainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.matchScore = 0;
    this.nextMatchPrompt();
    this.renderKeyMatch(container);
    this.bindKeyMatchListener();
  }

  nextMatchPrompt() {
    const randomIndex = Math.floor(Math.random() * this.matchKeysList.length);
    this.currentMatchKey = this.matchKeysList[randomIndex];
  }

  renderKeyMatch(container) {
    if (!this.currentMatchKey) return;

    container.innerHTML = `
      <div class="keymatch-card">
        <div class="match-score-badge">Completed: <strong>${this.matchScore}</strong></div>
        <div class="match-prompt-box">
          <p class="prompt-sub">Please press the following key on your keyboard:</p>
          <div class="target-key-display animate-pulse-gentle">
            <span class="target-key-label">${this.currentMatchKey.label}</span>
          </div>
          <p class="target-key-explanation">${this.currentMatchKey.desc}</p>
        </div>

        <div class="match-encouragement" id="match-feedback">
          💡 Take your time! There is no time limit.
        </div>

        <div class="match-onscreen-help">
          <p>Or click this button directly if you prefer:</p>
          <button class="btn btn-secondary" onclick="window.trainers.handleKeyMatchPress('${this.currentMatchKey.code}', true)">
            🖱️ Click to Simulate '${this.currentMatchKey.label}'
          </button>
        </div>
      </div>
    `;
  }

  bindKeyMatchListener() {
    if (this.matchKeyHandler) {
      window.removeEventListener('keydown', this.matchKeyHandler);
    }

    this.matchKeyHandler = (e) => {
      this.handleKeyMatchPress(e.code, false, e.key);
    };

    window.addEventListener('keydown', this.matchKeyHandler);
  }

  handleKeyMatchPress(code, isManualClick = false, rawKey = null) {
    if (!this.currentMatchKey) return;

    const isMatch = (code === this.currentMatchKey.code) || 
                    (rawKey && rawKey.toLowerCase() === this.currentMatchKey.key.toLowerCase());

    const feedbackEl = document.getElementById('match-feedback');

    if (isMatch) {
      this.matchScore++;
      if (window.sfx) window.sfx.success();
      if (window.app) window.app.addXP(10);

      if (feedbackEl) {
        feedbackEl.innerHTML = `<span class="text-success font-bold">✨ Perfect! That's correct!</span>`;
      }

      setTimeout(() => {
        this.nextMatchPrompt();
        const container = document.getElementById('keymatch-trainer-container');
        if (container) this.renderKeyMatch(container);
      }, 700);
    } else if (!isManualClick) {
      if (feedbackEl) {
        feedbackEl.innerHTML = `<span class="text-warning">You pressed a different key. Try finding <strong>${this.currentMatchKey.label}</strong>!</span>`;
      }
      if (window.sfx) window.sfx.softNotice();
    }
  }
}

const trainers = new MiniTrainers();
window.trainers = trainers;
