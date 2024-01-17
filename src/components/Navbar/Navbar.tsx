import React from "react";
import "./Navbar.css";
import carImage from '../../assets/car.jpg';
import { Link } from "react-router-dom";
type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark p-3 fixed-top" id="mainNav">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
             P8Rent
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link mx-2 active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/Products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                 
                   
                  
                    Login/Sign in
                 
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> Login/Sign in
                    <li>
                      <Link className="dropdown-item" to="/Login">
                      Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/SingIn">
                      Sign in
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div
        id="hero"
        style={{
          background: `url(${carImage}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <h1
          className="display-3 text-center text-white greatVibesFont"
          style={{
            paddingTop: '20vh',
            paddingBottom: '15vh',
            textShadow: '0px 3px 4px rgba(0,0,0,0.8)',
          }}
        >
          Adventure Unlimited. Explore the West
        </h1>
      </div>

      <div className="vh-20"></div>
    </>
  );
};

export default Navbar;
