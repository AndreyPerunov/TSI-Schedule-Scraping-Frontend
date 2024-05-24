import Link from "next/link"
import Image from "next/image"
import { FaRegCircleXmark } from "react-icons/fa6"

export default function Fail({ searchParams }: { searchParams: URLSearchParams }) {
  const { error_message } = searchParams as any
  return (
    <main className="bg-gradient-to-r from-primary to-secondary h-full min-h-screen flex justify-center items-start">
      <div className="mt-24 min-w-96 ">
        <Link href="/" className="text-white font-semibold hover:underline active:text-dark">
          {"<"} Home
        </Link>
        <div className="bg-white mt-2.5 py-10 px-16 rounded-lg flex flex-col items-center">
          <Image src="/logo.png" width={300} height={300} priority={true} alt="Logo" className="w-28" />
          <h1 className="mt-10 mb-0 text-2xl font-bold text-primary">Error!</h1>
          <p className="mt-2 text-passive font-semibold text-center">{error_message ? error_message : "Something went wrong. Try again later."}</p>
          <FaRegCircleXmark className="mt-10 text-red-400" size={80} />
        </div>
      </div>
    </main>
  )
}
