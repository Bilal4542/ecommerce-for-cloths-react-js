import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/logo.png'
import instaIcon from '../Assets/instagram_icon.png'
import pintesterIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-logo">
                <img src={footerLogo} alt="" srcset="" />
                <p>DressUpDirect</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="social-icons-container">
                    <img src={instaIcon} alt="" />
                </div>
                <div className="social-icons-container">
                    <img src={pintesterIcon} alt="" />
                </div>
                <div className="social-icons-container">
                    <img src={whatsappIcon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved.</p>
            </div>
        </div> 
    </>
  )
}

export default Footer
