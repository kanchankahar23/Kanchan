import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-10 py-4 bg-[#E6F99D] dark:bg-[#041122] shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold font-serif text-[#041122] dark:text-[#E6F99D]">
          KK
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 font-bold text-[#041122] dark:text-white">
          {["Home", "About", "Skill", "Projects"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-yellow-500 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-14 h-7 bg-gray-800 dark:bg-yellow-400 rounded-full p-1 transition-colors duration-300"
        >
          <div
            className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
              darkMode ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
