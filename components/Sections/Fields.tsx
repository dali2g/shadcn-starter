"use client"

import React from "react"
import { fieldsAttributes, fontRegular, myFont } from "@/constants/index"
import { Separator } from "@radix-ui/react-separator"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Fields() {
  return (
    <div
      className={` ${fontRegular.className} flex flex-col md:flex-row gap-10`}
    >
      {fieldsAttributes.map((attr) => (
        <div key={attr.id} className='container  gap-6 pb-8 pt-20 md:py-10"'>
          <div className=" space-y-1">
            <h4 className="text-xl font-semibold  leading-none">
              {attr.title}
            </h4>
            <p className="text-sm text-muted-foreground">{attr.description}</p>
          </div>
          <Separator className="my-4 border border-foreground" />
          <div className={`flex h-5 items-center space-x-4 text-sm cursor-pointer`}>
            <HoverCard>
              <HoverCardTrigger className={`${myFont.className} text-xs`}>{attr.tag1}</HoverCardTrigger>
              <HoverCardContent>
              {attr.dsc1}
              </HoverCardContent>
            </HoverCard>

            <Separator
              orientation="vertical"
              className="border border-foreground"
            />
                <HoverCard>
              <HoverCardTrigger className={`${myFont.className} text-xs`}>{attr.tag2}</HoverCardTrigger>
              <HoverCardContent>
              {attr.dsc2}
              </HoverCardContent>
            </HoverCard>
            <Separator
              orientation="vertical"
              className="border border-foreground"
            />
                <HoverCard>
              <HoverCardTrigger className={`${myFont.className} text-xs`}>{attr.tag3}</HoverCardTrigger>
              <HoverCardContent>
               {attr.dsc3}
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      ))}
    </div>
  )
}
