import React, { useState, useEffect } from "react";
import Header from "../hostheader/hostheader";
import "../ProblemStatus/ProblemStatus.css";
import  "../HostProblemFeed/Feed.css";
import { Cookies } from "react-cookie";
import axios from "axios";
import User from "../../img/user.svg";
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";
import Image from "../../img/ngo-images.jpg";

function CompletedStatus() {

    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try{
            const cookie = new Cookies();
            const NGOName = cookie.get("NGOname");
            const response = await axios.get("https://db-28im.onrender.com/getHostCompletedProblems", {
                params: { NGOName }
            });
            console.log(NGOName);

            if (response.data) {
                setProblems(response.data);
            } else {
                console.log("No pending problems found");
            }
        }catch(error){
            console.error("Error:", error);
        }
    };
    
    const renderDescription = (description) => {
        const words = description.split(" ");
        if (words.length > 10) {
          return (
            <>
              {words.slice(0, 10).join(" ")} ... <span style={{ color: "blue" }}>Read more</span>
            </>
          );
        }
        return description;
      };
    
    return (
        <div>
            <Header />
            <div className="ProblemStatusButton">
                <div>
                    <a href="/problemstatus"><button className="ButtonStatus">Pending Problems</button></a>
                </div>
                <div>
                    <a href="/completedstatus"><button className="ButtonStatus">Completed Problems</button></a>
                </div>
            </div>
            <div className="FeedContainer">
                <div>
                    <h1 style={{ textAlign: "left" }}>Completed Problems :</h1>
                </div>
                <div style={{display : "flex", gap : "20px", alignItems : "center", justifyContent : "flex-start", flexWrap : "wrap"}}>
                    {problems.length > 0 ? (
                        problems.map((problem, index) => (
                            <a href={"/problemdescription?problemid="+problem._id} key={index} style={{textDecoration : "none", color : "black"}}>
                                <div key={index}>
                                    {/* <div>
                                        <img src={User} alt="User" height="300px" width="300px" />
                                    </div>
                                    <div style={{ display: "block" }}>
                                        <div className="ProblemFeedChoice">
                                            <div>
                                                <h1 style={{ textAlign: "left", color: "white" }}>{problem.ProblemHeading}</h1>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", gap: "60px" }}>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                                <div><img src={Location} alt="Location" height="30px" width="30px" /></div>
                                                <div><p style={{ fontWeight: "bolder", fontSize: "120%", color: "white" }}>{problem.area}</p></div>
                                            </div>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                                <div><img src={Service} alt="Location" height="30px" width="30px" /></div>
                                                <div><p style={{ fontWeight: "bolder", fontSize: "120%", color: "white" }}>{problem.service}</p></div>
                                            </div>
                                            <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                                <div><img src={User} alt="Location" height="30px" width="30px" /></div>
                                                <div><p style={{ fontWeight: "bolder", color: "white", fontSize: "120%" }}>{problem.user}</p></div>
                                            </div>
                                        </div>
                                        <div><p style={{ fontWeight: "bolder", textAlign: "left", fontSize: "18px", color: "white" }}>{problem.description}</p></div>
                                    </div> */}
                                    <div className="ExProblemContainer" style={{marginTop : "50px"}}>
                                        <div style={{marginBottom : "20px"}}>
                                            <img src={problem.file_url} alt="Problem Image" width = "200px" height = "200px"/>
                                        </div>
                                        <div style={{textAlign : "left", display : "flex", gap : "10px", alignItems : "center", flexWrap : "wrap"}}>
                                            <div><p style={{fontWeight : "bolder"}}>Heading :</p></div>
                                            <div>{problem.ProblemHeading}</div>
                                        </div>
                                        <div style={{textAlign : "left"}}>
                                            <div style={{fontWeight : "bolder"}}>Description : </div>
                                            <div>{renderDescription(problem.description)}</div>
                                        </div>
                                        <div style={{display : "flex", gap : "10px", alignItems : "center", justifyContent : "center"}}>
                                            <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                                                <div><img src={Location} alt="Images" width = "15px" height = "15px"/></div>
                                                <div><p>{problem.area}</p></div>
                                            </div>
                                            <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                                                <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                                                    <div><img src={Service} alt="Images" width = "20px" height = "20px"/></div>
                                                    <div><p>{problem.service}</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{display : "flex", gap : "10px", alignItems : "center", justifyContent: "center"}}>
                                            <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white"}}>
                                                <p style={{marginLeft : "10px", marginRight : "10px"}}>{problem.user}</p>        
                                            </div>
                                        </div>
                                        {/* <div style={{marginTop : "10px", margin : "0 auto", marginLeft : "20px"}}>
                                            <button className="AcceptButton" onClick={() => acceptProblem(problem._id)} style={{textDecoration : "none", color : "black"}}>
                                                    <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white",display : "flex", gap : "0px", alignItems : "center", justifyContent : "center", width : "150px"}}>
                                                        <div className="" style={{marginTop : "5px"}}>
                                                            <img src={Tick} alt="Tick" height="16px" width="16px" />
                                                        </div>
                                                        <div><p style={{marginLeft : "10px", marginRight : "10px", fontWeight : "bolder"}}>Accept</p></div>        
                                                    </div>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div>
                            <h1>No Completed Problems</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompletedStatus;
