import React from 'react'
import './Footer.css'
import fb_icon from '../assets/facebook.png'
import insta_icon from '../assets/instagram.png'
import linkedin_icon from '../assets/linkedin.png'
import github_icon from '../assets/github.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Anish</h1>
                <p>I am frontend Developer from Nepal</p>
            </div>
            <div className="footer-top-right">
                <p>Connect With me on:</p>
                <a href="https://www.facebook.com/anish.dev.12"> <img src={fb_icon} alt="" /></a>
                <a href="https://www.instagram.com/anish_devkotaa/"> <img src={insta_icon} alt="" /></a>
                <a href="https://www.linkedin.com/in/anish-devkota-99bb041a1/"> <img src={linkedin_icon} alt="" /></a>
                <a href="https://github.com/anishd45"> <img src={github_icon} alt="" /></a>
            </div>
            
        </div>
        <hr />
        <div id='footer' className="footer-bottom">
            <p className='footer-bottom-left'>
                CopyRight @ 2023 <span>Anish Devkota, </span> All Right Resrve.
            </p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}
