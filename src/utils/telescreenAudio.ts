// Web Audio API synthesizer for authentic 1984 telescreen ambiance, sirens, typewriters, and memory hole incineration

class TelescreenAudioEngine {
  private ctx: AudioContext | null = null
  private humGain: GainNode | null = null
  private humOsc: OscillatorNode | null = null
  private isMuted: boolean = true

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted
    if (!this.isMuted) {
      this.initCtx()
      this.startCrtHum()
      this.playTelescreenChime()
    } else {
      this.stopCrtHum()
    }
    return !this.isMuted
  }

  public getIsPlaying(): boolean {
    return !this.isMuted
  }

  public playClick() {
    if (this.isMuted) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'square'
      osc.frequency.setValueAtTime(440, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start()
      osc.stop(this.ctx.currentTime + 0.05)
    } catch {
      // Audio fallback
    }
  }

  public playTypewriterKey() {
    if (this.isMuted) return
    this.initCtx()
    if (!this.ctx) return

    try {
      // Metallic thud + short noise burst
      const now = this.ctx.currentTime
      const bufferSize = this.ctx.sampleRate * 0.03
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
      const output = noiseBuffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1
      }

      const whiteNoise = this.ctx.createBufferSource()
      whiteNoise.buffer = noiseBuffer

      const filter = this.ctx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(1400 + Math.random() * 400, now)
      filter.Q.setValueAtTime(4, now)

      const gain = this.ctx.createGain()
      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03)

      whiteNoise.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      whiteNoise.start(now)
      whiteNoise.stop(now + 0.035)

      // Low impact resonance
      const osc = this.ctx.createOscillator()
      const oscGain = this.ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(180, now)
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.04)

      oscGain.gain.setValueAtTime(0.06, now)
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

      osc.connect(oscGain)
      oscGain.connect(this.ctx.destination)
      osc.start(now)
      osc.stop(now + 0.045)
    } catch {
      // Audio fallback
    }
  }

  public playBell() {
    if (this.isMuted) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const now = this.ctx.currentTime
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(1760, now) // High metallic ping
      gain.gain.setValueAtTime(0.09, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5)

      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start(now)
      osc.stop(now + 0.55)
    } catch {
      // Ignore
    }
  }

  public playMemoryHoleWhoosh() {
    if (this.isMuted) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const now = this.ctx.currentTime
      const bufferSize = this.ctx.sampleRate * 0.8
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
      const output = noiseBuffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1
      }

      const noise = this.ctx.createBufferSource()
      noise.buffer = noiseBuffer

      const filter = this.ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(800, now)
      filter.frequency.exponentialRampToValueAtTime(180, now + 0.75)

      const gain = this.ctx.createGain()
      gain.gain.setValueAtTime(0.01, now)
      gain.gain.linearRampToValueAtTime(0.12, now + 0.2)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.78)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      noise.start(now)
      noise.stop(now + 0.8)
    } catch {
      // Audio fallback
    }
  }

  public playTelescreenChime() {
    if (this.isMuted) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const now = this.ctx.currentTime
      // Iconic totalitarian discordant chime (low brass-like triad)
      const freqs = [330, 440, 523.25]
      freqs.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator()
        const gain = this.ctx!.createGain()
        osc.type = 'sawtooth'
        osc.frequency.setValueAtTime(freq, now + i * 0.09)

        gain.gain.setValueAtTime(0.035, now + i * 0.09)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.09 + 0.6)

        osc.connect(gain)
        gain.connect(this.ctx!.destination)
        osc.start(now + i * 0.09)
        osc.stop(now + i * 0.09 + 0.65)
      })
    } catch {
      // Audio fallback
    }
  }

  public playHateSiren(durationSec = 2.5) {
    if (this.isMuted) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const now = this.ctx.currentTime
      const osc1 = this.ctx.createOscillator()
      const osc2 = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc1.type = 'sawtooth'
      osc2.type = 'sawtooth'

      // Rising and falling air-raid telescreen siren
      osc1.frequency.setValueAtTime(450, now)
      osc1.frequency.linearRampToValueAtTime(900, now + 0.6)
      osc1.frequency.linearRampToValueAtTime(450, now + 1.2)
      osc1.frequency.linearRampToValueAtTime(900, now + 1.8)
      osc1.frequency.linearRampToValueAtTime(300, now + durationSec)

      osc2.frequency.setValueAtTime(454, now)
      osc2.frequency.linearRampToValueAtTime(908, now + 0.6)
      osc2.frequency.linearRampToValueAtTime(454, now + 1.2)
      osc2.frequency.linearRampToValueAtTime(908, now + 1.8)
      osc2.frequency.linearRampToValueAtTime(304, now + durationSec)

      gain.gain.setValueAtTime(0.05, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + durationSec)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(this.ctx.destination)

      osc1.start(now)
      osc2.start(now)
      osc1.stop(now + durationSec)
      osc2.stop(now + durationSec)
    } catch {
      // Audio fallback
    }
  }

  public startCrtHum() {
    if (this.isMuted) return
    this.initCtx()
    if (!this.ctx) return

    try {
      this.stopCrtHum()
      this.humGain = this.ctx.createGain()
      this.humGain.gain.setValueAtTime(0.007, this.ctx.currentTime)
      this.humGain.connect(this.ctx.destination)

      this.humOsc = this.ctx.createOscillator()
      this.humOsc.type = 'sine'
      this.humOsc.frequency.setValueAtTime(50, this.ctx.currentTime) // 50 Hz European/Oceania mains hum
      this.humOsc.connect(this.humGain)
      this.humOsc.start()
    } catch {
      // Audio fallback
    }
  }

  public stopCrtHum() {
    try {
      if (this.humOsc) {
        this.humOsc.stop()
        this.humOsc.disconnect()
        this.humOsc = null
      }
      if (this.humGain) {
        this.humGain.disconnect()
        this.humGain = null
      }
    } catch {
      // Audio fallback
    }
  }
}

export const telescreenAudio = new TelescreenAudioEngine()
