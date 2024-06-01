import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <main className='dashboard'>
        <div className='welcome'>
            <h1>Welcome to Green Haven</h1><br/><br/>
            <h2>Discover a wide variety of lush, vibrant plants that will bring life and tranquility to your home. Whether you're a seasoned plant enthusiast or just beginning your green journey, we're here to help you grow. Explore our collection and let nature thrive in every corner of your space. Happy planting!</h2>
            <Link to='/PlantList'><button className='buttonh'>Products</button></Link>
        </div>
    </main>
  )
}

export default Home