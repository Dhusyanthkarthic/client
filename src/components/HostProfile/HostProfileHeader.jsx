import React from "react";
import "./HostProfile.css";



function HomeProfileHeader(){
    return(
        <div>
            <div className="HostProfileHeaderContainer">
                {/* <div className="ProfileHeaderDetails">
                    <a href="/HostGeneral" style={{ textDecoration : "none", color : "black"}}><p>General</p></a>
                </div> */}
                <div className="ProfileHeaderDetails">
                    <a href="./HostChangePassword" style={{ textDecoration : "none", color : "black"}}><p>Change Password</p></a>
                </div>
                <div className="ProfileHeaderDetails">
                    <a href="./HostInfo" style={{ textDecoration : "none", color : "black"}}><p>Info</p></a>
                </div>
                <div className="ProfileHeaderDetails">
                    <a href="./ContactDetails"style={{ textDecoration : "none", color : "black"}} ><p>Contact Details</p></a>
                </div>
                {/* <div className="ProfileHeaderDetails">
                    <p>Connections</p>
                </div>
                <div className="ProfileHeaderDetails">
                    <p>Notifications</p>
                </div> */}
            </div>
        </div>
    );
}

export default HomeProfileHeader;