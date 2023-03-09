import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Notes</Link>
      </li>
      <li>
        <Link to="/new">New Note</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
