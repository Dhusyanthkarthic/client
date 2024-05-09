import React from "react";
import UserHeader from "../UserHeader/Userheader";
import General from "./UserGeneral";
import Header from "./UserProfileHeader";
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";


function UserProfile(){
    return (
        <div className="UserProfile">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <UserHeader />
            <Header />
            <General />
        </div>
    );
};

export default UserProfile;