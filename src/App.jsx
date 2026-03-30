import { Header } from "./components/layout/Header";
import { Apresentacao } from "./components/sections/Apresentacao";
import { Sobre } from "./components/sections/Sobre";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <main>
        <Apresentacao />
        <Sobre />
        <Skills />
      </main>
    </div>
  );
}

export default App;