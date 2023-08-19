import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // State for menu icon and menu visibility
  const [menuIcon, setMenuIcon] = useState("/menuopen.svg");
  const [showMenu, setShowMenu] = useState(false);

  // Toggle the menu icon and menu visibility
  const handleMenu = () => {
    if (menuIcon === "/menuopen.svg") {
      setMenuIcon("/menuclose.svg");
      setShowMenu(true);
    } else {
      setMenuIcon("/menuopen.svg");
      setShowMenu(false);
    }
  };

  return (
    <header className="header w-full px-24 py-0 flex justify-between items-center bg-dark-black border-b border-dark-gray sticky top-0 left-0 max-lg:px-8 max-sm:p-4 max-sm:flex-row-reverse z-10">
      {/* Brand logo */}
      <div className="navBrand">
        <Link href={"/"} className="text-xl text-white font-borel">
          Dev.Vashu
        </Link>
      </div>

      {/* Navigation menu */}
      <nav className="navMenu">
        <ul
          className={`flex justify-center items-center max-sm:flex-col max-sm:absolute max-sm:top-[54px] max-sm:w-2/3 max-sm:min-h-screen max-sm:bg-dark-gray max-sm:items-start max-sm:p-4 max-sm:gap-y-6 max-sm:justify-start transition-all ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/work", label: "Work" },
            { path: "/blog", label: "Blog" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <div className="linkContainer  border-dark-gray flex justify-center items-center border-l" key={item.path}>
              <Link href={item.path}>
                <li
                  className="menuLink text-base text-white  px-8 py-4 hover:bg-purple-500 hover:text-white font-roboto font-bold transition-colors duration-300 ease-in-out"
                  key={item.path}
                >
                  {item.label}
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </nav>

      {/* Social media links */}
      <ul className="socialMediaLink flex justify-center items-center gap-x-2 max-lg:hidden">
        {[
          {
            path: "https://www.linkedin.com/in/im-vashukashyap/",
            label: "/linkedin.svg",
            alt: "LinkedIn: Connect",
          },
          {
            path: "https://www.instagram.com/im.vashukashyap/",
            label: "/instagram.svg",
            alt: "Instagram: Follow us",
          },
          {
            path: "https://github.com/vashu-kashyap",
            label: "/github.svg",
            alt: "GitHub: Explore code",
          },
        ].map((item) => (
          <li className="socialLink" key={item.path}>
            <Link href={item.path} target="_blank">
              <Image src={item.label} width={32} height={32} alt={item.alt} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu toggle button */}
      <div className="menuToggler hidden max-sm:block">
        <button onClick={handleMenu}>
          <Image src={menuIcon} width={32} height={32} alt="menu-btn" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
