import { FC } from "react"
import { Wrapper } from "@/layouts"
import { AnimatedNumber } from "@/ui"
import axios from "axios"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_ENDPOINT

async function getLastScrapeTimeStamp() {
  try {
    const res = await axios.get<{ timestamp: string }>("/api/schedule/last-scrape-timestamp")

    const currentDate = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    const lastScrapeDate = new Date(res.data.timestamp).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    const lastScrapeTime = new Date(res.data.timestamp).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })

    const formatedLastScrapeTimeStamp = lastScrapeDate === currentDate ? lastScrapeTime : lastScrapeDate
    return formatedLastScrapeTimeStamp
  } catch (error) {
    console.log(error)
    return "10.07.2003"
  }
}

async function getActiveGroups() {
  try {
    const res = await axios.get<[string]>("/api/groups/active")
    return res.data.length
  } catch (error) {
    console.log(error)
    return 0
  }
}

async function getStudents() {
  try {
    const res = await axios.get<[string]>("/api/users/students")
    return res.data.length
  } catch (error) {
    console.log(error)
    return 0
  }
}

async function getLecturers() {
  try {
    const res = await axios.get<[string]>("/api/users/lecturers")
    return res.data.length
  } catch (error) {
    console.log(error)
    return 0
  }
}

const Stats: FC = async () => {
  const lastScrapeTimeStampData = getLastScrapeTimeStamp()
  const activeGroupsData = getActiveGroups()
  const studentsData = getStudents()
  const lecturersData = getLecturers()
  const [lastScrapeTimeStamp, activeGroup, students, lecturers] = await Promise.all([lastScrapeTimeStampData, activeGroupsData, studentsData, lecturersData])

  return (
    <>
      <Wrapper className="grid grid-cols-4 gap-4 my-7">
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>{lastScrapeTimeStamp}</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Last Scrape</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>{activeGroup.toLocaleString()}</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Group{activeGroup != 1 && "s"} Using</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>{students.toLocaleString()}</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Student{students != 1 && "s"} Using</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>{lecturers.toLocaleString()}</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Lecturer{lecturers != 1 && "s"} Using</span>
        </div>
      </Wrapper>
      <hr />
    </>
  )
}

export default Stats
