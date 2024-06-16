import { FaRegCircleXmark } from "react-icons/fa6"
import Link from "next/link"
import { Header } from "@/components"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="-mt-14 flex flex-col items-center justify-center w-full h-screen px-10">
        <h1 className="mt-10 mb-0 text-4xl font-bold text-red-400">404</h1>
        <p className="lg:w-1/3 md:w-1/2 mt-4 text-passive font-semibold text-center text-wrap">
          Sorry we could not find that page. But do not worry, you can find everything you need on our{" "}
          <Link href="/" className="text-primary hover:underline active:text-dark">
            homepage
          </Link>
          .
        </p>
        <FaRegCircleXmark className="mt-10 text-red-400" size={80} />
      </main>
    </>
  )
}
