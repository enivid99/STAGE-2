import React from 'react'

import './Footer.css';


const Footer = () => {
  return (
    <div>
        <div className='footer_container'> 
            <div className='social_media_icons'>
                <i class="fa-brands fa-square-facebook icon_style"></i>
                <i class="fa-brands fa-linkedin icon_style"></i>
                <i class="fa-brands fa-x-twitter icon_style"></i>
                <i class="fa-brands fa-square-instagram icon_style"></i>
            </div>
            <div className='features_link'>
                <h1>Features</h1>
                <a href="/">Shipping</a>
                <a href="/">Our products</a>
                <a href="/">Terms of Service</a>
                <a href="/">About Us</a>
            </div>
            <div className='features_link'>
                <h1>Quick links</h1>
                <a href="/">Home</a>
                <a href="/">Sign In</a>
                <a href="/">Pricing</a>
                <a href="/">FAQ</a>
            </div>
            <div className='join_newsletter'>
                <h1>Join Our Newsletter</h1>
                <div className='input_field'>
                    <input type="text" className='enter_email' placeholder='Your email address'/>
                    <button>Subscribe</button>
                </div>
                
                <p>Subscribe to our newsletter and we will inform you about latest updates and promotions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer