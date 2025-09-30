import { OrbitControls } from '@react-three/drei'
import { StreetLamp } from './street-lamp'
import { useFrame } from '@react-three/fiber'

export const Experience = () => {

  useFrame((state) => {
    state.camera.lookAt(0, 2, 0)

  })
  return (
    <>
      <OrbitControls />
      <StreetLamp />
    </>
  )
}
