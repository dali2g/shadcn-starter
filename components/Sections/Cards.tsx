"use client"
import React from 'react'
import { GithubCard } from "@/components/ui/github-card"
import { myFont } from '@/constants'
import { Fields } from './Fields'


export const Cards = () => {
  return (

    <div className='container'>
        <h1 className={` ${myFont.className} text-4xl  tracking-tight pt-6`}>My Pinned Repositories :</h1>
        <div className='pt-6'>
        <GithubCard/>
        <h1 className={` ${myFont.className} text-4xl  tracking-tight pt-24`}>My Services :</h1>
          <Fields/>
        </div>
    </div>
  )
}
