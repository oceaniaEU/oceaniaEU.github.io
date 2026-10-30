import React, { useState } from 'react'
import { FileSpreadsheet, TrendingUp, RefreshCw, BarChart3, Award, Sparkles } from 'lucide-react'
import { NATIONAL_STATISTICS } from '../data/oceania1984Data'
import { StatMetric } from '../types'
import { telescreenAudio } from '../utils/telescreenAudio'

export const NationalStatistics: React.FC = () => {
  const [stats, setStats] = useState<StatMetric[]>(NATIONAL_STATISTICS)
  const [surplusMultiplier, setSurplusMultiplier] = useState(1.0)
  const [isRecalculating, setIsRecalculating] = useState(false)

  const handleRecalculateSurplus = () => {
    telescreenAudio.playClick()
    setIsRecalculating(true)

    setTimeout(() => {
      const nextMult = surplusMultiplier + 0.15
      setSurplusMultiplier(nextMult)
      setStats((prev) =>
        prev.map((s) => {
          if (s.id === 'st-1') {
            return {
              ...s,
              reportedValue: `${Math.round(148 * nextMult)},000,000 Pairs`,
              quotaComparison: `+${Math.round(148 * nextMult)}% Over Plan`,
            }
          }
          if (s.id === 'st-4') {
            return {
              ...s,
              reportedValue: `${Math.round(42 * nextMult)} Active Bastions`,
            }
          }
          return s
        })
      )
      setIsRecalculating(false)
      telescreenAudio.playBell()
    }, 600)
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Intro Bar */}
      <div className="border border-emerald-800 bg-emerald-950/30 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-1">
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>MINIPLENTY STATISTICAL BUREAU · 9TH THREE-YEAR PLAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-emerald-300 tracking-wider text-phosphor">
            NATIONAL ECONOMIC & INDUSTRIAL STATISTICS
          </h2>
          <p className="text-xs text-emerald-400/80 mt-1 max-w-xl">
            Verified production quotas, caloric yields, naval armaments, and Newspeak dictionary compression figures. All statistics certified infallible by Big Brother.
          </p>
        </div>

        {/* Recalculate Button */}
        <button
          onClick={handleRecalculateSurplus}
          disabled={isRecalculating}
          className="px-3.5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20"
        >
          <RefreshCw className={`w-4 h-4 ${isRecalculating ? 'animate-spin' : ''}`} />
          <span>{isRecalculating ? 'Adjusting Figures...' : 'Recalculate State Surplus'}</span>
        </button>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((metric) => (
          <div
            key={metric.id}
            className="border-2 border-emerald-800 bg-black/80 p-5 rounded-lg space-y-3 flex flex-col justify-between hover:border-emerald-600 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-emerald-500 font-bold uppercase mb-1">
                <span>{metric.unit}</span>
                <span className="flex items-center gap-1 text-emerald-300">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{metric.quotaComparison}</span>
                </span>
              </div>

              <h4 className="text-sm font-bold text-emerald-300">{metric.metric}</h4>
              <div className="text-2xl font-black text-emerald-200 text-phosphor font-mono my-2">
                {metric.reportedValue}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-emerald-900">
              <div className="w-full bg-emerald-950 h-2 rounded overflow-hidden">
                <div className="bg-emerald-400 h-full w-[95%]" />
              </div>
              <p className="text-[11px] text-emerald-500 italic leading-snug">
                "{metric.note}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Production Manifesto Box */}
      <div className="border border-emerald-800 bg-emerald-950/20 p-5 rounded-lg space-y-2 text-xs">
        <h4 className="font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-400" />
          <span>OFFICIAL DECREE ON PRODUCTION FIDELITY</span>
        </h4>
        <p className="text-emerald-400/90 leading-relaxed">
          The Ministry of Plenty confirms that all forecasts issued by the Party are inherently realized through the sheer patriotic devotion of the proletariat. If private observation conflicts with published ledgers, citizens are reminded to exercise doublethink: to hold simultaneously two opinions which cancelled out, knowing them to be contradictory and believing in both of them.
        </p>
      </div>
    </div>
  )
}
