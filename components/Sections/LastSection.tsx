import { fontRegular, myFont } from '@/constants'
import React from 'react'

const Fields:React.FC = () => {
  return (
    <section className='container flex items-center justify-center pt-24'>
      <div className='rounded-2xl p-5  bg-foreground'>
          <h1 className={`text-6xl tracking-normal text-center  text-background ${myFont.className} `}>Crafting elegence in every line,<br/><span className='text-secondary'>code </span>that shines, <br/>both yours and mine.</h1>
      </div>
       
    </section>

  )
}

export default Fields