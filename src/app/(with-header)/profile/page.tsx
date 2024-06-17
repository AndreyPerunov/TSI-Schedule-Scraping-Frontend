"use client"
import { useAppSelector } from "@/hooks"
import { Wrapper } from "@/layouts"
import Image from "next/image"
import { LinkButton } from "@/components"
import Link from "next/link"

export default function Profile() {
  const { group, name, role, googleEmail, googlePicture, googleName } = useAppSelector(state => state.authReducer)

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
              <h1 className="text-white font-bold">Profile</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="grid gap-2">
              <div className="text-sm font-medium text-passive">Email</div>
              <div className="text-primary font-semibold">{googleEmail}</div>
            </div>
            {role === "student" ? (
              <div className="grid gap-2">
                <div className="text-sm font-medium text-passive">Group</div>
                <div className="text-primary font-semibold">{group}</div>
              </div>
            ) : (
              <div className="grid gap-2">
                <div className="text-sm font-medium text-passive">Name</div>
                <div className="text-primary font-semibold">{name}</div>
              </div>
            )}

            <Link href="/profile/update" className="text-nowrap border-[3px] text-center rounded-lg border-white text-lg font-semibold pl-8 pr-9 py-2.5 transition-colors duration-300 bg-primary text-white active:text-primary hover:bg-dark hover:border-dark">
              Update profile
            </Link>
            <Link href="/profile/delete" className="text-nowrap border-[3px] text-center rounded-lg border-white text-lg font-semibold pl-8 pr-9 py-2.5 transition-colors duration-300 bg-red-500 text-white active:text-primary hover:bg-dark hover:border-dark">
              Delete profile
            </Link>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}
