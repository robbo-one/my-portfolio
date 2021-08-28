import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-900  border-red-800 border-double border-4">
      {" "}
      {/*stands for background color-red-darkness level of 600*/}
      <div className="container mx-auto flex justify-between">
        {" "}
        {/* creates a container around div,
             auto margin around x axis,flex is how we will put everything within this div,
            justify between will make spacing between each thing */}
        <nav className="flex space-x-1">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex pt-5 items-center py-2 px-5 pt-5 mr-10 text-white hover:text-green-500 text-3xl font-bold cursive tracking-widest"
          >Robbo<h5>Home</h5>
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-10 my-6 rounded text-red-200 text-xl  hover:text-green-400"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
          
          
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-10 my-6 rounded text-red-200 text-xl hover:text-green-400"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6  rounded text-red-200 text-xl hover:text-green-400"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog 
          </NavLink>
          
        </nav>
        <div className="inline-flex py-3 px-2 my-6">
          <SocialIcon 
            url="https://github.com/robbo-one"
            className="mr-4"
            target="_blank"
            fgColor="#black"
            bgColor="#fff"
          style={{ height: 50, width: 50 }}
          />
          <SocialIcon 
            url="https://www.linkedin.com/in/robbo123/"
            className="mr-4 "
            target="_blank"
            fgColor="#black"
            bgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon 
            url="http://www.im-creator.com/free/robbedphotography/photography"
            className="mr-4 bgcolor-white"
            target="_blank"
            fgColor="black"
            bgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
        </div>
      </div>
    </header>
  );
}
