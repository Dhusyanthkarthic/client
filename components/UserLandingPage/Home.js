import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/n7.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import UserHeader from "../UserHeader/Userheader";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <UserHeader />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Seek Help In AidNet Right Now!!
          </h1>
          <p className="primary-text">
            Compose a message which clearly explains your problem and get help from reputated NGO's 
          </p>
          <a href="./composedproblems" style={{textDecoration : "none"}}><button className="secondary-button">
            Posted Problems <FiArrowRight />{" "}
          </button></a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;