/**
 * Vintage Arena Voice Assistant / Text-To-Speech Engine
 * Leverages native Web Speech API to narrate lessons in multiple languages.
 */

class VoiceNarrator {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.currentUtterance = null;
    this.isPlaying = false;
    this.rate = 0.92; // Slightly slower, clear pace for seniors
    this.pitch = 1.0;
    this.currentLangCode = 'en-US';
    this.activeElement = null;
    this.voices = [];
    
    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  setLanguage(langCode) {
    this.currentLangCode = langCode || 'en-US';
  }

  getBestVoice() {
    if (!this.voices || this.voices.length === 0) {
      if (this.synth) this.voices = this.synth.getVoices();
    }
    
    const prefix = this.currentLangCode.split('-')[0];
    const matchingVoices = this.voices.filter(v => v.lang.startsWith(prefix));

    if (matchingVoices.length > 0) {
      // Prefer Natural / Google / High-Quality voices
      const naturalVoice = matchingVoices.find(v => 
        v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Neural') || v.name.includes('Samantha') || v.name.includes('Premium')
      );
      return naturalVoice || matchingVoices[0];
    }

    return this.voices[0] || null;
  }

  speak(text, elementToHighlight = null, onCompleteCallback = null) {
    if (!this.synth) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    this.stop();

    if (!text || text.trim() === "") return;

    const cleanText = text
      .replace(/[#*_`]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
    utterance.lang = this.currentLangCode;
    
    const voice = this.getBestVoice();
    if (voice) utterance.voice = voice;

    if (elementToHighlight) {
      this.activeElement = elementToHighlight;
      this.activeElement.classList.add('tts-highlight');
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      this.updateUIState(true);
    };

    utterance.onend = () => {
      this.cleanup();
      if (onCompleteCallback) onCompleteCallback();
    };

    utterance.onerror = () => {
      this.cleanup();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  pause() {
    if (this.synth && this.synth.speaking) {
      this.synth.pause();
      this.isPlaying = false;
      this.updateUIState(false, true);
    }
  }

  resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.isPlaying = true;
      this.updateUIState(true);
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.cleanup();
  }

  cleanup() {
    this.isPlaying = false;
    if (this.activeElement) {
      this.activeElement.classList.remove('tts-highlight');
      this.activeElement = null;
    }
    this.updateUIState(false);
  }

  updateUIState(active, paused = false) {
    const bar = document.getElementById('global-tts-bar');
    const playBtn = document.getElementById('tts-pause-btn');
    const statusText = document.getElementById('tts-status-text');
    
    if (bar && playBtn && statusText) {
      if (active) {
        bar.classList.add('active');
        playBtn.innerHTML = '⏸️ Pause';
        statusText.textContent = '🔊 Reading aloud to you...';
      } else if (paused) {
        bar.classList.add('active');
        playBtn.innerHTML = '▶️ Resume';
        statusText.textContent = '⏸️ Narration paused';
      } else {
        bar.classList.remove('active');
        playBtn.innerHTML = '🔊 Read Aloud';
        statusText.textContent = 'Ready to read';
      }
    }
  }
}

const narrator = new VoiceNarrator();
window.narrator = narrator;
