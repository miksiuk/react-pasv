import React from 'react';
import Logo from './Logo';
import Menu from './MenuHeader';
import { connect } from 'react-redux'

function Header(props) {

  return (
    <div>
      <nav className="navbar row navbar-expand-lg navbar-dark bg-secondary">
        <Logo /> <Menu menuItems={props.menuItems} />
      </nav>
    </div>
  );
}

const mapStateToProps = state => ({
  menuItems: state.headerItems
})

export default connect(mapStateToProps)(Header);
