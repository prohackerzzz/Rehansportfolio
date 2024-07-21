import { useState } from 'react';
import { Footer } from './components/Footer'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact'
import { Home } from './components/Home';
import { Notfound} from './components/Notfound'
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Notfound />} /> {/* 404 Route */}
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
