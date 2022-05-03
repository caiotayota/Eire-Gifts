import React from 'react'
import Announcement from '../components/Announcement/Announcement';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';

function Home() {
  return (
    <div>
        <Announcement />
        <Navbar/>
        <Slider />
    </div>
  )
}

export default Home;