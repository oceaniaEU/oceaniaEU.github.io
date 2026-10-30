import React, { useState } from 'react'
import { Lock, AlertOctagon, ShieldAlert, Globe2, Hammer, Eye } from 'lucide-react'
import { telescreenAudio } from '../utils/telescreenAudio'

interface RestrictedZoneViewProps {
  type: 'archives' | 'foreign'
}

export const RestrictedZoneView: React.FC<RestrictedZoneViewProps> = ({ type }) => {
  const [accessAttempted, setAccessAttempted] = useState(false)
  const [passcode, setPasscode] = useState('')

  const handleAttemptAccess = (e: React.FormEvent) => {
    e.preventDefault()
    telescreenAudio.playHateSiren(1.0)
    setAccessAttempted(true)
    setPasscode('')
  }

  if (type === 'archives') {
    return (
      <div className="space-y-6 animate-fadeIn">
        {/* Archives Restricted Screen */}
        <div className="border-4 border-rose-800 bg-[#0a0204] p-8 rounded-xl text-center space-y-6 shadow-[0_0_60px_rgba(225,29,72,0.2)]">
          <div className="w-20 h-20 mx-auto rounded-full border-4 border-dashed border-rose-600 flex items-center justify-center text-rose-500 bg-rose-950/40">
            <Lock className="w-10 h-10 animate-pulse" />
          </div>

          <div className="inline-block p-4 stamp-classified text-center">
            <div className="text-xl sm:text-2xl font-black tracking-widest text-crimson-classified uppercase">
              RESTRICTED — INNER PARTY CLEARANCE ONLY
            </div>
            <div className="text-xs font-bold text-rose-400 mt-1 uppercase">
              PENAL CODE ARTICLE 7-B // PROHIBITED PUBLIC REPOSITORY
            </div>
          </div>

          <div className="max-w-xl mx-auto space-y-2 text-xs sm:text-sm text-rose-300 leading-relaxed font-mono">
            <p>
              The Central National Archives of Airstrip One are strictly hermetic. Under Party Doctrine, the past exists solely in memory and in the continuously updated records of the Ministry of Truth.
            </p>
            <p className="text-rose-400/80 italic">
              "Any unauthorized inquiry into obsolete periodicals, non-rectified newspapers, or historical records prior to 1960 constitutes aggravated Thoughtcrime."
            </p>
          </div>

          {/* Redacted Archival Sample Preview */}
          <div className="max-w-md mx-auto p-4 bg-black border border-rose-900 rounded text-left font-mono text-xs text-rose-400 space-y-2">
            <div className="text-[10px] text-rose-600 font-bold uppercase">Archival Excerpt // DECLASSIFIED FRAGMENT:</div>
            <p className="leading-loose">
              "In the year <span className="bg-rose-900 text-rose-900 select-none px-2 py-0.5">████</span>, the revolutionary council led by Comrade <span className="bg-rose-900 text-rose-900 select-none px-4 py-0.5">██████████</span> met at <span className="bg-rose-900 text-rose-900 select-none px-3 py-0.5">██████</span> to sign the <span className="bg-rose-900 text-rose-900 select-none px-5 py-0.5">████████████</span>. All signatories were subsequent <span className="bg-rose-900 text-rose-900 select-none px-4 py-0.5">████████</span>."
            </p>
          </div>

          {/* Emergency Bypass Console */}
          <div className="max-w-sm mx-auto pt-2 space-y-3">
            <form onSubmit={handleAttemptAccess} className="flex gap-2">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Inner Party Cipher Key..."
                className="flex-1 px-3 py-2 bg-black border border-rose-800 rounded text-xs text-rose-200 placeholder-rose-800 focus:outline-none focus:border-rose-500 font-mono"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-rose-950 border border-rose-600 hover:bg-rose-900 text-rose-200 font-bold text-xs uppercase transition-colors"
              >
                Access
              </button>
            </form>

            {accessAttempted && (
              <div className="p-3 bg-rose-950 border border-rose-600 rounded text-xs text-rose-300 space-y-1 animate-bounce">
                <div className="font-black text-rose-400 flex items-center justify-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-rose-500" />
                  <span>ACCESS VIOLATION RECORDED</span>
                </div>
                <p className="text-[10px] text-rose-300">
                  Your receptor optical feed has captured this transgression. Remain in your cubicle. Thought Police dispatch en route.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Foreign Affairs Under Construction View
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-4 border-amber-800 bg-[#0a0802] p-8 rounded-xl text-center space-y-6 shadow-[0_0_60px_rgba(245,158,11,0.15)]">
        <div className="w-20 h-20 mx-auto rounded-full border-4 border-dashed border-amber-600 flex items-center justify-center text-amber-500 bg-amber-950/40">
          <Hammer className="w-10 h-10 animate-bounce" />
        </div>

        <div className="inline-block p-4 border-2 border-dashed border-amber-600 rounded text-center text-amber-400">
          <div className="text-xl sm:text-2xl font-black tracking-widest uppercase">
            FOREIGN AFFAIRS // UNDER PERPETUAL RECONSTRUCTION
          </div>
          <div className="text-xs font-bold text-amber-500 mt-1 uppercase">
            NO EXTERNAL DIPLOMATIC MISSIONS MAINTAINED
          </div>
        </div>

        <div className="max-w-xl mx-auto space-y-3 text-xs sm:text-sm text-amber-300 leading-relaxed font-mono">
          <p>
            Notice to all citizens of Airstrip One: Oceania maintains neither embassies nor consulates with foreign powers. The concept of foreign diplomacy was abolished following the Revolution.
          </p>
          <p className="text-amber-400/80 italic">
            "Oceania borders no friendly states. Our sole contact with Eurasia and Eastasia is the reciprocal exchange of rocket bombs and the continuous triumph of our armed forces on the Equatorial front."
          </p>
        </div>

        <div className="p-4 max-w-md mx-auto bg-black border border-amber-900 rounded text-xs text-amber-400 space-y-2 text-left">
          <div className="flex items-center gap-2 font-bold text-amber-300 uppercase">
            <Globe2 className="w-4 h-4 text-amber-500" />
            <span>State Diplomatic Policy:</span>
          </div>
          <p className="text-[11px] text-amber-400/90 leading-relaxed">
            All foreign citizens within Oceania territory are prisoners of war or enemy saboteurs. Construction on the Foreign Affairs pavilion remains perpetually suspended for the duration of the war.
          </p>
        </div>
      </div>
    </div>
  )
}
