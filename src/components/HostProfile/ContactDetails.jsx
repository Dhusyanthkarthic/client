import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HostProfile.css";
import Header from "./HostProfileHeader";
import { Cookies } from "react-cookie";
import HostHeader from "../hostheader/hostheader";

function ContactDetails() {
    const [hostData, setUserData] = useState([]);

    useEffect(() => {
        const fetchForProfile = async () => {
            try {
                // const response = await axios.get("/api/user/details"); 
                // const { username, email, password } = response.data;
                // setUserData({ username, email, password });
                const cookie = new Cookies();
                const NGOName = cookie.get("NGOname");
                const response = await axios.get("https://db-28im.onrender.com/getHostDetails", {
                    params: { NGOName }
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
            <HostHeader />
            <Header />
            <div className="GeneralBorder">
                <div className="GeneralContainer">
                    <div className="GeneralUsername" style={{textAlign : "left"}}>
                        <p>Phone number : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input className="ProfileInput" style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Phonenumber}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Email : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.email}/></div>
                    </div>
                    <div className="GeneralCompany" style={{textAlign : "left"}}>
                        <p>Website : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.website}/></div>
                    </div>
                    <div className="GeneralCompany" style={{textAlign : "left"}}>
                        <p>Social Media : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.socialmedia}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;
