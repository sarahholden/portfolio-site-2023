import { CTABannerType } from '~/types'

export default function CTABanner({
  emailAddress,
  value,
}: {
  emailAddress: string
  value: CTABannerType
}) {
  const bannerText = 'text'
  return (
    <section className="wavy-divider">
      <a
        href={`mailto:${emailAddress}`}
        target="_blank"
        title={value.bannerText}
      >
        <svg
          className="svgtext svgtext--wavy"
          width="120%"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1690 120"
        >
          <path
            id="text-curve11"
            d="M0 1.5c120.72 0 120.72 74 241.43 74s120.72-74 241.43-74 120.72 74 241.43 74 120.72-74 241.43-74 120.71 74 241.42 74 120.72-74 241.43-74 120.71 74 241.43 74"
            fill="none"
          ></path>
          <text>
            <textPath href="#text-curve11">
              {value.bannerText} • {value.bannerText} • {value.bannerText} •{' '}
              {value.bannerText}
            </textPath>
          </text>
        </svg>
        <div className="wavy-divider__inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1690 201">
            <path
              d="M1690 201c-120.71 0-120.71-74-241.43-74s-120.71 74-241.43 74-120.71-74-241.42-74-120.71 74-241.43 74-120.72-74-241.43-74-120.72 74-241.43 74S120.72 127 0 127V0c120.72 0 120.72 74 241.43 74S362.15 0 482.86 0s120.72 74 241.43 74S845.01 0 965.72 0s120.71 74 241.42 74 120.72-74 241.43-74S1569.28 74 1690 74v127Z"
              fill="#1E5D43"
            />
          </svg>
        </div>
      </a>
    </section>
  )
}
