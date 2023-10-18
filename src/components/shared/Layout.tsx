import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import { SettingsPayload } from '~/types'

import Navbar from '../global/Navbar'
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
      <header className="header">
        <div className="header__left">
          <Link href="/" className="header__icon" title="Take me home">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
            >
              <path
                d="M56.422 44.237c-8.244-4.424-10.1-5.335-13.13-10.762 6.237-.42 10.036-1.416 16.708-4.36-9.354.291-11.417.433-16.752-2.753 5.193-3.479 7.989-6.246 12.292-12.128-7.953 4.929-9.667 6.081-15.884 5.996 2.76-5.612 3.791-9.404 4.581-16.652-4.424 8.244-5.335 10.1-10.762 13.131-.42-6.238-1.416-10.037-4.36-16.709.291 9.354.433 11.417-2.753 16.752-3.479-5.193-6.246-7.989-12.128-12.292 4.929 7.953 6.081 9.667 5.996 15.884-5.612-2.76-9.404-3.792-16.652-4.581 8.244 4.424 10.108 5.335 13.131 10.755-6.238.42-10.037 1.416-16.709 4.36 9.354-.291 11.417-.433 16.752 2.753C11.559 37.11 8.763 39.877 4.46 45.76c7.953-4.93 9.667-6.081 15.884-5.989-2.76 5.612-3.792 9.404-4.581 16.652 4.424-8.244 5.335-10.1 10.762-13.13.42 6.237 1.416 10.036 4.36 16.708-.291-9.354-.433-11.417 2.753-16.752 3.479 5.193 6.246 7.989 12.128 12.292-4.929-7.953-6.081-9.667-5.989-15.884 5.612 2.76 9.404 3.791 16.652 4.581h-.007Z"
                fill="#000"
              />
            </svg>
          </Link>
          <p className="hide-mobile">{settings.tagline}</p>
        </div>
        <Navbar
          emailAddress={settings.emailAddress}
          menuItems={settings.menuItems}
          ctaButtonTextMobile={settings.ctaButtonTextMobile}
          ctaButtonText={settings.ctaButtonText}
        />
      </header>
      <main>{children}</main>
      <footer>
        <CTABanner bannerText={settings?.wavyBannerText}></CTABanner>

        <section className="contact">
          <div className="contact__inner">
            <h3 className="section__title--medium" data-reveal="lines-masked">
              <PortableText value={settings?.contactText} />
            </h3>
            <a
              href={`mailto:${settings.emailAddress}`}
              target="_blank"
              className="btn blob-btn blob-button--light"
            >
              {settings.emailAddress && (
                <span className="text">{settings.emailAddress}</span>
              )}

              <div className="blob-btn__blobs">
                <div className="blob-btn__blob"></div>
                <div className="blob-btn__blob"></div>
                <div className="blob-btn__blob"></div>
              </div>
            </a>
          </div>
        </section>
        <section className="copyright">
          <PortableText value={settings?.footer} />
        </section>
      </footer>
    </div>
  )
}
