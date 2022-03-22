import React from "react";
import Link from "next/link";
import Image from "next/image";
import Mainlogo from "./mainlogo.js"
// components

import IndexDropdown from "../Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed bg-black z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
              
                <Mainlogo/>
         
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
             
              <li className="flex items-center">
                <a
                  className="hover:text-yellow-600 text-black px-3 py-4 lg:text-white lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                >
                  {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  Start Designing
                </a>
              </li>
              

              <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Calculate EMI
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
