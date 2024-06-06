import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignup from './Component/LoginSignup/LoginSignup';
import Home from './Pages/Home';
import Humor from './Pages/Humor';
import Guidance from './Pages/Guidance'
import Conner from './Pages/Conner'
import About from './Pages/About'
import Land from  './Pages/Land'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Land />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<LoginSignup />} />
          <Route path="/humor" element={<Humor />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/conner" element={<Conner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
