// src/Model.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// import { TextureLoader } from 'three';

function Model(props) {
  const { scene } = useGLTF("/phantump_shiny.glb");
  // const texture = useLoader(TextureLoader, '/path/to/your/texture.jpg');

  // Traverse the scene to apply the texture to the materials
  // scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material.map = texture;
  //   }
  // });

  return <primitive object={scene} {...props} />;
}

export default Model;
