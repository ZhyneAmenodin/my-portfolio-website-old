import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./PortfolioContainer/NavBar/NavBar";
import Home from "./PortfolioContainer/Home/Home";
import Skills from "./PortfolioContainer/Skills/Skills";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Projects from "./PortfolioContainer/Projects/Project";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
const RootStyle = styled("div")(({ theme }) => ({
  backgroundImage:
    "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
}));
function App() {
  return (
    <RootStyle>
      <NavBar />
      <Home />
      <Skills />
      <Typography variant="h3" align="center" color="white">
        {" "}
        Projects
      </Typography>
      <Projects />
      <AboutMe />
    </RootStyle>
  );
}

export default App;
