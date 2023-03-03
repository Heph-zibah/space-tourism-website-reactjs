import React, { useState } from 'react'
import {NavLink, Link } from 'react-router-dom'
import { navLinks } from './data'
import logo from '../starter-code/assets/shared/logo.svg'
import menuOpen from '../starter-code/assets/shared/icon-hamburger.svg'  
import menuClose from '../starter-code/assets/shared/icon-close.svg'

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);
  return (
   <>
      <header>
      <div className="nav__logo">
                <img src={logo} alt="space tourism logo" />
            </div>
      <nav>
            
            <span className="nav__line"></span>
            <ul>
                {navLinks.map((item) => {
                    const {id, num, url,link} = item
                    return <li key={id} onClick={() => setActive(item)} className={`list-item ${active == item && "active"}`}>
                        <Link to={url}>
                        <span>{num}</span>{link}
                        </Link>
                    </li>
                    })}
            </ul>
            <div className="menu__open" onClick={() => setOpen(!open)}>
                <img src={menuOpen} alt="hamburger" />
            </div>
        </nav>
        {open && <div className="mobile__nav">
            <div className='mobile__div'>
                <div className="menu__close" onClick={() => setOpen(!open)}>
                    <img src={menuClose} alt="close icon" />
                </div>
                <ul>
                    {navLinks.map((item) => {
                        const {id, num, url,link} = item
                        return <li >
                                <NavLink to={url} key={id} activeClassName="active" onClick={() => setOpen(!open)}>
                                    <span>{num}</span>{link}
                                </NavLink>
                            </li>
                        })}
                </ul>
            </div>
        </div>} 
      </header>
    </>
  )
}

export default Nav