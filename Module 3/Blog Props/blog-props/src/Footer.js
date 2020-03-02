import React from 'react';

function Footer(){
    return (
        <div id="footer-container">
            <div id="footer-icon-container">
                <div className="social-icon"><img src="./hollow-cut-facebook.svg" alt="facebook"></img></div>
                <div className="social-icon"><img src="./hollow-cut-twitter.svg" alt="twitter"></img></div>
                <div className="social-icon"><img src="./hollow-cut-github.svg" alt="github"></img></div>
            </div>
            <div>
                <p id="copyright">Copyright @ Your Website 2020</p>
            </div>
        </div>
    )
}

export default Footer;