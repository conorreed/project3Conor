// import React from 'react';

import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="bg-gray-800 flex justify-between py-4">
        {/* <h1 className="text-blue-100">Dark Lord: Evilution</h1> */}
        <p className="text-blue-100 mx-4">something something 
        <br />monsterGameTitleHere <br />
        something something <br />
        Dark Lord: Evilution</p>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px'}}/>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px'}}/>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px'}}/>


        <nav>
      <ul className="flex flex-row justify-between mr-5">
        <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <Link to="/">Home</Link>
        </li>
        <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      </nav>

      
    </header>
  );
};

export default Header;
