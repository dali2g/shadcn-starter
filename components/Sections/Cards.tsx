"use client"
import React from 'react'
import { GithubCard } from "@/components/ui/github-card"


export const Cards = () => {
  return (

    <div className='container'>
        <h1 className='text-6xl font-extrabold leading-normal tracking-tighter md:text-4xl pt-6'>My Pinned Repositories :</h1>
        <div className='pt-6'>
        <GithubCard/>
        <h1 className='text-6xl font-extrabold leading-normal tracking-tighter md:text-4xl pt-6'>My Skills :</h1>

        </div>
    </div>
  )
}
