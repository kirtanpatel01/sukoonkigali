import { createUISFX, type UISFXPlayer, type CueName } from 'uisfx';

const SOUND_PREF_KEY = 'sukoon_sound_enabled';
const SOUND_VOLUME_KEY = 'sukoon_sound_volume';

let player: UISFXPlayer | null = null;
let isUnlocked = false;
let activeProcessingLoop: { stop: () => void } | null = null;

function getStoredPreference(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const val = localStorage.getItem(SOUND_PREF_KEY);
    return val !== null ? val === 'true' : true;
  } catch (e) {
    return true;
  }
}

function getStoredVolume(): number {
  if (typeof window === 'undefined') return 0.7;
  try {
    const val = localStorage.getItem(SOUND_VOLUME_KEY);
    return val !== null ? parseFloat(val) : 0.7;
  } catch (e) {
    return 0.7;
  }
}

/**
 * Get or initialize the singleton UISFX player with the 'zen' sound pack.
 */
export function getSoundPlayer(): UISFXPlayer | null {
  if (typeof window === 'undefined') return null;
  if (!player) {
    player = createUISFX({
      pack: 'zen',
      volume: getStoredVolume(),
      enabled: getStoredPreference()
    });
  }
  return player;
}

/**
 * Unlock Web Audio context from a user interaction gesture.
 */
export async function unlockAudio(): Promise<void> {
  if (isUnlocked || typeof window === 'undefined') return;
  const p = getSoundPlayer();
  if (p && typeof p.unlock === 'function') {
    try {
      await p.unlock();
      isUnlocked = true;
    } catch (e) {
      // Ignore audio context unlock errors
    }
  }
}

/**
 * Play a semantic sound cue (SSR-safe, unlocked-guarded).
 */
export function playSound(cue: CueName, options?: { volume?: number; playbackRate?: number }): void {
  if (typeof window === 'undefined') return;
  const p = getSoundPlayer();
  if (!p || !p.isEnabled()) return;

  try {
    p.play(cue, options);
  } catch (e) {
    // Ignore audio play errors
  }
}

/**
 * Start a loop sound (e.g. 'processing'). Returns a handle with stop().
 */
export function startSoundLoop(cue: 'processing' | 'loading' | 'connecting' | 'scanning' | 'streaming' | 'recording') {
  if (typeof window === 'undefined') return null;
  const p = getSoundPlayer();
  if (!p || !p.isEnabled()) return null;

  try {
    const handle = p.play(cue, { loop: true });
    return handle;
  } catch (e) {
    return null;
  }
}

/**
 * Start global processing loop for async forms.
 */
export function startProcessingLoop(): void {
  if (activeProcessingLoop) return;
  activeProcessingLoop = startSoundLoop('processing');
}

/**
 * Stop global processing loop for async forms.
 */
export function stopProcessingLoop(): void {
  if (activeProcessingLoop) {
    try {
      activeProcessingLoop.stop();
    } catch (e) {}
    activeProcessingLoop = null;
  }
}

/**
 * Stop all active sounds and loops.
 */
export function stopAllSounds(): void {
  stopProcessingLoop();
  if (player) {
    try {
      player.stopAll();
    } catch (e) {}
  }
}

/**
 * Check if sound effects are enabled.
 */
export function isSoundEnabled(): boolean {
  const p = getSoundPlayer();
  return p ? p.isEnabled() : getStoredPreference();
}

/**
 * Toggle or set sound effects enabled state with preference persistence.
 */
export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SOUND_PREF_KEY, enabled ? 'true' : 'false');
  } catch (e) {}

  const p = getSoundPlayer();
  if (p) {
    if (!enabled) {
      stopAllSounds();
    }
    p.setEnabled(enabled);
  }
}

/**
 * Update sound SFX volume (0.0 to 1.0).
 */
export function setSoundVolume(volume: number): void {
  if (typeof window === 'undefined') return;
  const clamped = Math.max(0, Math.min(1, volume));
  try {
    localStorage.setItem(SOUND_VOLUME_KEY, clamped.toString());
  } catch (e) {}

  const p = getSoundPlayer();
  if (p) {
    p.setVolume(clamped);
  }
}
