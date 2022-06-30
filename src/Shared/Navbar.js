import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/complete">Completed Tasks</Link>
      </li>
      <li>
        <Link to="/todo">To-Do</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
    </>,
  ];

  return (
    <div class="navbar bg-[#F6F6F6] lg:px-16 sticky top-0 z-20">
      <div className="navbar-start">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          EndGame
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-2 p-0 font-semibold">
          {menuItems}
        </ul>
      </div>
      <div class="navbar-end">
        <div class=" dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
