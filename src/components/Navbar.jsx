import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/portfolio"
          className="group flex items-center gap-3 p-2 bg-transparent hover:bg-gray-800 rounded-md transition-all duration-300 ease-in-out"
          onClick={() => {
            setActive("Portfolio");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-cover rounded-md border-2 border-gray-300 shadow-md"
          />
          <div className="flex flex-col">
            <p className="text-white text-[18px] font-semibold cursor-pointer">
              Akramul Hoque
            </p>
            <span className="text-gray-400 text-[14px] sm:text-[16px] font-light group-hover:text-white transition-all duration-300 ease-in-out">
              | Software Engineer
            </span>
            <div className="h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${
              active === "Home" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Home")}
          >
            <Link to="/portfolio">Home</Link>
          </li>
          <li
            className={`${
              active === "About" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("About")}
          >
            <Link to="/portfolio/about">About</Link>
          </li>
          <li
            className={`${
              active === "Experience" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Experience")}
          >
            <Link to="/portfolio/experience">Experience</Link>
          </li>
          <li
            className={`${
              active === "Education" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Education")}
          >
            <Link to="/portfolio/education">Education</Link>
          </li>
          <li
            className={`${
              active === "Technologies" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Technologies")}
          >
            <Link to="/portfolio/technologies">Technologies</Link>
          </li>
          <li
            className={`${
              active === "Works" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Works")}
          >
            <Link to="/portfolio/works">Works</Link>
          </li>
          <li
            className={`${
              active === "Contact" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Contact")}
          >
            <Link to="/portfolio/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Home" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Home");
                }}
              >
                <Link to="/portfolio">Home</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "About" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("About");
                }}
              >
                <Link to="/portfolio/about">About</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Experience" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Experience");
                }}
              >
                <Link to="/portfolio/experience">Experience</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Education" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Education");
                }}
              >
                <Link to="/portfolio/education">Education</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Technologies" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Technologies");
                }}
              >
                <Link to="/portfolio/technologies">Technologies</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Works" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Works");
                }}
              >
                <Link to="/portfolio/works">Works</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Contact" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Contact");
                }}
              >
                <Link to="/portfolio/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
