import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials />/ */}
      <Contact />
    </main>
  );
}

export default App;
