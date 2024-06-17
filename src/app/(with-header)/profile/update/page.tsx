"use client"
import { useAppSelector } from "@/hooks"
import { Wrapper } from "@/layouts"
import Image from "next/image"
import { Button, Select } from "@/ui"
import { useState, useEffect } from "react"
import { useResource } from "@/hooks"
import { Lecturer, Group } from "@/types"
import Link from "next/link"

export default function UpdateProfile() {
  const { group, name, role, googlePicture, googleName } = useAppSelector(state => state.authReducer)
  const [ready, setReady] = useState(false)

  // Roles Selector
  const roles = ["student", "teacher"]
  const [newRole, setNewRole] = useState("")

  // Lecturers Selector
  const [lecturers, lecturerError]: [lecturers: Lecturer[], error: string | any] = useResource("/api/lecturers")
  const [newName, setNewName] = useState("select")

  // Groups Selector
  const [groups, groupError]: [groups: Group[], error: any | string] = useResource("/api/groups")
  const [newGroup, setNewGroup] = useState("select")

  useEffect(() => {
    setNewRole(role)
  }, [role])

  useEffect(() => {
    if (role === "teacher") {
      setNewName(name)
    }
  }, [name])

  useEffect(() => {
    if (role === "student") {
      setNewGroup(group)
    }
  }, [group])

  useEffect(() => {
    const validLecturer = lecturers && Boolean(lecturers.find(lecturer => lecturer.lecturerName === newName))
    const validGroup = groups && Boolean(groups.find(group => group.groupName === newGroup))
    if (role === newRole && role === "teacher" && name === newName) {
      setReady(false)
    } else if (role === newRole && role === "student" && group === newGroup) {
      setReady(false)
    } else if (newRole === "teacher" && validLecturer) {
      setReady(true)
    } else if (newRole === "student" && validGroup) {
      setReady(true)
    } else {
      setReady(false)
    }
  }, [newRole, newName, newGroup, role, name, group, lecturers, groups])

  const updateHandler = () => {
    // Update profile
  }

  return (
    <main className="bg-white h-screen">
      <Wrapper className="mt-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg ">
          <div className="bg-primary text-passive p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {googlePicture && <Image src={googlePicture} width={400} height={400} priority={true} alt="Profile picture" className="rounded-full size-14" />}
                <div className="grid gap-0.5">
                  <div className="text-lg font-semibold text-white">{googleName}</div>
                  <div className="text-sm text-white opacity-80">{role}</div>
                </div>
              </div>
              <h1 className="text-white font-bold">Update</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="grid gap-2">
              <div className="text-sm font-medium text-passive">Role</div>
              <Select list={roles} selected={newRole} select={setNewRole}></Select>
            </div>
            {newRole === "student" ? (
              <div className="grid gap-2">
                <div className="text-sm font-medium text-passive">Group</div>
                {groups ? <Select list={groups.map(group => group.groupName)} selected={newGroup} select={setNewGroup} /> : <div className="px-6 py-3.5 font-semibold border-2 border-primary text-primary flex items-center min-w-36 select-none cursor-wait justify-between rounded-lg">Loading...</div>}
              </div>
            ) : (
              <div className="grid gap-2">
                <div className="text-sm font-medium text-passive">Name</div>
                {lecturers ? <Select list={lecturers.map(lecturer => lecturer.lecturerName)} selected={newName} select={setNewName} /> : <div className="px-6 py-3.5 font-semibold border-2 border-primary text-primary flex items-center min-w-36 select-none cursor-wait justify-between rounded-lg">Loading...</div>}
              </div>
            )}
            <Button onClick={updateHandler} className="text-lg bg-[#2563EB] text-white active:text-white" disabled={!ready}>
              Update profile
            </Button>
            <Link href="/profile" className="text-nowrap border-[3px] text-center rounded-lg border-primary text-lg font-semibold pl-8 pr-9 py-2.5 transition-colors duration-300 text-primary hover:text-white hover:bg-primary active:text-dark">
              Cancel
            </Link>
          </div>
          {lecturerError && <p className="px-6 pb-6 md:px-8 md:pb-8 text-center text-red-500 text-sm font-semibold">Failed to fetch lecturers names. Try again later.</p>}
          {groupError && <p className="px-6 pb-6 md:px-8 md:pb-8 text-center text-red-500 text-sm font-semibold">Failed to fetch groups names. Try again later.</p>}
        </div>
      </Wrapper>
    </main>
  )
}
