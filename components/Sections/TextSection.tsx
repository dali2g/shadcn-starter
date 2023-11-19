import { fontRegular, myFont } from '@/constants'
import React from 'react'
import {textAttributes} from '@/constants/index'
const TextSection:React.FC = () => {
  return (
    <section className='container items-start justify-start'>
      {textAttributes.map((attr) => (
        <div key={attr.id}>
        <h1 className={` ${myFont.className} text-2xl text-secondary tracking-tight pt-24`}>{attr.title}</h1>
        <h3 className={` ${myFont.className} text-4xl  tracking-tight pt-3`}>{attr.subtitle}</h3>
        <p className={` ${fontRegular.className} text-muted-foreground tracking-tight pt-3`}>{attr.paragraph}</p>
        </div>
        ))}
    </section>
  )
}

export default TextSection