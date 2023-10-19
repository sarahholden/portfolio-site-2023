import { PortableText, PortableTextComponents } from '@portabletext/react'
import type {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
} from '@portabletext/types'

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
  const components: PortableTextComponents = {
    types: {
      hero: ({ value }) => {
        return <Hero value={value} />
      },
      ctaBanner: ({ value }) => {
        return <CTABanner emailAddress={settings.emailAddress} value={value} />
      },
      infoList: ({ value }) => {
        return <InfoList value={value} />
      },
      numberedList: ({ value }) => {
        const { items } = value || {}
        return <NumberedList />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
