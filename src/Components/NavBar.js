import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#272c3e" : "white",
  };
  return (
    <div>
      <header
        className="text-gray-600 body-font cursor-pointer"
        style={myStyle}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokewidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="/"></path>
            </svg>
            <span className="ml-3 text-xl" style={myStyle}>
              BLOGS
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600 flex flex-wrap items-center text-base justify-center ">
            <Link className="mr-5 hover:text-gray-900" to="/">
              Home{" "}
            </Link>
            <Link className="mr-5 hover:text-gray-900" to="/Authors">
              Authors
            </Link>
            <Link className="mr-5 hover:text-gray-900 " to="/Contact">
              Contact
            </Link>
          </nav>
          <div
            className={`flex items-center space-x-2 text-${
              props.mode === "light" ? "gray-700" : "white"
            }`}
          >
            <label htmlFor="toggle" className="cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only form-checkbox"
                  onClick={props.toggleMode}
                />
                <div className="block bg-gray-600 w-10 h-5 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
              </div>
            </label>
            <span className="text-sm">Enable Dark mode</span>
          </div>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokewidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
