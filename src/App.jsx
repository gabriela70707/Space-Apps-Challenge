import { Header } from "./Components/Header/Header";
import { Inicial } from "./Pages/Inicial/Inicial";
import { NextPage } from "./Pages/Next-Page/next-page";
import { Routes, Route } from "react-router-dom";
import Particles from './Components/Particles/Particles.jsx';
import { ChatBotHome } from "./Pages/ChatBot-Home/ChatBot-Home.jsx";
import { ChatBot } from "./Pages/ChatBot/ChatBot.jsx";
import { ThirdPage } from "./Pages/Third-Page/Third-Page.jsx";
import { Historia } from "./Pages/Historia/Historia.jsx";

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
        <Route path="/astro" element={<ChatBotHome />} />
        <Route path="/astro-chat" element={<ChatBot />} />
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/end" element={<ThirdPage />} />
        <Route path="/Historia" element={<Historia />} />
      </Routes>
    </>

  );
}

export default App;