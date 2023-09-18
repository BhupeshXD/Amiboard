import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto relative z-10"> {/* Added relative and z-10 */}
      <Link to="/">
        <img alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="text-white font flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
          <li>
            <Link to="#">Tutorial</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
