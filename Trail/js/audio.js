/**
 * Vintage Arena - Audio Synthesizer
 * Generates tactile gaming sound effects and dramatic title screen transitions.
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.35;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound(forceState) {
    this.enabled = forceState !== undefined ? forceState : !this.enabled;
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gainNode.gain.setValueAtTime(gainVal * this.volume, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  // Tactical click
  click() {
    this.playTone(620, 'triangle', 0.08, 0.2);
  }

  // Subtle gaming UI hover blip
  hover() {
    if (!this.enabled) return;
    this.playTone(1350, 'sine', 0.03, 0.04);
  }

  // Quest step progression chime
  questStep() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'sine', 0.12, 0.15);
        }, idx * 60);
      });
    } catch (e) {}
  }

  // Title Screen Lock-in & Start transition (Bass drop + chord)
  startTransition() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      // Deep sub-bass drop
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sawtooth';
      subOsc.frequency.setValueAtTime(140, now);
      subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.8);
      subGain.gain.setValueAtTime(0.4 * this.volume, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.9);

      // Sci-fi high ping chime
      const ping = this.ctx.createOscillator();
      const pingGain = this.ctx.createGain();
      ping.type = 'sine';
      ping.frequency.setValueAtTime(880, now + 0.1);
      ping.frequency.exponentialRampToValueAtTime(1760, now + 0.5);
      pingGain.gain.setValueAtTime(0.25 * this.volume, now + 0.1);
      pingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      ping.connect(pingGain);
      pingGain.connect(this.ctx.destination);
      ping.start(now + 0.1);
      ping.stop(now + 0.6);
    } catch (e) {}
  }

  // Success fanfare
  fanfare() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'sawtooth', 0.35, 0.25);
        }, idx * 100);
      });
    } catch (e) {}
  }

  success() {
    this.playTone(880, 'sine', 0.2, 0.2);
  }
}

const sfx = new SoundEffects();
window.sfx = sfx;
