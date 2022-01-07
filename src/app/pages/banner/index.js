import React, { useState } from 'react';
import './index.scss';
import ReactPlayer from 'react-player';
import { scroller } from 'react-scroll';
import image from '../../../assets/images/banner.jpg';
import image1 from '../../../assets/images/schedule1.jpg';
import slide1 from '../../../assets/images/01.png';
import slide2 from '../../../assets/images/02.png';
import slide3 from '../../../assets/images/04.png';


const Banner = () => {
    const scrollToSection = () => {
        scroller.scrollTo('register', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };
    const [play, setPlay] = useState(false);
    const handleMouseEnter = () => {
        setPlay(true);
    };
    const handleMouseLeave = () => {
        setPlay(false);
    };


    return (
        <div>
            <div className='banner__container'>
                <div className='banner__image'><img src={image} alt='image'></img></div>
                <div className='banner__header'>
                    <h1>Start Your Online Store In Just Few Minutes </h1>
                </div>
                <div className='banner__content'>
                    <div className='banner__text'>
                        <p>Worry About how to Start a E-commerce Business.</p>
                        <h2>Learn live with Our Profetional Technical Team with simple method.</h2>
                        <a onClick={scrollToSection} className=' text-decoration-none'>
                            <button>Register</button>
                        </a>
                    </div>
                    <div className='banner__video' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <ReactPlayer className='player-wrapper'
                            // width='600px'
                            // height='400px '
                            playing={play}
                            pip
                            controls='false'
                            config={{ file: { forceHLS: true } }} url='https://www.youtube.com/watch?v=kJQP7kiw5Fk&list=PL15B1E77BB5708555&index=1' />
                    </div>
                </div>
            </div>
            <div className='slides'>
                <div className=' slides__image'>
                <img src={slide1} alt='image'></img>
                    <h1>No Coding Required</h1>
                    <p>SetUp a fully functional, awesome website without needing to code a single line.</p>
                </div>
                <div className='slides__image'>
                <img src={slide2} alt='image'></img>
                    <h1>eCommerce Optimization</h1>
                    <p>With 9 yearsof experince in e-commerce, we are confident to bring the theme with the
                     highest conversion rate.</p>
                </div>
                <div className='slides__image'>
                <img src={slide3} alt='image'></img>
                    <h1>Support that pleases</h1>
                    <p>Already our customers are hugily satisfied with customer support we are conveying.</p>
                </div>
            </div>
            <div className='schedule'>
                <div className='schedule__image'><img src={image1} alt='image1'></img></div>
                <div className='schedule__content'>
                    <h1>BOOK YOUR PERSONALIZED LIVE ESTORE EXPERINCE</h1>
                    <a onClick={scrollToSection} className='text-decoration-none'>
                        <button>Join Workshop</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;

