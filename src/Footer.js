import React from 'react';
import Logo from './Logo';
import Menu from './MenuFooter'

function Footer(props) {
  return (
    <footer>
      <div>
        <div>
          <div><Logo /></div>
          <div><Menu menuItems={props.menu1} /> </div>
          <div><Menu menuItems={props.menu2} /> </div>
          <div className="footer-text">{props.text}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
