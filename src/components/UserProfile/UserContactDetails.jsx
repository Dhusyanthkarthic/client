import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserProfile.css";
import Header from "./UserProfileHeader";
import { Cookies } from "react-cookie";
import UserHeader from "../UserHeader/Userheader";

function UserContactDetails() {
    const [hostData, setUserData] = useState([]);

    useEffect(() => {
        const fetchForProfile = async () => {
            try {
                // const response = await axios.get("/api/user/details"); 
                // const { username, email, password } = response.data;
                // setUserData({ username, email, password });
                const cookie = new Cookies();
                const NGOName = cookie.get("NGOname");
                const firstname = cookie.get("Firstname");
                const response = await axios.get("https://db-28im.onrender.com/getUserDetails", {
                    params: { firstname }
                });
                if (response.data) {
                    setUserData(response.data[0]);
                } else {
                    console.log("No pending problems found");
                }

            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchForProfile(); 
    }, []); 
    return (
        <div>
            <UserHeader />
            <Header />
            <div className="GeneralBorder">
                <div className="GeneralContainer">
                    <div className="GeneralUsername" style={{textAlign : "left"}}>
                        <p>Phone number : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input className="ProfileInput" style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Phonenumber}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Email : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Email}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserContactDetails;
