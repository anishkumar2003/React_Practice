import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
        <nav className="mb-4">
          <Link to="/home" className="mx-2">
            Home
          </Link>
          <Link to="/about" className="mx-2">
            About
          </Link>
          <Link to="/services" className="mx-2">
            Services
          </Link>
          <Link to="/contact" className="mx-2">
            Contact
          </Link>
        </nav>
        <p>&copy; 2022 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
