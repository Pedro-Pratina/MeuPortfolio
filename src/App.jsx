import { Header } from "./components/layout/Header";
import { Apresentacao } from "./components/sections/Apresentacao";
import { Sobre } from "./components/sections/Sobre";
import { Skills } from "./components/sections/Skills";
import { Projetos } from "./components/sections/Projetos"
import { Contatos } from "./components/sections/Contatos";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <main>
        <Apresentacao />
        <Sobre />
        <Skills />
        <Projetos />
        <Contatos />
      </main>
    </div>
  );
}

export default App;