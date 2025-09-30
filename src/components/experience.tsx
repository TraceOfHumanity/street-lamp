import { OrbitControls } from '@react-three/drei'
import { StreetLamp } from './street-lamp'
import { useFrame } from '@react-three/fiber'

export const Experience = () => {

  useFrame((state) => {
    state.camera.lookAt(0, 3, 0)

  })
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={5} />
      <StreetLamp />
    </>
  )
}
