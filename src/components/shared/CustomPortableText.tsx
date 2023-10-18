import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import CTABanner from './CTABanner'
import Hero from './Hero'
import InfoList from './InfoList'
import NumberedList from './NumberedList'

export function CustomPortableText({ value }: { value: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p>{children}</p>
      },
    },
    types: {
      hero: ({ value }) => {
        const { items } = value || {}
        return <Hero timelines={items} />
      },
      ctaBanner: ({ value }) => {
        const { items } = value || {}
        return <CTABanner />
      },
      infoList: ({ value }) => {
        const { items } = value || {}
        return <InfoList />
      },
      numberedList: ({ value }) => {
        const { items } = value || {}
        return <NumberedList />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
