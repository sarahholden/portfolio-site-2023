import { PortableText } from '@portabletext/react'
import { SettingsPayload } from 'types'

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
      </footer>
    </div>
  )
}
