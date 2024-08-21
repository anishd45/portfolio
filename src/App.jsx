import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About';
import Services from './Components/Services';
import Mywork from './Components/Mywork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Mywork/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
