import React from "react";
import "./UserMessaging.css";
import Images from "../../img/ngo-images.jpg";
import Arrow from "../../img/whiteArrow.svg";
import {Cookies} from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../UserHeader/Userheader";
import { io } from "socket.io-client";


const cookie = new Cookies();
function UserMessaging(){

    const [problems, setProblems] = useState([]);

    const fetchData = async () => {
        const cookie = new Cookies();
        const username = cookie.get("Username");
        console.log(username);
        const NGOname = cookie.get("NGOname");
        try {
            const response = await axios.get("https://db-28im.onrender.com/getPendingProblemsUser", {
                params: { username },
            });
            console.log(response.data);
            if (response.data) {
                setProblems(response.data);
            } else {
                console.log("No pending problems found");
            }
        }catch(err){
            console.log("Error found", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <div>
                <h1 style={{textAlign : "left", marginLeft : "30px"}}>Message the NGO : </h1>
            </div>
            <h1>Hello</h1>
            <div className="MsgHostHolder" style={{display : "flex", gap : "20px", alignItems : "center", justifyContent : "center", flexWrap : "wrap"}}>
                {problems.length > 0 ? (
                    problems.map((problem, index) => {
                        // cookie.set("User", problem.user);
                        return (
                            <div key={index}>
                                <div className="HostMessagingContainer">
                                    <div className="HostMessagingContent">
                                        <div className="HostMessagingProfile">
                                            <img src={problem.file_url} alt="Images" width="200px" height="200px" />
                                        </div>
                                        <div className="HostMessagingInfo">
                                            <div className="HostMessagingUserName">
                                                {problem.NGOName}
                                            </div>
                                            <div className="HostMessagingProblem">
                                                {problem.ProblemHeading}
                                            </div>
                                            <a href={"/UserMessageContainer?name="+problem.NGOName} style={{ textDecoration: "none" }}>
                                                <button className="HMButton" style={{ border: "transparent" }}>
                                                    <div className="HostMessagingButton">
                                                        <div style={{ fontSize: "24px" }}>
                                                            Message
                                                        </div>
                                                        <div style={{ marginTop: "5px" }}>
                                                            <img src={Arrow} alt="Images" width="24px" height="24px" />
                                                        </div>
                                                    </div>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                        <div>
                            <h1>All tasks are assigned</h1>
                        </div>
                    )}
            </div>

        </div>
    );
}

export default UserMessaging;