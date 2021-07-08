import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../Images/logo.jpg';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

import * as FaIcons from 'react-icons/fa';

function Navbar() {

    const [size, setSize] = useState(false);


    const showLinks = () => {
        setSize(!size)
        console.log("yes")
    }


    return (
        <div className="navbar_page">
            <div className="navbar_container">
                <div className="slide_menubar">
                    <IconButton>
                        <FaIcons.FaBars onClick={showLinks} />
                    </IconButton>
                    {
                        size ? (
                            <div className="sidenav">
                                <Link to="#" className="closebtn" onClick={showLinks} >&times;</Link>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/gallery">Gallery</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        ) : ""
                    }

                </div>
                <div className="logo_image">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                </div>
                <div className="navbar_links">
                    <ul>
                        <li><Link to="/" className="links">Home</Link></li>
                        <li><Link to="/about" className="links">About</Link></li>
                        <li><Link to="/gallery" className="links">Gallery</Link></li>
                        <li><Link to="/contact" className="links">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar_media_links">
                    <ul>
                        <li><a href="https://twitter.com/JayaSur33406442" className="links"><img src="https://img.icons8.com/cute-clipart/2x/twitter.png" alt="instagram" /></a></li>
                        <li><a href="https://www.instagram.com/sjs_photography_gifts/" className="links"><img src="https://img.icons8.com/cute-clipart/2x/instagram-new.png" alt="instagram" /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100063506108766" className="links"><img src="https://img.icons8.com/cute-clipart/2x/facebook-new.png" alt="instagram" /></a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
