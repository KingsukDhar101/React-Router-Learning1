import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> &nbsp;
      <Link to="/about">About</Link> &nbsp;
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
