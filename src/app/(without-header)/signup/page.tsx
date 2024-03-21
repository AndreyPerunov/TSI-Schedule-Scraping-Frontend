"use client"
import Image from "next/image"
import Link from "next/link"
import { Button, Select, Switch } from "@/ui"
import { useMultistep } from "@/hooks"
import { useState } from "react"
import { getGoogleOAuthUrl } from "@/utils"

type LoginData = {
  email: string
  role: "student" | "teacher"
  group: string
  name: string
}

const INITIAL_DATA: LoginData = {
  email: "",
  role: "student",
  name: "",
  group: ""
}

export default function SignUp() {
  const [data, setData] = useState(INITIAL_DATA)
  const updateFields = (fields: Partial<LoginData>) => setData(prev => ({ ...prev, ...fields }))

  const { steps, step, stepIndex } = useMultistep([<StepOne key="1" {...data} updateFields={updateFields} />, <StepTwo key="2" {...data} updateFields={updateFields} />, <StepThree key="3" {...data} updateFields={updateFields} />])

  return (
    <main className="bg-gradient-to-r from-primary to-secondary h-full min-h-screen flex justify-center items-start">
      <div className="mt-24 min-w-96 ">
        <Link href="/" className="text-white font-semibold hover:underline active:text-dark">
          {"<"} Home
        </Link>
        <div className="bg-white mt-2.5 py-10 px-16 rounded-lg flex flex-col items-center">
          {step}
          <div className="flex mt-10">
            {steps.map((_, index) => (
              <div key={index} className={`size-2.5 rounded-full ${stepIndex === index ? "bg-passive" : "bg-passive-light"} mx-1 transition-colors duration-500`}></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function StepOne({ next, updateFields }: { next?: () => void; updateFields: (fields: { role: "student" | "teacher" }) => void }) {
  return (
    <>
      <Image src="/student-teacher.png" width={300} height={300} priority={true} alt="Picture: Student or Teacher?" className="w-56" />
      <h1 className="mt-10 mb-0 text-2xl font-bold text-primary">Who are you?</h1>
      <Switch
        options={["student", "teacher"]}
        onChange={option => {
          updateFields({ role: option as "student" | "teacher" })
        }}
      />
      {next && (
        <Button onClick={next} className="mt-10">
          Next
        </Button>
      )}
    </>
  )
}

function StepTwo({ next, role, updateFields }: { next?: () => void; role: "student" | "teacher"; updateFields: (fields: { name: string; group: string }) => void }) {
  const groups = ["4203bda", "4204bda", "4206bda", "4207bda", "4208bda", "4208bda", "4208bda", "4208bda", "4208bda", "4208bda"]
  const [group, setGroup] = useState("")
  if (role.toLowerCase() === "student") {
    return (
      <>
        <Image src="/student.png" width={300} height={300} priority={true} alt="Picture of a student" className="w-20" />
        <h1 className="mt-10 mb-0 text-2xl font-bold text-primary">What is your group?</h1>
        <Select list={groups} selected={group} select={setGroup} className="mt-10 uppercase" />
        {next && (
          <Button onClick={next} className="mt-10">
            Next
          </Button>
        )}
      </>
    )
  } else if (role.toLowerCase() === "teacher") {
    return (
      <>
        <Image src="/teacher.png" width={300} height={300} priority={true} alt="Picture of a teacher" className="w-20" />
        <h1 className="mt-10 mb-0 text-2xl font-bold text-primary">What is your name?</h1>
        {next && (
          <Button onClick={next} className="mt-10">
            Next
          </Button>
        )}
      </>
    )
  } else {
    return (
      <h1 className="mt-10 mb-0 text-2xl text-center font-bold text-red-500">
        Something went wrong. <br />
        Try again later.
      </h1>
    )
  }
}

function StepThree({ next, updateFields }: { next?: () => void; updateFields: (fields: { email: string }) => void }) {
  const handleClick = () => {
    window.location.href = getGoogleOAuthUrl()
    setTimeout(() => {
      // next && next()
    }, 1000)
  }
  return (
    <>
      <Image src="/Scraper&GoogleCalendar.png" width={300} height={300} priority={true} alt="Picture of TSI Web Scraper and Google Calendar connection" className="w-56" />
      <h1 className="mt-10 mb-0 text-2xl font-bold text-primary">Connect to Google Calendar</h1>
      <p className="mt-2 text-passive font-semibold">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline active:text-dark">
          Log in.
        </Link>
      </p>
      {next && (
        <Button onClick={handleClick} className="mt-10" hollow={true} icon={<Image src="/google-icon.svg" width={20} height={20} priority={true} alt="Google Icon" className="inline-block translate-x-[-8px] size-auto" />}>
          Sign up with Google
        </Button>
      )}
      <p className="mt-2 text-passive text-sm font-semibold">
        By signing up, you agree to{" "}
        <Link href="/terms" className="text-passive font-bold hover:underline active:text-dark">
          terms.
        </Link>
      </p>
    </>
  )
}
