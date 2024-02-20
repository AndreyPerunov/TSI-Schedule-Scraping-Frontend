import { Header } from "../../components"

export default function WithHeaderLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}
