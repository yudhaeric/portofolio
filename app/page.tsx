/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Banner from './components/banner'
import About from './components/about'

export default function Home() {
  return (
    <main>
      <section id='main-banner'>
        <Banner/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <div className='mt-[40%]'></div>
    </main>
  )
}
