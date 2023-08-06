
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
    const notificationCount = 5;
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <h1><a className="navbar-brand" href="#">
                    HERA Cosmetica y belleza
                </a></h1>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Faciales
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Corporales
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Capilares
                            </a>
                        </li>
                    </ul>
                </div>
                <CartWidget notificationCount={notificationCount} />
            </div>
        </nav>
    );
};

export default NavBar;
