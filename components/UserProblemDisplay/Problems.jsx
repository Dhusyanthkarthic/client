import React, { useEffect, useState } from "react";
import "./Problems.css";
import Location from "../../img/location.svg";
import Services from "../../img/service.svg";
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

  return (
    <div>
      <div className="PendingProblems">
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Composed Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {pendingProblems.map((problem, index) => (
              <Link
                to={{
                  pathname: "/problemdescription",
                }}
                className="problem-container"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
              >
                <div key={index}>
                  <div style={{ lineHeight: "0.8" }}>
                    <div className="Pending">
                      <h2>{problem.ProblemHeading}</h2>
                    </div>
                    {/* <div className="problemDescription">
                    <p>{problem.description}</p>
                    </div> */}
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
                      <div>{problem.area}</div>
                    </div>
                    <div className="problemServices">
                      <div>
                        <img
                          src={Services}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.service}</div>
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
                      <div style={{ fontSize: "24px" }}>{problem.user}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Pending Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {problems.map((problem, index) => (
              <Link
                to={{
                  pathname: "/problemdescription",
                }}
                className="problem-container"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
                onClick={() => handleClick(problem.ProblemHeading)} // Pass the problem heading to the handleClick function
              >
                <div key={index}>
                  <div style={{ lineHeight: "0.8" }}>
                    <div className="Pending">
                      <h2>{problem.ProblemHeading}</h2>
                    </div>
                    {/* <div className="problemDescription">
                    <p>{problem.description}</p>
                    </div> */}
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
                      <div>{problem.area}</div>
                    </div>
                    <div className="problemServices">
                      <div>
                        <img
                          src={Services}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.service}</div>
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
                        <div style={{ fontSize: "24px" }}>{problem.user}</div>
                        <div style={{fontSize : "24px"}}><img src={Ngo} alt="ngo" width = "20px" height = "20px"  style={{marginRight : "5px"}}/>{problem.NGOName}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Completed Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {competedProblems.map((problem, index) => (
              <Link
                to={{
                  pathname: "/problemdescription",
                }}
                className="problem-container"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
                onClick={() => handleClick(problem.ProblemHeading)} // Pass the problem heading to the handleClick function
              >
                <div key={index}>
                  <div style={{ lineHeight: "0.8" }}>
                    <div className="Pending">
                      <h2>{problem.ProblemHeading}</h2>
                    </div>
                    {/* <div className="problemDescription">
                    <p>{problem.description}</p>
                    </div> */}
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
                      <div>{problem.area}</div>
                    </div>
                    <div className="problemServices">
                      <div>
                        <img
                          src={Services}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.service}</div>
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
                        <div style={{ fontSize: "24px" }}>{problem.user}</div>
                        <div style={{fontSize : "24px"}}><img src={Ngo} alt="ngo" width = "20px" height = "20px"  style={{marginRight : "5px"}}/>{problem.NGOName}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Problems;
