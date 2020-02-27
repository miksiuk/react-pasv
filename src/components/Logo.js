import React from 'react';
import logo from './../logo192.png'

function Logo() {
    return (
        <img src={logo}
            width="40"
            heigth="40"
            alt="Logo"
            className="rounded" />
    );
}

export default Logo;