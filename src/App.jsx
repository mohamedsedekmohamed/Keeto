import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Nav from "./Page/Nav"; 
import Contact from './Page/Contact'
import Services from "./Page/Services";
import Footer from './Page/Footer'
function App() {
  return (
    <BrowserRouter>
          <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;