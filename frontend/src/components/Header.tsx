//rafce to create a functional component based on file name
import React from 'react';
import logo from '../assets/nh_logo.png';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="November's Harvest Logo"/>
            </div>
            <div className="links-wrapper">
                <a>Blog</a>
                <a>About Us</a>
                <a>CSA 2021</a>
                <a>Events</a>
            </div>
        </div> 
    ) 
} 

export default Header
// create general type file that allows typescript to understand png, svg, jpg
// create one main directory, can separate posts and users, and put the methods on how to access the server
