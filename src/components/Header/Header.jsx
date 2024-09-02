import React from "react";
import "./Header.css";
import img1 from "../../assets/Vector 1 (1).png";
import img2 from "../../assets/header.book.jpg";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="two-diw">
          <div className="first-diw">
            <h1>
              kitob o‘qing va o'z <br />
              fikringizni qo'shing
            </h1>
            <p>sevimli kitobingizni toping va uni bu yerda <br /> bepul o‘qing</p>
            <input type="text" placeholder="Kitob qidirish" />
          </div>
          <div className="second-diw">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
