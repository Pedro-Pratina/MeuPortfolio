import { Header } from "./components/layout/Header";
import { Apresentacao } from "./components/sections/Apresentacao";

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <main>
        <Apresentacao />
      </main>
    </div>
  );
}

export default App;