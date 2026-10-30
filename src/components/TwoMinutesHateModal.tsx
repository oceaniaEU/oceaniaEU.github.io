import React, { useState, useEffect } from 'react'
import { AlertOctagon, Flame, ShieldAlert, Heart, Radio, X } from 'lucide-react'
import { telescreenAudio } from '../utils/telescreenAudio'

interface TwoMinutesHateModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TwoMinutesHateModal: React.FC<TwoMinutesHateModalProps> = ({ isOpen, onClose }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(120)
  const [chantCount, setChantCount] = useState(0)
  const [phase, setPhase] = useState<'goldstein' | 'frenzy' | 'bigbrother'>('goldstein')

  useEffect(() => {
    if (!isOpen) return

    telescreenAudio.playHateSiren(3.0)
    setSecondsRemaining(120)
    setChantCount(0)
    setPhase('goldstein')

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setPhase('bigbrother')
          return 0
        }
        if (prev === 60) {
          setPhase('frenzy')
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen])

  if (!isOpen) return null

  const handleChant = () => {
    telescreenAudio.playClick()
    const nextCount = chantCount + 1
    setChantCount(nextCount)
    if (nextCount >= 12 && phase !== 'bigbrother') {
      setPhase('bigbrother')
      telescreenAudio.playTelescreenChime()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Background Strobe / CRT Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-80" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-red-950/30 via-transparent to-red-950/30 animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-3xl border-4 border-rose-600 bg-[#080203] p-6 sm:p-8 rounded-xl shadow-[0_0_80px_rgba(225,29,72,0.4)] text-rose-400 font-mono space-y-6">
        {/* Top Emergency Bar */}
        <div className="flex items-center justify-between border-b-2 border-rose-700 pb-3">
          <div className="flex items-center gap-2 text-rose-300 font-extrabold text-sm sm:text-base animate-pulse">
            <AlertOctagon className="w-6 h-6 text-rose-500" />
            <span>MANDATORY INSTRUCTION · ALL ACTIVITY SUSPENDED</span>
          </div>

          <button
            onClick={() => {
              telescreenAudio.playClick()
              onClose()
            }}
            className="p-1 rounded border border-rose-800 text-rose-400 hover:text-white hover:bg-rose-900 transition-colors"
            title="Terminate emergency broadcast"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Hate Broadcast Screen */}
        <div className="border-2 border-rose-800 bg-black p-6 rounded-lg text-center space-y-4 relative overflow-hidden">
          <div className="text-xs text-rose-500 font-bold tracking-widest uppercase">
            COMPULSORY BROADCAST // CYCLE 14:00 HOURS
          </div>

          {phase === 'goldstein' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Goldstein Graphic Mock */}
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-dashed border-rose-600 flex items-center justify-center bg-rose-950/30 text-rose-400">
                <span className="text-5xl font-serif">⚠️</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-400 tracking-wider">
                EMMANUEL GOLDSTEIN
              </h2>
              <div className="text-xs text-rose-300 max-w-lg mx-auto leading-relaxed">
                THE ENEMY OF THE PEOPLE. PRIME ARCHITECT OF THOUGHTCRIME AND BETRAYER OF INGSOC.
                HIS WORDS DEMAND THE IMMEDIATE SURGE OF CIVIC LOATHING.
              </div>
              <p className="text-sm font-bold text-rose-200 uppercase tracking-widest animate-pulse">
                "HE SPEAKS SLANDERS AGAINST BIG BROTHER! CONDEMN THE TRAITOR!"
              </p>
            </div>
          )}

          {phase === 'frenzy' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-rose-500 flex items-center justify-center bg-rose-950 text-rose-200 animate-spin">
                <Flame className="w-16 h-16 text-rose-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-rose-200 uppercase tracking-widest animate-bounce">
                HYSTERICAL CONDEMNATION PEAK
              </h2>
              <div className="text-sm text-rose-300">
                DISCIPLINE YOUR MINDS! VENT THE VENOM AGAINST THE BETRAYERS OF AIRSTRIP ONE!
              </div>
            </div>
          )}

          {phase === 'bigbrother' && (
            <div className="space-y-4 animate-fadeIn text-emerald-400">
              <div className="w-36 h-36 mx-auto rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-950/40 text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                <span className="text-6xl">👁️</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tracking-wider text-phosphor">
                BIG BROTHER
              </h2>
              <div className="text-sm text-emerald-300 max-w-md mx-auto leading-relaxed">
                THE SAVIOR. THE PROTECTOR. CALM FLOWS ACROSS THE CITIZENRY. YOU ARE SAFE IN HIS EMBRACE.
              </div>
              <div className="p-3 bg-emerald-950/50 border border-emerald-800 rounded text-xs text-emerald-200">
                LOYALTY COEFFICIENT: 100% CERTIFIED ORTHODOX. COMPLIANCE RECORDED IN MINILUV LEDGER.
              </div>
            </div>
          )}
        </div>

        {/* Interactive Chant Button & Meter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>REMAINING AIRTIME: {secondsRemaining}s</span>
            <span>CIVIC FERVOR INDEX: {chantCount * 8}%</span>
          </div>

          <div className="w-full bg-rose-950/70 border border-rose-800 h-3 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                phase === 'bigbrother' ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
              style={{ width: `${Math.min(100, chantCount * 8.5)}%` }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleChant}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-black font-black text-sm tracking-wider uppercase transition-transform active:scale-95 shadow-lg shadow-rose-600/30"
            >
              CHANT WITH CIVIC FERVOR: "B-B! ... B-B!"
            </button>

            <button
              onClick={() => {
                telescreenAudio.playClick()
                onClose()
              }}
              className="w-full sm:w-auto px-4 py-3 rounded-lg bg-black border border-rose-800 hover:border-rose-600 text-rose-300 text-xs font-bold transition-colors"
            >
              Resume Standard Broadcast
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
