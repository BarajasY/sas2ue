import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ["900"] })

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
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
