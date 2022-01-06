import React from 'react'
import './index.scss';

const About = () => {
    return (
        <div>
        <div className='container-fluid margin-top py-5'>
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-5'>
                    <img className='img-fluid rounded mb-4 mb-lg-0' src='img/cat-3.jpg' alt=''/>
                </div>
                <div className='col-lg-7'>
                    <div className='text-left mb-4'>
                        <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>Why Choose Name Over Name</h5>
                        <h1>For Your E-Store</h1>
                    </div>
                    <p>New to e-Commerce? Everybody is setting up shop in the cloud 
nowadays. However, building an e-store is not an easy feat. we’ll give e-commerce features and very user-friendly professional interface</p>
                    <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <div className='container-fluid margin-top py-5'>
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-5'>
                <div id='header-carousel' className='carousel slide carousel-fade' data-ride='carousel'>
            <ol className='carousel-indicators'>
                <li data-target='#header-carousel' data-slide-to='0' className='active'></li>
                <li data-target='#header-carousel' data-slide-to='1' className=''></li>
                <li data-target='#header-carousel' data-slide-to='2' className=''></li>
            </ol>
            <div className='carousel-inner'>
                <div className='carousel-item active' style={{minHeight: '300px'}}>
                    <img className='position-relative w-100' src='img/carousel-1.jpg' style={{minHeight: '300px', objectFit: 'cover'}}/>
                    <div className='carousel-caption d-flex align-items-center justify-content-center'>
                        <div className='p-5' style={{width:'100%', maxWidth:'900px'}}>
                            <h5 className='text-white text-uppercase mb-md-3'>Support that pleases</h5>
                            {/* <h1 className='display-3 text-white mb-md-4'>Best Education From Your Home</h1> */}
                            {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                        </div>
                    </div>
                </div>
                <div className='carousel-item' style={{minHeight: '300px'}}>
                    <img className='position-relative w-100' src='img/carousel-2.jpg' style={{minHeight: '300px', objectFit: 'cover'}}/>
                    <div className='carousel-caption d-flex align-items-center justify-content-center'>
                        <div className='p-5' style={{width: '100%', maxWidth: '900px'}}>
                            <h5 className='text-white text-uppercase mb-md-3'>No coding required</h5>
                            {/* <h1 className='display-3 text-white mb-md-4'>Best Online Learning Platform</h1> */}
                            {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                        </div>
                    </div>
                </div>
                <div className='carousel-item' style={{minHeight: '300px'}}>
                    <img className='position-relative w-100' src='img/carousel-3.jpg' style={{minHeight: '300px', objectFit: 'cover'}}/>
                    <div className='carousel-caption d-flex align-items-center justify-content-center'>
                        <div className='p-5' style={{width:'100%', maxWidth:'900px'}}>
                            <h5 className='text-white text-uppercase mb-md-3'>eCommerce Optimization</h5>
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
                        <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>No coding required</h5>
                        <h1>Support that pleases</h1>
                    </div>
                    <p>With 9 years of experience in e-commerce we are confidant to bring the theme with the heighest conversion rate. Set-up a fully functional awsome website without needing to code a single line.</p>
                    <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <div className='container-fluid margin-top py-5'>
        <div className='container py-5'>
            <div className='row align-items-center'>

                <div className='col-lg-7'>
                    <div className='text-left mb-4'>
                        <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>About Us</h5>
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
                <div className='col-lg-5'>
                    <img className='img-fluid rounded mb-4 mb-lg-0' src='img/cat-6.jpg' alt=''/>
                </div>
            </div>
        </div>
    </div>
    {/* informative strips */}
    <div className='container-fluid py-5'>
        <div className='container'>
        <div className='row align-itmes-center py-3 '>
            <h1 className='col-lg-12 text-center'>What will you get here ?</h1>
            </div>
            <div className='row align-itmes-center'>
            <span  className='col-lg-1 strong_number'>1</span>
            <span className='col-lg-11 text-center box-shadow'> We custom your need</span>
            </div>
            <div className='row align-itmes-center'>
            <span  className='col-lg-1 strong_number'>2</span>
            <span className='col-lg-11 text-center box-shadow'> We custom your need</span>
            </div>
            <div className='row align-itmes-center'>
            <span  className='col-lg-1 strong_number'>3</span>
            <span className='col-lg-11 text-center box-shadow'> We custom your need</span>
            </div>
            <div className='row align-itmes-center'>
            <span  className='col-lg-1 strong_number'>4</span>
            <span className='col-lg-11 text-center box-shadow'> We custom your need</span>
            </div>
            <div className='row align-itmes-center'>
            <span  className='col-lg-1 strong_number'>5</span>
            <span className='col-lg-11 text-center box-shadow'> We custom your need</span>
            </div>
  
        </div>
    </div>
    </div> 

    )
}

export default About;
