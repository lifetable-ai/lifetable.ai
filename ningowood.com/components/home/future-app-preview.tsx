import Balancer from "react-wrap-balancer"

export default function HomeIntroHeader() {
  return (
    <div className="z-10 w-full max-w-5xl px-6 py-6 text-center border-fuchsia-500 border-2">
      <h1 className="animate-fade-up text-4xl">Future App Preview</h1>

      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer className="text-2xl mt-4">
          Flowchats AI
        </Balancer>
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Your all-in-one AI chat app in canvas tree, and save it into LifeTable.
        </Balancer>
      </p>

      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer className="text-2xl mt-4">
          Navigator AI
        </Balancer>
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Web nav manager in AI era, forget about your outdated browser bookmarks.
        </Balancer>
      </p>
    </div>
  )
}
