import React from "react";
import HomeFromPage from "../HostProfile/HostFrontPage";
import General from "../HostProfile/General";
import Header from "../hostheader/hostheader";
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";

function HostProfile(){
    return (
        <div>
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <Header />
            <HomeFromPage />
            <General />
        </div>
    );
};

export default HostProfile;