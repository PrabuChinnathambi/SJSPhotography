import React, {useEffect} from 'react';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import one from '../../Images/Manoj-Ragusudha/one.jpg';
import two from '../../Images/Manoj-Ragusudha/two.jpg';
import three from '../../Images/Manoj-Ragusudha/three.jpg';
import four from '../../Images/Manoj-Ragusudha/four.jpg';
import five from '../../Images/Manoj-Ragusudha/five.jpg';
import six from '../../Images/Manoj-Ragusudha/six.jpg';


import one1 from '../../Images/Karthikeyan-Amutha/one.jpg';
import two2 from '../../Images/Karthikeyan-Amutha/two.jpg';
import three3 from '../../Images/Karthikeyan-Amutha/three.jpg';
import four4 from '../../Images/Karthikeyan-Amutha/four.jpg';
import five5 from '../../Images/Karthikeyan-Amutha/five.jpg';
import six6 from '../../Images/Karthikeyan-Amutha/six.jpg';


import one11 from '../../Images/Dhamodharan-Dharshini/one.jpg';
import two22 from '../../Images/Dhamodharan-Dharshini/two.jpg';
import three33 from '../../Images/Dhamodharan-Dharshini/three.jpg';
import four44 from '../../Images/Dhamodharan-Dharshini/four.jpg';
import five55 from '../../Images/Dhamodharan-Dharshini/five.jpg';
import six66 from '../../Images/Dhamodharan-Dharshini/six.jpg';



function Gallery() {

    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration : 2500
          });
        AOS.refresh();
      }, []);


    return (
        <div className="gallery_page">
            <div>
                <Navbar />
            </div>
            <div className="gallery_container">
                <div className="gallery_love_content">
                    <h3>Love...! </h3>
                    <p>Where there is love, there is a couple, Where there is a couple, there is a wedding, Where there is a wedding, there is ‘The SJS Photography‘! Weddings are the union of two souls & two families, grooving around with loads of fun.We capture the moments filled with emotions and bliss, like the fleeting smiles of couple, hearty giggles, soul-stirring moments, wedding jitters, bridesmaid & groomsmen moments, flaunting your wedding outfits, ceremonies and give life to them with a personal and a creative touch.We‘re story tellers, love capturing those timeless elegance of the day and narrate in the form of a wedding story, allowing you to re–live those warm and joyful memories again and again.</p>
                </div>
            </div>
            <div className="gallery_photos">
                <div className="prabaharan_ragusudha">
                    <h3>Manoj Prabhaharan & Ragusudha</h3>
                    <div className="pg_images_Prabhaharan">
                        <img src={one} className="one" alt="" /><br></br>
                        <img data-aos="fade-right" src={two} className="two" alt="" />
                        <img data-aos="fade-left" src={three} className="three" alt="" /><br></br>
                        <img data-aos="fade-right" src={four} className="four" alt="" />
                        <img data-aos="fade-left" src={five} className="five" alt="" /><br></br>
                        <img data-aos="flip-down" src={six} className="six" alt="" /><br></br>
                    </div>
                </div>
                <div className="karthikeyan_amutha"> 
                    <h3>Karthikeyan & Amutha</h3>
                    <div className="pg_images_Karthikeyan">
                        <img data-aos="fade-right" src={one1} className="one" alt="" />
                        <img data-aos="fade-left" src={two2} className="two" alt="" />
                        <img data-aos="flip-down" src={three3} className="three" alt="" /><br></br>
                        <img data-aos="fade-right" src={four4} className="four" alt="" />
                        <img data-aos="fade-left" src={five5} className="five" alt="" /><br></br>
                        
                    </div>
                </div>
                <div className="dhamodharan-dharshini"> 
                    <h3>Dhamodharan & Dharshini</h3>
                    <div className="pg_images_dhamodharan">
                        <img data-aos="flip-down" src={one11} className="one" alt="" /><br></br>
                        <img data-aos="fade-right" src={two22} className="two" alt="" />
                        <img data-aos="fade-left" src={three33} className="three" alt="" /><br></br>
                        <img data-aos="fade-right" src={four44} className="four" alt="" />
                        <img data-aos="fade-left" src={five55} className="five" alt="" /><br></br>
                        <img data-aos="flip-down" src={six66} className="six" alt="" /><br></br>
                        
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Gallery
