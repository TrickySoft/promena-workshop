import React from 'react';
import Banner from '../banner';
import About from '../about';
import { scroller } from 'react-scroll';
import './index.scss';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
    // const myRef = useRef(null)
    // const executeScroll = () => scrollToRef(myRef);
    
 const  scrollToSection = () => {
        scroller.scrollTo('register', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };
    return (
 <div>
<div  className='home__banner'> 
<Banner />
 </div>


    {/* <div className='container-fluid py-5 clients_red mt-5'>
        <div className='container py-5'>
            <div id='testimonial_slider' className='carousel slide' data-ride='carousel'>
                <ul className='carousel-indicators'>
                    <li data-target='#testimonial_slider' data-slide-to='0' className=''></li>
                    <li data-target='#testimonial_slider' data-slide-to='1' className='active'></li>
                    <li data-target='#testimonial_slider' data-slide-to='2' className=''></li>
                </ul>
                <div className='carousel-inner'>
                    <div className='carousel-item'>
                        <div className='testomonial_section'>

                            <div className='full testimonial_cont'>
                                <div className='row align-items-center'>
                                        <div className='col-lg-5'><img src='img/cat-1.jpg' alt='#'/></div>
                                    
                                    <div className=' col-lg-7'>
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
                    </div>

                    <div className='carousel-item'>
                        <div className='testomonial_section'>

                            <div className='full testimonial_cont'>
                                <div className='row align-items-center'>
                                        <div className='col-lg-5'><img src='img/cat-2.jpg' alt='#'/></div>
                                    
                                    <div className=' col-lg-7'>
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
                    </div>

                    <div className='carousel-item'>
                        <div className='testomonial_section'>

                            <div className='full testimonial_cont'>
                                <div className='row align-items-center'>
                                        <div className='col-lg-5'><img src='img/cat-3.jpg' alt='#'/></div>
                                    
                                    <div className=' col-lg-7'>
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
                    </div>

                </div>

            </div>
        </div>
    </div> */}
<About/>
    <div className='container-fluid   py-5'>
        <div className='container pt-5 pb-3'>
            <div className='text-center mb-5'>
                <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>Websites</h5>
                <h1>Explore Your Need</h1>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-1.jpg'  alt=''/>
                        <a onClick={scrollToSection} className='cat-overlay text-white text-decoration-none'>
                            <h4 className='text-white font-weight-medium'>Web Design</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-2.jpg' alt=''/>
                        <a className='cat-overlay text-white text-decoration-none' href=''>
                            <h4 className='text-white font-weight-medium'>Development</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-3.jpg' alt=''/>
                        <a className='cat-overlay text-white text-decoration-none' href=''>
                            <h4 className='text-white font-weight-medium'>Game Design</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-4.jpg' alt=''/>
                        <a className='cat-overlay text-white text-decoration-none' href=''>
                            <h4 className='text-white font-weight-medium'>Apps Design</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-5.jpg' alt=''/>
                        <a className='cat-overlay text-white text-decoration-none' href=''>
                            <h4 className='text-white font-weight-medium'>Marketing</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-6.jpg' alt=''/>
                        <a className='cat-overlay text-white text-decoration-none' href=''>
                            <h4 className='text-white font-weight-medium'>Research</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-7.jpg' alt=''/>
                        <a className='cat-overlay text-white text-decoration-none' href=''>
                            <h4 className='text-white font-weight-medium'>Content Writing</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='cat-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/cat-8.jpg' alt=''/>
                        <a className='cat-overlay text-white text-decoration-none' href=''>
                            <h4 className='text-white font-weight-medium'>SEO</h4>
                            <span>100 + Websites</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='container-fluid   py-5'>
        <div className='container py-5'>
            <div className='text-center mb-5'>
                <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>Websites</h5>
                <h1>Our Popular Works</h1>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='rounded overflow-hidden mb-2'>
                        <img className='img-fluid' src='img/course-1.jpg' alt=''/>
                        <div className='bg-secondary p-4'>
                            <div className='d-flex justify-content-between mb-3'>
                                <small className='m-0'><i className='fa fa-users text-primary mr-2'></i>100 above Clients</small>
                                <small className='m-0'><i className='far fa-clock text-primary mr-2'></i>01h 30m</small>
                            </div>
                            <a className='h5' href=''>Web design & development websites </a>
                            <div className='border-top mt-4 pt-4'>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='m-0'><i className='fa fa-star text-primary mr-2'></i>4.5 <small>(250)</small></h6>
                                    <h5 className='m-0'>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='rounded overflow-hidden mb-2'>
                        <img className='img-fluid' src='img/course-2.jpg' alt=''/>
                        <div className='bg-secondary p-4'>
                            <div className='d-flex justify-content-between mb-3'>
                                <small className='m-0'><i className='fa fa-users text-primary mr-2'></i>100 above Clients</small>
                                <small className='m-0'><i className='far fa-clock text-primary mr-2'></i>01h 30m</small>
                            </div>
                            <a className='h5' href=''>Web design & development websites </a>
                            <div className='border-top mt-4 pt-4'>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='m-0'><i className='fa fa-star text-primary mr-2'></i>4.5 <small>(250)</small></h6>
                                    <h5 className='m-0'>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='rounded overflow-hidden mb-2'>
                        <img className='img-fluid' src='img/course-3.jpg' alt=''/>
                        <div className='bg-secondary p-4'>
                            <div className='d-flex justify-content-between mb-3'>
                                <small className='m-0'><i className='fa fa-users text-primary mr-2'></i>100 above Clients</small>
                                <small className='m-0'><i className='far fa-clock text-primary mr-2'></i>01h 30m</small>
                            </div>
                            <a className='h5' href=''>Web design & development websites </a>
                            <div className='border-top mt-4 pt-4'>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='m-0'><i className='fa fa-star text-primary mr-2'></i>4.5 <small>(250)</small></h6>
                                    <h5 className='m-0'>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='rounded overflow-hidden mb-2'>
                        <img className='img-fluid' src='img/course-4.jpg' alt=''/>
                        <div className='bg-secondary p-4'>
                            <div className='d-flex justify-content-between mb-3'>
                                <small className='m-0'><i className='fa fa-users text-primary mr-2'></i>100 above Clients</small>
                                <small className='m-0'><i className='far fa-clock text-primary mr-2'></i>01h 30m</small>
                            </div>
                            <a className='h5' href=''>Web design & development websites </a>
                            <div className='border-top mt-4 pt-4'>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='m-0'><i className='fa fa-star text-primary mr-2'></i>4.5 <small>(250)</small></h6>
                                    <h5 className='m-0'>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='rounded overflow-hidden mb-2'>
                        <img className='img-fluid' src='img/course-5.jpg' alt=''/>
                        <div className='bg-secondary p-4'>
                            <div className='d-flex justify-content-between mb-3'>
                                <small className='m-0'><i className='fa fa-users text-primary mr-2'></i>100 above Clients</small>
                                <small className='m-0'><i className='far fa-clock text-primary mr-2'></i>01h 30m</small>
                            </div>
                            <a className='h5' href=''>Web design & development websites </a>
                            <div className='border-top mt-4 pt-4'>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='m-0'><i className='fa fa-star text-primary mr-2'></i>4.5 <small>(250)</small></h6>
                                    <h5 className='m-0'>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='rounded overflow-hidden mb-2'>
                        <img className='img-fluid' src='img/course-6.jpg' alt=''/>
                        <div className='bg-secondary p-4'>
                            <div className='d-flex justify-content-between mb-3'>
                                <small className='m-0'><i className='fa fa-users text-primary mr-2'></i>100 above Clients</small>
                                <small className='m-0'><i className='far fa-clock text-primary mr-2'></i>01h 30m</small>
                            </div>
                            <a className='h5' href=''>Web design & development websites </a>
                            <div className='border-top mt-4 pt-4'>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='m-0'><i className='fa fa-star text-primary mr-2'></i>4.5 <small>(250)</small></h6>
                                    <h5 className='m-0'>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='container-fluid bg-registration py-5 mb-5' >
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-7 mb-5 mb-lg-0'>
                    <div className='mb-4'>
                        <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>Need Any Website ?</h5>
                        <h1 className='text-white'>30% Off For New Customers</h1>
                    </div>
                    <p className='text-white'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul className='list-inline text-white m-0'>
                        <li className='py-2'><i className='fa fa-check text-primary mr-3'></i>Labore eos amet dolor amet diam</li>
                        <li className='py-2'><i className='fa fa-check text-primary mr-3'></i>Etsea et sit dolor amet ipsum</li>
                        <li className='py-2'><i className='fa fa-check text-primary mr-3'></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div className='col-lg-5 register'>
                    <div className='card border-0'>
                        <div className='card-header bg-light text-center p-4'>
                            <h1 className='m-0'>Sign Up Now</h1>
                        </div>
                        <div className='card-body rounded-bottom bg-primary p-5'>
                            <form>
                                <div className='form-group'>
                                    <input type='text' className='form-control border-0 p-4' placeholder='Your name' required='required' />
                                </div>
                                <div className='form-group'>
                                    <input type='email' className='form-control border-0 p-4' placeholder='Your email' required='required' />
                                </div>
                                <div className='form-group'>
                                    <select className='custom-select border-0 px-4' style={{height:'47px'}}>
                                        <option selected>Select a Category</option>
                                        <option value='1'>User</option>
                                        <option value='2'> Employee</option>
                                        <option value='3'> Manager</option>
                                    </select>
                                </div>
                                <div>
                                    <button className='btn btn-dark btn-block border-0 py-3' type='submit'>Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className='container-fluid py-5'>
        <div className='container pt-5 pb-3'>
            <div className='text-center mb-5'>
                <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>Teachers</h5>
                <h1>Meet Our Teachers</h1>
            </div>
            <div className='row'>
                <div className='col-md-6 col-lg-3 text-center team mb-4'>
                    <div className='team-item rounded overflow-hidden mb-2'>
                        <div className='team-img position-relative'>
                            <img className='img-fluid' src='img/team-1.jpg' alt=''/>
                            <div className='team-social'>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-twitter'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-facebook-f'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-linkedin-in'></i></a>
                            </div>
                        </div>
                        <div className='bg-secondary p-4'>
                            <h5>Jhon Doe</h5>
                            <p className='m-0'>Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 text-center team mb-4'>
                    <div className='team-item rounded overflow-hidden mb-2'>
                        <div className='team-img position-relative'>
                            <img className='img-fluid' src='img/team-2.jpg' alt=''/>
                            <div className='team-social'>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-twitter'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-facebook-f'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-linkedin-in'></i></a>
                            </div>
                        </div>
                        <div className='bg-secondary p-4'>
                            <h5>Jhon Doe</h5>
                            <p className='m-0'>Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 text-center team mb-4'>
                    <div className='team-item rounded overflow-hidden mb-2'>
                        <div className='team-img position-relative'>
                            <img className='img-fluid' src='img/team-3.jpg' alt=''/>
                            <div className='team-social'>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-twitter'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-facebook-f'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-linkedin-in'></i></a>
                            </div>
                        </div>
                        <div className='bg-secondary p-4'>
                            <h5>Jhon Doe</h5>
                            <p className='m-0'>Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 text-center team mb-4'>
                    <div className='team-item rounded overflow-hidden mb-2'>
                        <div className='team-img position-relative'>
                            <img className='img-fluid' src='img/team-4.jpg' alt=''/>
                            <div className='team-social'>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-twitter'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-facebook-f'></i></a>
                                <a className='btn btn-outline-light btn-square mx-1' href='#'><i className='fab fa-linkedin-in'></i></a>
                            </div>
                        </div>
                        <div className='bg-secondary p-4'>
                            <h5>Jhon Doe</h5>
                            <p className='m-0'>Web Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className='container-fluid py-5'>
        <div className='container py-5'>
            <div className='text-center mb-5'>
                <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>Testimonial</h5>
                <h1>What Say Our Students</h1>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <div className='owl-carousel testimonial-carousel'>
                        <div className='text-center'>
                            <i className='fa fa-3x fa-quote-left text-primary mb-4'></i>
                            <h4 className='font-weight-normal mb-4'>Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <img className='img-fluid mx-auto mb-3' src='img/testimonial-1.jpg' alt=''/>
                            <h5 className='m-0'>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className='text-center'>
                            <i className='fa fa-3x fa-quote-left text-primary mb-4'></i>
                            <h4 className='font-weight-normal mb-4'>Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <img className='img-fluid mx-auto mb-3' src='img/testimonial-2.jpg' alt=''/>
                            <h5 className='m-0'>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className='text-center'>
                            <i className='fa fa-3x fa-quote-left text-primary mb-4'></i>
                            <h4 className='font-weight-normal mb-4'>Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <img className='img-fluid mx-auto mb-3' src='img/testimonial-3.jpg' alt=''/>
                            <h5 className='m-0'>Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className='container-fluid py-5'>
        <div className='container pt-5 pb-3'>
            <div className='text-center mb-5'>
                <h5 className='text-primary text-uppercase mb-3' style={{letterSpacing:'5px'}}>Our Blog</h5>
                <h1>Latest From Our Blog</h1>
            </div>
            <div className='row pb-3'>
                <div className='col-lg-4 mb-4'>
                    <div className='blog-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/blog-1.jpg' alt=''/>
                        <a className='blog-overlay text-decoration-none' href=''>
                            <h5 className='text-white mb-3'>Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                            <p className='text-primary m-0'>Jan 01, 2050</p>
                        </a>
                    </div>
                </div>
                <div className='col-lg-4 mb-4'>
                    <div className='blog-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/blog-2.jpg' alt=''/>
                        <a className='blog-overlay text-decoration-none' href=''>
                            <h5 className='text-white mb-3'>Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                            <p className='text-primary m-0'>Jan 01, 2050</p>
                        </a>
                    </div>
                </div>
                <div className='col-lg-4 mb-4'>
                    <div className='blog-item position-relative overflow-hidden rounded mb-2'>
                        <img className='img-fluid' src='img/blog-3.jpg' alt=''/>
                        <a className='blog-overlay text-decoration-none' href=''>
                            <h5 className='text-white mb-3'>Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                            <p className='text-primary m-0'>Jan 01, 2050</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className='container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5' style={{marginTop:'90px'}}>
        <div className='row pt-5'>
            <div className='col-lg-7 col-md-12'>
                <div className='row'>
                    <div className='col-md-6 mb-5'>
                        <h5 className='text-primary text-uppercase mb-4' style={{letterSpacing:'5px'}}>Get In Touch</h5>
                        <p><i className='fa fa-map-marker-alt mr-2'></i>123 Street, New York, USA</p>
                        <p><i className='fa fa-phone-alt mr-2'></i>+012 345 67890</p>
                        <p><i className='fa fa-envelope mr-2'></i>info@example.com</p>
                        <div className='d-flex justify-content-start mt-4'>
                            <a className='btn btn-outline-light btn-square mr-2' href='#'><i className='fab fa-twitter'></i></a>
                            <a className='btn btn-outline-light btn-square mr-2' href='#'><i className='fab fa-facebook-f'></i></a>
                            <a className='btn btn-outline-light btn-square mr-2' href='#'><i className='fab fa-linkedin-in'></i></a>
                            <a className='btn btn-outline-light btn-square' href='#'><i className='fab fa-instagram'></i></a>
                        </div>
                    </div>
                    <div className='col-md-6 mb-5'>
                        <h5 className='text-primary text-uppercase mb-4' style={{letterSpacing:'5px'}}>Our Courses</h5>
                        <div className='d-flex flex-column justify-content-start'>
                            <a className='text-white mb-2' href='#'><i className='fa fa-angle-right mr-2'></i>Web Design</a>
                            <a className='text-white mb-2' href='#'><i className='fa fa-angle-right mr-2'></i>Apps Design</a>
                            <a className='text-white mb-2' href='#'><i className='fa fa-angle-right mr-2'></i>Marketing</a>
                            <a className='text-white mb-2' href='#'><i className='fa fa-angle-right mr-2'></i>Research</a>
                            <a className='text-white' href='#'><i className='fa fa-angle-right mr-2'></i>SEO</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-5 col-md-12 mb-5'>
                <h5 className='text-primary text-uppercase mb-4' style={{letterSpacing:'5px'}}>Newsletter</h5>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                <div className='w-100'>
                    <div className='input-group'>
                        <input type='text' className='form-control border-light' style={{padding:'30px'}} placeholder='Your Email Address'/>
                        <div className='input-group-append'>
                            <button className='btn btn-primary px-4'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className='container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5' style={{borderColor:'rgba(256, 256, 256, .1)'}}>
        <div className='row'>
            <div className='col-lg-6 text-center text-md-left mb-3 mb-md-0'>
                <p className='m-0 text-white'>&copy; <a href='#'>Domain Name</a>. All Rights Reserved. Designed by <a href='https://htmlcodex.com'>HTML Codex</a>
                </p>
            </div>
            <div className='col-lg-6 text-center text-md-right'>
                <ul className='nav d-inline-flex'>
                    <li className='nav-item'>
                        <a className='nav-link text-white py-0' href='#'>Privacy</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white py-0' href='#'>Terms</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white py-0' href='#'>FAQs</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white py-0' href='#'>Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div> */}


 </div>

    )
}

export default Home
