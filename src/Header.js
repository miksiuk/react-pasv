import React from 'react';
import './App.css';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light"> <Logo /> <Menu /> </nav>
  );
}

export default Header;
