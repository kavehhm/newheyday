import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import ContactUs from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>HeyDay - Referrals & retention made simple for agencies</title>
        <meta
          name="description"
          content="Increase client retention and lifetime value by gamifying their experience with your agency."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
