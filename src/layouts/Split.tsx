export default function Split({ children }: { children: [React.ReactNode, React.ReactNode] }) {
  const [Left, Right] = children
  return (
    <div className="flex justify-between items-center">
      {Left} {Right}
    </div>
  )
}
