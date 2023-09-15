import React, { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState("/menuopen.svg");
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setShowMenu(false); // Close the menu when a link is clicked
      setMenuIcon('/menuopen.svg');
    };

    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false); // Close the menu when the user scrolls
        setMenuIcon('/menuopen.svg')
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu, router.events]);

  // Function to check if a route is active
  const isRouteActive = (route) => {
    return router.pathname === route;
  };

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
      <div className="navBrand">
        <Link href={"/"} className="text-xl text-purple-500 font-borel">
          Dev.Vashu
        </Link>
      </div>

      <nav className="navMenu">
        <ul
          className={`flex justify-center items-center max-sm:flex-col max-sm:absolute max-sm:top-[72px] max-sm:w-2/3 max-sm:min-h-screen max-sm:bg-dark-black max-sm:items-start max-sm:p-4 max-sm:gap-y-6 max-sm:justify-start transition-all max-sm:border-r border-dark-gray ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/work", label: "Work" },
            { path: "/blog ", label: "Blog" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <div
              className={`linkContainer border-dark-gray flex justify-center items-center max-sm:w-full  ${
                isRouteActive(item.path) ? "bg-purple-500 max-sm:rounded-full" : ""
              }`}
              key={item.path}
            >
              <li
                className={`menuLink text-base text-white px-8 py-4 hover:bg-purple-500 hover:text-white font-roboto font-bold transition-colors duration-300 max-sm:w-full ease-in-out border-l border-dark-gray max-sm:border-0 max-sm:hover:rounded-full  ${
                  isRouteActive(item.path && "/") ? "text-white" : ""
                }`}
                key={item.path}
              >
                <Link href={item.path}  >{item.label}</Link>
              </li>
            </div>
          ))}
        </ul>
      </nav>

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

      <div className="menuToggler hidden max-sm:block">
        <button onClick={handleMenu}>
          <Image src={menuIcon} width={32} height={32} alt="menu-btn" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
