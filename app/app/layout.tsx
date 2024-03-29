import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import cx from "classnames"
import { sfPro, inter } from "./fonts"
import Nav from "@/components/layout/nav"
import Footer from "@/components/layout/footer"
import { Suspense } from "react"

export const metadata = {
  title:
    "Lifetable - Add the missing all-in-one community to the spreadsheet database ecology",
  description:
    "Lifetable v0.3 is focus on adding the missing community to the spreadsheet database ecology.",
  twitter: {
    card: "summary_large_image",
    title:
      "Lifetable - Add the missing all-in-one community to the spreadsheet database ecology",
    description:
      "Lifetable v0.3 is focus on adding the missing community to the spreadsheet database ecology.",
    creator: "@hylerrix",
  },
  metadataBase: new URL("http://Lifetable.ai"),
  themeColor: "#FFF",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center pt-16 py-12">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
