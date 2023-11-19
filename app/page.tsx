import { Cards } from "@/components/Sections/Cards";
import {Fields}  from "@/components/Sections/Fields";
import LastSection from "@/components/Sections/LastSection";
import Hero from "@/components/Sections/Hero";
import TextSection from "@/components/Sections/TextSection";

export default function IndexPage() {
  return (
    <div className="">
      <Hero/>
      <Cards/>
      <Fields/>
      <LastSection/>
      <TextSection/>
    </div>
  )
}

