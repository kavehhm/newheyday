import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How do I set things up?',
      answer:
        'We take care of all aspects of setup and maintenance.',
    },
    {
      question: 'How do the monthly terms work?',
      answer: 'Every month, after the user pays for your services, their points are automatically updated.',
    },
    {
      question: 'How do referrals work?',
      answer:
        'Every user has a referral code and the option to state who referred them. Every time a client refers another client, they get rewarded with points.',
    },
  ],
  [
    {
      question: 'How do the points work?',
      answer:
        'They work how you want them to work. Generally if a user has enough points, they are able to claim a reward.',
    },
    {
      question:
        'How do clients get points?',
      answer:
        'A client can get points by having using your service for a month (+10 points) or by referring a friend.',
    },
    {
      question:
        'Can I change the gamification?',
      answer:
        'Yes you can change  how many points a user is awarded for referrals or successful months. You can also change what the points get them.',
    },
  ],
  [
    {
      question: 'Do my clients need to sign up for anything?',
      answer:
        'To reduce friction, we allow them to sign in with their Google account and have seamless integration of data.',
    },
    {
      question: 'How do I know when a user has claimed a reward?',
      answer: 'You will receive an email with the user\'s reward along with a link to manage the user.',
    },
    {
      question: 'What if I don\'t like this software?',
      answer:
        'We have a 10 day no questions asked refund policy (Not including payment processing fees).',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email or text us 
            and someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
