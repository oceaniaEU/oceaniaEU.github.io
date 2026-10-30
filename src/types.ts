export type OceaniaTab =
  | 'home'
  | 'ministries'
  | 'typewriter'
  | 'announcements'
  | 'directory'
  | 'statistics'
  | 'citizens'
  | 'archives'
  | 'foreign'

export type MinistryId = 'minitrue' | 'minipax' | 'miniplenty' | 'miniluv'

export interface MinistryData {
  id: MinistryId
  newspeakName: string
  englishName: string
  pyramidHeightMeters: number
  primaryDirective: string
  slogan: string
  director: string
  departments: {
    name: string
    code: string
    mandate: string
  }[]
  currentCampaign: string
  activeAlert: string
}

export interface AnnouncementItem {
  id: string
  date: string
  classification: 'PUBLIC BROADCAST' | 'PARTY MEMBERS ONLY' | 'INNER PARTY EYES ONLY'
  ministry: string
  title: string
  content: string[]
  broadcastPriority: 'Urgent' | 'Standard' | 'Compulsory'
}

export interface OfficialPerson {
  id: string
  idNumber: string
  name: string
  caste: 'Inner Party' | 'Outer Party' | 'Prole Liaison'
  ministry: string
  department: string
  rank: string
  loyaltyRating: string
  assignedOffice: string
  activeDirectives: string[]
  status: 'In Good Standing' | 'Under Surveillance' | 'Commended'
}

export interface StatMetric {
  id: string
  metric: string
  reportedValue: string
  quotaComparison: string
  previousPeriod: string
  trend: 'surge' | 'increase' | 'unanimous'
  unit: string
  note: string
}

export interface RevisionLog {
  id: string
  documentRef: string
  originalExcerpt: string
  revisedText: string
  clerkNumber: string
  timestamp: string
  status: 'INCINERATED IN MEMORY HOLE' | 'ARCHIVED IN MINITRUE'
}

export interface CitizenServiceForm {
  id: string
  title: string
  processingDepartment: string
  turnaroundTime: string
  description: string
  requirements: string[]
}
