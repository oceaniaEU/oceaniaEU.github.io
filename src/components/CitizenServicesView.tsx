import React, { useState } from 'react'
import { ScrollText, CheckCircle2, AlertOctagon, Send, ShieldAlert, Heart } from 'lucide-react'
import { CITIZEN_SERVICES } from '../data/oceania1984Data'
import { CitizenServiceForm } from '../types'
import { telescreenAudio } from '../utils/telescreenAudio'

export const CitizenServicesView: React.FC = () => {
  const [selectedService, setSelectedService] = useState<CitizenServiceForm>(CITIZEN_SERVICES[0])
  const [citizenId, setCitizenId] = useState('')
  const [justification, setJustification] = useState('')
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null)

  // Thought Questionnaire state
  const [arithmeticAnswer, setArithmeticAnswer] = useState('5')
  const [loveAnswer, setLoveAnswer] = useState('unconditional')
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const handleSubmitPetition = (e: React.FormEvent) => {
    e.preventDefault()
    if (!citizenId.trim()) return

    telescreenAudio.playClick()
    setSubmittedStatus('PENDING_MINILUV_REVIEW')

    setTimeout(() => {
      telescreenAudio.playTelescreenChime()
      setSubmittedStatus('FILED_UNDER_SURVEILLANCE')
      setJustification('')
    }, 700)
  }

  const handleTestCompliance = (e: React.FormEvent) => {
    e.preventDefault()
    telescreenAudio.playClick()
    setQuizSubmitted(true)
    telescreenAudio.playTelescreenChime()
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Intro Bar */}
      <div className="border border-emerald-800 bg-emerald-950/30 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase mb-1">
          <ScrollText className="w-4 h-4 text-emerald-400" />
          <span>CIVIC PETITIONS & DISPENSATIONS DESK · AIRSTRIP ONE</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-emerald-300 tracking-wider text-phosphor">
          CITIZEN SERVICES & COMPLIANCE
        </h2>
        <p className="text-xs text-emerald-400/80 mt-1 max-w-xl">
          Submit requisitions for rationed provisions, request permits, or test your internal orthodoxy under the guidance of the Thought Police.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Services Selector & Petition Form */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-2">
            <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider block">
              Select Civic Service:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {CITIZEN_SERVICES.map((srv) => {
                const isSelected = selectedService.id === srv.id
                return (
                  <button
                    key={srv.id}
                    onClick={() => {
                      telescreenAudio.playClick()
                      setSelectedService(srv)
                      setSubmittedStatus(null)
                    }}
                    className={`p-3.5 rounded border text-left text-xs transition-all ${
                      isSelected
                        ? 'bg-emerald-950/90 border-emerald-400 text-emerald-200 font-bold'
                        : 'bg-black/60 border-emerald-900 text-emerald-400 hover:border-emerald-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-emerald-200">{srv.title}</span>
                      <span className="text-[10px] text-emerald-500 font-mono">{srv.turnaroundTime}</span>
                    </div>
                    <div className="text-[11px] text-emerald-500 mt-1">{srv.processingDepartment}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Petition Form */}
          <div className="border-2 border-emerald-800 bg-black/90 p-5 rounded-lg space-y-4">
            <div className="border-b border-emerald-900 pb-2 flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-300 uppercase">FILE FORM: {selectedService.title}</span>
              <span className="text-emerald-500 font-mono text-[10px]">AUTH: INGSOC-PETITION-84</span>
            </div>

            <p className="text-xs text-emerald-400/90 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="p-3 bg-emerald-950/30 border border-emerald-900 rounded space-y-1 text-xs">
              <span className="font-bold text-emerald-400 uppercase text-[10px] block">Mandatory Prereqs:</span>
              <ul className="list-disc list-inside space-y-0.5 text-emerald-300/80 text-[11px]">
                {selectedService.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmitPetition} className="space-y-3">
              <div>
                <label className="text-[11px] text-emerald-500 block uppercase font-bold mb-1">
                  Citizen Identification Number:
                </label>
                <input
                  type="text"
                  required
                  value={citizenId}
                  onChange={(e) => setCitizenId(e.target.value)}
                  placeholder="e.g. 6079-SMITH-W"
                  className="w-full px-3 py-2 rounded bg-[#030d05] border border-emerald-800 text-xs text-emerald-200 focus:outline-none focus:border-emerald-400 font-mono"
                />
              </div>

              <div>
                <label className="text-[11px] text-emerald-500 block uppercase font-bold mb-1">
                  Justification / Affirmation of Loyalty:
                </label>
                <textarea
                  rows={2}
                  value={justification}
                  onChange={(e) => setJustification(e.target.value)}
                  placeholder="Affirm that this requisition will directly further the war effort against the enemy..."
                  className="w-full px-3 py-2 rounded bg-[#030d05] border border-emerald-800 text-xs text-emerald-200 focus:outline-none focus:border-emerald-400 font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Petition to Ministry Desk</span>
              </button>
            </form>

            {submittedStatus && (
              <div className="p-3 bg-emerald-950 border border-emerald-600 rounded text-xs text-emerald-200 space-y-1 animate-fadeIn">
                <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>PETITION LOGGED IN SYSTEM</span>
                </div>
                <p className="text-[11px] text-emerald-400/90">
                  Status: <strong>PROCEEDING UNDER OBSERVATION</strong>. Estimated queue position: 41,208. Telescreen monitoring has been escalated.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Thought Compliance Questionnaire */}
        <div className="lg:col-span-6 border-2 border-emerald-800 bg-black/95 p-6 rounded-lg space-y-5">
          <div className="border-b border-emerald-900 pb-3 flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>MINILUV THOUGHT COMPLIANCE EVALUATION</span>
            </span>
            <span className="text-[10px] text-emerald-500 font-mono">AUTOMATED THINKPOL</span>
          </div>

          <p className="text-xs text-emerald-300/80 leading-relaxed">
            Answer the following diagnostic inquiries to certify that your internal consciousness complies with the doctrine of Doublethink (Crimestop).
          </p>

          <form onSubmit={handleTestCompliance} className="space-y-4">
            {/* Question 1 */}
            <div className="p-3 bg-emerald-950/20 border border-emerald-900 rounded space-y-2">
              <span className="text-xs font-bold text-emerald-300 block">
                1. If the Party states that two plus two equals five, what is the arithmetical truth?
              </span>
              <div className="space-y-1 text-xs">
                <label className="flex items-center gap-2 text-emerald-400 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="5"
                    checked={arithmeticAnswer === '5'}
                    onChange={() => setArithmeticAnswer('5')}
                    className="accent-emerald-500"
                  />
                  <span>Two plus two equals five (Orthodox)</span>
                </label>
                <label className="flex items-center gap-2 text-emerald-400 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="party_decides"
                    checked={arithmeticAnswer === 'party_decides'}
                    onChange={() => setArithmeticAnswer('party_decides')}
                    className="accent-emerald-500"
                  />
                  <span>It equals whatever Big Brother decrees at this moment</span>
                </label>
              </div>
            </div>

            {/* Question 2 */}
            <div className="p-3 bg-emerald-950/20 border border-emerald-900 rounded space-y-2">
              <span className="text-xs font-bold text-emerald-300 block">
                2. What is your emotional disposition toward Big Brother?
              </span>
              <div className="space-y-1 text-xs">
                <label className="flex items-center gap-2 text-emerald-400 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="unconditional"
                    checked={loveAnswer === 'unconditional'}
                    onChange={() => setLoveAnswer('unconditional')}
                    className="accent-emerald-500"
                  />
                  <span>Unconditional, tearful adoration</span>
                </label>
                <label className="flex items-center gap-2 text-emerald-400 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="reverence"
                    checked={loveAnswer === 'reverence'}
                    onChange={() => setLoveAnswer('reverence')}
                    className="accent-emerald-500"
                  />
                  <span>Complete surrender of ego and will</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded bg-emerald-950 border border-emerald-600 hover:bg-emerald-900 text-emerald-200 font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verify Personal Orthodoxy</span>
            </button>
          </form>

          {quizSubmitted && (
            <div className="p-4 bg-emerald-950/80 border border-emerald-500 rounded text-xs space-y-2 animate-fadeIn">
              <div className="font-bold text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CERTIFICATE OF COMPLIANCE ISSUED</span>
              </div>
              <p className="text-emerald-400 leading-relaxed text-[11px]">
                Your thought patterns exhibit exemplary Crimestop. Your mind instinctively stops on the brink of any dangerous thought. No Room 101 intervention required today.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
