import React, { useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import Baby1 from '../../Images/Slider/baby1.jpg';
import Baby2 from '../../Images/Slider/baby2.jpg';
import one from '../../Images/Slider/one.jpg';
import two from '../../Images/Slider/two.jpg';
import three from '../../Images/Slider/three.jpg';
import weddingpic from '../../Images/wedding.jpg';
import babypic from '../../Images/baby.jpg';
import preewedding from '../../Images/preewedding.jpg';
import './HomeBody.css';

import AOS from 'aos';
import 'aos/dist/aos.css';






function HomeBody() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className="body_slider">
                <Carousel autoPlay axis="horizontal" interval={10000}  infiniteLoop={true} showThumbs={false} showIndicators={false}>
                    <div>
                        <img alt="" src={Baby1} />
                    </div>
                    <div>
                        <img alt="" src={Baby2} />
                    </div>
                    <div className="image3">
                        <img alt="" src={one} />
                    </div>
                    <div className="image3">
                        <img alt="" src={two} />
                    </div>
                    <div className="image3">
                        <img alt="" src={three} />
                    </div>
                </Carousel>
            </div>
            <div className="body_workdetails">
                <h2 data-aos="zoom-in">SJS PHOTOGRAPHY</h2>
                <p>SJS photography is a professional group, specialized in Wedding & Events photography and Cinematography. “To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them.”  When it comes to wedding photography, its that special moment that every one relishes from the stolen moments in life – the loving glances, tender kisses, shared laughter and joyful tears – the bond between two families, creating an indelible memory lane that one relishes to revisit with nostalgia. Its all about taking the right shot at the right time and at the right moment. A missed opportunity is missed… for ever!</p>
            </div>
            <div className="work_details_slides">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front" >
                            <img src={weddingpic} alt="" />
                        </div>
                        <div className="flip-box-back">
                            <img src={weddingpic} alt="" />
                            <h2 className="text">Wedding Photography</h2>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front" >
                            <img src={babypic} alt="" />
                        </div>
                        <div className="flip-box-back">
                            <img src={babypic} alt="" />
                            <h2 className="text">Baby Portraits</h2>
                        </div>
                    </div>
                </div>

                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front" >
                            <img src={preewedding} alt="" />
                        </div>
                        <div className="flip-box-back">
                            <img src={preewedding} alt="" />
                            <h2 className="text">Pre Wedding</h2>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default HomeBody
