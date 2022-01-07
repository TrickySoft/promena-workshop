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
<About/>
    <div className='container-fluid  py-3'>
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
    <div className='container-fluid bg-registration py-3 mb-5' >
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
                            <h1 className='m-0'>Register Now</h1>
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
                                    <button className='btn btn-dark btn-block border-0 py-3' type='submit'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>

    )
}

export default Home
