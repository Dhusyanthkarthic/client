import React, { useState, useEffect } from 'react';
import Styles from './hostheader.css';
import { Cookies } from "react-cookie";
import Logo from "../../img/Logo.png";
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";


function HostHeader() {
    const cookie = new Cookies();
    const NGOName = cookie.get("NGOname");
    console.log(NGOName);
    return (
        <div className="HostHeaderContainer">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="HostHeaderTitle">
                {/* <h1>AidNet</h1> */}
                <a href="./host" >
                    <img src={Logo} alt="Logo" height="300px" width = "300px" />
                </a>
            </div>
            <div className="HostHeaderNavigator">
                <div>
                    <a href="/HostMessaging" style={{textDecoration : "none", color : "black"}} ><p>Messaging</p></a>
                </div>
                <div>
                    <a href="./hostfeed" style={{textDecoration : "none", color : "black"}} ><p>Problems</p></a>
                </div>
                <div>
                    <a href="/HostAnalysis" style={{textDecoration : "none", color : "black"}} ><p>Analysis</p></a>
                </div>
                <div>
                    <a href="./problemstatus" style={{textDecoration : "none", color : "black"}} ><p>Status</p></a>
                </div>
                <div>
                    <a href="./HostAboutUs" style={{textDecoration : "none", color : "black"}} ><p>About</p></a>
                </div>
                
                {/* <div>
                    <a href="#" style={{textDecoration : "none", color : "black"}} ><p>Profile</p></a>
                </div> */}
            </div>
            <a href="/HostProfile" style={{textDecoration : "none", color : "black"}}><div className="HostHeaderName">
                <p>{NGOName}</p>
            </div></a>
            <div>
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw06NFBBMIv2G-VqrO65ig63&ust=1714934966920000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICQm93U9IUDFQAAAAAdAAAAABAE" download="Documentation">
                    <button className="HostDocumentation">Profile</button>
                </a>
            </div>
        </div>
    );
}

export default HostHeader;
