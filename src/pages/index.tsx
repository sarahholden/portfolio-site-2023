import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { type Post, type Project } from 'types'

import Card from '~/components/Card'
import Container from '~/components/Container'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, postsQuery } from '~/lib/sanity.queries'
import { getProjects, projectsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
    projects: Project[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  // Get external data from sanity using
  const posts = await getPosts(client)
  const projects = await getProjects(client)

  // The value of the `props` key will be
  //  passed to the `IndexPage` component
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      projects,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const [projects] = useLiveQuery<Project[]>(props.projects, projectsQuery)

  return (
    <Container>
      <section>
        {posts.length ? (
          posts.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <Welcome />
        )}

        {projects.length ? (
          projects.map((project) => (
            <div key={project._id}>{project.title}</div>
          ))
        ) : (
          <Welcome />
        )}
      </section>
    </Container>
  )
}
