
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
   

    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Skills />
      <Certificates/>
      <Projects />
      
      <Contact />
    </div>
  );
}

export default App;
