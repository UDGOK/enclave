import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Menu from './Menu'
import Particles from './Particles'
import TimeDisplay from './TimeDisplay'

type LayoutProps = {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'Enclave Bixby' }: LayoutProps) {
  return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Particles */}
        <div className="fixed inset-0 z-0">
          <Particles />
        </div>
        
        {/* Content Container */}
        <div className="relative z-20">
        <Head>
          <title>{title}</title>
          <meta name="description" content="Enclave Bixby Shopping Center" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Top Bar */}
        <div className="fixed top-0 right-0 p-4 z-[1000] flex items-center gap-4 mt-16">
          <Link href="/" className="text-white text-xl font-bold hover:text-gray-300 transition-colors">
            Enclave
          </Link>
          
          <div className="flex gap-4 items-center">
            <Link 
              href="/signin" 
              className="text-white font-bold px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <Menu />

      <main className="max-w-7xl mx-auto px-6 py-12 pt-20">
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </main>

      <footer className="bg-black text-white border-t border-white/10 relative z-30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Newsletter Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-400 mb-6 max-w-2xl">
                Join our newsletter to get the latest updates on retail spaces, events, and exclusive offers.
              </p>
              <div className="flex gap-4 w-full max-w-2xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <TimeDisplay />
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">About Us</Link></li>
                <li><Link href="/retail" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Retail Spaces</Link></li>
                <li><Link href="/tours" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Virtual Tours</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Events</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Careers</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/leasing" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Leasing</Link></li>
                <li><Link href="/management" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Property Management</Link></li>
                <li><Link href="/marketing" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Retail Marketing</Link></li>
                <li><Link href="/consulting" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Consulting</Link></li>
                <li><Link href="/maintenance" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Maintenance</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Blog</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">FAQ</Link></li>
                <li><Link href="/guides" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Guides</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Case Studies</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Terms of Service</Link></li>
                <li><Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Accessibility</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Cookie Policy</Link></li>
                <li><Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Sitemap</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h3>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Contact Us</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Support</Link></li>
                <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Partners</Link></li>
                <li><Link href="/investors" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Investors</Link></li>
                <li><Link href="/media" className="text-gray-400 hover:text-white transition-colors underline hover:no-underline">Media Kit</Link></li>
              </ul>
            </div>
          </div>

          {/* Social & Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.23 5.924c-.806.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.022 9.022 0 01-2.86 1.092 4.507 4.507 0 00-7.677 4.108 12.8 12.8 0 01-9.29-4.71 4.507 4.507 0 001.394 6.014 4.48 4.48 0 01-2.04-.563v.057a4.507 4.507 0 003.616 4.415 4.52 4.52 0 01-2.034.077 4.507 4.507 0 004.21 3.13 9.038 9.038 0 01-5.6 1.93c-.364 0-.724-.021-1.08-.063a12.75 12.75 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.195-.004-.39-.013-.583a9.172 9.172 0 002.252-2.336z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Enclave Bixby. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
