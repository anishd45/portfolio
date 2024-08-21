import React, { useRef, useState } from 'react'
import './Navbar.css'
import menu_open from '../assets/menu_open.png'
import menu_close from '../assets/menu_close.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Navbar() {

  const  [menu,setMenu]=useState("home");
  const menuRef =useRef();
  
  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu=()=>{
    menuRef.current.style.right='-350px';
  }


  return (
    <div className='navbar'>
        <h1 className='anish'>Anish</h1>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portofolio")}>Portfolio</p></AnchorLink>  </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink> </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink> </li>   
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me </p></AnchorLink> </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact' id='#footer'>
           Connect With me
          </AnchorLink>
        </div>
    </div>
  )
}
