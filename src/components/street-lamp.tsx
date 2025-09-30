import { useGLTF, useTexture } from "@react-three/drei"
import { Mesh} from "three"

export const StreetLamp = () => {
  const {nodes} = useGLTF("/street-lamp.glb")
  
  const [colorMap, normalMap] = useTexture([
    '/street-lamp-texture.jpg',
    '/street-lamp-normals.png',
  ])
  colorMap.flipY = false
  normalMap.flipY = false

  return (
    <group>
      <mesh geometry={(nodes['pillar'] as Mesh).geometry}>
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
      <mesh geometry={(nodes['light'] as Mesh).geometry} />
    </group>
  )
}
