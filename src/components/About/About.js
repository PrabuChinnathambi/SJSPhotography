import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import JayaSuriya from '../../Images/sjs.jpeg';

function About() {
    return (
        <div className="about_page">
            <div>
                <Navbar />
            </div>
            <div className="about_container">
                <h3>We create cherishable memories</h3>
                <p>SJS photography is a professional group, specialized in Wedding & Events photography and Cinematography. “To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them.” When it comes to wedding photography, its that special moment that every one relishes from the stolen moments in life – the loving glances, tender kisses, shared laughter and joyful tears – the bond between two families, creating an indelible memory lane that one relishes to revisit with nostalgia. Its all about taking the right shot at the right time and at the right moment. A missed opportunity is missed… for ever!</p>
                <p>We have the expertise in wedding portraits, live and candid photos, rituals, cinematography, montages, 3D videos, online video mixing, live web casting (in Facebook, Website & Youtube channels), outdoor shoots, aerial shoots, underwater photography, 3D albums and Baby shoots. We also have expertise in event photography and our staff are continuously honed in their manners to behave politely at the events. We also do Industrial shoots, Aerial photography, Corporate Event shoots, Product Shoots, etc. The most beautiful things in life revolve around lingering memories and moments. You make memories and we help you capture and frame them into beautiful moments that you would cherish and relive, now and forever.</p>
                <div>
                    <div className="about_sjs_photo">
                        <img src={JayaSuriya} alt="" />
                        <div className="about_quotes">
                            <spn>I'm not interested in shooting new things, I'm interested in shooting something new.</spn>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default About
