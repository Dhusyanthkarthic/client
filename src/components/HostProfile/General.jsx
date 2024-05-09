import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import "./HostProfile.css";
import Header from "./HostProfileHeader";
import HostHeader from "../hostheader/hostheader";
import NGO from "../../img/ngo_image.png";

function General() {
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
            <div className="GeneralBorder">
                <div className="GeneralContainer">
                    <div style={{display : "flex", gap : "0px", alignItems : "center", marginTop : "10px", marginBottom : "10px"}}>
                        <div><img src={NGO} style={{width : "50%", height : "auto"}}/></div>
                        {/* <div>
                            <input type="file" />
                        </div> */}
                    </div>
                    <div className="GeneralUsername" style={{textAlign : "left"}}>
                        <p>Username : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.NGOName}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Email : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.email} /></div>
                    </div>
                    <div className="GeneralCompany" style={{textAlign : "left"}}>
                        <p>Password : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.password} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default General;
