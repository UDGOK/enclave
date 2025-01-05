import { ReactNode } from 'react'

declare module './Layout' {
  interface LayoutProps {
    children: ReactNode
    title?: string
  }

  const Layout: React.FC<LayoutProps>
  export default Layout
}
