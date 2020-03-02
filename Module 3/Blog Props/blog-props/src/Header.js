import React from 'react';
import Navbar from './Navbar.js';

function Header(){
    return(
        <div id="header-container">
            <div id="overlay">
                <Navbar/>
                <div id="header"><h1>Clean Blog</h1></div>
                <div id="sub-header"><h4>A Blog Theme by Start Bootstrap</h4></div>
            </div>
        </div>
    )
}

export default Header;