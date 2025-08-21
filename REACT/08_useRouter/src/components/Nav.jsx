import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-[30%] bg-amber-600 p-3">
      <ul className="flex flex-col gap-3 text-[16px]">
        <li className="bg-white/10 rounded-md p-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-sky-600" : "text-black"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="bg-white/10 rounded-md p-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-sky-600" : "text-black"}`
            }
          >
            about
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav
