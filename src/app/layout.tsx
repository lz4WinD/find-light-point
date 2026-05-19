import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '发现我的闪光点',
  description: '通过18道场景题，发现你身上未被注意到的闪光点',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}