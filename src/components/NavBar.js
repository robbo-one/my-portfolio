import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      {" "}
      {/*stands for background color-red-darkness level of 600*/}
      <div className="container mx-auto flex justify-between">
        {" "}
        {/* creates a container around div,
             auto margin around x axis,flex is how we will put everything within this div,
            justify between will make spacing between each thing */}
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Rob 
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
        <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
        <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
