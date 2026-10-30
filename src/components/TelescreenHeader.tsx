import React, { useState } from 'react'
import {
  Eye,
  Tv,
  Volume2,
  VolumeX,
  Radio,
  AlertTriangle,
  Flame,
  FileSpreadsheet,
  Users,
  Building2,
  Lock,
  Globe2,
  ScrollText,
} from 'lucide-react'
import { OceaniaTab } from '../types'
import { telescreenAudio } from '../utils/telescreenAudio'

interface TelescreenHeaderProps {
  activeTab: OceaniaTab
  onTabChange: (tab: OceaniaTab) => void
  onTriggerTwoMinutesHate: () => void
  scanlinesEnabled: boolean
  onToggleScanlines: () => void
  staticEnabled: boolean
  onToggleStatic: () => void
}

export const TelescreenHeader: React.FC<TelescreenHeaderProps> = ({
  activeTab,
  onTabChange,
  onTriggerTwoMinutesHate,
  scanlinesEnabled,
  onToggleScanlines,
  staticEnabled,
  onToggleStatic,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  const handleAudioToggle = () => {
    const isPlaying = telescreenAudio.toggleMute()
    setIsPlayingAudio(isPlaying)
  }

  const navItems: { id: OceaniaTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Telescreen Desk', icon: <Tv className="w-3.5 h-3.5" /> },
    { id: 'ministries', label: 'Four Ministries', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'typewriter', label: 'Revision Typewriter', icon: <ScrollText className="w-3.5 h-3.5" />, badge: 'Minitrue' },
    { id: 'announcements', label: 'Announcements', icon: <Radio className="w-3.5 h-3.5" /> },
    { id: 'directory', label: 'Directory', icon: <Users className="w-3.5 h-3.5" /> },
    { id: 'statistics', label: 'Statistics', icon: <FileSpreadsheet className="w-3.5 h-3.5" /> },
    { id: 'citizens', label: 'Citizen Services', icon: <ScrollText className="w-3.5 h-3.5" /> },
    { id: 'archives', label: 'National Archives', icon: <Lock className="w-3.5 h-3.5" />, badge: 'Locked' },
    { id: 'foreign', label: 'Foreign Affairs', icon: <Globe2 className="w-3.5 h-3.5" />, badge: 'Off' },
  ]

  return (
    <header className="border-b-2 border-emerald-900/80 pb-4 mb-6 space-y-4">
      {/* Top Telescreen Status Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs bg-emerald-950/40 border border-emerald-800/70 p-2.5 rounded-lg">
        {/* State Identification */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 rounded border border-emerald-500/80 bg-emerald-950 flex items-center justify-center text-emerald-400">
            <Eye className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="font-bold tracking-wider text-emerald-300 text-phosphor uppercase">
              OCEANIA STATE TELESCREEN · AIRSTRIP ONE
            </div>
            <div className="text-[10px] text-emerald-500">
              RECEPTOR NO. 441-A · INGSOC CENTRAL PROPAGANDA NETWORK
            </div>
          </div>
        </div>

        {/* Central Observation Warning */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-emerald-400 font-semibold px-3 py-1 rounded bg-black/60 border border-emerald-900">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>BIG BROTHER IS WATCHING YOU · SENSOR GAIN: OPTIMAL</span>
        </div>

        {/* Right TV Hardware Controls & Emergency Hate Alert Trigger */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Two Minutes Hate Emergency Button */}
          <button
            onClick={() => {
              telescreenAudio.playClick()
              onTriggerTwoMinutesHate()
            }}
            className="px-2.5 py-1 rounded bg-rose-950/90 border border-rose-600 text-rose-300 hover:bg-rose-900 text-[11px] font-bold flex items-center gap-1.5 shadow-sm shadow-rose-900/50 transition-all hover:scale-102"
            title="Commence Compulsory Two Minutes Hate Broadcast"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
            <span>TWO MINUTES HATE</span>
          </button>

          {/* CRT Audio Hum toggle */}
          <button
            onClick={handleAudioToggle}
            title={isPlayingAudio ? 'Silence Telescreen Audio' : 'Activate 50Hz CRT Audio & Chimes'}
            className={`p-1.5 rounded border text-xs transition-colors ${
              isPlayingAudio
                ? 'bg-emerald-900 text-emerald-200 border-emerald-500'
                : 'bg-black/70 text-emerald-600 border-emerald-900 hover:text-emerald-400'
            }`}
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Scanlines Toggle */}
          <button
            onClick={() => {
              telescreenAudio.playClick()
              onToggleScanlines()
            }}
            className={`px-2 py-1 rounded border text-[10px] uppercase font-bold transition-colors ${
              scanlinesEnabled
                ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                : 'bg-black/70 text-emerald-700 border-emerald-900'
            }`}
          >
            Scanlines: {scanlinesEnabled ? 'ON' : 'OFF'}
          </button>

          {/* Static Fuzz Toggle */}
          <button
            onClick={() => {
              telescreenAudio.playClick()
              onToggleStatic()
            }}
            className={`px-2 py-1 rounded border text-[10px] uppercase font-bold transition-colors ${
              staticEnabled
                ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                : 'bg-black/70 text-emerald-700 border-emerald-900'
            }`}
          >
            Static: {staticEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Iconic Slogan Banner */}
      <div className="py-1 px-3 bg-emerald-950/20 border-y border-emerald-900/60 text-center text-xs tracking-widest sm:text-sm font-extrabold text-emerald-300 text-phosphor flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span>WAR IS PEACE</span>
        <span className="hidden sm:inline text-emerald-700">·</span>
        <span>FREEDOM IS SLAVERY</span>
        <span className="hidden sm:inline text-emerald-700">·</span>
        <span>IGNORANCE IS STRENGTH</span>
      </div>

      {/* Primary Navigation Rail */}
      <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => {
                telescreenAudio.playClick()
                onTabChange(item.id)
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded border whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-emerald-500 text-black font-extrabold border-emerald-400 shadow-md shadow-emerald-500/20'
                  : 'bg-black/60 text-emerald-400 border-emerald-900/90 hover:bg-emerald-950/50 hover:text-emerald-200'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase ${
                    item.badge === 'Locked' || item.badge === 'Off'
                      ? 'bg-rose-950 text-rose-300 border border-rose-800'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
