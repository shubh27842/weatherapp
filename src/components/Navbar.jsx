import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="d-flex justify-content-between" style={{
            background: "#000",
        }}>
            <div className="w-25 d-flex justify-content-around align-items-center" style={{
                fontSize: "24px",
                color: "yellow"
            }}>Weather App</div>
            <div className="d-flex justify-content-around align-items-center w-50 ">
                <Link to="/" className="navbarTab">
                    <p className="my-2">Home</p>
                </Link>
                <Link to="/about" className="navbarTab">
                    <p className="my-2">About</p>
                </Link>
                <Link to="/contact" className="navbarTab">
                    <p className="my-2">Contact</p>
                </Link>
                <Link to="/service" className="navbarTab">
                    <p className="my-2">Service</p>
                </Link>
            </div>
        </div>
    )
}


export default Navbar;