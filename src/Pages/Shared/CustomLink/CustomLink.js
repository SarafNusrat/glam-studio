import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className='flex flex-row items-center justify-between mx-auto px-16 h-70'>
        <Link
          style={{color: match ? 'darkOrange' : "black", fontWeight: match ? 'semiBold' : "normal"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;