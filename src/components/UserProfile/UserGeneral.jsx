import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import "./UserProfile.css";
import Header from "./UserProfileHeader";
import UserHeader from "../UserHeader/Userheader";
import male from "../../img/male.svg";
import female from "../../img/female.svg";


function UserGeneral() {
    const [hostData, setUserData] = useState([]);

    useEffect(() => {
        const fetchForProfile = async () => {
            try {
                // const response = await axios.get("/api/user/details"); 
                // const { username, email, password } = response.data;
                // setUserData({ username, email, password });
                const cookie = new Cookies();
                const Username = cookie.get("Username");
                const firstname = cookie.get("Firstname");
                const response = await axios.get("https://db-28im.onrender.com/getUserDetails", {
                    params: { firstname }
                });
                console.log(response.data);
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

    const SaveChanges = async () => {
        const Firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const DOB = document.getElementById("DOB").value;

        try {
            const cookie = new Cookies(); 
            const firstname = cookie.get("Firstname");
            const response = await axios.get("https://db-28im.onrender.com/changeUserGeneral", {
                params: { firstname , Firstname, lastname, DOB }
            });
            console.log(response.data);
            if (response.data) {
                setUserData(response.data[0]);
                console.log(response.data);
            } else {
                console.log("No pending problems found");
            }

        } catch (error) {
            console.error("Error fetching user details:", error);
        }

        
    }

    return (
        <div>
            <div className="GeneralBorder">
                <div className="GeneralContainer">
                    <div style={{display : "flex", gap : "0px", alignItems : "center", marginTop : "10px", marginBottom : "10px"}}>
                        {hostData.gender === "Male" ? (
                            <img src={male} alt="male" width="200px" height="200px" />
                        ) : (
                            <img src={female} alt="female" width="200px" height="200px" />
                        )}
                        {/* <div>
                            <input type="file" />
                        </div> */}
                    </div>
                    <div className="GeneralUsername" style={{textAlign : "left"}}>
                        <p>FirstName : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input id = "firstname" style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Firstname}/></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>LastName : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input id = "lastname" style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.Lastname} /></div>
                    </div>
                    <div className="GeneralCompany" style={{textAlign : "left"}}>
                        <p>DOB : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input id="DOB" style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.DOB} /></div>
                    </div>
                    {/* <div className="GeneralCompany" style={{textAlign : "left"}}>
                        <p>Gender : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.gender} /></div>
                    </div>
                    <div className="GeneralCompany" style={{textAlign : "left"}}>
                        <p>Address : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.gender} /></div>
                    </div> */}
                </div>
            </div>
            <div className="ProfileChangeButton">
                <div>
                    <button onClick={SaveChanges} style={{padding: "10px 10px 10px 10px", color : "white", backgroundColor : "rgb(77, 130, 226)", border : "transparent", fontWeight : "bolder", borderRadius : "10px"}}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserGeneral;
