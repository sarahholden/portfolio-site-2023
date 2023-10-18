import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import {
  CTABannerType,
  HeroType,
  InfoListType,
  NumberedListType,
  SettingsPayload,
} from '~/types'

import CTABanner from './CTABanner'
import Hero from './Hero'
import InfoList from './InfoList'
import NumberedList from './NumberedList'

export function CustomPortableText({
  value,
  settings,
}: {
  value: any
  settings: SettingsPayload
}) {
  console.log(value)
  const components: PortableTextComponents = {
    types: {
      hero: ({ value }) => {
        const { items } = value || {}
        return <Hero timelines={items} />
      },
      ctaBanner: ({ value }) => {
        const { items } = value || {}
        return <CTABanner settings={settings} value={value} />
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
