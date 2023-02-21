import React from 'react';
import { Link } from 'react-router-dom';






const  Header = () => {


  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
  <Link className="navbar-brand" to="/">
    MovFlix
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/Favorite">
              Favoritos
            </Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
        </ul>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" to="/Results">
              Buscador
            </Link>
        </li>
        </ul>
        </div>
      </div>
    </ul>
  </div>
</div>
</nav>
)
}



export default Header;