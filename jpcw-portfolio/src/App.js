import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />          

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
