import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <h2 className='nav-title'>Ema John</h2>
            <ul className='nav-links'>
                <li><a href="/home">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    );
};

export default Header;