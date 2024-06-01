import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = ({ loggedIn, userEmail, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" /> {/* Add the src and alt attributes */}
      </div>
      <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/PlantList">Plant List</Link></li>
        <li><Link to="/plants" className='hide'>Plant Details</Link></li>
      </ul>
      <ul className="authbuttons">
        {!loggedIn && (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
        {loggedIn && (
          <>
            <li>{userEmail}</li>
            <li><button onClick={onLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

