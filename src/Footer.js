import React from 'react';
import './App.css';
import Logo from './Logo';
import Menu from './Menu'

function Footer(props) {
  return (
    <footer className="page-footer font-small bg-light">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3  pt-3"><Logo /></div>
          <div className="col-md-3"><Menu menuItems={props.menu1} /> </div>
          <div className="col-md-3"><Menu menuItems={props.menu2} /> </div>
          <div className="col-md-3">{props.text}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
