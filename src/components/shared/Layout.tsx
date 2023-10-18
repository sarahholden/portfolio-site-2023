import { PortableText } from '@portabletext/react'

import { SettingsPayload } from '~/types'

import CTABanner from './CTABanner'

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
  loading?: boolean
}

export default function Layout({
  children,
  settings,
  preview,
  loading,
}: LayoutProps) {
  return (
    <div>
      <header>Header Here!</header>
      <br />
      <br />
      <br />
      <main>{children}</main>
      <br />
      <br />
      <br />
      <footer>
        <div className="post__content">
          <PortableText value={settings?.footer} />
        </div>
        {settings.emailAddress ? (
          <h1>{settings.emailAddress}</h1>
        ) : (
          <p>No email provided</p>
        )}

        <CTABanner bannerText={settings?.wavyBannerText}></CTABanner>

        <section className="contact">
          <div className="contact__inner">
            <h3 className="section__title--medium" data-reveal="lines-masked">
              Let’s work together! Now booking projects starting in Q1 and Q2
              2023.
            </h3>
            <a
              href="mailto:hello@sarahholden.studio"
              target="_blank"
              className="btn blob-btn blob-button--light"
            >
              <span className="text">hello@sarahholden.studio</span>
              <div className="blob-btn__blobs">
                <div className="blob-btn__blob"></div>
                <div className="blob-btn__blob"></div>
                <div className="blob-btn__blob"></div>
              </div>
            </a>
          </div>
        </section>
        <section className="copyright">
          <p>✿ Site by me (Sarah). Thanks for visiting. ✿</p>
        </section>
      </footer>
    </div>
  )
}
