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

type User = {
  isAuth: boolean
  googleEmail: string
  googleName: string
  googlePicture: string
  role: "student" | "lecturer" | ""
  group: string
  name: string
  iat: number
  exp: number
}

type Lecture = {
  lectureNumber: number
  start: string
  end: string
  room: string
  groups: string[]
  lecturer: string
  subject: string
  typeOfTheClass: string
  comment: string
}

export type { ILink, Lecturer, Group, User, Lecture }
