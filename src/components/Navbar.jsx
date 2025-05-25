import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full bottom-0 left-0 z-50">
      <div className="container mx-auto flex justify-around items-center">
        <Link to="/" className="text-gray-300 hover:text-white">Cards List</Link>
        <Link to="/collection" className="text-gray-300 hover:text-white">Collection</Link>
      </div>
    </nav>
  );
}
export default Navbar;