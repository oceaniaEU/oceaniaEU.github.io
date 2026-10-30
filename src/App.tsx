import React, { useState } from 'react'
import { OceaniaTab } from './types'
import { CrtScreenWrapper } from './components/CrtScreenWrapper'
import { TelescreenHeader } from './components/TelescreenHeader'
import { TelescreenHome } from './components/TelescreenHome'
import { MinistriesView } from './components/MinistriesView'
import { HistoryRevisionTypewriter } from './components/HistoryRevisionTypewriter'
import { AnnouncementsView } from './components/AnnouncementsView'
import { GovernmentDirectory } from './components/GovernmentDirectory'
import { NationalStatistics } from './components/NationalStatistics'
import { CitizenServicesView } from './components/CitizenServicesView'
import { RestrictedZoneView } from './components/RestrictedZoneView'
import { TwoMinutesHateModal } from './components/TwoMinutesHateModal'
import { Eye, Radio, Shield } from 'lucide-react'

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<OceaniaTab>('home')
  const [isHateModalOpen, setIsHateModalOpen] = useState(false)
  const [scanlinesEnabled, setScanlinesEnabled] = useState(true)
  const [staticEnabled, setStaticEnabled] = useState(true)

  return (
    <CrtScreenWrapper
      scanlinesEnabled={scanlinesEnabled}
      staticEnabled={staticEnabled}
    >
      {/* Telescreen Top Bar & Navigation */}
      <TelescreenHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onTriggerTwoMinutesHate={() => setIsHateModalOpen(true)}
        scanlinesEnabled={scanlinesEnabled}
        onToggleScanlines={() => setScanlinesEnabled(!scanlinesEnabled)}
        staticEnabled={staticEnabled}
        onToggleStatic={() => setStaticEnabled(!staticEnabled)}
      />

      {/* Main Viewport Content inside the Cathode Tube */}
      <main className="flex-1 py-2">
        {activeTab === 'home' && (
          <TelescreenHome
            onNavigateTab={setActiveTab}
            onTriggerTwoMinutesHate={() => setIsHateModalOpen(true)}
          />
        )}
        {activeTab === 'ministries' && (
          <MinistriesView onNavigateTab={setActiveTab} />
        )}
        {activeTab === 'typewriter' && (
          <HistoryRevisionTypewriter />
        )}
        {activeTab === 'announcements' && (
          <AnnouncementsView />
        )}
        {activeTab === 'directory' && (
          <GovernmentDirectory />
        )}
        {activeTab === 'statistics' && (
          <NationalStatistics />
        )}
        {activeTab === 'citizens' && (
          <CitizenServicesView />
        )}
        {activeTab === 'archives' && (
          <RestrictedZoneView type="archives" />
        )}
        {activeTab === 'foreign' && (
          <RestrictedZoneView type="foreign" />
        )}
      </main>

      {/* Two Minutes Hate Emergency Takeover Modal */}
      <TwoMinutesHateModal
        isOpen={isHateModalOpen}
        onClose={() => setIsHateModalOpen(false)}
      />

      {/* Telescreen Footer & Thought Police Warning */}
      <footer className="mt-12 pt-6 border-t border-emerald-900/80 text-[11px] text-emerald-600 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-2">
          <Eye className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
          <span className="text-emerald-400 font-bold">STATE TELESCREEN TERMINAL · AIRSTRIP ONE</span>
          <span className="text-emerald-800">|</span>
          <span>INGSOC MOCK GOVERNMENT</span>
        </div>

        <div className="flex items-center gap-3 text-emerald-500 text-[10px]">
          <span>RECORDING SENSORS: 24/7 ACTIVE</span>
          <span className="text-emerald-800">•</span>
          <span>UNAUTHORIZED TAMPERING IS THOUGHTCRIME</span>
          <span className="text-emerald-800">•</span>
          <span className="text-emerald-400 font-bold">MINILUV CERTIFIED</span>
        </div>
      </footer>
    </CrtScreenWrapper>
  )
}

export default App
