import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { Mesh } from "three"

export const StreetLamp = () => {
  const {nodes} = useGLTF("/street-lamp.glb")
  useEffect(() => {
    console.log(nodes)
  }, [nodes])

  return (
    <group>
      <mesh geometry={(nodes['pillar'] as Mesh).geometry} />
      <mesh geometry={(nodes['light'] as Mesh).geometry} />
    </group>
  )
}
