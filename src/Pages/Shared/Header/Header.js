import React from 'react';
import './Header.css'; 


const Header = () => {
    return (
        <div className='header'>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/">Blogs</a>
            <a href="/">About</a>
        </nav>
        </div>
    );
};

export default Header;