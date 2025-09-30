import { Sparkles, useGLTF, useTexture } from "@react-three/drei"
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
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh geometry={(nodes['light'] as Mesh).geometry}>
        <meshBasicMaterial color="#F5F1DC" />
      </mesh>
      <Sparkles 
        size={3}
        position={[0, 3.8, 0]}

      />
    </group>
  )
}
