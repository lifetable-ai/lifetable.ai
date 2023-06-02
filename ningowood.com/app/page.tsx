import HomeIntroHeader from "@/components/home/home-Intro-header"

export default async function Home() {
  return (
    <>
      {/**
       * TODO: How to use server side components?
       * In '../components' folder we connot use fetch?
       */}
      <HomeIntroHeader />
    </>
  )
}
