import HomeIntroHeader from "@/components/home/home-Intro-header"
import DashboardPage from "@/components/home/dashboard/page"
import Balancer from "react-wrap-balancer"
import FutureAppPreview from "@/components/home/future-app-preview"

export default async function Home() {
  return (
    <>
      {/**
       * TODO: How to use server side components?
       * In '../components' folder we connot use fetch?
       */}
      <HomeIntroHeader />
      <DashboardPage />
      <FutureAppPreview />
    </>
  )
}
