import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scroll >= 50) {
            setNav(true)
        }else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

  return(
      <nav className={nav ? 'nav active' : 'nav'}>
            <Link to='#' className="logo">
                <img src={logo} alt="logo" />
            </Link>
            <input className="menu-btn" type="checkbox" id='menu-btn' />
            <label for="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="#">Header</Link></li>
                <li><Link to="#">Feature</Link></li>
                <li><Link to="#">Offer</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
      </nav>
  )
}

export default Navbar;