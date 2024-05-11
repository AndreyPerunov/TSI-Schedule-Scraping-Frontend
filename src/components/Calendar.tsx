"use client"
import { useEffect, useState } from "react"
import { Lecture } from "../types"

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

export default function Calendar({ days, isLoading, lectures, className }: { days: number; isLoading: boolean; lectures: (Lecture & { color: string })[]; className?: string }) {
  const [loadingDay, setLoadingDay] = useState<number>(0)

  // Finding the current month for comparison
  const today = new Date()
  const currentMonth = today.getMonth() // Month of today's date

  // Finding current first day of the week
  const currentDay = today.getDay() === 0 ? 7 : today.getDay()

  // Finding the first day of the week
  const monday = new Date(today)
  monday.setDate(today.getDate() - currentDay + 1)

  // Calculating the number of days to display
  const mondayDay = monday.getDay() === 0 ? 7 : monday.getDay()
  const requiredFitDays = days + (currentDay - mondayDay)
  const displayDays = requiredFitDays > 28 ? Math.ceil(requiredFitDays / 7) * 7 : 35

  // Creating calendar days with a flag to indicate if the day is in the current month
  const CALENDAR_DAYS = Array.from({ length: displayDays }, (_, index) => {
    const date = new Date(monday)
    date.setDate(monday.getDate() + index)
    const day = date.getDate()
    const isCurrentMonth = date.getMonth() === currentMonth // Check if the month is the current month
    const isToday = date.toDateString() === today.toDateString() // Check if the day is today
    const isScraped = date >= today && date <= new Date(today.getFullYear(), today.getMonth(), today.getDate() + days) // Check if the day is scraped
    // const isDayLoading = isLoading && loadingDay === index - currentDay + 1
    const isDayLoading = !isLoading ? 3 : index - currentDay + 1 - loadingDay
    const dayOfTheWeek = date.toLocaleString("default", { weekday: "short" }).slice(0, 3).toUpperCase()
    if (day === 1) {
      const month = date.toLocaleString("default", { month: "short" }).slice(0, 3)
      return { day: `${month} ${day}`, date, isCurrentMonth, isToday, isScraped, dayOfTheWeek, isLoading: isDayLoading }
    }
    return { day: day.toString(), date, isCurrentMonth, isToday, isScraped, dayOfTheWeek, isLoading: isDayLoading }
  })

  // Loading animation
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (loadingDay < days - 1 && isLoading) {
      timeout = setTimeout(() => setLoadingDay(prevLoadingDay => prevLoadingDay + 1), 100)
    } else {
      timeout = setTimeout(() => setLoadingDay(0), 100)
    }
    return () => clearTimeout(timeout)
  }, [isLoading, loadingDay])

  return (
    <div className={"grid grid-cols-7 w-full " + className}>
      {CALENDAR_DAYS.map((day, index) => (
        <div key={index} className={`${index < 7 && "border-t"} ${index % 7 === 0 && "border-l"} ${index < 7 ? "h-32" : "h-28"} border-r border-b border-passive flex flex-col items-center p-1 ${day.isScraped && "bg-primary"} transition-all duration-250 ${day.isLoading === 0 ? "bg-opacity-50 translate-y-1" : "bg-opacity-10"} ${day.isLoading === -1 ? "bg-opacity-35" : "bg-opacity-10"} ${day.isLoading === -2 ? "bg-opacity-25" : "bg-opacity-10"}`}>
          {index < 7 && <p className="font-semibold text-xs text-passive h-6 leading-6 text-center">{day.dayOfTheWeek}</p>}
          <p className={`font-semibold text-xs ${day.isCurrentMonth && !day.isToday ? "text-black" : "text-passive"} min-w-6 h-6 leading-6 text-center ${day.isToday && "bg-primary rounded-full text-white"} ${day.day.length > 1 && "px-2"}`}>{day.day}</p>
          {lectures.length > 0 && (
            <div className="flex flex-col items-center justify-center w-full">
              {lectures
                .filter(lecture => new Date(lecture.start).toDateString() === day.date.toDateString())
                .map((lecture, index) => {
                  if (index < 2) {
                    return (
                      <div key={index} className="flex items-center justify-start w-full overflow-hidden">
                        <div
                          className="min-w-2 min-h-2 rounded-full"
                          style={{
                            backgroundColor: COLORS[lecture.color].background
                          }}
                        ></div>
                        <p className="pl-1 text-xs h-6 leading-6 truncate text-slate-700">
                          {new Date(lecture.start).toLocaleTimeString("en-US", { timeZone: "Europe/Riga", hour: "2-digit", minute: "2-digit", hour12: false })} <span className="font-semibold text-slate-700">{lecture.subject}</span>
                        </p>
                      </div>
                    )
                  }
                })}
              {lectures.filter(lecture => new Date(lecture.start).toDateString() === day.date.toDateString()).length > 2 && <p className="text-start w-full text-xs font-bold text-slate-700">{lectures.filter(lecture => new Date(lecture.start).toDateString() === day.date.toDateString()).length - 2} more</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
