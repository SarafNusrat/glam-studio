import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'; 


const Header = () => {
    return (
        <nav className='flex flex-wrap items-center
        w-full md:py-2 mt-5 ms-15 flex-row px-3 pt-2 pb-2 sticky bg-yellow-100 top-3'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/checkout">Check Out</CustomLink>
        </nav>
    );
};

export default Header;