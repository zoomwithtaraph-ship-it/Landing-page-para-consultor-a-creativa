import { Hero } from '@/components/Hero'
import { Problems } from '@/components/Problems'
import { Benefits } from '@/components/Benefits'
import { Process } from '@/components/Process'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Benefits />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  )
}
