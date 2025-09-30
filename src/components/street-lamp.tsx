import { useGLTF, useTexture } from "@react-three/drei"
import { useEffect } from "react"
import { Mesh } from "three"

export const StreetLamp = () => {
  const {nodes} = useGLTF("/street-lamp.glb")
  const pillarTexture = useTexture("/street-lamp-texture.jpg")
  pillarTexture.flipY = false

  useEffect(() => {
    console.log(nodes)
  }, [nodes])

  return (
    <group>
      <mesh geometry={(nodes['pillar'] as Mesh).geometry}>
        <meshBasicMaterial map={pillarTexture} />
      </mesh>
      <mesh geometry={(nodes['light'] as Mesh).geometry} />
    </group>
  )
}
