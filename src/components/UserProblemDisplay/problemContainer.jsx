import React from "react";
import "./Problems.css";
import Image from "../../img/ngo-images.jpg";
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";
import Tick from "../../img/tick.svg";



function ProblemContainer(){
    return (
        <div className="ExProblemContainer" style={{marginTop : "50px"}}>
            <div style={{marginBottom : "20px"}}>
                <img src={Image} alt="Problem Image" width = "200px" height = "200px"/>
            </div>
            <div style={{textAlign : "left"}}>
                heading
            </div>
            <div style={{textAlign : "left"}}>
                description
            </div>
            <div style={{display : "flex", gap : "10px", alignItems : "center"}}>
                <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                    <div><img src={Location} alt="Images" width = "15px" height = "15px"/></div>
                    <div><p>area</p></div>
                </div>
                <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                    <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                        <div><img src={Service} alt="Images" width = "20px" height = "20px"/></div>
                        <div><p>service</p></div>
                    </div>
                </div>
            </div>
            <div style={{display : "flex", gap : "10px", alignItems : "center"}}>
                <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white"}}>
                    <p style={{marginLeft : "10px", marginRight : "10px"}}>user</p>        
                </div>
                <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white"}}>
                    <p style={{marginLeft : "10px", marginRight : "10px"}}>NGOname</p>
                </div>
            </div>
            <div style={{marginTop : "10px"}}>
                <a href="" style={{textDecoration : "none", color : "black"}}>
                        <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white",display : "flex", gap : "0px", alignItems : "center", justifyContent : "center", width : "150px"}}>
                            <div className="" style={{marginTop : "5px"}}>
                                <img src={Tick} alt="Tick" height="16px" width="16px" />
                            </div>
                            <div><p style={{marginLeft : "10px", marginRight : "10px"}}>Accept</p></div>        
                        </div>
                </a>
            </div>
        </div>
    );
}

export default ProblemContainer;

{/* <div key={index}>
                  <div style={{ lineHeight: "0.8" }}>
                    <div className="Pending">
                      <h2 style={{color : "white"}}>{problem.ProblemHeading}</h2>
                    </div>

                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="problemLocation">
                      <div>
                        <img
                          src={Location}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div style={{color : "white"}}>{problem.area}</div>
                    </div>
                    <div className="problemServices">
                      <div>
                        <img
                          src={Services}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div style={{color : "white"}}>{problem.service}</div>
                    </div>
                  </div>
                  <div className="user-info">
                    <div className="UserInfo">
                      <div>
                        <img
                          src={UserProfile}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div style={{display : "flex", gap : "10px", flexWrap : "wrap", alignItems: "center", justifyContent : "center"}}>
                        <div style={{ fontSize: "24px", color : "white" }}>{problem.user}</div>
                        <div style={{fontSize : "24px", color : "white"}}><img src={Ngo} alt="ngo" width = "20px" height = "20px"  style={{marginRight : "5px"}}/>{problem.NGOName}</div>
                      </div>
                    </div>
                  </div>
                </div> */}