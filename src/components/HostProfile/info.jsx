import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HostProfile.css";
import Header from "./HostProfileHeader";
import { Cookies } from "react-cookie";
import HostHeader from "../hostheader/hostheader";

function Info() {
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
            <HostHeader />
            <Header />
            <div className="GeneralBorder">
                <div className="GeneralContainer">
                    <div className="GeneralUsername" style={{textAlign : "left"}}>
                        <p>NGOName : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.NGOName}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>Address : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Address}/></div>
                    </div>
                    <h3>Areas : </h3>
                    <div style={{display : "flex", gap : "20px", flexWrap : "wrap"}}>
                        
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Area 1 : </p>
                            <div style={{ border: "0.5px solid grey", width: "200px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.area1} /></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Area 2 : </p>
                            <div style={{ border: "0.5px solid grey", width: "200px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.area2} /></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Area 3 : </p>
                            <div style={{ border: "0.5px solid grey", width: "200px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.area3}  /></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Area 4 : </p>
                            <div style={{ border: "0.5px solid grey", width: "200px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.area4} /></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Area 5 : </p>
                            <div style={{ border: "0.5px solid grey", width: "200px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.area5} /></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Area 6 : </p>
                            <div style={{ border: "0.5px solid grey", width: "200px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.area6} /></div>
                        </div>
                    </div>
                    <h3>Services : </h3>
                    <div style={{display : "flex", gap : "20px", flexWrap : "wrap"}}>
                    
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Service 1 : </p>
                            <div style={{ border: "0.5px solid grey", width: "230px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.services1}/></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Service 2 : </p>
                            <div style={{ border: "0.5px solid grey", width: "230px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.services2}/></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Service 3 : </p>
                            <div style={{ border: "0.5px solid grey", width: "230px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.services3}/></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Service 4 : </p>
                            <div style={{ border: "0.5px solid grey", width: "230px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.services4}/></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Service 5 : </p>
                            <div style={{ border: "0.5px solid grey", width: "230px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.services5}/></div>
                        </div>
                        <div className="GeneralCompany" style={{textAlign : "left"}}>
                            <p>Service 6 : </p>
                            <div style={{ border: "0.5px solid grey", width: "230px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "350px", height: "30px", outline : "none" }} value={hostData.services6}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
