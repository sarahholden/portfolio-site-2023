import { InfoListType } from '~/types'

export default function InfoList({ value }: { value: InfoListType }) {
  const { heading, listItem, body, heading2, listItem2, body2 } = value || {}

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
        </ul>
      </div>
      <div className="section--skills-column">
        {heading2 && (
          <h2 className="section__title section__title--small">{heading2}</h2>
        )}
        {body2 && <div className="section__header-text">{body2}</div>}

        <ul className="section__title--xs">
          {listItem2?.map((listItem, key) => {
            return (
              <li key={key}>
                {listItem}
                <div className="animated-border"></div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
