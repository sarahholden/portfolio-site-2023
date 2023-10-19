import { InfoListType } from '~/types'

export default function InfoList({ value }: { value: InfoListType }) {
  const { heading, listItem, body } = value || {}

  return (
    <section className="section--skills section--padded">
      <div className="section--skills-column">
        {heading && (
          <h2 className="section__title section__title--small">{heading}</h2>
        )}
        {body && <div className="section__header-text">{body}</div>}

        <ul className="section__title--xs">
          {listItem?.map((listItem, key) => {
            return (
              <li key={key}>
                {listItem}
                <div className="animated-border"></div>
              </li>
            )
          })}
          <li>
            Headless CMS Development
            <div className="animated-border"></div>
          </li>
          <li>
            3rd Party App Integration
            <div className="animated-border"></div>
          </li>
          <li>
            Wordpress Sites
            <div className="animated-border"></div>
          </li>
          <li>
            Technical Consulting
            <div className="animated-border"></div>
          </li>
        </ul>
      </div>
      <div className="section--skills-column">
        <h2 className="section__title section__title--small">Expertise</h2>
        <div className="section__header-text">
          <p>
            Know a bit of technical jargon? These are the platforms and
            technologies I specialize in.{' '}
          </p>
        </div>
        <ul className="section__title--xs">
          <li>
            Shopify, Wordpress
            <div className="animated-border"></div>
          </li>
          <li>
            GSAP Animation
            <div className="animated-border"></div>
          </li>
          <li>
            React.js, Next.js
            <div className="animated-border"></div>
          </li>
          <li>
            Sanity, Contentful, Prismic
            <div className="animated-border"></div>
          </li>
          <li>
            Figma, Sketch, Adobe XD
            <div className="animated-border"></div>
          </li>
        </ul>
      </div>
    </section>
  )
}
