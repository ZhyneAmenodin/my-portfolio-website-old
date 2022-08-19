import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./PortfolioContainer/NavBar/NavBar";
import Home from "./PortfolioContainer/Home/Home";
import Skills from "./PortfolioContainer/Skills/Skills";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
