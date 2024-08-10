import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;
