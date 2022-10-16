import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div>
            <div className="push"></div>
        <div className="footer-container">
            <h6 className="copyright">ⓒ 2022 MyWardrobe</h6>
            <ul className="tags">
                <li><i className="fa-brands fa-facebook item"></i></li>
                <li><i className="fa-brands fa-twitter item"></i></li>
            </ul>
        </div>
        </div>
    );
}

export default Footer;