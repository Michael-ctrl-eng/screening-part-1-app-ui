import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.mode);

  return (
    <header className="bg-white shadow-md py-4 px-6 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl text-gray-800 dark:text-white">YourLogo</div>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
            Home
          </a>
          <a href="/features" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
            Features
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
            About
          </a>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
