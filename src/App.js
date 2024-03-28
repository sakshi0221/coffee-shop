import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Components
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import ContactUs from './components/ContactUs';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router basename="/coffee-shop"> {/* Set basename to your subdirectory */}
      <div className="App">
        {/* Header */}
        <header className={isMobileMenuOpen ? "show-mobile-menu" : ""}>
          <nav className="navbar">
            <Link className="logo" to="/"> QScript Coffee<span>.</span></Link>
            <div id="hamburger-btn" onClick={toggleMobileMenu}>
              <i style={{fontSize:"xx-large"}} className={`fas ${isMobileMenuOpen ? "" : "fa-bars"}`}></i>
            </div>
            <ul className={`menu-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
              <span id="close-menu-btn" className="fas fa-times" onClick={toggleMobileMenu} />
              <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
              <li><Link to="/menu" onClick={toggleMobileMenu}>Menu</Link></li>
              <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main>  
          {/* Routes */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
