import React from "react";
import Link from "next/link";

const MyFooter = () => {
  return (
    <footer className="p-4 bg-dark-black md:p-8 lg:p-10 font-roboto ">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-purple-500  font-borel"
        >
          Dev.Vashu
        </Link>
        <p className="my-6 text-light-gray text-center ">
          Embark on a Journey of Learning Amazing Coding Concepts with Dev.Vashu
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <Link
              href="#about-me"
              className="mr-4 hover:text-purple-600 transition-colors duration-300 md:mr-6 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="mr-4 hover:text-purple-600 transition-colors duration-300 md:mr-6 "
            >
              Work
            </Link>
          </li>
          <li> 
            <Link
              href="/blog"
              className="mr-4 hover:text-purple-600 transition-colors duration-300 md:mr-6"
            >
              Blog
            </Link>
          </li>
          
          
          <li>
            <Link
              href="#"
              className="mr-4 hover:text-purple-600 transition-colors duration-300 md:mr-6"
            >
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-sm text-light-gray sm:text-center ">
          © 2023-2024{" "}
          <Link
            href="#"
            className="hover:text-purple-600 transition-colors duration-300"
          >
            Dev.Vashu
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default MyFooter;
