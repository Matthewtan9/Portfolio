import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Book } from "./components/Extra/Book/Book";
import { Extra } from "./components/Extra/Extra";
import { Gaming } from "./components/Extra/Gaming/Gaming";
import { Channel } from "./components/Extra/Channel/Channel";
import { Class } from "./components/Extra/Class/Class";
import { Movie } from "./components/Extra/Movie/Movie";
import { Sport } from "./components/Extra/Sport/Sport";
import { Cegep } from "./components/Extra/Class/Cegep";


// Create a wrapper component to handle the navbar logic
const AppContent = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/extra');

  return (
    <div className={styles.App}>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Path */}
        <Route path="/extra" element={<Extra />} />
        <Route path="/extra/books" element={<Book />} />
        <Route path="/extra/gaming" element={<Gaming />} />
        <Route path="/extra/channel" element={< Channel />} />
        <Route path="/extra/class" element={< Class />} />
        <Route path="/extra/Movie" element={< Movie />} />
        <Route path="/extra/Sport" element={<Sport/>} />

        {/* Path class */}
        <Route path="/extra/class/cegep" element={< Cegep />} />
        
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;