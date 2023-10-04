import "./App.css";
import "./light-mode.css";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Skillsets } from "./Skillsets";
import EfficientCursor from "react-efficient-cursor";
import { Cursor } from "./Cursor";

function App() {
  const handleMode = () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.contains("light-mode")
      ? localStorage.setItem("light-mode", "enabled")
      : localStorage.setItem("light-mode", "disabled");
  };

  if (localStorage.getItem("light-mode") === "enabled") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <div className="App">
      <EfficientCursor>
        <Cursor />
      </EfficientCursor>
      <Hero handleMode={handleMode} />
      <Intro />
      <Projects />
      <Skillsets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
