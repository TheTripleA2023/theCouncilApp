'use client'

import { useGLTF, useFBX} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import Table from './Table'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { useTransition, useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'


//Default Model Component 
export default function Model({ ...props }) {
  const fbx = useFBX("/models/"+props.name+".fbx") as THREE.Group;
  const mapT = useLoader(TextureLoader, '/img/textures/T_'+props.name+'.png');

  const customMaterial = new THREE.MeshToonMaterial({
    color: 0x777777, // Set the color of the material to white
    emissive: 0x111111, // Set the emissive color of the material
    map: mapT, // Assign the alpha map texture
    emissiveMap: mapT, // Assign the emissive map texture
    alphaMap: mapT, // Assign the alpha map texture
    wireframe: props.wireframe?props.wireframe:false,
    transparent: props.transparent?props.transparent:false, // Set the material to transparent
  });

  // Assign the custom material to the FBX model
  fbx.traverse((child: THREE.Mesh) => {
    if (child.isMesh) {
      child.material = customMaterial;
    }
  });

  const ref = useRef(null);

	useFrame((state, delta) => {
	 	ref.current.position.y = (props.height?props.height:0) + Math.sin((props.offset?props.offset:0) + Math.PI * state.clock.getElapsedTime()) * 0.015;
	}); 
  
  const vec = new THREE.Vector3(props.position[0], props.offset?props.offset:0+props.offset+5, props.position[2])
  return (
      <>
        <group ref={ref} {...props} dispose={null}>
          {props.chosen?          
            <spotLight color='red' intensity={500} angle={0.4} penumbra={0.1} />
              :
              null 
          }
          <primitive object={fbx} scale={0.01} />;
        </group>
      </>
    )
}


export function CouncilTable({ route = '/', ...props }) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef(null);
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  //const [scale, setScale] = useState(0)


	useFrame((state, delta) => {
	 	ref.current.rotation.y += delta / 4;
    ref.current.rotation.x = 0.4;
    ref.current.scale.x =
    ref.current.scale.y =
    ref.current.scale.z =
      THREE.MathUtils.lerp(ref.current.scale.z, 1.0, 0.025);
    //if(scale<1){setScale(Math.min(scale+delta,1))}
	});

	// Return the view, these are regular Threejs elements expressed in JSX
	return (
    <group ref={ref} {...props}>
      <mesh
      {...props}
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <Table position={[0, 0, 0]} scale={0.012} />
        <Model 
          position={[0, 0, -1.8]} 
          scale={1.75} 
          offset={0}
          name="Panda" 
        />
        <Model
          position={[1.2, 0, -1.2]}
          scale={1.2}
          rotation={[0, -Math.PI / 4, 0]}
          offset={Math.PI/4}
          name="Tiger"
        />
        <Model
          position={[1.4, 0, 0]}
          rotation={[0, Math.PI / -2, 0]}
          offset={Math.PI/2}
          name="Flamingo"
        /> 
        <Model
          position={[1, 0.4, 1]}
          scale={0.8}
          rotation={[0.2, (-3 * Math.PI) / 4, 0]}
          height={0.4}
          offset={3*Math.PI/4}
          name="Possum"
        />      
        <Model
          position={[0, 0.1, 1.4]}
          rotation={[0, Math.PI, 0]}
          height={0.1}
          offset={Math.PI}
          name="Cat"
        />
        <Model
          position={[-1.1, 0.2, 1.1]}
          rotation={[0, (3 * Math.PI) / 4, 0]}
          height={0.2}
          offset={5*Math.PI/4}
          name="Hornbill"
        />
        <Model
          position={[-1.7, 0.35, 0]}
          rotation={[0, Math.PI / 2, 0]}
          height={0.35}
          offset={3*Math.PI/2}
          name="Platypus"
        />
        <Model
          position={[-1, 0.35, -1]}
          scale={0.9}
          rotation={[0, Math.PI / 4, 0]}
          height={0.35}
          offset={7*Math.PI/4}
          name="Frog"
        />
      </mesh>
    </group>
	);
}

export function IsoCouncilTable({ route = '/', ...props }) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef(null);


	useFrame((state, delta) => {
	 	ref.current.rotation.y += delta / 4;
    ref.current.rotation.x = 0.4;
    ref.current.scale.x =
    ref.current.scale.y =
    ref.current.scale.z =
      THREE.MathUtils.lerp(ref.current.scale.z, 1.0, 0.025);
    //if(scale<1){setScale(Math.min(scale+delta,1))}
	});

	// Return the view, these are regular Threejs elements expressed in JSX
	return (
    <group ref={ref} {...props}>
      <mesh scale={props.scale}>
        <Table position={[0, 0, 0]} scale={0.012} />
        <Model 
          position={[0, 0, -1.4]} 
          scale={1.0} 
          offset={0}
          height={0.2}
          name="Crow" 
        />
        <Model
          position={[1.2, 0, -1.2]}
          scale={1.2}
          rotation={[0, -Math.PI / 4, 0]}
          offset={Math.PI/4}
          name="Tiger"
        />
        <Model
          position={[1.4, 0, 0]}
          rotation={[0, Math.PI / -2, 0]}
          offset={Math.PI/2}
          name="Flamingo"
        /> 
        <Model
          position={[1, 0.4, 1]}
          scale={0.8}
          rotation={[0.2, (-3 * Math.PI) / 4, 0]}
          height={0.4}
          offset={3*Math.PI/4}
          name="Possum"
        />      
        <Model
          position={[0, 0.1, 1.4]}
          rotation={[0, Math.PI, 0]}
          height={0.1}
          offset={Math.PI}
          name="Cat"
        />
        <Model
          position={[-1.1, 0.2, 1.1]}
          rotation={[0, (3 * Math.PI) / 4, 0]}
          height={0.2}
          offset={5*Math.PI/4}
          name="Hornbill"
        />
        <Model
          position={[-1.7, 0.35, 0]}
          rotation={[0, Math.PI / 2, 0]}
          height={0.35}
          offset={3*Math.PI/2}
          name="Platypus"
        />
        <Model
          position={[-1, 0.35, -1]}
          scale={0.9}
          rotation={[0, Math.PI / 4, 0]}
          height={0.35}
          offset={7*Math.PI/4}
          name="Frog"
        />
      </mesh>
    </group>
	);
}