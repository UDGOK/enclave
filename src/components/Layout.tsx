import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'Enclave Bixby' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Enclave Bixby Shopping Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-black p-4 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-secondary transition-colors">
            Enclave Bixby
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/shops" className="hover:text-secondary transition-colors">Shops</Link>
            <Link href="/tenant" className="hover:text-secondary transition-colors">Tenant Portal</Link>
            <Link href="/admin" className="hover:text-secondary transition-colors">Admin</Link>
          </div>
        </div>
      </nav>

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
