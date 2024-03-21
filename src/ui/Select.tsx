import { IoIosArrowDown, IoIosArrowUp, IoMdCheckmark } from "react-icons/io"
import { useEffect, useState, useRef } from "react"

export default function Select({ list, selected, select, className, ...props }: { list: string[]; selected: string; select: (value: string) => void; className?: string }) {
  const [expanded, setExpanded] = useState(false)

  function handleSelectKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      setExpanded(prev => !prev)
    }
  }

  return (
    <>
      <div className={`${className} relative px-6 py-3.5 font-semibold border-2 border-primary text-primary flex items-center min-w-36 select-none cursor-pointer justify-between ${expanded ? "rounded-t-lg" : "rounded-lg"}`} {...props} onClick={() => setExpanded(prev => !prev)} tabIndex={0} onKeyDown={handleSelectKeyPress}>
        <span>{selected}</span> {expanded ? <IoIosArrowDown className="ml-5" /> : <IoIosArrowUp className="ml-5" />}
        {expanded && <ListBox list={list} selected={selected} select={select} />}
      </div>
    </>
  )
}

function ListBox({ list, selected, select }: { list: string[]; selected: string; select: (value: string) => void }) {
  const listBox = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const filteredList = list.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    if (selected === "") {
      const firstItem = listBox.current?.firstElementChild as HTMLDivElement
      firstItem?.focus()
    } else {
      const selectedItem = listBox.current?.querySelector(`div[aria-selected="true"]`) as HTMLDivElement
      selectedItem?.focus()
    }
  }, [selected])

  useEffect(() => {
    console.log(searchQuery)
  }, [searchQuery])

  function handleItemKeyPress(e: React.KeyboardEvent<HTMLDivElement>, item: string) {
    const trackedSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "Backspace", "Delete", "Escape"]

    if (e.key === "Enter") {
      select(item)
    }
    if (e.key === "ArrowDown") {
      const nextSibling = e.currentTarget.nextElementSibling as HTMLDivElement
      nextSibling?.focus()
    }
    if (e.key === "ArrowUp") {
      const previousSibling = e.currentTarget.previousElementSibling as HTMLDivElement
      previousSibling?.focus()
    }
    if (trackedSymbols.includes(e.key)) {
      setSearchQuery(prev => prev + e.key)
    }
  }
  return (
    <div className="absolute bg-white w-[calc(100%+4px)] rounded-b-lg border border-primary top-full left-[-2px] max-h-48 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-br-rounded" ref={listBox}>
      {filteredList.map((item, index) => (
        <div key={index} className="px-6 py-3.5 text-nowrap font-semibold flex justify-between items-center select-none cursor-pointer hover:bg-primary hover:text-white" tabIndex={0} onClick={() => select(item)} onKeyDown={e => handleItemKeyPress(e, item)} aria-selected={item == selected}>
          <span>{item}</span>
          <span className="ml-5 translate-y-[-1px]"> {selected == item && <IoMdCheckmark size={15} />}</span>
        </div>
      ))}
    </div>
  )
}
