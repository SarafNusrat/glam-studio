import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'; 


const Header = () => {
    return (
        <nav className=' flex flex-wrap items-center justify-between
        w-full py-4 md:py-0 header mt-5 ms-15 flex-row px-16 pt-2 pb-2'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
        </nav>
    );
};

export default Header;