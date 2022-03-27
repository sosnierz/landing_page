import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="https://semantika.pl/">
          <img src={logo} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
