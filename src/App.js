import "./App.css";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Skillsets } from "./Skillsets";

function App() {
  return (
    <div className="App">
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
