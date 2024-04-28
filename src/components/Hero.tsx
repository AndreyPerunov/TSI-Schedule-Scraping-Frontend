import { FC } from "react"
import { Wrapper } from "@/layouts"
import HeroButton from "./HeroButton"

const Hero: FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary m-0 shadow-xl shadow-slate-400">
      <Wrapper className="pt-24 pb-32">
        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="md:w-3/4">
            <h1 className="m-0 text-white text-5xl md:text-6xl font-semibold text-center md:text-start">TSI Schedule Scrapper</h1>
            <p className="text-white text-xl mt-4 text-center md:text-start md:w-3/4">Easily copy your university schedule to Google Calendar.</p>
            <HeroButton className="mt-7 text-center md:text-start" />
          </div>
          <div className="flex flex-col items-center justify-center mb-8 lg:w-3/4 md:items-end md:mb-0">
            <img src="/TSI&Calendar.png" alt="Hero" className="w-3/4 md:w-11/12 lg:w-full" />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero
