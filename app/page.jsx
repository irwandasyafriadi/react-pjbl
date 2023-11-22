//component 
import Hero from '@/components/Hero'
import Middle from '@/components/Middle'
import Pertanyaan from '@/components/Pertanyaan'
import Tim from '@/components/Tim'
import Wawancara from '@/components/Wawancara'

export default function Home() {
  return (
   <main>
    <Hero/>
    <Middle/>
    < Wawancara/>
    <Pertanyaan/>
    <Tim/>
   </main>
  )
}
