import Balancer from "react-wrap-balancer"
import Image from "next/image"

import { nFormatter } from "@/lib/utils"
import { DEPLOY_URL } from "@/lib/constants"
import { Github, Twitter } from "@/components/shared/icons"
import { SupportSsDB } from "./constant"
import { SupportItem } from "./type"

interface SupportItemProps {
  db: SupportItem
}

const SupportItem = ({ db }: SupportItemProps) => {
  return (
    <a href={db.link} className="inline-block mx-1">
      <Image
        src={db.logo}
        alt={db.name}
        className="h-10 w-10 rounded-full"
        width={20}
        height={20}
      />
    </a>
  )
}

export default function HomeIntroHeader() {
  // const { stargazers_count: stars } = await fetch(
  //   "https://api.github.com/repos/ningowood/ningowood",
  //   {
  //     ...(process.env.GITHUB_OAUTH_TOKEN && {
  //       headers: {
  //         Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //     }),
  //     // data will revalidate every 60 seconds
  //     next: { revalidate: 60 },
  //   },
  // )
  //   .then((res) => res.json())
  //   .catch((e) => console.log(e))

  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <a
        href="https://twitter.com/hylerrix/hylerrix"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <Twitter className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">
          Introducing Ningowood v0.2
        </p>
      </a>
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Add the missing all-in-one community to the spreadsheet database ecology
        </Balancer>
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Make the structured data all together, and sharing as easy as you wish.
        </Balancer>
      </p>
      <div
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        { SupportSsDB.map((db) => <SupportItem db={db} />) }
        <span className="mx-1">...</span>
      </div>
      <div
        className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          href={DEPLOY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-4 w-4 group-hover:text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L20 20H4L12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Add your database</p>
        </a>

        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href="https://github.com/ningowood/ningowood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>
            <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
            <span className="font-semibold">{nFormatter(999)}</span>
          </p>
        </a>

        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="/os/lifetable">
          Explore Now
          <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>

      </div>
    </div>
  )
}
