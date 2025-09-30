import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"

export const StreetLamp = () => {
  const {nodes} = useGLTF("/street-lamp.glb")
  useEffect(() => {
    console.log(nodes)
  }, [nodes])
  
  return (
    <group>
      <mesh geometry={nodes['pillar'].geometry} />
    </group>
  )
}
