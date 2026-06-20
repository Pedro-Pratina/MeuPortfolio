import { Header } from "./components/layout/Header";
import { Apresentacao } from "./components/sections/Apresentacao";
import { Sobre } from "./components/sections/Sobre";
import { Skills } from "./components/sections/Skills";
import { Projetos } from "./components/sections/Projetos"
import { Contatos } from "./components/sections/Contatos";
import { Footer } from "./components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors scroll-smooth">
      <Header />
      <main>
        <Apresentacao />
        <Sobre />
        <Skills />
        <Projetos />
        <Contatos />
      </main>
      <Footer />

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;