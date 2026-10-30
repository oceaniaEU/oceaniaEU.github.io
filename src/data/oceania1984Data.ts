import {
  MinistryData,
  AnnouncementItem,
  OfficialPerson,
  StatMetric,
  CitizenServiceForm,
} from '../types'

export const MINISTRIES_DATA: Record<string, MinistryData> = {
  minitrue: {
    id: 'minitrue',
    newspeakName: 'MINITRUE',
    englishName: 'Ministry of Truth',
    pyramidHeightMeters: 300,
    primaryDirective: 'Rectification of historical records, production of news, entertainment, education, and fine arts.',
    slogan: 'WAR IS PEACE · FREEDOM IS SLAVERY · IGNORANCE IS STRENGTH',
    director: 'Inner Party Executive Council (Records Department)',
    departments: [
      {
        name: 'Records Department (Recdep)',
        code: 'REC-DEP',
        mandate: 'Alteration of past newspapers, periodicals, and speeches to maintain continuous Party infallibility.',
      },
      {
        name: 'Fiction Department (Ficdep)',
        code: 'FIC-DEP',
        mandate: 'Algorithmic mechanical generation of songs, sensationalist prose, and prole literature.',
      },
      {
        name: 'Teleprograms Department (Teledep)',
        code: 'TEL-DEP',
        mandate: 'Production of continuous compulsory telescreen broadcasts, marches, and the Two Minutes Hate.',
      },
      {
        name: 'Pornosec',
        code: 'POR-SEC',
        mandate: 'Production of degraded sensationalist material distributed solely among proles to pacify dissent.',
      },
    ],
    currentCampaign: 'Eleventh Edition Newspeak Dictionary Compilation & Complete Inversion of 1983 Victory Bulletins.',
    activeAlert: 'Comrade Withers has been declared an UNPERSON. All citations in the 1982 Times must be incinerated.',
  },
  minipax: {
    id: 'minipax',
    newspeakName: 'MINIPAX',
    englishName: 'Ministry of Peace',
    pyramidHeightMeters: 300,
    primaryDirective: 'Conduct of perpetual warfare to consume industrial surplus and preserve the hierarchical caste structure.',
    slogan: 'WAR IS PEACE',
    director: 'Supreme War Directorate (Airstrip One Command)',
    departments: [
      {
        name: 'Equatorial Front Command',
        code: 'EQ-FRONT',
        mandate: 'Operational maneuvering in the contested quadrilateral of North Africa, Middle East, and Southern India.',
      },
      {
        name: 'Floating Fortress Logistics',
        code: 'FLT-LOG',
        mandate: 'Fabrication and deployment of submersible ocean bastions anchoring the sea corridors.',
      },
      {
        name: 'Rocket Bomb Dispersal',
        code: 'RKT-DIS',
        mandate: 'Strategic launch protocols to maintain civic discipline and vigilance across London quadrants.',
      },
    ],
    currentCampaign: 'Oceania is at war with Eastasia. Oceania has ALWAYS been at war with Eastasia.',
    activeAlert: 'Frontline victory on the Malabar front. Twenty-four thousand prisoners marched through Trafalgar Square.',
  },
  miniplenty: {
    id: 'miniplenty',
    newspeakName: 'MINIPLENTY',
    englishName: 'Ministry of Plenty',
    pyramidHeightMeters: 300,
    primaryDirective: 'Administration of economic scarcity, ration quotas, synthetic goods distribution, and production statistics.',
    slogan: 'WAR IS PEACE',
    director: 'Central State Planning Board',
    departments: [
      {
        name: 'Ration Quota Commission',
        code: 'RAT-COM',
        mandate: 'Calculation of caloric minimums, Victory Gin dilution tables, and seasonal textile cuts.',
      },
      {
        name: 'Fabricated Ledger Office',
        code: 'FAB-LED',
        mandate: 'Publication of 100%+ over-fulfillment figures for synthetic rubber, boots, and razor blades.',
      },
      {
        name: 'Victory Goods Syndicate',
        code: 'VIC-SYN',
        mandate: 'Manufacture of Victory Cigarettes (prone to falling tobacco) and Victory Coffee (saccharine infused).',
      },
    ],
    currentCampaign: 'The Ninth Three-Year Plan has exceeded all forecasts by forty-eight percent.',
    activeAlert: 'Standard weekly chocolate ration increased from 30 grams down to 20 grams as a demonstration of bounty.',
  },
  miniluv: {
    id: 'miniluv',
    newspeakName: 'MINILUV',
    englishName: 'Ministry of Love',
    pyramidHeightMeters: 300,
    primaryDirective: 'Maintenance of absolute ideological purity, elimination of thoughtcrime, and rehabilitation of souls.',
    slogan: 'IGNORANCE IS STRENGTH',
    director: 'Thought Police Central Bureau (Room 101)',
    departments: [
      {
        name: 'Thought Police (Thinkpol)',
        code: 'THK-POL',
        mandate: 'Continuous acoustic surveillance, facial micro-tremor detection, and sleep-talking apprehension.',
      },
      {
        name: 'Re-education Chambers',
        code: 'RE-EDU',
        mandate: 'Dialectical restoration through pain, confession, and the awakening of unconditional love for Big Brother.',
      },
      {
        name: 'Room 101 Facility',
        code: 'RM-101',
        mandate: 'Confrontation with the worst thing in the world. Extraction of complete submission.',
      },
    ],
    currentCampaign: 'Junior Anti-Sex League Vigilance Month: Report family members displaying facial heresy (Facecrime).',
    activeAlert: 'All citizens reminded: The telescreen is equipped with two-way optical and acoustic pickups. Do not avert eyes.',
  },
}

