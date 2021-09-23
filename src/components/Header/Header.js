import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
            <div className="search-container">
                <div className="search-field">
                    <input type="text" placeholder="type here to search" />
                </div>
            </div>
        </div>
    );
};

export default Header;