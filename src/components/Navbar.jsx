// components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="h-16 bg-gray-800 w-full flex items-center justify-around z-50">
      <Link to="/" className="text-gray-300 hover:text-white">Cards List</Link>
      <Link to="/collection" className="text-gray-300 hover:text-white">Collection</Link>
    </nav>
  );
}

export default Navbar;