export const NATIONAL_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    date: '30 October 1984',
    classification: 'PUBLIC BROADCAST',
    ministry: 'MINITRUE',
    title: 'OFFICIAL RECTIFICATION: ALLIANCE WITH EURASIA IS AN UNFACT',
    content: [
      'The Ministry of Truth hereby clarifies that Oceania has never been at war with Eurasia.',
      'Oceania is at war with Eastasia. Oceania has always been at war with Eastasia.',
      'Any documents, banners, posters, or private journals suggesting otherwise are hostile sabotages orchestrated by Emmanuel Goldstein and must be incinerated in the nearest pneumatic Memory Hole immediately.',
    ],
    broadcastPriority: 'Compulsory',
  },
  {
    id: 'ann-2',
    date: '29 October 1984',
    classification: 'PARTY MEMBERS ONLY',
    ministry: 'MINIPLENTY',
    title: 'GLORIOUS INCREASE IN CHOCOLATE RATION ALLOTMENT',
    content: [
      'The Ministry of Plenty announces with profound civic gratitude toward Big Brother that the standard adult citizen chocolate ration has been successfully raised to 20 grams per week.',
      'Spontaneous demonstrations of joy broke out across the prole quarters and the canteen of the Records Department.',
      'Proletariat production of synthetic shoe leather has exceeded the Ninth Three-Year Plan quota by 148.4%.',
    ],
    broadcastPriority: 'Standard',
  },
  {
    id: 'ann-3',
    date: '28 October 1984',
    classification: 'INNER PARTY EYES ONLY',
    ministry: 'MINILUV',
    title: 'EXECUTION OF RE-EDUCATED CITIZENS IN CHESTNUT TREE CAFÉ',
    content: [
      'Former Inner Party members Jones, Aaronson, and Rutherford have made full confessions to counter-revolutionary sabotage, intelligence sharing with foreign enemies, and crimes against the state.',
      'Their executions have been carried out with utmost decorum. They expressed profound sorrow and wept with love for Big Brother prior to the sentence.',
      'Citizen vigilance must remain at highest alert.',
    ],
    broadcastPriority: 'Urgent',
  },
  {
    id: 'ann-4',
    date: '27 October 1984',
    classification: 'PUBLIC BROADCAST',
    ministry: 'MINIPAX',
    title: 'MALABAR SECTOR TRIUMPH: ENEMY BASTION RAZED',
    content: [
      'Oceanic armed forces have completed the annihilation of Eastasian remnants in South India.',
      'Fourteen hundred kilometers of coastal territory have been secured under the benign governance of Airstrip One.',
      'The Two Minutes Hate will feature live footage of captured field commanders at 14:00 hours sharp.',
    ],
    broadcastPriority: 'Compulsory',
  },
]

