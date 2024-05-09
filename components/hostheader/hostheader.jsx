import React, { useState, useEffect } from 'react';
import Styles from './hostheader.css';
import { Cookies } from "react-cookie";
import Logo from "../../img/Logo.png";


function HostHeader() {
    const cookie = new Cookies();
    const NGOName = cookie.get("NGOname");
    return (
        <div className="HostHeaderContainer">
            <div className="HostHeaderTitle">
                {/* <h1>AidNet</h1> */}
                <a href="./host" >
                    <img src={Logo} alt="Logo" height="300px" width = "300px" />
                </a>
            </div>
            <div className="HostHeaderNavigator">
                <div>
                    <a href="#" style={{textDecoration : "none", color : "black"}} ><p>Dashboard</p></a>
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
                    <a href="#" style={{textDecoration : "none", color : "black"}} ><p>Profile</p></a>
                </div>
            </div>
            <div className="HostHeaderName">
                <p>{NGOName}</p>
            </div>
            <div>
                <button className="HostDocumentation">Documentation</button>
            </div>
        </div>
    );
}

export default HostHeader;
