import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'Enclave Bixby' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Enclave Bixby Shopping Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation is now handled by the Menu component */}

      <main className="container mx-auto p-4">
        {children}
      </main>

      <footer className="bg-black text-white mt-8 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Enclave Bixby. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
