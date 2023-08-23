import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import { Experience } from "./components/Experience";
import './App.css'
import * as THREE from 'three'
import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";


function App() {
  
  const camRef = useRef()
  const orbitRef = useRef()
  
  // useFrame((_, delta) => {
  //     camRef.current.rotation.x += 1 * delta
  //     camRef.current.rotation.y += 1 * delta
  //     // camRef.current.position.set(0.5,5,2.5)
  // })
  const animeateToDef = () =>{
    camRef.current.position.set(-5,15,5)
    orbitRef.current.target.set(0,0,0)
    orbitRef.current.minAzimuthAngle = -Math.PI/3.5
    orbitRef.current.maxAzimuthAngle = Math.PI/3.5
    orbitRef.current.maxPolarAngle = Math.PI/3
    orbitRef.current.minPolarAngle = Math.PI/3
    orbitRef.current.enableRotate = true
    
  }
  const animateToDesk = () =>{
      orbitRef.current.minAzimuthAngle = Math.PI/18
      orbitRef.current.maxAzimuthAngle = Math.PI/18
      orbitRef.current.maxPolarAngle = Math.PI/2.2
      orbitRef.current.minPolarAngle = Math.PI/2.2
      orbitRef.current.enableRotate = false
      camRef.current.position.set(0.5,5,2.5)
      orbitRef.current.target.set(0.7,5,0)
    
  }
  return (
    <>
    <div className="App">
          <div className="page1-container">
            <div className="canvas">
              <Canvas id="canvas-settings">
                <OrbitControls ref={orbitRef} rotateSpeed={3} enablePan={false} minPolarAngle={Math.PI/3} enableZoom={false} maxPolarAngle={Math.PI/3} minAzimuthAngle={-Math.PI/3.5} maxAzimuthAngle={Math.PI/3.5}/>
                <PerspectiveCamera fov={52} position={[-5, 15, 5]} makeDefault ref={camRef} />
                <Experience />
              </Canvas>
            </div>
            <div className="page1">
              <div className="intro-info">
                <h1>Hi, my <br /> name is <p>Giorgi</p> </h1>
                <h2>I like big butts and i can not lie</h2>
              </div>
              <button id="next-button" onClick={()=> animateToDesk()}> → </button>
              <button id="back-button" onClick={()=> animeateToDef()}> D </button>
            </div>
          </div>
    </div>
    </>
  );
}

export default App;
