//rafce to create a functional component based on file name

import React from 'react'
import logo from '../assets/nh_logo.png'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="November's Harvest Logo"/>
            </div>
            <div className="links-wrapper">
                <button>Blog</button>
                <button>About Us</button>
                <button>CSA 2021</button>
                <button>Events</button>
            </div>
        </div>
    )
}

export default Header
