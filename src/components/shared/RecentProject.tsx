import { Project } from '~/types'

export default function RecentProject({ project }: { project: Project }) {
  return (
    <a className="menu__item">
      <span className="menu__item-text">
        <span className="menu__item-textinner">{project.title}</span>
      </span>
      <span className="menu__item-sub">
        Shopify Development{' '}
        <span className="credit">&nbsp;• Design: Forner</span>
      </span>
      <div className="animated-border"></div>
      <div className="hover-reveal">
        <div className="hover-reveal__inner"></div>
      </div>
    </a>
  )
}
