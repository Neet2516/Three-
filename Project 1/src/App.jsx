import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const App = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F0F0F0');

    // 2. Add the Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 3. Create and add a cube object
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial({
      color: '#468585',
      emissive: '#468585',
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 4. Add lighting
    const light = new THREE.DirectionalLight(0x9CDBA6, 10);
    light.position.set(1, 1, 1);
    scene.add(light);

    // 5. Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 6. Animate the Scene
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.06;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return(
  <div  ref={mountRef} />
  
  ) ;
};

export default App;
