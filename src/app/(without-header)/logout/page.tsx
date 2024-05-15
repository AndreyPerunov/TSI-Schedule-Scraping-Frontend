"use client"
import Link from "next/link"
import Image from "next/image"
import { FaRegCircleCheck } from "react-icons/fa6"
import { useEffect } from "react"
import { useAppDispatch } from "@/hooks"
import { logoutUser } from "@/redux/features/authSlice"
import { redirect } from "next/navigation"

export default function Logout() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(logoutUser())
    redirect("/")
  }, [])
  return (
    <main className="bg-gradient-to-r from-primary to-secondary h-full min-h-screen flex justify-center items-start">
      <div className="mt-24 min-w-96 ">
        <Link href="/" className="text-white font-semibold hover:underline active:text-dark">
          {"<"} Home
        </Link>
        <div className="bg-white mt-2.5 py-10 px-16 rounded-lg flex flex-col items-center">
          <Image src="/logo.png" width={300} height={300} priority={true} alt="Logo" className="w-28" />
          <h1 className="mt-10 mb-0 text-2xl font-bold text-primary">Success!</h1>
          <p className="mt-2 text-passive font-semibold text-center">You have successfully logged out.</p>
          <FaRegCircleCheck className="mt-10 text-green-400" size={80} />
        </div>
      </div>
    </main>
  )
}
