# Oceania Government Telescreen Portal (1984 Ingsoc Mock State)

A dystopian, retro-futuristic CRT television broadcast portal for the mock government of Oceania (George Orwell's *1984*). Designed with monochrome green phosphor aesthetics, cathode-ray scanlines, analog static noise, the four canonical ministries, state announcements, citizen services, and interactive roleplay terminals.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during Phase 1:
> - **Aesthetic**: Ingsoc telescreen with green phosphor CRT, scanlines, analog static distortion, and broadcast flicker.
> - **Discord Integration**: Deferred for now; reserved clean architecture hooks for future bot webhook/channel sync.
> - **Interactive Roleplay Modules**:
>   1. **Interactive Two Minutes Hate Broadcast**: Telescreen warning chime, Goldstein state condemnation broadcast, citizen loyalty chant trigger, and compliance evaluation.
>   2. **Ministry of Truth (Minitrue) History Revision Typewriter**: Interactive mechanical typewriter terminal where citizens and clerks correct "unpersons", adjust past chocolate production figures, and issue official revised bulletins into the memory hole.

---

## 1. Overview & Core Concept

- **What It Does**: Serves as the official state portal and telescreen receiver for Airstrip One / Oceania. Citizens and party members can navigate government announcements, explore the four ministries, inspect ration quotas and state statistics, submit compliance forms, and run interactive Ingsoc rituals.
- **Tone & Mood**: Authentic 1984 dystopian atmosphere, chilling bureaucratic doublethink, retro-analog TV static, glowing phosphor cathode tube, and mechanical click clacks.
- **Key Value**: Delivers an immersive, deeply atmospheric mock government portal tailored for Discord roleplay communities, alternative reality games (ARGs), and 1984 literature enthusiasts.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Telescreen Boot & Broadcast**:
   - The user loads the app into a dark CRT television bezel with active scanline raster, glass curvature, and subtle grain/static.
   - An iconic Ingsoc telescreen banner proclaims: `WAR IS PEACE · FREEDOM IS SLAVERY · IGNORANCE IS STRENGTH`.
   - A toggle allows citizens to switch CRT scanlines on/off and trigger the **Two Minutes Hate** emergency broadcast.

2. **The Four Canonical Ministries**:
   - **Ministry of Truth (Minitrue / Records Department)**: Newspeak dictionary updates, rectification notices, and the interactive **History Revision Typewriter** with a functional *Memory Hole* incineration button.
   - **Ministry of Peace (Minipax)**: Continuous Frontline War Telemetry against Eurasia / Eastasia, floating fortress deployments, and casualty re-estimations.
   - **Ministry of Plenty (Miniplenty)**: State economic targets, chocolate and synthetic gin quotas, boot production quotas (over-fulfilled by 148%), and standard citizen ration ledgers.
   - **Ministry of Love (Miniluv)**: Loyalty enforcement protocols, Room 101 warning notices, Thought Police hotline, and Citizen Loyalty Self-Assessment test.

3. **Government Directory & Announcements**:
   - **National Announcements**: Daily bulletins signed by Big Brother and the Inner Party Central Committee.
   - **Government Directory**: Roster of Party Officials, Department Directors (Fiction Dept, Rectification, Tele-surveillance), and Outer Party personnel numbers.
   - **National Statistics**: Fabricated production charts showing 200% production spikes and zero recorded crimes.
   - **Citizen Services**: Application for Victory Gin ration permits, marriage permission filing (subject to Anti-Sex League scrutiny), and razor blade requests.

4. **Closed & Restricted Zones (As Requested)**:
   - **National Archives**: Formally closed to public view with a prominent red-ink stamp: `RESTRICTED — INNER PARTY CLEARANCE ONLY (ARTICLE 7-B)`.
   - **Foreign Affairs**: Marked as `UNDER PERMANENT OCCUPATION / ACTIVE WAR ZONE (NO DIPLOMATIC CORPS EXIST)`.

### Visual Identity & Theme Tokens

- **Aesthetic Direction**: 1980s monochrome green phosphor CRT (`P1` phosphor glow), high-contrast terminal scanlines, glass curvature, analog grain overlay, and retro-brutalist typography.
- **Palette Tokens**:
  - CRT Phosphor Canvas: `#020a05` (deep pitch tube interior)
  - Phosphor Glow Text: `#22c55e` / `#4ade80` (vivid cathode green)
  - Phosphor Bloom Accent: `#86efac` (bright electron beam impact)
  - Hairline Frame Borders: `#14532d` / `#166534` (dark phosphor structural dividers)
  - Restricted Alert: `#ef4444` (Inner Party classified red stamp)
- **Typography**:
  - Display & Headings: `Cinzel` / `Outfit` set in authoritative uppercase.
  - Body & Telescreen Telemetry: `JetBrains Mono` / `Space Mono` for monospace terminal cadence.
- **Soundscape**:
  - Web Audio API telescreen horn chime, mechanical typewriter key clicks, and electric hum.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Modular CRT Bezel & Television Controls**:
  - *Chosen Approach*: Wrap the entire interface in an authentic retro CRT casing with toggleable scanlines, static noise overlay, and power flicker.
  - *Why*: Directly satisfies the user's explicit request for "dystopian, retro, television static typa design and feel".
- **Decision 2: Interactive Roleplay Modules (Two Minutes Hate & Revision Typewriter)**:
  - *Chosen Approach*: Build dedicated interactive sandboxes for the Two Minutes Hate (audio siren + dynamic broadcast sequence) and the Minitrue Typewriter (interactive text editor where typing produces mechanical sounds and sends text into the glowing Memory Hole).
  - *Why*: Provides genuine interactive engagement beyond static reading material, matching confirmed Phase 1 answers.
- **Decision 3: Non-Blocking Architecture for Future Discord Integration**:
  - *Chosen Approach*: Build state management and announcement schemas so a Discord Webhook / Bot API can be connected seamlessly in future iterations without altering core UI components.

---

## 4. Technical Architecture & Data Strategy

```
┌──────────────────────────────────────────────────────────────────┐
│                   OCEANIA TELESCREEN CONTAINER                   │
│      [CRT Bezel · Scanline Raster · TV Static Noise Shader]      │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
┌────────────────────────────────▼─────────────────────────────────┐
│                    TELESCREEN TOP BROADCAST BAR                  │
│       Big Brother Telescreen · Newspeak Slogan · Mode Toggles    │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     │                           │                           │
┌────▼─────────────┐   ┌─────────▼─────────┐   ┌─────────────▼─────┐
│ FOUR MINISTRIES  │   │  CORE SECTIONS    │   │ ROLEPLAY MODULES  │
│ ├─ Minitrue      │   │ ├─ Announcements  │   │ ├─ Two Minutes    │
│ ├─ Minipax       │   │ ├─ Directory      │   │ │  Hate Broadcast │
│ ├─ Miniplenty    │   │ ├─ Statistics     │   │ ├─ Minitrue       │
│ └─ Miniluv       │   │ ├─ Citizen Desk   │   │ │  Revision Engine│
└──────────────────┘   │ ├─ Archives [LOCK]│   │ └─ Sound Engine   │
                       │ └─ Foreign [UNAVAIL   │                   │
                       └───────────────────┘   └───────────────────┘
                                 │
┌────────────────────────────────▼─────────────────────────────────┐
│               LOCAL STATE & ROLEPLAY PERSISTENCE                 │
│  localStorage (Revision logs, citizen ration cards, audio mute)  │
└──────────────────────────────────────────────────────────────────┘
```

### Component Breakdown
1. `CrtScreenWrapper.tsx`: Glass curvature, scanlines, analog fuzz shader, power flicker.
2. `TelescreenHeader.tsx`: Big Brother eye insignia, Party slogans, broadcast emergency button.
3. `MinistriesView.tsx`: Tabbed view of Truth, Peace, Plenty, and Love with canonical data.
4. `TwoMinutesHateModal.tsx`: Fullscreen emergency broadcast with countdown and loyalty chant.
5. `HistoryRevisionTypewriter.tsx`: Interactive typewriter terminal with Memory Hole incineration.
6. `AnnouncementsView.tsx`: Daily central committee decrees and news bulletins.
7. `GovernmentDirectory.tsx`: Searchable roster of Inner and Outer party administrative personnel.
8. `NationalStatistics.tsx`: Visualized production quotas, chocolate ration charts, and war progress.
9. `CitizenServicesView.tsx`: Interactive permit filing, razor requests, and thought assessment.
10. `RestrictedZoneView.tsx`: Classified stamp for National Archives and Foreign Affairs.
