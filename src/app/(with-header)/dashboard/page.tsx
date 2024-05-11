"use client"

import { Lecture } from "@/types"
import { useState } from "react"
import axios from "axios"
import { useAppSelector } from "@/hooks"
import { Heading, Button } from "@/ui"
import { Wrapper } from "@/layouts"
import { Calendar, LinkButton } from "@/components"

const COLORS: { [key: string]: { background: string; foreground: string } } = {
  "1": { background: "#a4bdfc", foreground: "#1d1d1d" },
  "2": { background: "#7ae7bf", foreground: "#1d1d1d" },
  "3": { background: "#dbadff", foreground: "#1d1d1d" },
  "4": { background: "#ff887c", foreground: "#1d1d1d" },
  "5": { background: "#fbd75b", foreground: "#1d1d1d" },
  "6": { background: "#ffb878", foreground: "#1d1d1d" },
  "7": { background: "#46d6db", foreground: "#1d1d1d" },
  "8": { background: "#e1e1e1", foreground: "#1d1d1d" },
  "9": { background: "#5484ed", foreground: "#1d1d1d" },
  "10": { background: "#51b749", foreground: "#1d1d1d" },
  "11": { background: "#dc2127", foreground: "#1d1d1d" }
}
export default function Dashboard() {
  const [state, setState] = useState<"Ready to scrape" | "Ready to copy" | "Success">("Ready to scrape")
  const { group, name, role } = useAppSelector(state => state.authReducer)
  const [days, setDays] = useState<number>(30)
  const [lectures, setLectures] = useState<(Lecture & { color: string })[]>([] as (Lecture & { color: string })[])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const user = useAppSelector(state => state.authReducer)
  const scrapeHandler = () => {
    setError("")
    setLoading(true)
    axios
      .get("/api/schedule", {
        params: role === "student" ? { group, days } : { lecturer: name, days }
      })
      .then(response => {
        console.log("Scraping completed")
        const lecturesAxios: Lecture[] = response.data
        setLectures(lecturesAxios.map(lecture => ({ ...lecture, color: "5" })))
        setState("Ready to copy")
        setLoading(false)
      })
      .catch(error => {
        console.error("Error scraping schedule: " + error)
        setError("Something went wrong, try again later")
        setLoading(false)
      })
  }

  const copyHandler = () => {
    setError("")
    setLoading(true)
    if (lectures.length === 0) {
      setError("Scrape the schedule first")
      setLoading(false)
      return
    }

    axios
      .post("/api/schedule", {
        access_token: user.accessToken,
        days: 30,
        lectures: lectures.map((lecture, index) => {
          return {
            title: lecture.subject,
            description: `room: ${lecture.room}
lecturer: ${lecture.lecturer}
type: ${lecture.typeOfTheClass}
comment: ${lecture.comment}
groups: ${lecture.groups.join(", ")}`,
            color: lecture.color,
            start: lecture.start,
            location: "Transporta un sakaru institūts (TSI), Valērijas Seiles iela 1, Latgales priekšpilsēta, Rīga, LV-1019",
            end: lecture.end
          }
        })
      })
      .then(response => {
        setLoading(false)
        setState("Success")
        console.log("Schedule copied")
      })
      .catch(error => {
        setLoading(false)
        console.error("Error copying schedule: " + error)
        setError("Something went wrong, try again later")
      })
  }

  return (
    <main className="bg-white h-screen">
      <Wrapper className="mt-16">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col items-center mb-8 md:pr-10 md:block md:mb-0">
            <Heading className="text-nowrap">Copy schedule</Heading>
            {state === "Ready to scrape" && (
              <>
                {role === "student" ? (
                  <>
                    <p className="font-semibold text-xl text-passive mt-4">Group:</p>
                    <p className="font-semibold text-xl text-primary mt-2">{group}</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-xl text-passive mt-4">Lecturer:</p>
                    <p className="font-semibold text-xl text-primary mt-2">{name}</p>
                  </>
                )}
                <p className="font-semibold text-xl text-passive mt-4">Scope:</p>
                <p className="font-semibold text-xl text-primary mt-2">{days} days</p>
                <p className="font-semibold text-xl text-passive mt-4">Step 1:</p>
                <Button className="mt-2 px-9" onClick={scrapeHandler} loading={lectures.length === 0 && loading}>
                  Scrape
                </Button>
              </>
            )}
            {state === "Ready to copy" && (
              <>
                {role === "student" ? (
                  <>
                    <p className="font-semibold text-xl text-passive mt-4">Group:</p>
                    <p className="font-semibold text-xl text-primary mt-2">{group}</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-xl text-passive mt-4">Lecturer:</p>
                    <p className="font-semibold text-xl text-primary mt-2">{name}</p>
                  </>
                )}
                <p className="font-semibold text-xl text-passive mt-4">Scope:</p>
                <p className="font-semibold text-xl text-primary mt-2">{days} days</p>
                <p className="font-semibold text-xl text-passive mt-4">Lectures:</p>
                <p className="font-semibold text-xl text-primary mt-2">{lectures.length} lectures were scraped</p>
                <p className="font-semibold text-xl text-passive mt-4">Step 2:</p>
                <Button className="mt-2 px-9" onClick={copyHandler} loading={loading}>
                  Copy
                </Button>
              </>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {state === "Success" && (
              <>
                <p className="font-semibold text-xl text-passive mt-4">All Done!</p>
                <p className="font-semibold text-xl text-primary mt-2">Your schedule was successfully copied to Google Calendar</p>
                <p className="font-semibold text-xl text-passive mt-4">Enjoy:</p>
                <Button className="mt-2" onClick={() => window.open("https://calendar.google.com/calendar/u/0/r/month", "_blank")}>
                  Open in Google Calendar
                </Button>
              </>
            )}
            <p className="mt-4 text-passive font-semibold">Steps:</p>
            <ol className="list-decimal list-inside">
              <li className="text-passive mt-1">Scrape your schedule</li>
              <li className="text-passive mt-1">Copy your schedule to Google Calendar</li>
              <li className="text-passive mt-1">Enjoy</li>
            </ol>
          </div>
          <Calendar days={days} isLoading={loading} lectures={lectures} className="mb-8 md:mb-0" />
        </div>
      </Wrapper>
    </main>
  )
}
