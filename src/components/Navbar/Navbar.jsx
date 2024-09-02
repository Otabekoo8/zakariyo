import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="container">
        <div className="Navbar">
          <div className="logo">
            <h3>MENING<span>KITOBIM</span></h3>
            <i className="bx bx-cart-download"></i>
          </div>
          <div className={`nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
            <ul>
              <li>
                <a href="#">Izlash</a>
              </li>
              <li>
                <a href="#">Do‘kon</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <div className="btn">
                <button onClick={toggleModal}>Kirish</button>
              </div>
            </ul>
          </div>
          <div className="burger-menu" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? "bx bx-x" : "bx bx-menu"}></i>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={toggleModal}>
              X
            </button>
            <h2>Kirish</h2>
            <form>
              <input type="text" placeholder="Foydalanuvchi nomi" />
              <input type="password" placeholder="Parol" />
              <button type="submit">Yuborish</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
