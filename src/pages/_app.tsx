import '~/styles/global.css'

import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const mono = localFont({
  src: '../fonts/Plaid-S-Mono.woff2',
  variable: '--font-family-mono',
  weight: '400',
})

const sans = localFont({
  src: '../fonts/Plaid-S.woff2',
  variable: '--font-family-mono',
  weight: '400',
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-family-sans: ${sans.style.fontFamily};
            --font-family-mono: ${mono.style.fontFamily};
          }
        `}
      </style>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
