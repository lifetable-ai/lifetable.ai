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
    logo: "/logo/airtable.webp",
    type: "Airtable",
    author: "hylerrix",
    name: "My favorite game List",
    description: "Including PS, XBox, Switch, Steam, GOG, Epic and more.",
    stars: 1593,
  },
  {
    logo: "/logo/airtable.webp",
    type: "Airtable",
    author: "hylerrix",
    name: "The films I watched",
    description: "National Theatre Live: The Lehman Trilogy is my favorite!",
    stars: 4276,
  },
  {
    logo: "/logo/airtable.webp",
    type: "Airtable",
    author: "hylerrix",
    name: "Cloud Native Tech Stack",
    description: "Chose what you need, all in one. Contribution is welcome.",
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
