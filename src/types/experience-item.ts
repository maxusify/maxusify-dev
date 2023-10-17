type JobType = 'full-time' | 'part-time' | 'freelance' | 'intern'

export type ExperienceItem = {
  name: string
  jobType: JobType
  startDate: string
  endDate?: string
  description?: string
  techStack?: string[]
  responsibilities?: string[]
}

type SkillLevel = 'beginner' | 'intermediate' | 'advanced'

export type SkillItem = {
  name: string
  level: SkillLevel
  icon?: string
  description?: string
}

export type CertificateItem = {
  name: string
  href: string
}
