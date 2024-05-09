import React, { useEffect, useState } from "react";
import "./Problems.css";
import Location from "../../img/location.svg";
import Services from "../../img/service.svg";
import Service from "../../img/service.svg";
import Image from "../../img/ngo-images.jpg";
import UserProfile from "../../img/userProfile.svg";
import Ngo from "../../img/ngo.svg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Cookies } from "react-cookie";
import axios from "axios";

function Problems() {
  const [pendingProblems, setPendingProblems] = useState([]);
  const [problems, setProblems] = useState([]);
  const [competedProblems, setCompletedProblems] = useState([]);
  const [cookies, setCookie] = useCookies(["ProblemHeading"]);

  useEffect(() => {
    fetchPendingProblems();
  }, []);

  const fetchPendingProblems = async () => {
    const cookie = new Cookies();
    const username = cookie.get("Username");
    try {
      const response = await axios.get("https://db-28im.onrender.com/getUserComposedProblems", {
            params: { user : username }
      });
      console.log(username);
      if (response.data) {
        setPendingProblems(response.data);
      } else {
          console.log("No pending problems found");
      }
    } catch (error) {
      console.error("Error fetching pending problems:", error);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    const cookie = new Cookies();
    const username = cookie.get("Username");
    try{
      const response = await axios.get("https://db-28im.onrender.com/getUserPendingProblems", {
            params: { user : username }
      });
      console.log(username);
      if (response.data) {
        setProblems(response.data);
      } else {
          console.log("No pending problems found");
      }
    }catch(error){
      console.error("Error fetching pending problems:", error);
    }
  };

  useEffect(() => {
    fetchCompleteProblem();
  }, []);

  const fetchCompleteProblem = async () => {
    const cookie = new Cookies();
    const username = cookie.get("Username");
    try{
      const response = await axios.get("https://db-28im.onrender.com/getCompletedProblemUser", {
            params: { user : username }
      });
      console.log(username);
      if (response.data) {
        console.log(response.data)
        setCompletedProblems(response.data);
      } else {
          console.log("No pending problems found");
      }
    }catch(error){
      console.error("Error fetching pending problems:", error);
    }
  };

  const handleClick = (heading) => {
    // Set the cookie with the problem heading
    setCookie("ProblemHeading", heading);
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

  const acceptProblem = async (problemId) => {
    const cookie = new Cookies();
    const NGOname = cookie.get("NGOname");
    const username = cookie.get("Username");
    await axios({
        url: `https://db-28im.onrender.com/problemNotSatisfied?problemId=${problemId}&NGOname=${username}`,
        method: "post"
    }).then((res => {
        if (res.data.success) {
            
        }
    })).catch(err => {
        console.log("error reason : ", err.message)
    })
};

  

  return (
    <div>
      <div className="PendingProblems">
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Composed Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {pendingProblems.map((problem, index) => (
              <a
                // to={{
                //   pathname: "/problemdescription?problemid="+problem._id,
                // }}
                // className="problem-container"
                href={"/problemdescription?problemid="+problem._id}
                style={{ textDecoration: "none", color: "black" }}
                key={index}
              >
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
                  <div style={{display : "flex", gap : "10px", alignItems : "center", flexWrap : "wrap"}}>
                      <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                          <div><img src={Location} alt="Images" width = "15px" height = ""/></div>
                          <div><p>{problem.area}</p></div>
                      </div>
                      <div style={{display : "flex", gap : "10px", alignItems : "center" }}>
                          <div style={{display : "flex", gap : "10px", alignItems : "center", }}>
                              <div><img src={Service} alt="Images" width = "20px" height = "20px"/></div>
                              <div><p>{problem.service}</p></div>
                          </div>
                      </div>
                  </div>
              </div>
              </a>
            ))}
          </div>
        </div>
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Pending Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {problems.map((problem, index) => (
              <a
                // to={{
                //   pathname: "/problemdescription",
                // }}
                // className="problem-container"
                href={"/problemdescription?problemid="+problem._id}
                style={{ textDecoration: "none", color: "black" }}
                key={index}
                onClick={() => handleClick(problem.ProblemHeading)} // Pass the problem heading to the handleClick function
              >
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
                    <div style={{display : "flex", gap : "10px", alignItems : "center"}}>
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
                    <div style={{display : "flex", gap : "10px", alignItems : "center"}}>
                        <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white"}}>
                            <p style={{marginLeft : "10px", marginRight : "10px"}}>{problem.user}</p>        
                        </div>
                        <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white"}}>
                            <p style={{marginLeft : "10px", marginRight : "10px"}}>{problem.NGOName}</p>
                        </div>
                    </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Completed Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {competedProblems.map((problem, index) => (
              <a
                // to={{
                //   pathname: "/problemdescription",
                // }}
                // className="problem-container"
                href={"/problemdescription?problemid="+problem._id}
                style={{ textDecoration: "none", color: "black" }}
                key={index}
                onClick={() => handleClick(problem.ProblemHeading)} // Pass the problem heading to the handleClick function
              >
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
                  <div style={{display : "flex", gap : "10px", alignItems : "center"}}>
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
                  <div style={{display : "flex", gap : "10px", alignItems : "center"}}>
                      <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white"}}>
                          <p style={{marginLeft : "10px", marginRight : "10px"}}>{problem.user}</p>        
                      </div>
                      <div style={{ borderRadius : "10px", backgroundColor : "rgb(77, 130, 226)", color : "white"}}>
                          <p style={{marginLeft : "10px", marginRight : "10px"}}>{problem.NGOName}</p>
                      </div>
                  </div>
                  <div>
                      <button onClick={() => acceptProblem(problem._id)} style={{ borderRadius : "10px", border : "transparent", fontWeight : "bolder" ,backgroundColor : "rgb(77, 130, 226)", color : "white", marginTop : "10px", outline : "none"}}>
                        <div>
                            <p style={{marginLeft : "10px", marginRight : "10px"}}>Not Satisfied</p>        
                        </div>
                      </button>
                  </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Problems;
