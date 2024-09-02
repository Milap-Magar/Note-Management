import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import logo from "../assets/note.svg";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div className="relative h-[15vh]">
      <div className="top-section bg-[#eee] flex justify-between">
        <span className="text-sm font-mono">
          Note and PDf's Management System
        </span>
        <a href="mailto:milapmagar12@gmail.com" target="_blank">
          <h2 className="text-sm font-mono underline">
            milapmagar12@gmail.com
          </h2>
        </a>
      </div>
      <header
        className={`${
          !navState
            ? "absolute top-0 left-0 right-0 z-50 p-2"
            : "fixed top-0 left-0 right-0 h-[12vh] flex items-center justify-center z-50 blur-effect-theme py-2"
        } bg-white text-black`}
      >
        <nav className="flex items-center justify-between container mx-auto px-4">
          {/* Logo */}
          <div className="flex items-center py-2">
            <img
              src={logo}
              alt="logo"
              className={`w-16 h-auto ${navState && "filter px-1 py-2"}`}
            />
          </div>

          {/* Icons */}
          <ul className="flex items-center justify-center gap-2">
            {/* Search Icon */}
            <li className="">
              <input
                type="search"
                className="border border-slate-900 rounded-sm px-3 py-1"
                placeholder="Search for notes"
              />
            </li>
            <li className="grid items-center">
              <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
