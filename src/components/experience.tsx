import { OrbitControls } from '@react-three/drei'
import { StreetLamp } from './street-lamp'

export const Experience = () => {

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={20} />
      <StreetLamp />
    </>
  )
}
