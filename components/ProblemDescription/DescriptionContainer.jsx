import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./ProblemDescription.css";
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";
import User from "../../img/user.svg";

function DescriptionContainer() {
  // const [cookies] = useCookies(["ProblemHeading"]);
  // const problemHeading = cookies["ProblemHeading"];
  // const [problemDetails, setProblemDetails] = useState(null);

  // useEffect(() => {
  //   fetchProblemDetails();
  // }, []); // Fetch problem details only once when the component mounts

  // const fetchProblemDetails = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://db-28im.onrender.com/getProblemDetails?problemHeading=${problemHeading}`
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setProblemDetails(data);
  //     } else {
  //       console.error("Failed to fetch problem details");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching problem details:", error);
  //   }
  // };

  // Render problem details if available, otherwise render a loading message
  return (
    <div className="DescriptionContainer">
      <div style={{border : "solid 3px black", width : "70%", borderRadius : "20px"}}>
          <h1 style={{ paddingBottom: "5px" }}>Problem Heading</h1>
          <div className="DesProblemDetails">
            <div className="ProblemImages">
              <h1>Image1</h1>
            </div>
            <div className="DesotherDet">
              <div className="DesLoc">
                <div style={{ marginLeft: "10px" }}>
                  <img
                    src={Location}
                    alt="Location"
                    style={{ height: "23px", width: "23px" }}
                  />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    Erode
                  </p>
                </div>
              </div>
              <div className="DesLoc">
                <div style={{ marginLeft: "10px" }}>
                  <img
                    src={Service}
                    alt="Location"
                    style={{ height: "23px", width: "23px" }}
                  />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    Education
                  </p>
                </div>
              </div>
              <div className="DesLoc">
                <div style={{ marginLeft: "10px" }}>
                  <img
                    src={User}
                    alt="Location"
                    style={{ height: "23px", width: "23px" }}
                  />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    Hari
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ProblemDescription">
            <p>Description</p>
          </div>
        </div>
    </div>
  );
}

export default DescriptionContainer;
