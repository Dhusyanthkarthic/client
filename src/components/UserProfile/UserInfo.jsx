import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserProfile.css";
import Header from "../UserHeader/Userheader";
import { Cookies } from "react-cookie";
import UserHeader from "./UserProfileHeader";

function UserInfo() {
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
                    console.log(response.data);
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
            <Header />
            <UserHeader />
            <div className="GeneralBorder InfoBorder">
                <div className="InfoContainer">
                    <div className="GeneralUsername" style={{textAlign : "left"}}>
                        <p>Firstname : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Firstname}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Lastname : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Lastname}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>DOB : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.DOB}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Gender : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.gender}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Address : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Address}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Email : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Email}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Phone Number : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Phonenumber}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Password : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.password}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
