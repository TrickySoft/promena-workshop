import React from 'react'
import './index.scss';

const About = () => {
    return (
        <div>
        <div className='container-fluid margin-top py-5'>
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-5'>
                    <img className='img-fluid rounded mb-4 mb-lg-0' src='img/about.jpg' alt=''/>
                </div>
                <div className='col-lg-7'>
                    <div className='text-left mb-4'>
                        <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>About Us</h5>
                        <h1>Innovative Way To Learn</h1>
                    </div>
                    <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                    <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
{/* carousel */}

    <div className='container-fluid margin-top py-5'>
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-5'>
                <div id='header-carousel' className='carousel slide carousel-fade' data-ride='carousel'>
            <ol className='carousel-indicators'>
                <li data-target='#header-carousel' data-slide-to='0' className='active'></li>
                <li data-target='#header-carousel' data-slide-to='1'></li>
                <li data-target='#header-carousel' data-slide-to='2'></li>
            </ol>
            <div className='carousel-inner'>
                <div className='carousel-item active' style={{minHeight: '300px'}}>
                    <img className='position-relative w-100' src='img/carousel-1.jpg' style={{minHeight: '300px', objectFit: 'cover'}}/>
                    <div className='carousel-caption d-flex align-items-center justify-content-center'>
                        <div className='p-5' style={{width:'100%', maxWidth:'900px'}}>
                            <h5 className='text-white text-uppercase mb-md-3'>Best Online Courses</h5>
                            {/* <h1 className='display-3 text-white mb-md-4'>Best Education From Your Home</h1> */}
                            {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                        </div>
                    </div>
                </div>
                <div className='carousel-item' style={{minHeight: '300px'}}>
                    <img className='position-relative w-100' src='img/carousel-2.jpg' style={{minHeight: '300px', objectFit: 'cover'}}/>
                    <div className='carousel-caption d-flex align-items-center justify-content-center'>
                        <div className='p-5' style={{width: '100%', maxWidth: '900px'}}>
                            <h5 className='text-white text-uppercase mb-md-3'>Best Online Courses</h5>
                            {/* <h1 className='display-3 text-white mb-md-4'>Best Online Learning Platform</h1> */}
                            {/* <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a> */}
                        </div>
                    </div>
                </div>
                <div className='carousel-item' style={{minHeight: '300px'}}>
                    <img className='position-relative w-100' src='img/carousel-3.jpg' style={{minHeight: '300px', objectFit: 'cover'}}/>
                    <div className='carousel-caption d-flex align-items-center justify-content-center'>
                        <div className='p-5' style={{width:'100%', maxWidth:'900px'}}>
                            <h5 className='text-white text-uppercase mb-md-3'>Best Online Courses</h5>
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
                        <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>About Us</h5>
                        <h1>Innovative Way To Learn</h1>
                    </div>
                    <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                    <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a>
                </div>
                {/* <div className='col-lg-7'>
                    <div className='text-left mb-4'>
                        <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>About Us</h5>
                        <h1>Innovative Way To Learn</h1>
                    </div>
                    <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                    <a href='' className='btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2'>Learn More</a>
                </div> */}
            </div>
        </div>
    </div>
    </div> 

    )
}

export default About;
