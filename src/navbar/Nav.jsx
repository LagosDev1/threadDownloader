import React from 'react';
import './nav.css'
import {IoMdArrowDropdown} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'


const Nav = () => {

  return (
    <div className='NavBar'>
    <header>
     <div class="logo">Get<span>Threads</span>Mate</div>
        <ul class="navlist">
            <li><a href="#home"></a>Downloader</li>
            <li><a href="#about"></a>Threads to MP3</li>
            <li><a href="#services"></a>English <IoMdArrowDropdown /></li>
        </ul>
        <div id="menu-icon" class="bx bx-menu"><GiHamburgerMenu /></div>
      
    </header>
    </div>
  )
}

export default Nav;
