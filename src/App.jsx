import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './index.css'


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar Routes ke baahar hai, isliye yeh har page par FIX rahega */}
        <Navbar />

        {/* Main content area jo bacha hua space cover karega */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer bhi Routes ke baahar hai, yeh hamesha bottom par FIX rahega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;