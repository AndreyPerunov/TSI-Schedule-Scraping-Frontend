import { Heading } from "@/ui"
import { Wrapper } from "@/layouts"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function About() {
  return (
    <Wrapper>
      <article className="my-20">
        <Heading className="text-center">About</Heading>
        <p className="text-passive mt-8">TSI Schedule Scraper is a simple tool to copy your TSI lectures schedule to your Google Calendar. This project provides all the tools to make your time management more manageable 😎. Copy your schedule in one click (or more than one click if you want to customize it).</p>
        <ul className="text-passive list-disc list-inside mt-2 divide-y-8 divide-transparent">
          <li className="ml-5">How it started</li>
          <li className="ml-5">How does it work</li>
          <li className="ml-5">Tech stack</li>
        </ul>
        <Heading className="text-center mt-20">How it started</Heading>
        <p className="text-passive mt-8">
          Hello, my name is <InlineLink href="https://www.andreyperunov.com/">Andrey</InlineLink>, I am a creator of this website and a student of TSI. For me it was little bit difficult organize and keep track of my time, because all my schedules were scattered. I decided to store all my schedules in one place - Google Calendar.
        </p>
        <p className="text-passive mt-8">However manually copying each lecture to the Google Calendar was a hell, it took too long to do it. Therefore, as an ordinary software developer, I of course decided to spend lots of days automating a process that takes a couple of hours. 🙂</p>
        <Heading className="text-center mt-20">How does it work</Heading>
        <p className="text-passive mt-8">Every day server collects lectures for next 30 days for each group/lecturer who used this website at least once. That means - if you are the first one from your group who is using this app - it might take some time to “scrape” the schedule. The reason for that is - I do not have direct access to lecture schedule database or API, so I am using web scraping technique.</p>
        <Heading className="text-center mt-20">Tech stack</Heading>
        <p className="text-passive mt-8 text-xl font-bold">Back-end</p>
        <ul className="text-passive list-disc list-inside mt-2 divide-y-8 divide-transparent">
          <li className="ml-5">
            <span className="font-semibold">Web Scraping</span> - I am using <InlineLink href="https://pptr.dev/">Puppeteer</InlineLink> JavaScript library that allows me to open any website with the code and do everything what human can do.{" "}
          </li>
          <li className="ml-5">
            <span className="font-semibold">Database</span> - <InlineLink href="https://www.postgresql.org/">PostgreSQL</InlineLink> coupled with <InlineLink href="https://www.prisma.io/">Prisma</InlineLink> ORM
          </li>
          <li className="ml-5">
            <span className="font-semibold">Runtime Environment</span> - <InlineLink href="https://nodejs.org/en">Node.js</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Language</span> - <InlineLink href="https://www.typescriptlang.org/">TypeScript</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Framework</span> - <InlineLink href="https://expressjs.com/">Express.js </InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Development</span> – <InlineLink href="https://www.npmjs.com/package/nodemon">Nodemon</InlineLink> / <InlineLink href="https://axios-http.com/docs/intro">axios</InlineLink> / <InlineLink href="https://www.npmjs.com/package/cookie-parser">cookie-parser</InlineLink> / <InlineLink href="https://www.npmjs.com/package/cors">cors</InlineLink> / <InlineLink href="https://www.npmjs.com/package/dotenv">dotenv</InlineLink> / <InlineLink href="https://www.npmjs.com/package/googleapis">googleapis</InlineLink> / <InlineLink href="https://jwt.io/">jsonwebtoken</InlineLink> / <InlineLink href="https://www.npmjs.com/package/node-schedule">node-schedule</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Version Control</span> - <InlineLink href="https://www.git-scm.com/">Git</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Deployment</span> - Currently deploying to <InlineLink href="https://render.com/">Render</InlineLink>. Also, I am using <InlineLink href="https://www.docker.com/">Docker</InlineLink> to containerize back-end because otherwise I would not have access to <InlineLink href="https://www.chromium.org/chromium-projects/">Chromium</InlineLink>.
          </li>
        </ul>
        <p className="text-passive mt-8 text-xl font-bold">Front-end</p>
        <ul className="text-passive list-disc list-inside mt-2 divide-y-8 divide-transparent">
          <li className="ml-5">
            <span className="font-semibold">Framework</span> - <InlineLink href="https://nextjs.org/">Next.js</InlineLink> / <InlineLink href="https://react.dev/">React.js</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Language</span> - <InlineLink href="https://www.typescriptlang.org/">TypeScript</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">State Management</span> - <InlineLink href="https://redux-toolkit.js.org/">Redux Toolkit</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Styles</span> - <InlineLink href="https://tailwindcss.com/">TailwindCSS</InlineLink> / <InlineLink href="https://react-icons.github.io/react-icons/">React Icons</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Fetching Data</span> - <InlineLink href="https://axios-http.com/docs/intro">axios</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Version Control</span> - <InlineLink href="https://www.git-scm.com/">git</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">Deployment</span> - Currently deploying to <InlineLink href="https://vercel.com">Vercel</InlineLink>.
          </li>
        </ul>
        <p className="text-passive mt-8 text-xl font-bold">Cloud</p>
        <ul className="text-passive list-disc list-inside mt-2 divide-y-8 divide-transparent">
          <li className="ml-5">
            <span className="font-semibold">Deployment</span> - <InlineLink href="https://vercel.com">Vercel</InlineLink> / <InlineLink href="https://render.com/">Render</InlineLink>
          </li>
          <li className="ml-5">
            <span className="font-semibold">API</span> - <InlineLink href="https://cloud.google.com/">GCP</InlineLink>
          </li>
        </ul>
      </article>
    </Wrapper>
  )
}

function InlineLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="text-primary text-nowrap opacity-80 font-semibold active:text-dark hover:underline active">
      {children}
      <FaExternalLinkAlt className="inline ml-1" />
    </Link>
  )
}
