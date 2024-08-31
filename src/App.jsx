import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import "./styles.css";

function App() {
  return (
    <div className="w-full h-screen bg-gray-950">
      <div className="absolute text-cyan-50 top-32 left-1/2 -translate-x-1/2 font-[`Helvetica_Now_Display`]">
        <h3 className={"text-7xl tracking-tighter font-[700] text-hover"}>
          macbook pro.
        </h3>
        <h5></h5>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
        {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      </Canvas>
    </div>
  );
}

export default App;
