import React, { useState } from 'react'
import { Building2, Shield, Flame, Scale, HeartHandshake, Eye, AlertCircle, ArrowRight } from 'lucide-react'
import { MINISTRIES_DATA } from '../data/oceania1984Data'
import { MinistryId, OceaniaTab } from '../types'
import { telescreenAudio } from '../utils/telescreenAudio'

interface MinistriesViewProps {
  onNavigateTab: (tab: OceaniaTab) => void
}

export const MinistriesView: React.FC<MinistriesViewProps> = ({ onNavigateTab }) => {
  const [selectedMinistryId, setSelectedMinistryId] = useState<MinistryId>('minitrue')
  const ministry = MINISTRIES_DATA[selectedMinistryId]

  const ministryIcons = {
    minitrue: <Scale className="w-5 h-5 text-emerald-400" />,
    minipax: <Shield className="w-5 h-5 text-emerald-400" />,
    miniplenty: <Building2 className="w-5 h-5 text-emerald-400" />,
    miniluv: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Intro Header */}
      <div className="border border-emerald-800 bg-emerald-950/30 p-5 rounded-lg">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-1">
          <Building2 className="w-4 h-4 text-emerald-400" />
          <span>CIVIC APPARATUS OF AIRSTRIP ONE · THE FOUR PYRAMIDS</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-emerald-300 tracking-wider text-phosphor">
          THE FOUR CANONICAL MINISTRIES OF OCEANIA
        </h2>
        <p className="text-xs text-emerald-400/80 mt-1 max-w-2xl leading-relaxed">
          Vast pyramidal structures of gleaming white concrete, soaring 300 meters into the London sky, containing three thousand rooms above ground and branching subterranean levels below.
        </p>
      </div>

      {/* Ministry Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {(Object.keys(MINISTRIES_DATA) as MinistryId[]).map((id) => {
          const item = MINISTRIES_DATA[id]
          const isSelected = selectedMinistryId === id
          return (
            <button
              key={id}
              onClick={() => {
                telescreenAudio.playClick()
                setSelectedMinistryId(id)
              }}
              className={`p-3.5 rounded border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-950 border-emerald-400 text-emerald-100 font-bold shadow-md shadow-emerald-500/10'
                  : 'bg-black/60 border-emerald-900 text-emerald-400 hover:border-emerald-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-emerald-400">{item.newspeakName}</span>
                {ministryIcons[id]}
              </div>
              <div className="text-sm font-bold text-emerald-200">{item.englishName}</div>
              <div className="text-[10px] text-emerald-500 mt-1">Height: {item.pyramidHeightMeters}m Concrete</div>
            </button>
          )
        })}
      </div>

      {/* Selected Ministry Detailed Dossier */}
      <div className="border-2 border-emerald-800 bg-black/90 p-6 rounded-lg space-y-6">
        {/* Top Header inside Dossier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-900 pb-4">
          <div>
            <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">
              OFFICIAL APPARATUS PROFILE // {ministry.newspeakName}
            </div>
            <h3 className="text-2xl font-black text-emerald-300 text-phosphor">
              {ministry.englishName} ({ministry.newspeakName})
            </h3>
            <div className="text-xs text-emerald-400 mt-1 italic">
              Governing Slogan: "{ministry.slogan}"
            </div>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-emerald-500 block">Command Authority</span>
            <span className="text-xs font-bold text-emerald-200">{ministry.director}</span>
          </div>
        </div>

        {/* Primary Mandate & Directive */}
        <div className="p-4 bg-emerald-950/20 border border-emerald-800 rounded space-y-1">
          <div className="text-xs font-bold text-emerald-400 uppercase">Primary State Directive:</div>
          <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">{ministry.primaryDirective}</p>
        </div>

        {/* Active Alert & Current Campaign */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-black border border-emerald-900 rounded space-y-1">
            <div className="text-[11px] font-bold text-emerald-500 uppercase flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>Current Civic Campaign:</span>
            </div>
            <p className="text-emerald-300 leading-relaxed">{ministry.currentCampaign}</p>
          </div>

          <div className="p-3.5 bg-black border border-emerald-900 rounded space-y-1">
            <div className="text-[11px] font-bold text-rose-400 uppercase flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
              <span>Active Security Directive:</span>
            </div>
            <p className="text-emerald-300 leading-relaxed">{ministry.activeAlert}</p>
          </div>
        </div>

        {/* Canonical Internal Departments */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Key Departmental Subdivisions:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ministry.departments.map((dept) => (
              <div key={dept.code} className="p-3.5 bg-emerald-950/20 border border-emerald-900/80 rounded text-xs space-y-1">
                <div className="flex items-center justify-between text-emerald-200 font-bold">
                  <span>{dept.name}</span>
                  <span className="text-[10px] font-mono text-emerald-500">{dept.code}</span>
                </div>
                <p className="text-emerald-400/80 text-[11px] leading-relaxed">{dept.mandate}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Action Bridge per Ministry */}
        <div className="pt-4 border-t border-emerald-900 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-emerald-500">
            Citizen Access Level: Outer Party Authorized Monitor
          </div>

          {selectedMinistryId === 'minitrue' && (
            <button
              onClick={() => {
                telescreenAudio.playClick()
                onNavigateTab('typewriter')
              }}
              className="px-3.5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Launch History Revision Typewriter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {selectedMinistryId === 'miniluv' && (
            <button
              onClick={() => {
                telescreenAudio.playClick()
                onNavigateTab('citizens')
              }}
              className="px-3.5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Submit Thought Compliance Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {selectedMinistryId === 'miniplenty' && (
            <button
              onClick={() => {
                telescreenAudio.playClick()
                onNavigateTab('statistics')
              }}
              className="px-3.5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Inspect Quota Surplus Statistics</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {selectedMinistryId === 'minipax' && (
            <button
              onClick={() => {
                telescreenAudio.playClick()
                onNavigateTab('announcements')
              }}
              className="px-3.5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Read Frontline War Dispatches</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
