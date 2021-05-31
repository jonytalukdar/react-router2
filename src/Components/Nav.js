import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <h3>Logo</h3>
        <ul>
          <Link className="nav-item" to="/about">
            About
          </Link>
          <Link className="nav-item" to="/shop">
            Shop
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
