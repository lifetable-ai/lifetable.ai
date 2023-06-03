import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const RECENT_DATABASE_LIST = [
  {
    logo: "/logo/airtable.webp",
    type: "Airtable",
    author: "hylerrix",
    name: "All YC Investment case in one place",
    description: "The 2023 investment winds reveal the arrival of the new AI era.",
    stars: 9999,
  },
  {
    logo: "/logo/notion.webp",
    type: "Notion",
    author: "hylerrix",
    name: "My favorite game List",
    description: "Including PS, XBox, Switch, Steam, GOG, Epic and more.",
    stars: 1593,
  },
  {
    logo: "/logo/jotform.webp",
    type: "Jotform",
    author: "hylerrix",
    name: "Automation workflow example",
    description: "The official Ningowood showcase to control all your workflow.",
    stars: 8704,
  },
  {
    logo: "/logo/rowy.webp",
    type: "Rowy",
    author: "hylerrix",
    name: "Cloud Native Tech Stack",
    description: "Chose what you need, all in one. Contribution is welcome.",
    stars: 7538,
  },
  {
    logo: "/logo/baserow.webp",
    type: "Baserow",
    author: "hylerrix",
    name: "Awesome Next.js starter",
    description: "Oh my God it's too many! Which one?",
    stars: 9326,
  },
  {
    logo: "/logo/apitable.webp",
    type: "Apitable",
    author: "hylerrix",
    name: "The films I watched",
    description: "National Theatre Live: The Lehman Trilogy is my favorite!",
    stars: 4276,
  },
]

export function RecentDatabases() {
  return (
    <div className="space-y-8">
      {
        RECENT_DATABASE_LIST.map((db, index) => {
          return (
            <div className="flex items-center" key={index}>
              <Avatar className="h-9 w-9">
                <AvatarImage src={db.logo} alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{db.name}</p>
                <p className="text-muted-foreground text-sm">
                  {db.description}
                </p>
              </div>
              <div className="ml-auto font-medium">+{db.stars}</div>
            </div>
          )
        })
      }
    </div>
  )
}
