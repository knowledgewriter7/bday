// src/components/Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">🎉TO:MY SPECIAL PERSON💗</h2>
      <ul className="navbar-links">
        <li><Link to="/special" className="navbar-link">ClickOnce</Link></li>
        <li>
          <button onClick={handleLogout} className="navbar-link logout-button">
            Bye
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
