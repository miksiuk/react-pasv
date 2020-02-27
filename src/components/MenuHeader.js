import React from 'react';
import MenuItem from './MenuItemHeader'


function Menu(props) {

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" >
                {props.menuItems.map(el => < MenuItem key={el.text} menuItem={el} />)}
            </ul>
        </div>
    );
}

export default Menu;