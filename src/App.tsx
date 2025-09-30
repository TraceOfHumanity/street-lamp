import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { StreetLamp } from "./components/street-lamp"

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <StreetLamp />
    </Canvas>
  )
}

export default App
