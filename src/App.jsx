import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Extra } from "./components/Extra/Extra"; // Add this import

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/extra" element={<Extra />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;