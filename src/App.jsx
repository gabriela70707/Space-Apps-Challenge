import { Header } from "./Components/Header/Header";
import { Inicial } from "./Pages/Inicial/Inicial";
import { NextPage } from "./Pages/Next-Page/next-page";
import { Routes, Route } from "react-router-dom";
import Particles from './Components/Particles/Particles.jsx';

function App() {
  return (
    <>
      <Particles
        particleColors={["#4FE2FA", "#F7DA18", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="background-particles"
      />

      <Header />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </>

  );
}

export default App;
