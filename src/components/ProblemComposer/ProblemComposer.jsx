import React from "react";
import "./ProblemComposer.css";
import Log from "../../img/log.svg";
import Register from "../../img/register.svg";
import HeadingImg from "../../img/heading.svg";
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";
import Description  from "../../img/description.svg";
// import ImageUpload from "../ImageUpload/ImageUpload";
import UploadImage from "../../img/upload.svg";
import { useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import {Cloudinary} from "@cloudinary/url-gen";

const cookie = new Cookies();

const CLOUD_NAME = "djck5oo7x";
const UPLOAD_PRESET = "CHECK2";

function ProblemComposer(){
    const cld = new Cloudinary({cloud: {cloudName: 'djck5oo7x'}});  
    
    
    const [file, setFile] = useState(null);
    const username = cookie.get("Username");
    async function handleProblems(){
        var ProblemHeading = document.getElementById("Problem").value;
        var area = document.getElementById("Area").value;
        var service = document.getElementById("services").value;
        var user = username;
        var description = document.getElementById("description").value;
        const filename = file ? file.name : "";
        var ProblemStatus = 0;
        
        console.log("Selected File:", file);

        await axios({
            url : "https://db-28im.onrender.com/storeComposedProblems",
            method : "get",
            params : {ProblemHeading, area, service, user, description, file, ProblemStatus}
        }).then((res => {
            if (res.data.success) {
                // alert("data stored successfully")
                window.location.href = "/composedproblems";
            }
        })).catch(err => {
            console.log("error reason : ",err.message)
        })
        
    }

    const handleFile = async (e) => {

        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("cloud_name", CLOUD_NAME);
        formData.append("upload_preset", UPLOAD_PRESET);
        try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
            {
              method: "POST",
              body: formData
            },
          );
          console.log("success")
          alert("image uploaded successfully");
          const data = await response.json()
          setFile(data.url)
        } catch (err) {
            console.log("Console : ", err.message)
            alert("error in uploading image")
        }
    }

    return (
        <div>
            <div className="Problemcontainer">
                <div className="forms-container">
                    <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Problem Details</h2>
                        <div className="input-field" style={{display : "flex", justifyContent : "left", alignItems : "center", gap : "10px"}}>
                            <div style={{marginLeft : "10px"}}><img src={HeadingImg} alt="Heading" style={{width : "25px", height : "25px"}}/></div>
                            <div><input type="text" placeholder="Problem Heading" id = "Problem"/></div>
                        </div>
                        <div className="input-field" style={{display : "flex", justifyContent : "left", alignItems : "center", gap : "10px"}}>
                        <div style={{marginLeft : "10px"}}><img  src={Location} alt="location" style={{width : "25px", height : "25px"}}/></div>
                        <div className="district">
                            <select name="Area" id="Area" style={{width : "300px", borderColor : "transparent", background : "transparent", fontSize : "1.1rem", outline : "none"}}>
                                    <option value="Ariyalur">Ariyalur</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Coimbatore">Coimbatore</option>
                                    <option value="Cuddalore">Cuddalore</option>
                                    <option value="Dharmapuri">Dharmapuri</option>
                                    <option value="Dindigul">Dindigul</option>
                                    <option value="Erode">Erode</option>
                                    <option value="Kallakurichi">Kallakurichi</option>
                                    <option value="Kancheepuram">Kancheepuram</option>
                                    <option value="Kanyakumari">Kanyakumari</option>
                                    <option value="Karur">Karur</option>
                                    <option value="Krishnagiri">Krishnagiri</option>
                                    <option value="Madurai">Madurai</option>
                                    <option value="Nagapattinam">Nagapattinam</option>
                                    <option value="Namakkal">Namakkal</option>
                                    <option value="Nilgiris">Nilgiris</option>
                                    <option value="Perambalur">Perambalur</option>
                                    <option value="Pudukkottai">Pudukkottai</option>
                                    <option value="Ramanathapuram">Ramanathapuram</option>
                                    <option value="Ranipet">Ranipet</option>
                                    <option value="Salem">Salem</option>
                                    <option value="Sivaganga">Sivaganga</option>
                                    <option value="Tenkasi">Tenkasi</option>
                                    <option value="Thanjavur">Thanjavur</option>
                                    <option value="Theni">Theni</option>
                                    <option value="Thoothukudi">Thoothukudi (Tuticorin)</option>
                                    <option value="Tiruchirappalli">Tiruchirappalli (Trichy)</option>
                                    <option value="Tirunelveli">Tirunelveli</option>
                                    <option value="Tirupathur">Tirupathur</option>
                                    <option value="Tiruppur">Tiruppur</option>
                                    <option value="Tiruvallur">Tiruvallur</option>
                                    <option value="Tiruvannamalai">Tiruvannamalai</option>
                                    <option value="Tiruvarur">Tiruvarur</option>
                                    <option value="Vellore">Vellore</option>
                                    <option value="Viluppuram">Viluppuram</option>
                                    <option value="Virudhunagar">Virudhunagar</option>
                                </select>      
                            </div>   
                                              
                        </div>
                        <div className="input-field" style={{display : "flex", justifyContent : "left", alignItems : "center", gap : "10px"}}>
                            <div style={{marginLeft : "10px", paddingTop : "5px"}}><img src={Service} alt="Services" style={{width : "25px", height : "25px"}}/></div>
                            <div>
                                <select name="services" id="services" style={{width : "300px", borderColor : "transparent", background : "transparent", fontSize : "1.1rem", outline : "none"}}>
                                    <option value="Humanitarian ">Humanitarian</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education ">Education </option>
                                    <option value="Environmental ">Environmental </option>
                                    <option value="Community ">Community </option>
                                    <option value="Human Rights ">Human Rights </option>
                                    <option value="Empowerment Programs ">Empowerment Programs </option>
                                    <option value="Disaster Preparedness ">Disaster Preparedness </option>
                                    <option value="Research and Policy Advocacy ">Research and Policy Advocacy </option>
                                    <option value="Crisis Intervention  ">Crisis Intervention  </option>
                                    <option value="Awareness Campaigns ">Awareness Campaigns </option>
                                    <option value="Conflict Resolution ">Conflict Resolution </option>
                                </select>
                            </div>
                        </div>
                        <div className="input-field" style={{display : "flex", justifyContent : "left", alignItems : "center", gap : "10px", height : "250px", width : "auto"}}>
                            <div style={{marginLeft : "10px"}}><img src={Description} alt="Description" style={{width : "25px", height : "25px"}}/></div>
                            <div><textarea type="text" placeholder="Problem Description" id = "description" style={{height : "200px", width : "320px"}} /></div>
                        </div>
                        <div className="ImageUpload" style={{display : "flex", justifyContent : "left", alignItems : "center", gap : "10px", height : "70px"}}>
                            <label style={{display : "flex", gap : "10px", fontSize : "20px"}} htmlFor="fileInput" className="fileInputLabel">
                                <div><img src={UploadImage} alt="Image Upload" style={{height : "25px", width : "25px"}}/></div>
                                <div>Upload Image</div>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                style={{ display: "none" }} 
                                onChange={handleFile}
                            />
                        </div>
                        <button onClick={handleProblems} style = {{backgroundColor : "#4d84e2", color : "white"}} className="btn solid">Submit Problem</button>
                    </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3 style={{color : "white"}}>Wanna View Composed Problems ?</h3>
                            <p style={{color : "white"}}>
                                Our website helps the user to react out the problems they face to the NGO's. We fasten the process of solving social issues.
                            </p>
                            <a href="/composedproblems" ><button style={{color : "white", border : "1px solid white", width : "auto  "}} className="btn transparent" id="sign-up-btn">
                                View Composed Problems
                            </button></a>
                        </div>
                        <img src={Log} className="image" alt="" />
                    </div>
                </div>
                </div>

                {/* <script src="./app.js">
                    
                </script> */}
        </div>
    );
}

export default ProblemComposer;