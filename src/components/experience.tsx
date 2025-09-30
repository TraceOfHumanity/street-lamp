import { OrbitControls, Sky } from '@react-three/drei'
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
      <Sky sunPosition={[1, 0, 0]} inclination={0} azimuth={0} rayleigh={10} turbidity={8} />
    </>
  )
}
