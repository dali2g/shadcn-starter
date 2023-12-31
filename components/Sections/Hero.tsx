"use client"
import React from 'react'
import Link from "next/link"
import { BiLogoReact } from "react-icons/bi"
import { FiFigma, FiFramer } from "react-icons/fi"
import {
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TbBrandVscode } from "react-icons/tb"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { fontRegular, myFont } from '@/constants'


const Hero:React.FC = () => {
  
  return (
    <section  className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

<div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className={`${fontRegular.className} text-3xl`}>
          Hi, <br className="hidden sm:inline" />
          <span className={`text-6xl tracking-tight ${myFont.className} `}>I'm <span className='text-secondary'>Dali</span> Mejdi</span>
        </h1>
        <p className={`${fontRegular.className} max-w-[700px] text-muted-foreground`}>
          A Full Stack Developer who is here to create innovative and
          user-friendly web applications.
        </p>
        <p className= {` text-foreground ${myFont.className}`}>Current Stack Tech/Tools:</p>
        <div className="flex items-center mt-2 space-x-1.5 px-5">
          <SiTypescript className="text-foreground sm:text-5xl text-3xl hover:text-[#007acc] hover:ease-in-out  animate-in zoom-in-50 duration-500" />
          <BiLogoReact className="text-foreground sm:text-5xl text-3xl hover:text-[#61dbfb] hover:ease-in-out animate-in zoom-in-50 duration-500" />
          <SiNextdotjs className="text-foreground sm:text-5xl text-3xl hover:text-[#5f6d6d] hover:ease-in-out animate-in zoom-in-50 duration-500" />
          <SiTailwindcss className="text-foreground sm:text-5xl text-3xl hover:text-[#06b6d4] hover:ease-in-out animate-in zoom-in-50 duration-500" />
          <FiFramer className="text-foreground sm:text-5xl text-3xl hover:text-[#0055ff] hover:ease-in-out animate-in zoom-in-50 duration-500"></FiFramer>
          <SiMongodb className="text-foreground sm:text-5xl text-3xl hover:text-[#00b149] hover:ease-in-out animate-in zoom-in-50 duration-500" />
          <SiPrisma className="text-foreground sm:text-5xl text-3xl hover:text-[#2d3748] hover:ease-in-out animate-in zoom-in-50 duration-500" />
          <span className="text-xl text-foreground"> | </span>
          <TbBrandVscode className="text-foreground sm:text-5xl text-3xl hover:text-[#0078d7] hover:ease-in-out animate-in zoom-in-50 duration-500" />
          <FiFigma className="text-foreground sm:text-5xl text-3xl hover:text-[#ea4c1d] hover:ease-in-out animate-in zoom-in-50 duration-500" />
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          key={siteConfig.mainNav[3].id}
          href={siteConfig.mainNav[3].href}
          className={buttonVariants({ variant: "secondary" })}
        >
         <span className={` ${myFont.className}`}> Get In Touch</span>
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"outline"} className={` ${myFont.className}`}>Resume</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p  className={` ${fontRegular.className} text-xs`}>Click to Download</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section> 
    
  )
}

export default Hero
