import HomeIntroHeader from "@/components/home/home-Intro-header"
import DashboardPage from "@/components/home/dashboard/page"

export default async function Home() {
  return (
    <>
      {/**
       * TODO: How to use server side components?
       * In '../components' folder we connot use fetch?
       */}
      <HomeIntroHeader />
      <div className="mt-12"></div>
      <DashboardPage />
    </>
  )
}
