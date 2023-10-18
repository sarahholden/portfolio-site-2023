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
          {/* <picture className="media">
							<source
							sizes="(max-width: 749px) 54vw, 25vw"
							srcset="img/about_portrait.jpg?as=avif&width=220 220w, img/about_portrait.jpg?as=avif&width=350 350w, img/about_portrait.jpg?as=avif&width=420 420w, img/about_portrait.jpg?as=avif&width=600 600w, img/about_portrait.jpg?as=avif&width=800 800w"
							type="image/avif" />
							<source
							sizes="(max-width: 749px) 54vw, 25vw"
							srcset="img/about_portrait.jpg?as=webp&width=220 220w, img/about_portrait.jpg?as=webp&width=350 350w, img/about_portrait.jpg?as=webp&width=420 420w, img/about_portrait.jpg?as=webp&width=600 600w, img/about_portrait.jpg?as=webp&width=800 800w"
							type="image/webp" />
							<source
							sizes="(max-width: 749px) 54vw, 25vw"
							srcset="img/about_portrait.jpg?&width=220 220w, img/about_portrait.jpg?&width=350 350w, img/about_portrait.jpg?&width=420 420w, img/about_portrait.jpg?&width=600 600w, img/about_portrait.jpg?&width=800 800w"
							type="image/jpg" />
							<img
							width="351" height="422" decoding="async"
							className="hero-portrait"
							src="img/about_portrait.jpg?width=350" alt="Sarah Headshot" />
						</picture> */}
          <div className="image-swipe">&nbsp;</div>
        </div>
        <h1 id="hero-quote-2" className=" section__title--large section__title">
          {headline2}
        </h1>
      </div>
    </section>
  )
}
