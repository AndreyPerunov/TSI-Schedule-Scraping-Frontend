"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/ui"

export default function LogIn() {
  const handleClick = () => {
    // TODO
  }

  return (
    <main className="bg-gradient-to-r from-primary to-secondary h-full min-h-screen flex justify-center items-start">
      <div className="mt-24 min-w-96 ">
        <Link href="/" className="text-white font-semibold hover:underline active:text-dark">
          {"<"} Home
        </Link>
        <div className="bg-white mt-2.5 py-10 px-16 rounded-lg flex flex-col items-center">
          <Image src="/Scraper&GoogleCalendar.png" width={300} height={300} priority={true} alt="Picture of TSI Web Scraper and Google Calendar connection" className="w-56" />
          <h1 className="mt-10 mb-0 text-2xl font-bold text-primary">Welcome back!</h1>
          <p className="mt-2 text-passive font-semibold text-center">
            Get your schedule in <span className="font-bold">one click</span>!
          </p>
          <Button onClick={handleClick} className="mt-10" hollow={true} icon={<Image src="/google-icon.svg" width={20} height={20} priority={true} alt="Google Icon" className="inline-block translate-x-[-8px] size-auto" />}>
            Sign in with Google
          </Button>
          <p className="mt-2 text-passive text-sm font-semibold">
            Don{"'"}t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline active:text-dark">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
