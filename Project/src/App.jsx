import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'

const RotatingCube=()=>{
  const meshRef =  useRef();
  useFrame(()=>{
    if(meshRef.current){
      meshRef.current.rotation.y += 0.01 ;
      meshRef.current.rotation.x += 0.01
    }
  })
  return(
    <mesh ref ={meshRef}>
      <cylinderGeometry args={[1,1,1]}/>
      <meshLambertMaterial color={0x468585} emissive="#468585"/>
    </mesh>
  )
}
const App = () => {
  return (
    <Canvas className='h-[screen] w-[screen] flex justify-center items-center'>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}/>
      <color attach="background" args={['#F0F0F0']} />
      <RotatingCube/>
    </Canvas> 
  )
}

export default App
