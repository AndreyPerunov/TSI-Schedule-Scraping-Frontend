import Image from "next/image"
import { Split, Wrapper } from "../layouts"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary py-5">
      <Wrapper>
        <Split>
          <div className="flex items-center">
            <Image className="w-9 h-9 mr-3" src="/logo.png" width={50} height={50} alt="Logo" />
            <span className="font-bold text-white text-base">TSI Schedule Scraper</span>
          </div>
          <div className="flex items-center">test test</div>
        </Split>
      </Wrapper>
    </header>
  )
}

//
