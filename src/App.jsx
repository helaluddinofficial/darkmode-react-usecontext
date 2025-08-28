// App.jsx
import { Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Home from './components/Home';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Container from './components/Container'; // ✅ your dark/light wrapper

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        {/* Wrap Home with Container instead of wrapping Route itself */}
        <Route
          path="/"
          element={
            <Container>
              <Home />
            </Container>
          }
        />
        <Route
          path="/resume"
          element={
            <Container>
              <Resume />
            </Container>
          }
        />
        <Route
          path="/projects"
          element={
            <Container>
              <Projects />
            </Container>
          }
        />
        <Route
          path="/about"
          element={
            <Container>
              <About />
            </Container>
          }
        />
        <Route
          path="/contact"
          element={
            <Container>
              <Contact />
            </Container>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
