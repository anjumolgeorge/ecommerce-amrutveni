import React from "react";
import "./Home.css";
import { CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img className="logo1" src="/assets/amrutvenilog.png" alt="" />
        </div>
       <div className="innerbox">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="search">
          <input type="text" />
        </div>
        <div className="icon">
          <CiSearch />
        </div>
        <div className="contact">
          <IoIosContact className="size" />
          <LuShoppingBag className="sizes" />
        </div>
      </div>
    </div>
  );
};

export default Home;
