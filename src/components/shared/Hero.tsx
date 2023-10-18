import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { HeroType } from '~/types'

export default function Hero({ value }: { value: HeroType }) {
  const { headline1, headline2, image } = value
  return (
    <section className="section section--intro">
      <div className="section__text">
        <h1 id="hero-quote-1" className="section__title--large section__title">
          {headline1}
        </h1>
        <div className="about-hero-image">
          <Image
            width="351"
            height="422"
            decoding="async"
            className="hero-portrait"
            sizes="(max-width: 749px) 54vw, 25vw"
            src={urlForImage(image).url()}
            alt="Sarah Headshot"
          />

          <div className="image-swipe">&nbsp;</div>
        </div>
        <h1 id="hero-quote-2" className=" section__title--large section__title">
          {headline2}
        </h1>
      </div>
    </section>
  )
}
