import React from 'react'
import './index.scss';
import slide1 from '../../../assets/images/electronics2.png';
import slide2 from '../../../assets/images/clothing1.png';
import slide3 from '../../../assets/images/jewellary1.png';
import slide4 from '../../../assets/images/furniture1.png';
import slide5 from '../../../assets/images/beauty1.png';

const About = () => {
    return (
        <div>
            <div className='container-fluid  py-5 '>
                <div className='container py-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5'>
                            <img className='img-fluid rounded mb-4 mb-lg-0' src='img/cat-3.jpg' alt='' />
                        </div>
                        <div className='col-lg-7'>
                            <div className='text-left mb-4'>
                                <h5 className='text-primary text-uppercase mb-3' style={{ letterSpacing: '5px' }}>Why Choose Name Over Name</h5>
                                <h1>For Your E-Store</h1>
                                <p>Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.</p>
                                <p>Convert more shoppers by leveraging social extensions, optimising for mobile, empowering a world-class customer service team,
                                    and add a personal touch with product recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-2 '>
                <div className='container py-2'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5'>
                            <div id='header-carousel' className='carousel slide carousel-fade' data-ride='carousel'>
                                <ol className='carousel-indicators'>
                                    <li data-target='#header-carousel' data-slide-to='0' className=''></li>
                                    <li data-target='#header-carousel' data-slide-to='1' className='active'></li>
                                    <li data-target='#header-carousel' data-slide-to='2' className=''></li>
                                    <li data-target='#header-carousel' data-slide-to='3' className=''></li>
                                    <li data-target='#header-carousel' data-slide-to='4' className=''></li>
                                </ol>
                                <div className='carousel-inner py-3'>
                                    <div className='carousel-item active' style={{ minHeight: '300px' }}>
                                        <img className='position-relative w-100' src={slide1} alt='image' style={{ minHeight: '300px', objectFit: 'cover' }} />
                                        <div className='carousel-caption d-flex align-items-center justify-content-center'>
                                            <div className='p-5' style={{ width: '100%', maxWidth: '900px' }}>
                                                <h5 className='text-white text-uppercase mb-md-3'>ELECTRONICS ONLINE STORE</h5>
                                                {/* <h1 className='display-3 text-white mb-md-4'>Best Education From Your Home</h1> */}
                                                {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-item' style={{ minHeight: '300px' }}>
                                        <img className='position-relative w-100' src={slide2} alt='image' style={{ minHeight: '300px', objectFit: 'cover' }} />
                                        <div className='carousel-caption d-flex align-items-center justify-content-center'>
                                            <div className='p-5' style={{ width: '100%', maxWidth: '900px' }}>
                                                <h5 className='text-white text-uppercase mb-md-3'>CLOTHES AND FOOTWEARS</h5>
                                                {/* <h1 className='display-3 text-white mb-md-4'>Best Online Learning Platform</h1> */}
                                                {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-item' style={{ minHeight: '300px' }}>
                                        <img className='position-relative w-100' src={slide3} alt='image' style={{ minHeight: '300px', objectFit: 'cover' }} />
                                        <div className='carousel-caption d-flex align-items-center justify-content-center'>
                                            <div className='p-5' style={{ width: '100%', maxWidth: '900px' }}>
                                                <h5 className='text-white text-uppercase mb-md-3'>JEWELLERY AND HANDICRAFT ITEMS</h5>
                                                {/* <h1 className='display-3 text-white mb-md-4'>Best Online Learning Platform</h1> */}
                                                {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-item' style={{ minHeight: '300px' }}>
                                        <img className='position-relative w-100' src={slide4} alt='image' style={{ minHeight: '300px', objectFit: 'cover' }} />
                                        <div className='carousel-caption d-flex align-items-center justify-content-center'>
                                            <div className='p-5' style={{ width: '100%', maxWidth: '900px' }}>
                                                <h5 className='text-white text-uppercase mb-md-3'>FURNITURE ITEMS</h5>
                                                {/* <h1 className='display-3 text-white mb-md-4'>Best Online Learning Platform</h1> */}
                                                {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-item' style={{ minHeight: '300px' }}>
                                        <img className='position-relative w-100' src={slide5} alt='image' style={{ minHeight: '300px', objectFit: 'cover' }} />
                                        <div className='carousel-caption d-flex align-items-center justify-content-center'>
                                            <div className='p-5' style={{ width: '100%', maxWidth: '900px' }}>
                                                <h5 className='text-white text-uppercase mb-md-3'>DESIGNER & BEAUTY PRODUCTS</h5>
                                                {/* <h1 className='display-3 text-white mb-md-4'>New Way To Learn From Home</h1> */}
                                                {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='text-left mb-4'>
                                <h5 className='text-primary text-uppercase mb-3' style={{ letterSpacing: '5px' }}>All That You Needed You Get It Here</h5>
                                <h1></h1>
                            </div>
                            <p>Create & launch your very own online store! We generate an app for your own online store in minutes
                                where your customers can directly shop from.</p>
                            <p> Generate your shop in a few clicks; go from offline to online</p>
                            <p>Share your app with the world in a second & bring more customers to your store
                                Share your very own digital dukaan catalogs on social media platforms like WhatsApp,
                                WhatsApp Business, Facebook, Instagram & Twitter from here. </p>
                            <p>the online shopping app creator, is for EveryOne who want to fight massive e-commerce brands.</p>
                            <p> Create your entire digital store from us & boost your sales. You are a wholesaler, manufacturer,
                             or a business owner,  every store or business is welcome!</p>
                            <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid  py-3'>
                <div className='container py-3'>
                    <div className='row align-items-center'>

                        <div className='col-lg-7'>
                            <div className='text-left mb-4'>
                                <h5 className='text-primary text-uppercase mb-3' style={{ letterSpacing: '5px' }}>About Us</h5>
                                <h1>Innovative Way</h1>
                            </div>
                            <p> Over 1000 templates with mind blowing eye-catching designs.
                                Highly customizable.
                                Cost-effective plans for e-commerce.
                                Advanced e-commerce tools, including global shipping payments
                                and abandoned cart emails.
                                Strong brand focus.
                                Multilingual sites.
                                24/7 support</p>
                            <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Know More</a>
                        </div>
                        <div className='col-lg-5 py-3'>
                            <img className='img-fluid rounded mb-4 mb-lg-0' src='img/cat-6.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* informative strips */}
            < div className='container-fluid mb-1 py-1' >
                <div className='container'>
                    <div className='row align-itmes-center py-3 justify-content-center'>
                        <h1 className='col-lg-8 col-sm-10 col-md-12 font-size text-center'>What will you get here ?</h1>
                    </div>
                    <div className='row align-itmes-center justify-content-center card-background'>
                        <div className='col-lg-3 col-sm-3 col-md-3 text-center box-shadow ml-1'>
                            <div className='info-card'>
                                <h1>01</h1>
                                <i className='fa fa-list fa-icon' aria-hidden='true'></i>
                            </div>
                            <span className='card-heading'>Catalouge Managed by Brand Owner</span>
                        </div>
                        <div className='col-lg-3 col-sm-3 col-md-3 text-center box-shadow ml-1'>
                            <div className='info-card'>
                                <h1>02</h1>
                                <i className='fa fa-book fa-icon' aria-hidden='true'></i>
                            </div>
                            <span className='card-heading'>Money Deposited in 1 Account</span>
                        </div>
                        <div className='col-lg-3 col-sm-3 col-md-3 text-center box-shadow ml-1'>
                            <div className='info-card'>
                                <h1>03</h1>
                                <i className='fa fa-user fa-icon' aria-hidden='true'></i>
                            </div>
                            <span className='card-heading'>Single Control Panel</span>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default About;
