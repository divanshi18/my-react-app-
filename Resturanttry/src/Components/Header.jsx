import React from 'react'
import "./Components/Header.css"
import{Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"


import { RiMenu3Line } from 'react-icons/ri';

const Header = () => {
    return (
      <div className="nav">
        <h2>Techy Star</h2>
        <div className="nav-part2">
        <HashLink to={"/#home"}><h4>Home</h4></HashLink>
        <Link to={"/contact"}><h4>contact</h4></Link>
        <HashLink to={"/#about"}><h4>About</h4></HashLink>
        <HashLink to={"/#resources"}><h4>Resources</h4></HashLink>
        <HashLink to={"/#brands"}><h4>Brands</h4></HashLink>
        <Link to={"/services"}><h4>Services</h4></Link>
          <button>Sign In</button>
          <RiMenu3Line className="menu-icon" />
        </div>
      </div>
    );
  };

export default Header