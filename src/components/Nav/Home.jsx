import React from "react";
import "./Home.css";
import { CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { TbCloverFilled } from "react-icons/tb";

const Home = () => {
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
            <li><a href="#">Home</a></li>  
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
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
          <IoIosContact className="size" />
          <TbCloverFilled className="sizes" />
          <LuShoppingBag className="sizes" />
        </div>
      </div>
    </div>
  );
};

export default Home;
