import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import HomeBody from '../HomeBody/HomeBody';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div className="home_page">
            {/* Navbar */}
            <Navbar className="navbar" />
            {/* Body */}
            <HomeBody className="homebody" />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
