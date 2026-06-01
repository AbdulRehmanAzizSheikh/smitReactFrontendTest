import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-600 px-3 py-2 rounded-lg font-semibold transition-all"
      : "text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-all";

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-black tracking-wider text-white-500">React Web</a>
        <div className="flex space-x-4">
          <NavLink to="/" className={activeStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={activeStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;