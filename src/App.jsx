import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import { Experience } from "./components/Experience";
import './App.css'
import myautologo from '../src/assets/myauto-logo.png'
import nexus from '../src/assets/nexusimg.png'
import arrow from '../src/assets/arrow.png'
import meavatar from '../src/assets/ready-me-avatar.png'
import linkedin from '../src/assets/linkedin.png'
import gmail from '../src/assets/gmail.png'
import github from '../src/assets/github.png'

import * as THREE from 'three'
import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";

//good cam angle
// {
//   "x": 6.702130696369694,
//   "y": 8.291561975888504,
//   "z": 12.70163155381147
// }
// 

const mailTo = () =>{
  window.location.href = "mailto:maisuradze200329@gmail.com";

}

function App() {
  const [toMonitor, setToMonitor] = useState(false)
  const camRef = useRef()
  const orbitRef = useRef()

  const animateToDef = () =>{
    setToMonitor(false)
    // camRef.current.position.set(-5,15,5)
    gsap.to(camRef.current.position, {
      x: -5,
      y:15,
      z:5,
      duration: 1
    })
    gsap.to(orbitRef.current.target, {
      x:0,
      y:0,
      z:0,
      duration: 1
    })
    // orbitRef.current.target.set(0,0,0)
    orbitRef.current.minAzimuthAngle = Math.PI*10.75/5
    orbitRef.current.maxAzimuthAngle = Math.PI*10.75/5
    orbitRef.current.maxPolarAngle = Math.PI/3
    orbitRef.current.minPolarAngle = Math.PI/3
    orbitRef.current.enableRotate = false
  }

  const animateToMonitor = () =>{
    setToMonitor(true)
    camRef.current.enableRotate = true
    
    gsap.to(camRef.current.position, {
      x:5.75,
      y:4.75,
      z:6.5,
      duration: 1
      
    })
    gsap.to(orbitRef.current.target, {
      x:5.75,
      y:4.75,
      z:5,
      duration: 0.5
    })
    gsap.to(
      orbitRef.current.minPolarAngle = Math.PI/2,
      orbitRef.current.maxPolarAngle = Math.PI/2,
      orbitRef.current.maxAzimuthAngle = Math.PI/2,
      orbitRef.current.minAzimuthAngle = Math.PI/2,
    )
  }

  return (
    <>
    <div className="App">
          <div className="page1-container">
            <div className="canvas">
              <Canvas id="canvas-settings">
                <OrbitControls ref={orbitRef} rotateSpeed={3} enablePan={false} minPolarAngle={Math.PI/3} enableZoom={false} maxPolarAngle={Math.PI/3} minAzimuthAngle={Math.PI*10.75/5} maxAzimuthAngle={Math.PI*10.75/5}/>
                <PerspectiveCamera fov={52} position={[-6.7, 8.2, 12.7]} makeDefault ref={camRef} />
                <Experience />
              </Canvas>
            </div>
            <div className="page1">
              <div id="intro-info" className={toMonitor ? 'hidden' : 'intro-info'}>
                <h1>Hi, my <br /> name is <p>Giorgi</p> </h1>
                <h2>I like big butts and i can not lie</h2>
              </div>
            </div>
            <button id={toMonitor ? 'hidden' : 'next-button'} className="stylized-button" onClick={()=> animateToMonitor()}> Portfolio </button>
            <button id={toMonitor ? 'back-button' : 'hidden'} className="stylized-button" onClick={()=> animateToDef()}> Back </button>
            {/* <button id="contact-button" className="stylized-button"> Contact </button> */}
          </div>
            <div className={toMonitor ? 'about-section' : 'hidden'}> 
                <p id="about-giorgi" className="stylized-about-component">About Giorgi</p>
                <div className="about-cards">
                  <p>After passing and participating in several courses, I am looking for a challenging work as a Front-End Developer </p>
                  <p>Got introduced to programming in 2019 and have ventured in everything from Game to Web Development over the years</p>
                  <p>Into the visual aspects of Web development and love creating pleasing visuals </p>
                </div>

                <div className="about-work">
                  <h3 className="stylized-about-component" >Some things I've worked on</h3>
                  
                  <div className="work-images-div">
                    <a href="https://www.github.com" target="_blank">
                      <div id='website-card'>
                        <img className="work-images" src={meavatar}/>
                        <h4>Portfolio Website</h4>
                      </div>
                    </a>
                    
                    <a href="https://github.com/giorgi-maisuradze99/myauto-clone" target="_blank">
                      <div>
                        <img className="work-images" src={myautologo}/>
                        <h4>MyAuto Clone</h4>
                      </div>
                    </a>
                    
                    <a href="https://github.com/giorgi-maisuradze99/myauto-clone" target="_blank">
                      <div>
                        <img className="work-images" src={nexus}/>
                        <h4>Nexus - Chat Application</h4>
                      </div>
                    </a>
                    <a href="https://inspiring-faun-7ae08a.netlify.app" target="_blank">
                      <div>
                        <img className="work-images" src={arrow}/>
                        <h4>Marketing Agency Prototype</h4>
                      </div>
                    </a>
                 
                  </div>
                  <a href="https://www.github.com" target="_blank" id="see-all-a">See all on GitHub!</a>

                </div>
                
                <div className="contact-me-div">
                    <h3 className="stylized-about-component">Contacts</h3>
                    <div className="contact-icons-div">
                      <a href="mailto:maisuradze200329@gmail.com" target="_blank"> 
                        <img src={gmail} />
                      </a>
                      <a href="https://www.linkedin.com/in/giorgi-maisuradze-438506274/" target="_blank">
                        <img src={linkedin} />
                      </a>
                      <a href="https://github.com/giorgi-maisuradze99" target="_blank">
                        <img src={github} />
                      </a>
                    </div>
                     <h5>
                        +995 579 90 28 18 / +995 557 13 22 05
                    </h5>
                </div>
                
            </div>
    </div>
    </>
  );
}

export default App;
