import Link from 'next/link'

import { resolveHref } from '~/lib/sanity.links'

export default function Navbar({
  emailAddress,
  menuItems,
  ctaButtonTextMobile,
  ctaButtonText,
}) {
  return (
    <nav className="header__nav">
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }

          return (
            <Link href={href} className="header__link" key={key}>
              {menuItem.title}
            </Link>
          )
        })}
      <a
        href={`mailto:${emailAddress}`}
        target="_blank"
        className="btn btn--small blob-btn"
      >
        <span className="text show-mobile">{ctaButtonTextMobile}</span>
        <span className="text hide-mobile">{ctaButtonText}</span>
        <div className="blob-btn__blobs">
          <div className="blob-btn__blob"></div>
          <div className="blob-btn__blob"></div>
          <div className="blob-btn__blob"></div>
        </div>
      </a>
    </nav>
  )
}
