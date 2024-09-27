import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi'; // Corrected the icon import

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? '0' : '-100%' }; // Ensures both open and closed styles
    }
    return {}; // Return an empty object when the condition is not met
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div
          className="flexCenter h-menu"
          style={getMenuStyles(menuOpened)}
        >
          <a href="#residencies">Residencies</a>
          <a href="#values">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} /> {/* Corrected the icon usage */}
        </div>
      </div>
    </section>
  );
};

export default Header;
