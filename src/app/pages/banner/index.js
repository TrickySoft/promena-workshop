import React from 'react';
import './index.scss';
import ReactPlayer from 'react-player';
import { scroller } from 'react-scroll';
import image from '../../../assets/images/banner-image1.png';
import image1 from '../../../assets/images/schedule1.jpg';

const Banner = () => {
    const scrollToSection = () => {
        scroller.scrollTo('register', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
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
                        <h2>Learn live with Our Profectional Technical Team with simple method.</h2>
                        <a onClick={scrollToSection} className=' text-decoration-none'>
                            <button>Register</button>
                        </a>
                    </div>
                    <div className='banner__video'>
                        <ReactPlayer className='react-player'
                            playing
                            width='100%'
                            height='100%'
                            controls={false} url='https://youtu.be/22kfehB_YNA' />
                    </div>
                </div>
            </div>
            <div className='work'>
                <div className=' work__icons'>
                    <i className='fas fa-user-shield work__icons'></i>
                    <h1>Signed Certificate</h1>
                    <p>Receive an instructor signed certificate to verify your achivements</p>
                </div>
                <div className=' work__icons'>
                    <i className='fas fa-copy work__icons'></i>
                    <h1>Detailed Workbook</h1>
                    <p>Learn by doing! Get access to detailed workbook for you to practice with.</p>
                </div>
                <div className=' work__icons'>
                    <i className='fas fa-users work__icons'></i>
                    <h1>Community</h1>
                    <p>Learn with motivated peers having fresh out-of-the-box thinking and showing
                        you new way to do things.</p>
                </div>
            </div>
            <div className='schedule'>
                <div className='schedule__image'><img src={image1} alt='image1'></img></div>
                <div className='schedule__content'>
                    <h1>BOOK YOUR PERSONALIZED LIVE ESTORE EXPERINCE</h1>
                    <a onClick={scrollToSection} className='text-decoration-none'>
                        <button>SCHEDULE A DEMO</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;
