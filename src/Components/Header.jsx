import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaAlignLeft, FaAngleDoubleLeft } from "react-icons/fa";
import logo from "../assets/svg/react-logo-programming-svgrepo-com.svg";
import profile_img from "../assets/image/Profile-IMG-Tooned.jpg";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  // Load theme from local storage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme and save to local storage
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/settings", label: "Settings" },
    { href: "/earnings", label: "Earnings" },
    { href: "/signout", label: "Sign out" },
  ];
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
              onClick={() => setisMenuOpen(!isMenuOpen)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
               {isMenuOpen ? <FaAngleDoubleLeft /> : <FaAlignLeft /> } 

              </button>

              <a href="/" className="flex ms-2 md:me-24">
                <img
                  src={logo}
                  className="h-10 me-3  bg-white shadow-lg rounded-full p-1"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Project Name
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 text-sm text-gray-500 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
              >
                {isDarkMode ? (
                  <>
                    {" "}
                    <IoSunnyOutline  className="w-7 h-7 border-gray-300 rounded-full shadow" />{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <LuMoonStar  className="w-7 h-7  border-gray-300  rounded-full shadow" />{" "}
                  </>
                )}
              </button>
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={profile_img}
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
