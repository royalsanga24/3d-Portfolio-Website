import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <mesh>
      {/* <hemisphereLight intensity={4} groundColor='black' />
      <spotLight
        position={[ 4.5, 0, 0]}
        angle={10}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} /> */}
      <primitive
        object={earth.scene}
        scale={2.6}
        position-y={0.2}
        position-x={0}
      />
    </mesh>
    
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas