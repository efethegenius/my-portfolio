import "./App.css";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Skillsets } from "./Skillsets";
import EfficientCursor from "react-efficient-cursor";
import { Cursor } from "./Cursor";

function App() {
  return (
    <div className="App">
      <EfficientCursor>
        <Cursor />
      </EfficientCursor>
      <Hero />
      <Intro />
      <Projects />
      <Skillsets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