export const DIRECTORY_PERSONNEL: OfficialPerson[] = [
  {
    id: 'p-1',
    idNumber: '6079-SMITH-W',
    name: 'Winston Smith',
    caste: 'Outer Party',
    ministry: 'Ministry of Truth (Minitrue)',
    department: 'Records Department (Recdep)',
    rank: 'Historical Rectification Clerk (Grade 3)',
    loyaltyRating: '98.4% (Under Continuous Observation)',
    assignedOffice: 'Cubicle 42, Level 32, Pyramid A',
    activeDirectives: [
      'Rewrite Times speech dated 17 March 1982 regarding Comrade Withers',
      'Replace unpersons with fictitious hero Comrade Ogilvy',
    ],
    status: 'In Good Standing',
  },
  {
    id: 'p-2',
    idNumber: '0012-OBRIEN',
    name: "O'Brien",
    caste: 'Inner Party',
    ministry: 'Ministry of Love (Miniluv)',
    department: 'Thought Police Special Directive Directorate',
    rank: 'Core Commissioner & Member of the Inner Circle',
    loyaltyRating: '100% (Certified Infallible)',
    assignedOffice: 'Private Quarters, Level 101, Central Pillar',
    activeDirectives: [
      'Supervise ideological restoration of intellectual dissenters',
      'Coordinate Brotherhood sting operations',
    ],
    status: 'Commended',
  },
  {
    id: 'p-3',
    idNumber: '4410-SYME',
    name: 'Syme',
    caste: 'Outer Party',
    ministry: 'Ministry of Truth (Minitrue)',
    department: 'Research & Lexicography Department',
    rank: 'Senior Newspeak Philologist',
    loyaltyRating: '94.2% (Deemed Excessively Scholarly)',
    assignedOffice: 'Compilation Desk 09, Level 14',
    activeDirectives: [
      'Abridge Eleventh Edition adjectives and synonyms',
      'Excise unnecessary verbs to make thoughtcrime literally impossible',
    ],
    status: 'Under Surveillance',
  },
  {
    id: 'p-4',
    idNumber: '8821-PARSONS-T',
    name: 'Tom Parsons',
    caste: 'Outer Party',
    ministry: 'Ministry of Plenty (Miniplenty)',
    department: 'Hate Week Decorations Committee',
    rank: 'Block Warden & Community Organizer',
    loyaltyRating: '99.9% (Absolute Orthodoxy)',
    assignedOffice: 'Victory Mansions Block Office',
    activeDirectives: [
      'Organize papier-mâché effigies of Emmanuel Goldstein',
      'Supervise Spies Youth Brigade physical jerks training',
    ],
    status: 'In Good Standing',
  },
  {
    id: 'p-5',
    idNumber: '7701-OGILVY-C',
    name: 'Comrade Ogilvy (Posthumous)',
    caste: 'Outer Party',
    ministry: 'Ministry of Peace (Minipax)',
    department: 'Oceanic Marines Division',
    rank: 'Exemplary Patriot of Oceania',
    loyaltyRating: '100% (Manufactured Infallibility)',
    assignedOffice: 'Immortalized in the Records of 1983',
    activeDirectives: [
      'Heroically died at sea to prevent classified documents from capture',
      'Never touched alcohol or tobacco; lived solely for Big Brother',
    ],
    status: 'Commended',
  },
]

export const NATIONAL_STATISTICS: StatMetric[] = [
  {
    id: 'st-1',
    metric: 'Boot & Footwear Production',
    reportedValue: '148,000,000 Pairs',
    quotaComparison: '+148% Over Plan',
    previousPeriod: '100,000,000 Pairs',
    trend: 'surge',
    unit: 'Pairs Manufactured',
    note: 'Curiously, half the population of Airstrip One still walks barefoot.',
  },
  {
    id: 'st-2',
    metric: 'Weekly Chocolate Allotment',
    reportedValue: '20 Grams',
    quotaComparison: 'Glorious Bounty',
    previousPeriod: '30 Grams (Unfact)',
    trend: 'increase',
    unit: 'Grams / Citizen / Week',
    note: 'Officially proclaimed an increase from the previous non-existent baseline.',
  },
  {
    id: 'st-3',
    metric: 'Thoughtcrime Apprehensions & Trials',
    reportedValue: '100% Confession Rate',
    quotaComparison: 'Zero Acquittals',
    previousPeriod: '100% Confession Rate',
    trend: 'unanimous',
    unit: 'Voluntary Submissions',
    note: 'Every accused subject tearfully thanks the Party prior to vaporization.',
  },
  {
    id: 'st-4',
    metric: 'Floating Fortress Naval Supremacy',
    reportedValue: '42 Active Bastions',
    quotaComparison: '+8 Built This Cycle',
    previousPeriod: '34 Active Bastions',
    trend: 'surge',
    unit: 'Unsinkable Platforms',
    note: 'Patrolling the Atlantic & Indian Ocean sea-lanes.',
  },
  {
    id: 'st-5',
    metric: 'Newspeak Vocabulary Compression',
    reportedValue: '-38% Words Remaining',
    quotaComparison: 'Progress Towards Perfection',
    previousPeriod: 'Full Oldspeak Lexicon',
    trend: 'unanimous',
    unit: 'Dictionary Reductions',
    note: 'When the work is finished, the revolution will be complete.',
  },
]

