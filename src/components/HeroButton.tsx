"use client"
import { LinkButton } from "@/components"
import { useAppSelector } from "@/hooks"

export default function HeroButton({ className, ...props }: { className?: string }) {
  const { isAuth } = useAppSelector(state => state.authReducer)
  return (
    <div className={className} {...props}>
      {isAuth ? <LinkButton href="/dashboard">Dashboard</LinkButton> : <LinkButton href="/signup">Get Started</LinkButton>}
    </div>
  )
}
