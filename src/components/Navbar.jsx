import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md relative z-50">
      <div className="flex items-center">
  <h2 className="text-2xl font-bold text-black tracking-wide">eyewa</h2>
</div>


      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-black hover:text-gray-700">Sunglasses</Link>
        <Link to="/" className="text-black hover:text-gray-700">Glasses</Link>
        <Link to="/" className="text-black hover:text-gray-700">Corrective Contact Lenses</Link>
        <Link to="/" className="text-black hover:text-gray-700">Color Contact Lenses</Link>
        <Link to="/" className="text-black hover:text-gray-700">Accessories</Link>
        <Link to="/" className="text-black hover:text-gray-700">New - Vitamins</Link>
        <button className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100">Login</button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-black">
          {menuOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-4 md:hidden z-50">
          <Link to="/" className="text-black hover:text-gray-700" onClick={toggleMenu}>Sunglasses</Link>
          <Link to="/" className="text-black hover:text-gray-700" onClick={toggleMenu}>Glasses</Link>
          <Link to="/" className="text-black hover:text-gray-700" onClick={toggleMenu}>Corrective Contact Lenses</Link>
          <Link to="/" className="text-black hover:text-gray-700" onClick={toggleMenu}>Color Contact Lenses</Link>
          <Link to="/" className="text-black hover:text-gray-700" onClick={toggleMenu}>Accessories</Link>
          <Link to="/" className="text-black hover:text-gray-700" onClick={toggleMenu}>New - Vitamins</Link>
          <button className="w-full px-4 py-2 border border-black text-black rounded hover:bg-gray-100">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
