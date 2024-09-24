import React from 'react';
import Navbar from "../Navbar/Navbar"
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Reading Tree: Your Online Book Library</h2><br />
                <p className='header-text fs-18 fw-3'>Reading Tree is dedicated to making reading a seamless and enjoyable experience for all, fostering a community where readers can share and discuss their favorite books.</p>
               
            </div>
        </header>
    </div>
  )
}

export default Header