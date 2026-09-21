import './App.css'
import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import AnimatedCursor from "react-animated-cursor";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Welcome from './Audio/welcome.mp3'
import Contact from './pages/Contact'; 
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // useEffect(() => {
  //   if (buttonRef.current) {
  //     buttonRef.current.click();
  //   }
  // }, []);
  // const playSound = () => {
  //   const audio = new Audio(Welcome); // Adjust path if in public folder
  //   audio.play().catch((err) => {
  //     console.error("Error playing sound:", err);
  //   });
  // };
  return (
      <div>
        {/* <button ref={buttonRef} onClick={playSound}>
       
      </button> */}
       {/* <AnimatedCursor
        color="255, 255, 255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.1}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        showSystemCursor={false}
      /> */}
      <Header/>
      <Home/>
      <About/>
      <Skills />
      <Resume />
      <Projects />
      {/* <Gallery/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;