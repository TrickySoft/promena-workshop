import React from 'react';
import './index.scss';
import ReactPlayer from 'react-player';
import image from '../../../assets/images/banner-image1.png'

const Banner = () => {
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
                        <button>Register</button>
                    </div>
                    <div className='banner__video'>
                    <ReactPlayer controls url='https://youtu.be/22kfehB_YNA'/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
