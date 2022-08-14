import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./PortfolioContainer/NavBar/NavBar";
import Home from "./PortfolioContainer/Home/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
