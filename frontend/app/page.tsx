import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Agents } from "@/components/sections/Agents";
import { Impact } from "@/components/sections/Impact";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Agents />
      <Impact />
      <CTA />
    </>
  );
}
