import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center bg-black'>
      <Link to='/'>    <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      </Link>
    <HiMenuAlt3 
    onClick={handleNav} 
    className='z-20 text-white cursor-pointer' size={25} 
    />
    <div
      className={
        nav
          ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black px-4 py-7 flex-col z-10'
          : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
      }
    >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <Link to='/' className='font-bold text-3xl p-8'>
            Home
          </Link>
          <Link to='/destinations' className='font-bold text-3xl p-8'>
            Destinations
          </Link>
          <Link to='/reservations' className='font-bold text-3xl p-8'>
            Reservations
          </Link>
          <Link to='/amenities' className='font-bold text-3xl p-8'>
            Amenities
          </Link>
          <Link to='/rooms' className='font-bold text-3xl p-8'>
            Rooms
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
