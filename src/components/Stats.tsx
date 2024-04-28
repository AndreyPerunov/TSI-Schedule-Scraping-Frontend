import { FC } from "react"
import { Wrapper } from "@/layouts"
import { AnimatedNumber } from "@/ui"

const Stats: FC = () => {
  return (
    <>
      <Wrapper className="grid grid-cols-4 gap-4 my-7">
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>24.04.2024</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Last Scrape</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>4</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Groups Scraping</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>18</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Students Using</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-3xl font-semibold text-primary">
            <AnimatedNumber>8</AnimatedNumber>
          </span>
          <span className="text-passive text-center font-semibold uppercase text-xl">Lecturers Using</span>
        </div>
      </Wrapper>
      <hr />
    </>
  )
}

export default Stats
