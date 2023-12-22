import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { fieldsAttributes, fontRegular, myFont } from "@/constants"

export function Fields() {
  return (
  
        <div className="flex md:flex-row flex-col gap-5 justify-center">

      {fieldsAttributes.map((field) => (

        <Card key={field.id} className="mt-10 rounded-xl shadow-md md:max-w-md dark:bg-background">
          <CardHeader>
            <CardTitle className=" text-xl text-foreground dark:text-foreground">
              {field.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="mx-2 p-4 dark:text-foreground" >
            <p>
              {field.description}
            </p>
            <div className="flex mt-4 items-center space-x-4 cursor-pointer">
              <HoverCard>
              <HoverCardTrigger className={`${myFont.className}`}><Badge className="bg-foreground text-background hover:text-foreground">{field.tag1}</Badge></HoverCardTrigger>
                <HoverCardContent className={` ${fontRegular.className} `}>
                  {field.dsc1}
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
              <HoverCardTrigger className={`${myFont.className}`}><Badge className="bg-foreground text-background hover:text-foreground">{field.tag2}</Badge></HoverCardTrigger>
                <HoverCardContent className={` ${fontRegular.className} `}>
                  {field.dsc2}
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
              <HoverCardTrigger className={`${myFont.className}`}><Badge className="bg-foreground text-background hover:text-foreground">{field.tag3}</Badge></HoverCardTrigger>
                <HoverCardContent className={` ${fontRegular.className} `}>
                  {field.dsc3}
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>
      ))}
      </div>
  )
}
