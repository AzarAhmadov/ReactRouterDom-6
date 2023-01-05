import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/common/Header';
import Galary from './components/Galary';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/galary' element={<Galary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
