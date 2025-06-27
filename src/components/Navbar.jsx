import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Task", path: "/task" },
  ];

  return (
    <nav className="bg-amber-50 shadow-md w-full">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <h1 className="text-blue-600 text-3xl font-extrabold tracking-wide">
          <Link to="/" onClick={closeMenu}>Tasker</Link>
        </h1>

        {/* Hamburger icon (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li key={item.name} className="cursor-pointer relative group">
              <Link to={item.path}>
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start px-6 space-y-3 pb-4 text-lg font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full hover:text-orange-500 transition-colors">
              <Link to={item.path} onClick={closeMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
