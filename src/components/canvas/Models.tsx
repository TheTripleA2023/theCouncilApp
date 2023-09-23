'use client'

import { useGLTF, useFBX} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import Table from './Table'


export default function Model({ ...props }) {
  const fbx = useFBX("/models/"+props.name+".fbx");

  return (
      <>
        <group {...props} dispose={null}>
          <primitive object={fbx} scale={0.01} />;
        </group>
      </>
    )
}


export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, 1]} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh>
    </group>
  )
}

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}

export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}

export function CouncilTable(props) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef(null);

	useFrame((state, delta) => {
	 	ref.current.rotation.y += delta / 4;
	});

	// Return the view, these are regular Threejs elements expressed in JSX
	return (
    <group ref={ref} {...props}>
      <mesh
        {...props}
        scale={1.00}
      >
        <Table position={[0, 0, 0]} scale={0.012} />
        <Model position={[0, 0, -1.8]} scale={1.75} name="Panda" />
        <Model
          position={[1.4, 0, 0]}
          rotation={[0, Math.PI / -2, 0]}
          name="Flamingo"
        />
        <Model
          position={[0, 0, 1.4]}
          rotation={[0, Math.PI, 0]}
          name="Cat"
        />
        <Model
          position={[-1.6, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          name="Platypus"
        />
        <Model
          position={[-1, 0, -1]}
          scale={0.9}
          rotation={[0, Math.PI / 4, 0]}
          name="Frog"
        />
        <Model
          position={[1, 0, 1]}
          scale={0.8}
          rotation={[0, (-3 * Math.PI) / 4, 0]}
          name="Possum"
        />
        <Model
          position={[-1.1, 0, 1.1]}
          rotation={[0, (3 * Math.PI) / 4, 0]}
          name="Hornbill"
        />
        <Model
          position={[1.4, 0, -1.4]}
          scale={1.2}
          rotation={[0, -Math.PI / 4, 0]}
          name="Tiger"
        />
      </mesh>
    </group>
	);
}