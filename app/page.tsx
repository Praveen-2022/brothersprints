import AllProducts from '@/components/AllProducts'
import BulkOrder from '@/components/BulkOrder'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Herosection from '@/components/Herosection'
import NotificationBar from '@/components/NotificationBar'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen text-white'>
      <NotificationBar />
      <Header />
      <Herosection />
      <AllProducts/>
      <BulkOrder/>
      <Contact/>
    </div>
  )
}

export default Home