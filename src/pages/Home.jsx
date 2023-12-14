import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Plan from '../components/Plan'
import Rooms from '../components/Rooms'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default Home