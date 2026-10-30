import React, { useState } from 'react'
import { Users, Search, Shield, Eye, FileText, CheckCircle2 } from 'lucide-react'
import { DIRECTORY_PERSONNEL } from '../data/oceania1984Data'
import { OfficialPerson } from '../types'
import { telescreenAudio } from '../utils/telescreenAudio'

export const GovernmentDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState<OfficialPerson>(DIRECTORY_PERSONNEL[0])
  const [casteFilter, setCasteFilter] = useState<string>('All')

  const filtered = DIRECTORY_PERSONNEL.filter((person) => {
    const matchesCaste = casteFilter === 'All' || person.caste === casteFilter
    const matchesQuery =
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.idNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.ministry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.department.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCaste && matchesQuery
  })

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Intro Bar */}
      <div className="border border-emerald-800 bg-emerald-950/30 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-1">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>CENTRAL REGISTRATION DESK · PARTY PERSONNEL CENSUS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-emerald-300 tracking-wider text-phosphor">
            GOVERNMENT DIRECTORY OF AIRSTRIP ONE
          </h2>
          <p className="text-xs text-emerald-400/80 mt-1 max-w-xl">
            Roster of certified Party members, ministry clerks, Inner Party directors, and documented state heroes.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-emerald-600 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ID, name, department..."
              className="pl-8 pr-3 py-1.5 rounded bg-black border border-emerald-800 text-xs text-emerald-200 placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
            />
          </div>

          <select
            value={casteFilter}
            onChange={(e) => setCasteFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded bg-black border border-emerald-800 text-xs text-emerald-300 focus:outline-none focus:border-emerald-400"
          >
            <option value="All">All Castes</option>
            <option value="Inner Party">Inner Party</option>
            <option value="Outer Party">Outer Party</option>
          </select>
        </div>
      </div>

      {/* Main Grid: Personnel Cards + Selected Person Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Personnel List */}
        <div className="lg:col-span-6 space-y-2.5">
          {filtered.map((person) => {
            const isSelected = selectedPerson.id === person.id
            return (
              <button
                key={person.id}
                onClick={() => {
                  telescreenAudio.playClick()
                  setSelectedPerson(person)
                }}
                className={`w-full p-3.5 rounded border text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-sm'
                    : 'bg-black/60 border-emerald-900 hover:border-emerald-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase mb-0.5">
                    <span className="font-mono text-emerald-400">{person.idNumber}</span>
                    <span>·</span>
                    <span
                      className={
                        person.caste === 'Inner Party'
                          ? 'text-amber-400 font-bold'
                          : 'text-emerald-400'
                      }
                    >
                      {person.caste}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-emerald-200">{person.name}</h4>
                  <div className="text-[11px] text-emerald-500/90">{person.rank}</div>
                </div>

                <div className="text-right text-[10px]">
                  <span
                    className={`px-2 py-0.5 rounded font-bold uppercase ${
                      person.status === 'Commended'
                        ? 'bg-emerald-900 text-emerald-300 border border-emerald-700'
                        : person.status === 'Under Surveillance'
                        ? 'bg-rose-950 text-rose-300 border border-rose-800'
                        : 'bg-black text-emerald-400 border border-emerald-900'
                    }`}
                  >
                    {person.status}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Dossier View */}
        <div className="lg:col-span-6 border-2 border-emerald-800 bg-black/95 p-6 rounded-lg space-y-5">
          <div className="border-b border-emerald-900 pb-3 flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-500 uppercase">
              CONFIDENTIAL RECORD // DOSSIER NO. {selectedPerson.idNumber}
            </span>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">
              LOYALTY: {selectedPerson.loyaltyRating}
            </span>
          </div>

          <div>
            <div className="text-xs text-emerald-500 uppercase font-bold">{selectedPerson.caste} Member</div>
            <h3 className="text-2xl font-black text-emerald-300 text-phosphor">{selectedPerson.name}</h3>
            <p className="text-xs text-emerald-400 mt-1">{selectedPerson.rank}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-emerald-950/20 border border-emerald-900 rounded space-y-0.5">
              <span className="text-emerald-500 text-[10px] block uppercase">Assigned Ministry</span>
              <span className="font-bold text-emerald-200">{selectedPerson.ministry}</span>
            </div>

            <div className="p-3 bg-emerald-950/20 border border-emerald-900 rounded space-y-0.5">
              <span className="text-emerald-500 text-[10px] block uppercase">Station Office</span>
              <span className="font-bold text-emerald-200">{selectedPerson.assignedOffice}</span>
            </div>
          </div>

          {/* Active Directives */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Active State Directives:
            </span>
            <div className="space-y-1.5">
              {selectedPerson.activeDirectives.map((directive, index) => (
                <div
                  key={index}
                  className="p-2.5 bg-black border border-emerald-900 rounded text-xs text-emerald-300 flex items-start gap-2"
                >
                  <span className="text-emerald-500 font-bold">[{index + 1}]</span>
                  <span>{directive}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-900 text-[11px] text-emerald-500 flex items-center justify-between">
            <span>Surveillance Status: Active Optical Pickup</span>
            <span className="text-emerald-400 font-bold">MINILUV APPROVED</span>
          </div>
        </div>
      </div>
    </div>
  )
}
