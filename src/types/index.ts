interface ILink {
  name: string
  href: string
  external?: boolean
}

type Lecturer = {
  lecturerName: string
  scrapeTimeStamp: Date | null
  createdAt: Date | null
  updatedAt: Date | null
  subscribers: number
  users: number
}

type Group = {
  groupName: string
  scrapeTimeStamp: Date | null
  createdAt: Date | null
  updatedAt: Date | null
  subscribers: number
  users: number
}

export type { ILink, Lecturer, Group }
