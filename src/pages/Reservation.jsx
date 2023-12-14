import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reservation = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow mt-10 pt-5 ">
      <div className="mx-auto p-8 items-center text-center">
        <h1 className="text-3xl font-bold mb-6">Reservation Under Construction</h1>
        <p>Sorry for the dust! We know it’s taking a while but sit tight and we’ll be with you soon.

            You’ll be able to order on our website again from the 24th of April. The first 20 visitors to contact us will get a t-shirt from our brand new collection!

            In the meantime, check out our products on Instagram
        </p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Reservation