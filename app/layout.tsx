import './globals.css'
import { Inter } from 'next/font/google'

import Sidebar from './components/Sidebar';
import Content from './components/Content';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mike Fantasy',
  description: 'Mike Fang \'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <Sidebar />
          <Content>
            {children}
          </Content>
        </div>
      </body>
    </html>
  )
}
