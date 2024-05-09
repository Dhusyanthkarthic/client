import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./ProblemDescription.css";
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";
import User from "../../img/user.svg";
import axios from "axios";

function DescriptionContainer() {
  // const [cookies] = useCookies(["ProblemHeading"]);
  // const problemHeading = cookies["ProblemHeading"];
  const [problemDetails, setProblemDetails] = useState([]);

  // useEffect(() => {
  //   fetchProblemDetails();
  // }, []); // Fetch problem details only once when the component mounts

  // const fetchProblemDetails = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://db-28im.onrender.com/getProblemDetails?problemHeading`=${problemHeading}`
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
  const problemId = window.location.href.split("?")[1].split("=")[1].replaceAll("%20"," ");

  useEffect(() => {
    fetchProblemDetails();
  }, []);

  const fetchProblemDetails = async () => {
    try{
      // const response = await axios (
      //   `https://db-28im.onrender.com/getProblem?problemid=${problemId}`
      // );
      const response = await axios.get("https://db-28im.onrender.com/getProblem", {
            params: { problemId }
      });
      if(response.data){
        // const data = await  response.json();
        console.log(response.data);
        setProblemDetails(response.data);
      }else{
        console.error("Failed to fetch problem details");
      }
    }catch(err){
      console.log(err + "Error in fetching");
    }
  }

  return (
    <div className="PContainer">
      <div className="ProblemDetailsContainer">
        <div className="ProblemDescription">
          <div>
            <img src={problemDetails.file_url} alt ="ProblemImage" width ="400px" height="400px"/>
          </div>
          <div className="problemDetails">
            <div>
              <h1>{problemDetails.ProblemHeading}</h1>
            </div>
            <div className="ProblemDescriptionContainer">
              {problemDetails.description}
            </div>
            <div className="problemServiceLocation">
              <div className="problemServiceContainer">
                <div><img src={Service} alt="service" width="25px" height="25px"/></div>
                <div>{problemDetails.service}</div>
              </div>
              <div className="problemLocationContainer">
                <div><img src={Location} alt="service" width="20px" height="20px"/></div>
                <div>{problemDetails.area}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionContainer;
