import React, { useState } from "react";
import "./Home.css";
import { CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { TbCloverFilled } from "react-icons/tb";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img className="logo1" src="/assets/amrutvenilog.png" alt="Logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="innerbox">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <div className="icon">
            <CiSearch />
          </div>
        </div>

        {/* Contact Icons */}
        <div className="contact">
          <IoIosContact
            className="size"
            onClick={handleContactClick}
            style={{ cursor: "pointer" }}
          />
          <TbCloverFilled className="sizes" />
          <LuShoppingBag className="sizes" />
        </div>
      </div>

      {/* Signup Modal */}
      {isModalOpen && (
        <div className="Modal-container">
          <div className="inline-modal">
            <img
              className="signup-logo"
              src="/assets/amrutvenilog.png"
              alt="Logo"
            />

            <h5 className="login" style={{ padding: "1rem" }}>
              {" "}
              <b>Login/Register</b>{" "}
            </h5>
            <h6 className="modal-title">
              Please input your Mobile number to continue
            </h6>

            <input
              id="phone"
              type="tel"
              className="modal-input"
              placeholder="Enter Your Number"
            />

            <p className="modal-info">
              To verify your number, we will send you a WhatsApp, SMS message
              with a temporary code.
            </p>

            <button className="modal-btn">GET OTP</button>

            <button
              onClick={handleContactClick}
              style={{
                margin: "1rem",
                padding: "0.5rem 1rem",
                background: "#136936",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
