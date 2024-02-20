export default function Split({ children }: { children: Array<React.ReactNode> }) {
  const [Left, Right] = children
  return (
    <div className="flex justify-between items-center">
      {Left} {Right}
    </div>
  )
}
