import React from 'react';
import Logo from './Logo';
import Menu from './MenuFooter'
import { connect } from 'react-redux'

function Footer(props) {
  return (
    <div className="navbar row bg-secondary pt-4 pb-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-2 mt-md-0 mt-3"><Logo /></div>
          <div className="col-md-2 mb-md-0 mb-3"><Menu menuItems={props.menu1} /> </div>
          <div className="col-md-2 mb-md-0 mb-3"><Menu menuItems={props.menu2} /> </div>
          <div className="col-md-6 mt-md-0 mt-3 text-light">{props.text}</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  menu1: state.headerItems,
  menu2: state.footersItems,
  text: state.footerText
})

export default connect(mapStateToProps)(Footer);
