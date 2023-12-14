import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Destination from './pages/Destination';
import Reservation from './pages/Reservation';
import Amenities from './pages/Amenities';
import Room from './pages/Room';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destination />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/rooms" element={<Room />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
