import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from './data'
import logo from '../starter-code/assets/shared/logo.svg'
import menuOpen from '../starter-code/assets/shared/icon-hamburger.svg'  
import menuClose from '../starter-code/assets/shared/icon-close.svg'

const Nav = () => {
  return (
   <>
    <nav>
        <img src={logo} alt="space tourism logo" />
        <div className="nav__line"></div>
        <ul>
            {navLinks.map((item) => {
                const {id, num, url,link} = item
                return <NavLink to={url} key={id} activeClassName="active">
                    <p>{num}
                    {link}</p>
                </NavLink>
            })}
        </ul>
        <img src={menuOpen} alt="hamburger" />
    </nav>
   </>
  )
}

export default Nav