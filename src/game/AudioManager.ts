const files = {
  click: 'ui-click.mp3', on: 'checkbox-on.mp3', off: 'checkbox-off.mp3',
  success: 'success.mp3', hint: 'hint.mp3', lock: 'platform-lock.mp3',
  hit: 'wall-hit.mp3', pass: 'wall-pass.mp3', touch: 'touch-activate.mp3',
  door: 'door-open.mp3', laser: 'laser-loop.mp3', laserOff: 'laser-off.mp3',
  finish: 'finish.mp3', ambient: 'ambient-lab.mp3',
} as const;

export type SoundName = keyof typeof files;

export class AudioManager {
  private enabled = true;
  private cache = new Map<SoundName, HTMLAudioElement>();

  setEnabled(value: boolean) {
    this.enabled = value;
    if (!value) this.cache.forEach((audio) => { audio.pause(); audio.currentTime = 0; });
  }

  play(name: SoundName, options: { loop?: boolean; volume?: number } = {}) {
    if (!this.enabled) return;
    try {
      const audio = this.cache.get(name) ?? new Audio(`/src/assets/audio/${files[name]}`);
      this.cache.set(name, audio);
      audio.loop = options.loop ?? false;
      audio.volume = options.volume ?? 0.55;
      audio.currentTime = 0;
      void audio.play().catch(() => undefined);
    } catch { /* Audio is intentionally optional. */ }
  }

  stop(name: SoundName) {
    const audio = this.cache.get(name);
    if (audio) { audio.pause(); audio.currentTime = 0; }
  }
}

export const audioManager = new AudioManager();
