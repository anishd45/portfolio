import React from 'react'
import './Hero.css'
import profile_img from '../assets/anish.jpg.png'
//import resume  from './Components/myresume '  
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Hero() {
  return ( 
    <div id='hero' className='hero'>
        <img src={profile_img} alt="" /> 
        <h2><span>Hi! I'm Anish Devkota,</span>  frontend Developer Based on Nepal.</h2>       
        <p>I am a frontend Developer from Kathmandu, Nepal with 1 year of experience. </p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With Me</AnchorLink></div>
            <div className="hero-resume"> <AnchorLink className='anchor-link' offset={50} href='#resume' >My resume</AnchorLink></div>
        </div>
    </div>
  );
}
