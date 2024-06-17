"use client"
import { useAppSelector } from "@/hooks"
import { Wrapper } from "@/layouts"
import Image from "next/image"
import { Button } from "@/ui"
import Link from "next/link"

export default function DeleteProfile() {
  const { group, name, role, googleEmail, googlePicture, googleName } = useAppSelector(state => state.authReducer)

  const deleteHandler = () => {
    // Delete profile
  }

  return (
    <main className="bg-white h-screen">
      <Wrapper className="mt-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary text-passive p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {googlePicture && <Image src={googlePicture} width={400} height={400} priority={true} alt="Profile picture" className="rounded-full size-14" />}
                <div className="grid gap-0.5">
                  <div className="text-lg font-semibold text-white">{googleName}</div>
                  <div className="text-sm text-white opacity-80">{role}</div>
                </div>
              </div>
              <h1 className="text-white font-bold">Delete</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 p-6 pt-10">
            <p className="text-primary text-2xl font-semibold text-center">Are you sure you want to delete your profile?</p>
            <p className="text-passive text-center">All of your data and information will be deleted.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
            <Button onClick={deleteHandler} className="text-lg bg-red-400 text-white active:text-white">
              Delete profile
            </Button>
            <Link href="/profile" className="text-nowrap border-[3px] text-center rounded-lg border-primary text-lg font-semibold pl-8 pr-9 py-2.5 transition-colors duration-300 text-primary hover:text-white hover:bg-primary active:text-dark">
              Cancel
            </Link>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}
