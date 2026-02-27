"use client"

import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Suspense, useEffect, useState, useMemo, useRef } from "react"
import * as THREE from "three"

function Model() {
  const gltf = useLoader(GLTFLoader, "/amenityy-loader.glb")
  const group = useRef<THREE.Group>(null)

  const scene = useMemo(() => {
    const cloned = gltf.scene.clone()
    cloned.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = false
        obj.receiveShadow = false
      }
    })
    return cloned
  }, [gltf])

  // Simple rotation animation
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.8
    }
  })

  return (
    <group ref={group}>
      {/* Increase scale to make the logo visually larger */}
      <primitive object={scene} scale={3} />
    </group>
  )
}

function GlbCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

export default function PageLoader() {
  const [canWebGL, setCanWebGL] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setCanWebGL(!!gl)
    } catch {
      setCanWebGL(false)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Increase canvas container size so the model appears bigger */}
      <div className="w-64 h-64 sm:w-80 sm:h-80">
        {canWebGL ? <GlbCanvas /> : null}
      </div>
    </div>
  )
}

