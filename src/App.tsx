import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/experience"

function App() {

  return (
    <Canvas camera={ { fov: 45, near: 0.1, far: 200, position: [ 0, 2, 4 ] } }>
      <Experience />
    </Canvas>
  )
}

export default App
