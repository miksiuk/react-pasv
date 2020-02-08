import React from 'react';
import './App.css';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <header className="navbar navbar-expand-lg bg-light w-15 p-3"> <Logo /> <Menu /> </header>
  );
}

export default Header;
