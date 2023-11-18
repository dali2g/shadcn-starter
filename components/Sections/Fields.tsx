"use client"
import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import {fieldsAttributes} from '@/constants/index'
export function Fields() {
    return (
        <div className="flex md:flex-row flex-col gap-10">
        {fieldsAttributes.map((attr,index) => (
      <div key={index} className='container  gap-6 pb-8 pt-20 md:py-10"'>

            <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">{attr.title}</h4>
          <p className="text-sm text-muted-foreground">
          {attr.description}
          </p>
        </div>
        <Separator className="my-4 border border-foreground" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>{attr.tag1}</div>
          <Separator orientation="vertical" className='border border-foreground' />
          <div>{attr.tag2}</div>
          <Separator orientation="vertical" className='border border-foreground' />
          <div>{attr.tag3}</div>
        </div>
      </div>
            ))}
            </div>
    )
  }