import React from 'react'
import './index.scss';
import logo from '../../../assets/images/cardlogo.png'
const Header = () => {
    return (
     <div>
    
     <div className='header-wrapper'>
    <nav>
      <input type='checkbox' id='show-search'></input>
      <input type='checkbox' id='show-menu'></input>
      <label forHtml='show-menu' className='menu-icon'><i className='fas fa-bars'></i></label>
      <div className='content'>
      <div className='logo'><a href='#'><img src={logo} alt='logo' /></a></div>
        <ul className='links'>
        <li>
            <a href='#' className='desktop-link'>HOME <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-seo'></input>
            <label forHtml='show-seo'>HOME</label>
            <ul>
              <li><a href='#'>Drop Menu 1</a></li>
              <li><a href='#'>Drop Menu 2</a></li>
              <li><a href='#'>Drop Menu 3</a></li>
              <li><a href='#'>Drop Menu 4</a></li>
            </ul>
          </li>
          <li>
            <a href='#' className='desktop-link'>PRICING <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-ppc'></input>
            <label forHtml='show-ppc'>PRICING</label>
            <ul>
              <li><a href='#'>Drop Menu 1</a></li>
              <li><a href='#'>Drop Menu 2</a></li>
              <li><a href='#'>Drop Menu 3</a></li>
              <li><a href='#'>Drop Menu 4</a></li>
            </ul>
          </li>
          <li>
            <a href='#' className='desktop-link'>ABOUT US <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-content'></input>
            <label forHtml='show-content'>ABOUT US</label>
            <ul>
              <li><a href='#'>Drop Menu 1</a></li>
              <li><a href='#'>Drop Menu 2</a></li>
              <li><a href='#'>Drop Menu 3</a></li>
              <li><a href='#'>Drop Menu 4</a></li>
            </ul>
          </li>
          <li>
            <a href='#' className='desktop-link'>BLOGS <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-social'></input>
            <label forHtml='show-social'>BLOGS</label>
            <ul>
              <li><a href='#'>Menu Item 1</a></li>
              <li><a href='#'>Menu Item 2</a></li>
              <li><a href='#'>Menu Item 3</a></li>
              <li><a href='#'>Menu Item 4</a></li>
              <li><a href='#'>Menu Item 5</a></li>
            </ul>
          </li>
          <li>
            <a href='#' className='desktop-link'>CONTACT US <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-news'></input>
            <label forHtml='show-news'>CONTACT US</label>
            <ul>
              <li><a href='#'>Drop Menu 1</a></li>
              <li><a href='#'>Drop Menu 2</a></li>
              <li><a href='#'>Drop Menu 3</a></li>
            </ul>
          </li>
        </ul>
        <div className='header__login'>
           <button>Login</button>
        </div>
      </div>
      </nav>
      </div>
      </div>
    )
}

export default Header;