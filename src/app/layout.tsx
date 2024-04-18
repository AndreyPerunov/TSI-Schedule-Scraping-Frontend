import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReduxProvider } from "@/redux/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Schedule Scraper",
  description: "TSI Schedule Scraper is a simple tool to copy your TSI lectures schedule to your Google Calendar. This project provides all the tools to make your time management more manageable 😎. Copy your schedule in one click (or more than one click if you want to customize it)."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