export const CITIZEN_SERVICES: CitizenServiceForm[] = [
  {
    id: 'srv-1',
    title: 'Petition for Razor Blade Allotment',
    processingDepartment: 'Ministry of Plenty (Miniplenty) - Scarcity Office',
    turnaroundTime: '6 to 18 Months (Standard)',
    description: 'Request a single steel double-edge shaving blade. All applicants must surrender the rusted remnant of their previous blade.',
    requirements: [
      'Surrender previous blade fragment for metallurgical analysis',
      'Certification from Block Warden that facial hair is not ideological protest',
      'Affidavit that applicant has not traded blades on the Prole black market',
    ],
  },
  {
    id: 'srv-2',
    title: 'Marriage Authorization & Anti-Sex League Clearance',
    processingDepartment: 'Ministry of Love (Miniluv) - Family Scrutiny Commission',
    turnaroundTime: '2 to 5 Years',
    description: 'Application for civil cohabitation. Both parties must prove zero physical attraction exists between them; union is strictly permitted for producing children for the Party.',
    requirements: [
      'Certificate of 5-year active service in the Junior Anti-Sex League',
      'Psychological evaluation verifying mutual emotional indifference',
      'Written pledge to rear future offspring as Spies against parents',
    ],
  },
  {
    id: 'srv-3',
    title: 'Victory Mansions Plumbing & Window Repair Request',
    processingDepartment: 'Ministry of Plenty - Housing Repair Guild',
    turnaroundTime: 'Indefinite / Subject to Wartime Quotas',
    description: 'Report broken glass caused by rocket bomb detonations or non-functional water taps in residential quarters.',
    requirements: [
      'Affirmation that citizen is using cold water willingly for the war effort',
      'Proof of purchase of official Victory Cardboard window coverings',
    ],
  },
  {
    id: 'srv-4',
    title: 'Citizen Thought Compliance Self-Examination',
    processingDepartment: 'Ministry of Love (Miniluv) - Thought Examination Cell',
    turnaroundTime: 'Immediate Automated Assessment',
    description: 'Complete the Party Orthodoxy Questionnaire to calibrate your internal doublethink and eliminate residual bourgeois habits.',
    requirements: [
      'Absolute honesty under threat of immediate Room 101 escort',
      'Averaging 2+2=5 in all arithmetical questions',
    ],
  },
]

export const REVISION_TEMPLATES = [
  {
    ref: 'TIMES-17-03-82-WITHERS',
    original:
      'Comrade Withers, prominent member of the Inner Party, was awarded the Order of Conspicuous Merit, Second Class, for his distinguished service in the supply of synthetic woolens.',
    context:
      'Comrade Withers has fallen into disgrace, been executed, and vaporized. He is now an UNPERSON. Rewrite this entry to celebrate Comrade Ogilvy, a heroic soldier who died for Big Brother.',
    suggestedReplacement:
      'Comrade Ogilvy, who died recently in battle off the coast of Eastasia, has been posthumously awarded the Order of Conspicuous Merit for exceptional courage under fire.',
  },
  {
    ref: 'PLENTY-BULLETIN-CHOCOLATE-84',
    original:
      'The Ministry of Plenty projects that by the fourth quarter of 1984, the weekly chocolate ration may be reduced to twenty grams per person.',
    context:
      'The chocolate ration has just been lowered from 30g to 20g. The party claims this was an increase from an even lower number. Rewrite the bulletin so the Party predicted a raise to 20 grams.',
    suggestedReplacement:
      'The Ministry of Plenty announced with great pride that owing to the triumph of the Ninth Three-Year Plan, it will be possible to increase the chocolate ration to twenty grams per person.',
  },
  {
    ref: 'WAR-BULLETIN-EURASIA-FRONT',
    original:
      'Oceanic forces have concluded a temporary armistice with our staunch allies in Eurasia to repel the vicious incursions of Eastasian fleets.',
    context:
      'Oceania is at war with Eurasia! Oceania has ALWAYS been at war with Eurasia! (Or Eastasia). Remove all references to peace or alliance with the current enemy.',
    suggestedReplacement:
      'Oceanic forces have struck a devastating blow against our perpetual enemies in Eurasia, destroying seventeen hostile floating fortresses in the Bay of Biscay.',
  },
]
