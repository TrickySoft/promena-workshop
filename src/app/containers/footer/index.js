import React from 'react'
import './index.scss'
import logo from '../../../assets/images/logoWhite.png';

const Footer = () => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer__left'>
          <img src={logo} alt='my home' className='footer__logo' />
          <h2>ABOUT US</h2>
          <p>Use Yoneak ecommerce bussiness application and mobile application to boost your bussiness</p>
          <div className='footer__icons'>
            <ul>
              <li><a href='/' className='fab fa-facebook'></a></li>
              <li><a href='/' className='fab fa-whatsapp'></a></li>
              <li><a href='/' className='fab fa-instagram'></a></li>
              <li><a href='/' className='fab fa-twitter'></a></li>
            </ul>
          </div>
        </div>
        <div className='footer__center'>
        <div className='footer__center1'>
        <h2>Other Pages</h2>
          <ul>
            <li><a href='/' className='desktop-link'>HOME</a></li>
            <li><a href='/' className='desktop-link'>PRICING</a></li>
            <li><a href='/' className='desktop-link'>CONTACT US</a></li>
            <li><a href='/' className='desktop-link'>ABOUT US</a></li>
          </ul>
        </div>
        <div className='footer__center2'>
        <h2>Additional Pages</h2>
          <ul>
            <li><a href='/' className='desktop-link'>PRIVECY POLICY</a></li>
            <li><a href='/' className='desktop-link'>TERMS & CONTIONS</a></li>
          </ul>
        </div>
        </div>
        <div className='footer__right'>
          <h2>CONTACT US</h2>
          <div className='footer__right__about'>
          <span> <i className='fas fa-phone-alt'></i></span>
          <p>+91 8970544011</p>
          </div>
          <div className='footer__right__about'>
          <span> <i className='fas fa-envelope'></i></span>
          <p>support@yoneak.com</p>
          </div>
          <div className='footer__right__about'>
          <span> <i className='fas fa-map-marker-alt'></i></span>
          <p>No. 6, BASAPPA ROAD, SHANTHI NAGAR, BANGALORE 560027</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;