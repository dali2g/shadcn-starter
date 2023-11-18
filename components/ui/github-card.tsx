import {
    CircleIcon,
    StarIcon,
  } from "@radix-ui/react-icons"
  
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { cardAttributes, fontRegular } from "@/constants"
import { Button } from "./button"
  export function GithubCard() { 
    return (
      <div className="flex md:flex-row flex-col gap-10">
        
      {cardAttributes.map((attr) => (
          <Card  key={attr.id}>
        
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0 ">
          <div className={` ${fontRegular.className} space-y-1 `}>
                <CardTitle>{attr.title}</CardTitle>
                <CardDescription>{attr.description}</CardDescription>
              </div>
       
         
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none ">
              <StarIcon className="mr-4 h-4 w-4" />
              Star
            </Button>
            
          </div>
        </CardHeader>
        <CardContent className={fontRegular.className}>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3 w-3" />
              20k
            </div>
            <div>Updated April 2023</div>
          </div>
        </CardContent>
      </Card>
             ))}
  
  </div>
    )
  }