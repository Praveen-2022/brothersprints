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
    </div>
  )
}

export default Home