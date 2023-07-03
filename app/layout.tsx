import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Inter, Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'], weight: ["700"] })
const inter = Inter({ subsets: ['latin'], weight: ["900"] })


export const metadata = {
  title: 'SAS2: Unreal Engine',
  description: 'Introduction to my remake of SAS2 in Unreal Engine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
