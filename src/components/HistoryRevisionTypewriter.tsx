import React, { useState, useEffect } from 'react'
import { ScrollText, Flame, Check, RefreshCw, Bell, AlertTriangle } from 'lucide-react'
import { REVISION_TEMPLATES } from '../data/oceania1984Data'
import { RevisionLog } from '../types'
import { telescreenAudio } from '../utils/telescreenAudio'

export const HistoryRevisionTypewriter: React.FC = () => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isBurning, setIsBurning] = useState(false)
  const [revisionLogs, setRevisionLogs] = useState<RevisionLog[]>(() => {
    try {
      const stored = localStorage.getItem('oceania_revision_logs')
      if (stored) return JSON.parse(stored)
    } catch {
      // Fallback
    }
    return [
      {
        id: 'rev-init-1',
        documentRef: 'TIMES-04-06-81-BB',
        originalExcerpt: 'Speech by Big Brother concerning South Indian food supplies...',
        revisedText: 'All references to food shortages deleted. Surpluses declared.',
        clerkNumber: '6079-SMITH-W',
        timestamp: '1984.10.28',
        status: 'INCINERATED IN MEMORY HOLE',
      },
    ]
  })

  const currentTemplate = REVISION_TEMPLATES[selectedTemplateIndex]

  useEffect(() => {
    try {
      localStorage.setItem('oceania_revision_logs', JSON.stringify(revisionLogs))
    } catch {
      // Ignore
    }
  }, [revisionLogs])

  const handleSelectTemplate = (index: number) => {
    telescreenAudio.playClick()
    setSelectedTemplateIndex(index)
    setTypedText(REVISION_TEMPLATES[index].suggestedReplacement)
  }

  const handleKeyDown = () => {
    telescreenAudio.playTypewriterKey()
  }

  const handleCarriageReturn = () => {
    telescreenAudio.playBell()
  }

  const handleIncinerateMemoryHole = () => {
    if (!typedText.trim()) return

    telescreenAudio.playMemoryHoleWhoosh()
    setIsBurning(true)

    const newLog: RevisionLog = {
      id: `rev-${Date.now()}`,
      documentRef: currentTemplate.ref,
      originalExcerpt: currentTemplate.original,
      revisedText: typedText.trim(),
      clerkNumber: '6079-SMITH-W',
      timestamp: new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      status: 'INCINERATED IN MEMORY HOLE',
    }

    setTimeout(() => {
      setRevisionLogs((prev) => [newLog, ...prev])
      setIsBurning(false)
      setTypedText('')
      telescreenAudio.playBell()
    }, 900)
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="border border-emerald-800 bg-emerald-950/30 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-1">
            <ScrollText className="w-4 h-4 text-emerald-400" />
            <span>MINITRUE · RECORDS DEPARTMENT (RECDEP) CUBICLE NO. 42</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-emerald-300 tracking-wider text-phosphor">
            HISTORY REVISION TYPEWRITER TERMINAL
          </h2>
          <p className="text-xs text-emerald-400/80 mt-1 max-w-xl">
            "Who controls the past controls the future: who controls the present controls the past."
            Rectify past issues of the Times, alter speeches, and consign unpersons to the Memory Hole.
          </p>
        </div>

        {/* Carriage Bell Button */}
        <button
          onClick={handleCarriageReturn}
          className="self-start md:self-auto px-3 py-2 rounded bg-black border border-emerald-700 hover:border-emerald-400 text-xs font-bold flex items-center gap-2 text-emerald-300 transition-colors"
        >
          <Bell className="w-4 h-4 text-emerald-400" />
          <span>Carriage Return (Bell)</span>
        </button>
      </div>

      {/* Template Selection Pills */}
      <div className="space-y-2">
        <label className="text-xs text-emerald-500 font-bold uppercase tracking-wider block">
          Select Document For Rectification:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {REVISION_TEMPLATES.map((tmpl, idx) => (
            <button
              key={tmpl.ref}
              onClick={() => handleSelectTemplate(idx)}
              className={`p-3 rounded border text-left text-xs transition-all ${
                selectedTemplateIndex === idx
                  ? 'bg-emerald-950 border-emerald-400 text-emerald-200 font-bold shadow-sm'
                  : 'bg-black/60 border-emerald-900 text-emerald-400 hover:border-emerald-700'
              }`}
            >
              <div className="text-[10px] text-emerald-500 uppercase">{tmpl.ref}</div>
              <div className="mt-1 line-clamp-2">{tmpl.context}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Original Document vs Revision Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Original Compromising Document (To Be Incinerated) */}
        <div className="border border-emerald-900 bg-black/80 p-5 rounded-lg space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-900 pb-2 text-xs font-bold text-rose-400">
            <span className="flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>ORIGINAL HISTORICAL RECORD (NOW DECLARED UNFACT)</span>
            </span>
            <span className="text-[10px] uppercase font-mono">{currentTemplate.ref}</span>
          </div>

          <div className="p-4 bg-emerald-950/20 border border-emerald-900 rounded text-xs text-emerald-300/80 italic leading-relaxed">
            "{currentTemplate.original}"
          </div>

          <div className="text-xs text-emerald-400 space-y-1">
            <div className="font-bold uppercase text-[11px] text-emerald-300">Rectification Order:</div>
            <p className="text-[11px] text-emerald-500 leading-relaxed">{currentTemplate.context}</p>
          </div>
        </div>

        {/* Right: Interactive Mechanical Typewriter Terminal */}
        <div className={`border-2 border-emerald-700 bg-black p-5 rounded-lg space-y-3 transition-all ${isBurning ? 'border-orange-500 bg-orange-950/30' : ''}`}>
          <div className="flex items-center justify-between border-b border-emerald-800 pb-2 text-xs font-bold text-emerald-300">
            <span>OFFICIAL NEW VERSION (TO BE EMBEDDED IN TIMES ARCHIVES)</span>
            <span className="text-[10px] text-emerald-500">CLERK: 6079-SMITH-W</span>
          </div>

          <textarea
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={5}
            placeholder="Type your official party-approved revised history text..."
            className="w-full bg-[#030d05] border border-emerald-800 p-3 rounded text-emerald-200 text-xs sm:text-sm font-mono focus:outline-none focus:border-emerald-400 resize-none leading-relaxed"
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setTypedText(currentTemplate.suggestedReplacement)}
              className="text-[11px] text-emerald-500 hover:text-emerald-300 underline"
            >
              Insert Suggested Orthodoxy Text
            </button>

            {/* Incinerate in Memory Hole Button */}
            <button
              onClick={handleIncinerateMemoryHole}
              disabled={isBurning || !typedText.trim()}
              className={`w-full sm:w-auto px-4 py-2.5 rounded font-black text-xs uppercase flex items-center justify-center gap-2 transition-all ${
                isBurning
                  ? 'bg-orange-600 text-black animate-pulse'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-md shadow-emerald-500/20'
              }`}
            >
              <Flame className={`w-4 h-4 ${isBurning ? 'animate-bounce' : ''}`} />
              <span>{isBurning ? 'INCINERATING IN MEMORY HOLE...' : 'INCINERATE & ARCHIVE'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Minitrue Rectification Audit Trail */}
      <div className="border border-emerald-900 bg-black/60 p-4 rounded-lg space-y-3">
        <div className="flex items-center justify-between border-b border-emerald-900 pb-2 text-xs font-bold text-emerald-400">
          <span>MINITRUE RECTIFICATION LOGBOOK (PNEUMATIC CHUTE AUDIT)</span>
          <span className="text-[10px] text-emerald-600">{revisionLogs.length} Entrie(s) Recorded</span>
        </div>

        <div className="space-y-2">
          {revisionLogs.map((log) => (
            <div
              key={log.id}
              className="p-3 bg-emerald-950/20 border border-emerald-900/60 rounded text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <div className="font-bold text-emerald-200 flex items-center gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-900/80 text-emerald-300 border border-emerald-700 font-mono">
                    {log.documentRef}
                  </span>
                  <span>Clerk {log.clerkNumber}</span>
                  <span className="text-emerald-500 text-[10px]">({log.timestamp})</span>
                </div>
                <div className="text-emerald-400/80 text-[11px] mt-1 line-clamp-1 italic">
                  "{log.revisedText}"
                </div>
              </div>
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider flex-shrink-0">
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
