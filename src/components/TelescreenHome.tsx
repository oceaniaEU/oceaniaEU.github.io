import React from 'react'
import {
  Building2,
  AlertTriangle,
  ScrollText,
  FileSpreadsheet,
  Users,
  Flame,
  Radio,
  Eye,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { OceaniaTab } from '../types'
import { MINISTRIES_DATA, NATIONAL_ANNOUNCEMENTS } from '../data/oceania1984Data'
import { telescreenAudio } from '../utils/telescreenAudio'

interface TelescreenHomeProps {
  onNavigateTab: (tab: OceaniaTab) => void
  onTriggerTwoMinutesHate: () => void
}

export const TelescreenHome: React.FC<TelescreenHomeProps> = ({
  onNavigateTab,
  onTriggerTwoMinutesHate,
}) => {
  const latestAnnouncement = NATIONAL_ANNOUNCEMENTS[0]

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Central Big Brother Telescreen Showcase */}
      <div className="relative border-4 border-emerald-700 bg-black p-6 sm:p-8 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.18)]">
        {/* Glow & Scanlines */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 border border-emerald-600 text-xs font-bold uppercase text-emerald-300">
              <Eye className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>OFFICIAL TELESCREEN RECEPTOR NO. 441 · AIRSTRIP ONE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-wider text-emerald-300 text-phosphor-bold uppercase">
              BIG BROTHER IS WATCHING YOU
            </h1>

            <p className="text-xs sm:text-sm text-emerald-400 leading-relaxed max-w-xl">
              Welcome to the official civic portal of the Oceania Mock Government. Citizens are bound by Party discipline. Maintain constant vigilance, report thoughtcrime, and celebrate the triumphs of our armed forces.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                onClick={() => {
                  telescreenAudio.playClick()
                  onTriggerTwoMinutesHate()
                }}
                className="px-4 py-2.5 rounded bg-rose-600 hover:bg-rose-500 text-black font-extrabold text-xs uppercase flex items-center gap-2 transition-transform active:scale-95 shadow-md shadow-rose-600/30"
              >
                <AlertTriangle className="w-4 h-4 text-black" />
                <span>Commence Two Minutes Hate</span>
              </button>

              <button
                onClick={() => {
                  telescreenAudio.playClick()
                  onNavigateTab('typewriter')
                }}
                className="px-4 py-2.5 rounded bg-emerald-950 border border-emerald-600 hover:bg-emerald-900 text-emerald-200 font-bold text-xs uppercase flex items-center gap-2 transition-colors"
              >
                <ScrollText className="w-4 h-4 text-emerald-400" />
                <span>Open Revision Typewriter</span>
              </button>
            </div>
          </div>

          {/* Big Brother All-Seeing Eye Icon Graphic */}
          <div className="w-44 h-44 rounded-full border-4 border-emerald-500 flex flex-col items-center justify-center bg-emerald-950/40 text-emerald-300 shadow-[inset_0_0_30px_rgba(34,197,94,0.4)] flex-shrink-0 relative">
            <span className="text-7xl select-none animate-pulse">👁️</span>
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 mt-2 uppercase text-phosphor">
              INGSOC 1984
            </span>
          </div>
        </div>
      </div>

      {/* Latest State Bulletin Card */}
      <div className="border-2 border-emerald-800 bg-emerald-950/20 p-5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>MANDATORY BROADCAST · {latestAnnouncement.date}</span>
          </div>
          <h3 className="text-base font-bold text-emerald-200">{latestAnnouncement.title}</h3>
          <p className="text-xs text-emerald-400/80 line-clamp-1">{latestAnnouncement.content[0]}</p>
        </div>

        <button
          onClick={() => {
            telescreenAudio.playClick()
            onNavigateTab('announcements')
          }}
          className="self-start sm:self-auto px-3.5 py-1.5 rounded bg-black border border-emerald-700 hover:border-emerald-400 text-xs font-bold text-emerald-300 flex items-center gap-1.5 transition-colors flex-shrink-0"
        >
          <span>Read All Bulletins</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* The Four Canonical Ministries Quick Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-500" />
            <span>The Four Canonical Pyramids of Oceania</span>
          </h3>
          <button
            onClick={() => {
              telescreenAudio.playClick()
              onNavigateTab('ministries')
            }}
            className="text-xs text-emerald-500 hover:text-emerald-300 underline"
          >
            Explore Department Directory
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(MINISTRIES_DATA).map((m) => (
            <button
              key={m.id}
              onClick={() => {
                telescreenAudio.playClick()
                onNavigateTab('ministries')
              }}
              className="border-2 border-emerald-900 bg-black/80 hover:border-emerald-600 p-4 rounded-lg text-left transition-all space-y-2 flex flex-col justify-between group"
            >
              <div>
                <div className="text-[10px] text-emerald-500 font-bold uppercase flex items-center justify-between">
                  <span>{m.newspeakName}</span>
                  <span className="text-emerald-600">300m</span>
                </div>
                <h4 className="text-sm font-bold text-emerald-200 group-hover:text-emerald-100 transition-colors">
                  {m.englishName}
                </h4>
                <p className="text-[11px] text-emerald-400/80 line-clamp-2 mt-1 leading-snug">
                  {m.primaryDirective}
                </p>
              </div>

              <div className="text-[10px] font-mono text-emerald-500 pt-2 border-t border-emerald-950 italic">
                "{m.slogan}"
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fast Shortcuts: Statistics, Citizens, Directory */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <button
          onClick={() => {
            telescreenAudio.playClick()
            onNavigateTab('statistics')
          }}
          className="p-4 rounded border border-emerald-900 bg-black hover:border-emerald-700 text-left space-y-1 transition-colors"
        >
          <div className="flex items-center gap-2 font-bold text-emerald-300 uppercase">
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>National Statistics</span>
          </div>
          <p className="text-emerald-500 text-[11px]">
            Boot quotas exceeding 148%, chocolate rations celebrated at 20 grams.
          </p>
        </button>

        <button
          onClick={() => {
            telescreenAudio.playClick()
            onNavigateTab('citizens')
          }}
          className="p-4 rounded border border-emerald-900 bg-black hover:border-emerald-700 text-left space-y-1 transition-colors"
        >
          <div className="flex items-center gap-2 font-bold text-emerald-300 uppercase">
            <ScrollText className="w-4 h-4 text-emerald-400" />
            <span>Citizen Petitions Desk</span>
          </div>
          <p className="text-emerald-500 text-[11px]">
            Razor allocations, Anti-Sex League passes, and Thought Compliance check.
          </p>
        </button>

        <button
          onClick={() => {
            telescreenAudio.playClick()
            onNavigateTab('directory')
          }}
          className="p-4 rounded border border-emerald-900 bg-black hover:border-emerald-700 text-left space-y-1 transition-colors"
        >
          <div className="flex items-center gap-2 font-bold text-emerald-300 uppercase">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>Government Directory</span>
          </div>
          <p className="text-emerald-500 text-[11px]">
            Inspect the dossiers of Inner Party leaders and Outer Party clerks.
          </p>
        </button>
      </div>
    </div>
  )
}
