import { Project } from '~/types'

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="featured">
      <div className="featured__inner">
        <div className="featured__image">
          <div className="media featured__image--lg">Image Goes here</div>
        </div>
        <div className="featured__text">
          <h2 className="section__title section__title--small">
            {project.title}
          </h2>
          <p>{project.projectType}</p>
          <p className="credit">Design: {project.designCredit}</p>
        </div>
      </div>
    </div>
  )
}
