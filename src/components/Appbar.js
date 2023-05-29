import React, { useState } from "react";

const Appbar = () => {

  const [open,setOpen] = useState(false)
  const menuClicked = () => {
    console.log("menuClicked");
    setOpen(!open)
  };

  return (
    <nav className="mt-5">
      <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div>
            <span className=" text-green-500 font-bold text-3xl">Loop </span>
            <span className="text-slate-500 font-thin text-2xl">Studios</span>
          </div>
          <div className="md:hidden mt-2">
            <button onClick={menuClicked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`flex md:block justify-end ${open ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            <li className=" menu border-b-4">
              <a href="#" className="font-body">
                About
              </a>
            </li>
            <li className="menu">
              <a href="#" className="font-body">
                Careers
              </a>
            </li>
            <li className="menu">
              <a href="#" className="font-body">
                Events
              </a>
            </li>

            <li className="menu">
              <a href="#" className="font-body">
                Products
              </a>
            </li>

            <li className="menu">
              <a href="#" className="font-body">
                Support
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
