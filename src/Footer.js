import React from 'react';
import './App.css';
import Logo from './Logo';
import Menu from './Menu'

function Footer(props) {
  return (
    <footer className="page-footer font-small bg-light pt-3">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-3 mt-md-0 mt-3"><Logo /></div>
          <div class="col-md-3 mt-md-0 mt-3"><Menu menuItems={props.menu1} /> </div>
          <div class="col-md-3 mt-md-0 mt-3"><Menu menuItems={props.menu2} /> </div>
          <div class="col-md-3 mt-md-0 mt-3">{props.text}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
