import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
    <Fragment>
        <nav className="nav-right horizontal" data-aos="fade" data-aos-delay="800">
            <ul>
               <li><Link className="nav-link" to="/">Home</Link></li>
               <li><Link className="nav-link" to="/about">About</Link></li>
               <li><Link className="nav-link disabled" to="#">Speaking</Link></li>
               <li><Link className="nav-link disabled" to="#">RSS Feed</Link></li>
           </ul>
          </nav>
    </Fragment>
);

export default Navbar;