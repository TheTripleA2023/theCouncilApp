'use client'

import { forwardRef, HTMLAttributes, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

type CommonProps = { color?: THREE.ColorRepresentation }

export const Common = ({ color }: CommonProps) =>  (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.15} />
    <spotLight position={[0, 12, 0]} color='white' intensity={2} castShadow angle={0.25} penumbra={0.2} />
    <pointLight position={[-10, -10, 0]} color='purple' intensity={0.5} />
    <pointLight position={[10, -10, 0]} color='blue' intensity={0.5}/>
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

type ViewProps = HTMLAttributes<HTMLDivElement> & {
  orbit?: boolean
}

const View = forwardRef<HTMLElement, ViewProps>(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls maxZoom={1}/>}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
