import React, { useState } from 'react'
import { Radio, AlertTriangle, ShieldCheck, Flame, Bell } from 'lucide-react'
import { NATIONAL_ANNOUNCEMENTS } from '../data/oceania1984Data'
import { AnnouncementItem } from '../types'
import { telescreenAudio } from '../utils/telescreenAudio'

export const AnnouncementsView: React.FC = () => {
  const [filterMinistry, setFilterMinistry] = useState<string>('All')
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementItem>(NATIONAL_ANNOUNCEMENTS[0])

  const ministries = ['All', 'MINITRUE', 'MINIPAX', 'MINIPLENTY', 'MINILUV']

  const filtered = filterMinistry === 'All'
    ? NATIONAL_ANNOUNCEMENTS
    : NATIONAL_ANNOUNCEMENTS.filter((a) => a.ministry === filterMinistry)

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Intro Bar */}
      <div className="border border-emerald-800 bg-emerald-950/30 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-1">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>CENTRAL COMMITTEE PROPAGANDA FEED · AIRSTRIP ONE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-emerald-300 tracking-wider text-phosphor">
            NATIONAL ANNOUNCEMENTS & PARTY DECREES
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1">
          {ministries.map((min) => (
            <button
              key={min}
              onClick={() => {
                telescreenAudio.playClick()
                setFilterMinistry(min)
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase transition-colors ${
                filterMinistry === min
                  ? 'bg-emerald-500 text-black'
                  : 'bg-black border border-emerald-900 text-emerald-400 hover:border-emerald-700'
              }`}
            >
              {min}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: List of Announcements & Active Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Announcements List */}
        <div className="lg:col-span-5 space-y-3">
          {filtered.map((item) => {
            const isSelected = selectedAnnouncement.id === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  telescreenAudio.playClick()
                  setSelectedAnnouncement(item)
                }}
                className={`w-full p-4 rounded border text-left transition-all space-y-1.5 ${
                  isSelected
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-sm'
                    : 'bg-black/60 border-emerald-900 hover:border-emerald-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-emerald-500 font-bold uppercase">
                  <span>{item.ministry} · {item.date}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[9px] ${
                      item.broadcastPriority === 'Compulsory'
                        ? 'bg-rose-950 text-rose-300 border border-rose-800'
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    }`}
                  >
                    {item.broadcastPriority}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-emerald-200 line-clamp-2">
                  {item.title}
                </h4>
                <div className="text-[10px] text-emerald-500">
                  Classification: {item.classification}
                </div>
              </button>
            )
          })}
        </div>

        {/* Right: Detailed Announcement Reader */}
        <div className="lg:col-span-7 border-2 border-emerald-800 bg-black/90 p-6 rounded-lg space-y-5">
          <div className="border-b border-emerald-900 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="font-bold text-emerald-500 uppercase">
              DECREE IDENTIFIER: {selectedAnnouncement.id.toUpperCase()}
            </span>
            <span className="text-emerald-400 font-bold">
              AUTHORIZED BY: {selectedAnnouncement.ministry} / INNER COMMITTEE
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-emerald-300 text-phosphor tracking-wide leading-snug">
            {selectedAnnouncement.title}
          </h3>

          <div className="p-3 bg-emerald-950/30 border border-emerald-800 rounded text-xs flex items-center justify-between">
            <span className="text-emerald-400 font-bold">CIRCULATION STATUS:</span>
            <span className="text-emerald-300 uppercase">{selectedAnnouncement.classification}</span>
          </div>

          {/* Body Prose Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-mono">
            {selectedAnnouncement.content.map((paragraph, index) => (
              <p key={index} className="p-2 border-l-2 border-emerald-800 bg-emerald-950/10">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-emerald-900 flex items-center justify-between text-[11px] text-emerald-500">
            <span>Broadcast Verification: Certified Authentic Ingsoc Dispatch</span>
            <span className="text-rose-400 font-bold">DESTRUCTION OF THIS NOTICE IS THOUGHTCRIME</span>
          </div>
        </div>
      </div>
    </div>
  )
}
