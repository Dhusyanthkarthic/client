import React, { useState, useEffect } from "react";
import Styles from "./SignUp.css";
import Email from "../../img/email.svg";
import Password from "../../img/password.svg";
import axios from "axios";

function SignUp() {
    const [printedSlogan, setPrintedSlogan] = useState("");
    const [printedSubtext, setPrintedSubtext] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sloganText = "Your gateway to make a difference";
        const interval = setInterval(() => {
            setPrintedSlogan(sloganText.substring(0, currentIndex + 1));
            setCurrentIndex(prevIndex => prevIndex + 1);
            if (currentIndex === sloganText.length - 1) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const [selectedOption, setSelectedOption] = useState("User");

    const handleSelectedOption = event => {
        setSelectedOption(event.target.value);
    };

    function handleSignUp() {
        if (selectedOption === "User") {
            sendUserData();
        } else if (selectedOption === "Host") {
            sendHostData();
        }
    }

    async function sendUserData(){
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var DOB = document.getElementById("DOB").value;
        var gender = document.getElementById("gender").value;
        var Address = document.getElementById("Address").value;
        var email = document.getElementById("email").value;
        var phonenumber = document.getElementById("Phonenumber").value;
        var password = document.getElementById("Password").value;
        var user  = "user";

        await axios({
            url : "https://db-28im.onrender.com/storeuserdata",
            method : "get",
            params : {firstname, lastname, DOB, gender, Address, email, phonenumber, password, user}
        }).then((res => {
            if (res.data.success) {
                alert("data stored successfully")
            }
        })).catch(err => {
            console.log("error reason : ",err.message)
        })
    }

    async function sendHostData(){
        var ngoname = document.getElementById("NGOName").value;
        var Address = document.getElementById("NGOAddress").value;
        var phonenumber = document.getElementById("Phonenumber").value;
        var email = document.getElementById("email").value;
        var websitelink = document.getElementById("websitelink").value;
        var socialmedialink = document.getElementById("socialmedialink").value;
        var area1 = document.getElementById("Area1").value;
        var area2 = document.getElementById("Area2").value;
        var area3 = document.getElementById("Area3").value;
        var area4 = document.getElementById("Area4").value;
        var area5 = document.getElementById("Area5").value;
        var area6 = document.getElementById("Area6").value;
        var services1 = document.getElementById("services1").value;
        var services2 = document.getElementById("services2").value;
        var services3 = document.getElementById("services3").value;
        var services4 = document.getElementById("services4").value;
        var services5 = document.getElementById("services5").value;
        var services6 = document.getElementById("services6").value;
        var password = document.getElementById("Hostpassword").value;
        var host = "host";

        await axios({
            url : "https://db-28im.onrender.com/storehostdata",
            method : "get",
            params : {ngoname, Address, password, phonenumber, email, websitelink, socialmedialink, area1, area2, area3, area4, area5, area6,services1, services2, services3, services4, services5, services6, host }
        }).then((res => {
            if (res.data.success) {
                alert("data stored successfully")
            }
        })).catch(err => {
            console.log("error reason : ",err.message)
        })


    }


    return (
        <div className="SignUpContainer" >
            <div className="SignUpContent">
                <div>
                    <div className="SelectType">
                        <div style={{display: "flex", alignItems : "center", gap : "2px"}}>
                            <input type="radio" name="type" value="User" checked={selectedOption === "User"} onChange={handleSelectedOption} />
                            <label htmlFor="user">User</label>
                        </div>
                        <div style={{display: "flex", alignItems : "center", gap : "2px"}}>
                            <input type="radio" name="type" value="Host" checked={selectedOption === "Host"} onChange={handleSelectedOption} />
                            <label htmlFor="host">Host</label>
                        </div>
                    </div>

                    {selectedOption === "Host" && (
                        <form action="">
                            <div className="HostDetails">
                                <div className="HostDetailsInfo">
                                    <div className="HostDetailsHeading">
                                        <p style={{textAlign: "center"}}>NGO Details</p>
                                    </div>
                                    <div className="NGOName">
                                        <div>NGO Name : <input type="text" placeholder = "NGO Name" name = "NGOName" id = "NGOName" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}} /></div>  
                                        <div style={{marginTop : "10px", alignItems: "center", display : "flex", gap : "10px", justifyContent : "center"}}>
                                            <div>Address : </div>
                                            <div><textarea type="text" id="NGOAddress" style={{borderRadius : "10px", border : "solid 2px",width: "359px", height: "117px" }}/></div>
                                        </div>                              
                                    </div>
                                    <div className="HostDetailsHeading">
                                        <p style={{textAlign: "center"}}>Area Of Operation</p>
                                    </div>
                                    <div className="Services" style={{width : "600px"}}>
                                        <div style={{display : "flex", gap : "10px"}}>
                                            <div>
                                                Area 1 :
                                            </div>
                                            <div>
                                                <select name="Area" id="Area1" style={{width : "100px"}}>
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
                                        <div style={{display : "flex", gap : "10px"}}>
                                            <div>
                                                Area 2 :
                                            </div>
                                            <div>
                                                <select name="Area" id="Area2" style={{width : "100px"}}>
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
                                        <div style={{display : "flex", gap : "10px"}}>
                                            <div>
                                                Area 3 :
                                            </div>
                                            <div>
                                                <select name="Area" id="Area3" style={{width : "100px"}}>
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
                                        <div style={{display : "flex", gap : "10px"}}>
                                            <div>
                                                Area 4 :
                                            </div>
                                            <div>
                                                <select name="Area" id="Area4" style={{width : "100px"}}>
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
                                        <div style={{display : "flex", gap : "10px"}}>
                                            <div>
                                                Area 5 :
                                            </div>
                                            <div>
                                                <select name="Area" id="Area5" style={{width : "100px"}}>
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
                                        <div style={{display : "flex", gap : "10px"}}>
                                            <div>
                                                Area 6 :
                                            </div>
                                            <div>
                                                <select name="Area" id="Area6" style={{width : "100px"}}>
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
                                    </div>
                                    
                                    <div className="HostService">
                                        <div className="PersonalInfoHeading">
                                            <p style={{textAlign: "center"}}>NGO Services</p>
                                        </div>
                                        <div style={{display : "flex", gap : "40px", justifyContent: "center", flexWrap : "wrap"}}>
                                            <div style={{display : "flex", gap : "10px", justifyContent : "center"}}>
                                                <div>Service 1 : </div>
                                                <select name="services" id="services1" style={{width : "100px"}}>
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
                                            <div style={{display : "flex", gap : "10px", justifyContent : "center"}}>
                                                <div>Service 2 : </div>
                                                <select name="services" id="services2" style={{width : "100px"}}>
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
                                            <div style={{display : "flex", gap : "10px", justifyContent : "center"}}>
                                                <div>Service 3 : </div>
                                                <select name="services" id="services3" style={{width : "100px"}}>
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
                                            <div style={{display : "flex", gap : "10px", justifyContent : "center"}}>
                                                <div>Service 4 : </div>
                                                <select name="services" id="services4" style={{width : "100px"}}>
                                                        <option value="Humanitarian ">Humanitarian</option>
                                                        <option value="Healthcare">Healthcare</option>
                                                        <option value="Education ">Education </option>
                                                        <option value="Environmental ">Education </option>
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
                                            <div style={{display : "flex", gap : "10px", justifyContent : "center"}}>
                                                <div>Service 5 : </div>
                                                <select name="services" id="services5" style={{width : "100px"}}>
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
                                            <div style={{display : "flex", gap : "10px", justifyContent : "center"}}>
                                                <div>Service 6 : </div>
                                                <select name="services" id="services6" style={{width : "100px"}}>
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
                                    </div>
                                    <div className="HContactDetails">
                                        <div className="HContactDetailsHeading">
                                            <p style={{textAlign: "center"}}>NGO Contact Details</p>
                                        </div>
                                        <div style={{display : "flex", gap : "20px", flexWrap : "wrap", justifyContent : "center"}}>
                                            <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Phone Number :</p> <input type="text" name="NGOPhoneNumber" placeholder = "Phone Number" id="Phonenumber" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                            <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Email Address : </p><input type="email" name="Email" placeholder = "Email Number" id="email" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                            <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Website :</p> <input type="text" name="website" placeholder = "Website"  id="websitelink" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                            <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Social Media : </p><input type="text" name="Social-Media" placeholder = "Social Media" id="socialmedialink" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                        </div>
                                        <div className="NGOPhotoVerification">
                                            <div className="HNGOPhotoVerificationHeading">
                                                <p style={{textAlign: "center"}}>NGO Photo Verification</p>
                                            </div>
                                            <div>
                                                <input type="file"  style={{ padding : "20px 20px 20px 20px"}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="HContactDetails">
                                        <div className="HContactDetailsHeading">
                                            <p style={{textAlign: "center"}}>Host Authentication</p>
                                        </div>
                                        <div>
                                            Password :  <input type="password" name="password" placeholder = "password" id="Hostpassword" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                    {selectedOption === "User" && (
                        <form action="">
                            <div className="UserDetails">
                                <div className="PersonalInfo">
                                    <div className="PersonalInfoHeading">
                                        <p style={{textAlign: "center"}}>Personal Info</p>
                                    </div>
                                    <div className="UName">
                                        <div>FirstName : <input type="text" placeholder = "First Name" id="firstname" name = "firstname" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}} /></div>
                                        <div>LastName : <input type="text" placeholder = "Last Name" id ="lastname" name = "lastname" style={{height : "30px",border: "solid 2px", borderRadius : "10px"  , width : "200px",outline : "none"}} /></div>
                                    </div>
                                    <div className="DOB-Gender">
                                        <div>Date Of Birth : <input type="date" placeholder="DOB" id = "DOB" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}} /></div>
                                        <div style={{display : "flex",gap : "10px"}}>
                                            Gender : 
                                            <div><input type="radio" name = "gender" id = "gender" value = "Male" /> Male</div>
                                            <div><input type="radio" name = "gender" id = "gender" value = "Female" /> Female</div>
                                            <div><input type="radio" name = "gender" id = "gender" value = "Others" /> Others</div>
                                        </div>
                                    </div>
                                    <div className = "Address">
                                        <div>Address : </div>
                                        <div><textarea type="text" id= "Address" style={{borderRadius : "10px", border : "solid 2px",width: "359px", height: "117px" }}/></div>
                                    </div>
                                </div>
                                <div className="UContactDetails">
                                    <div className="ContactDetailsHeading">
                                        <p style={{textAlign: "center"}}>Contact Details</p>
                                    </div>
                                    <div className="Email-ph">
                                        <div className="Email">
                                            <div><p>Email : </p></div>
                                            <div><input type="email" placeholder= "Email" id ="email" style={{width : "200px", height: "30px",borderRadius : "10px", border : "solid 2px" }}/></div>
                                        </div>
                                        <div className="PhoneNumber">
                                            <div><p>PhoneNumber : </p></div>
                                            <div><input type="number" placeholder= "Email" id="Phonenumber" style={{width : "200px", height: "30px",borderRadius : "10px", border : "solid 2px" }}/></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="UPassWord">
                                            <p style={{textAlign: "center"}}>Create Password</p>
                                        </div>
                                        <div className="Password">
                                            <div><p>Password : </p></div>
                                            <div><input type="password" placeholder= "Password" id= "Password" style={{width : "200px", height: "30px",borderRadius : "10px", border : "solid 2px" }}/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                    <div style={{marginTop : "10px"}}>
                        <button onClick={handleSignUp} style={{height : "40px", width : "150px", borderRadius : "10px", backgroundColor : "#3A30BA", color : "white", border: "transparent", fontWeight : "bolder"}}>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="SignUpSlogan">
                <div className="SloganContainer">
                    <h1 className="Slogan">{printedSlogan}</h1>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
