import { useState } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import TopBar from "./components/topBar/TopBar";
// import Skills from "./components/skills/Skills";
// import Works from "./components/works/Works";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro menuOpen={menuOpen} />
        {/* <Skills /> */}
        <Portfolio menuOpen={menuOpen} />
        {/* <Works /> */}
        {/* <Testimonials /> */}
        <Contact menuOpen={menuOpen} />
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
