import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import FoodSection from '@/components/FoodSection'
import CategoriesSection from '@/components/categoriesSection'
import TopRestaurants from '@/components/Restaurants'
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Meal',
  description: 'Topnotch Food order app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>      
      {children}
      <Footer />    
      </body>
    </html>
  )
}
