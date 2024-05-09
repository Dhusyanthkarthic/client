import React, { useState, useEffect } from "react";
import Styles from "./Login.css";
import Email from "../../img/email.svg";
import Password from "../../img/password.svg";
import { Cookies } from "react-cookie";
import axios from "axios";
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";
const cookie = new Cookies();

function Login() {
    const [printedSlogan, setPrintedSlogan] = useState("");
    const [printedSubtext, setPrintedSubtext] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [NGOName, setNGOName] = useState(""); // State to store NGOName

    // Function to animate slogan text
    useEffect(() => {
        const sloganText = "Your gateway to make a difference";
        const interval = setInterval(() => {
            setPrintedSlogan(sloganText.substring(0, currentIndex + 1));
            setCurrentIndex((prevIndex) => prevIndex + 1);
            if (currentIndex === sloganText.length - 1) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Function to send login data to server
    async function sendData() {
        var name = document.getElementById("name").value;
        var pwd = document.getElementById("pwd").value;

        await axios({
            url: "https://db-28im.onrender.com/checkdata",
            method: "get",
            params: { name, pwd },
        })
            .then((res) => {
                if (res.data.success) {
                    if (res.data.type === "host") {
                        // Function to get host data
                        async function getHostData(){
                            console.log("function called")
                            await axios({
                                url : "https://db-28im.onrender.com/getNGOName",
                                method : "get",
                                params : {name},
                            })
                            .then((result) =>{
                                console.log("result came ", result)
                                if(result.data.success){
                                    const ngoname = result.data.NGOName;
                                    cookie.set("NGOname", ngoname);
                                    console.log(ngoname);
                                }
                            }) .catch((err) => {
                                console.log(err.message);
                            })
                        }
                        getHostData();
                        window.location.href = "/host";
                    } else if (res.data.type === "user") {
                        // Function to get user data
                        async function getUserData(){
                            await axios({
                                url : "https://db-28im.onrender.com/getUserName",
                                method : "get",
                                params : {name},
                            }).then((result) => {
                                if(result.data.success){
                                    const username = result.data.Firstname + " " + result.data.Lastname;
                                    const firstname = result.data.Firstname;
                                    cookie.set("Firstname", firstname);
                                    cookie.set("Username", username);
                                    console.log(username)
                                }
                            }).catch((err) => {
                                console.log(err.message);
                            })
                        }
                        getUserData();
                        window.location.href = "/userlandingpage";
                    }
                } else {
                    console.log("Invalid credentials");
                }
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    }


    return (
        // <div className="LoginContainer">
        //     <div className="LoginSlogan">
        //         <h1 className="Slogan">{printedSlogan}</h1>
        //     </div>
        //     <div className="LoginContent">
        //         <div>
        //             <h1 style={{ fontSize: "80px", marginBottom: "10px" }}>Aidnet</h1>
        //         </div>
        //         <div className="Username">
        //             <img src={Email} alt="Username" style={{ height: "50px", width: "50px" }} />
        //             <input type="text" id="name" placeholder="Username" style={{ width: "400px", height: "50px", border: "transparent", backgroundColor: "white", outline: "none" }} />
        //         </div>
        //         <div className="Password">
        //             <img src={Password} alt="Username" style={{ height: "50px", width: "50px" }} />
        //             <input type="password" id="pwd" placeholder="Password" style={{ width: "400px", height: "50px", border: "transparent", outline: "none" }} />
        //         </div>
        //         <div className="LoginButton">
        //             <button onClick={sendData} style={{ width: "400px", height: "35px", color: "white", backgroundColor: "#4d82e2", borderRadius: "5px", marginLeft: "50px" }}>Login</button>
        //         </div>
        //         <div className="LoginOthers">
        //             <a href="/TermsConditions" style={{textDecoration : "none", color : "black"}}><input type="checkbox" required/>I Agree to Terms and Conditions</a>
        //             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
        //                 <p>Didn't Have an account?</p><a href="../SignUp/SignUp.jsx" style={{ textDecoration: "none", color: "black" }}>Register Now!</a>
        //             </div>
        //             <a href="#" style={{ textDecoration: "none", color: "black" }}> Forgot Password </a>
        //         </div>
        //         <p>Don't have an account ? <a href="/signup">Signup here</a></p>
        //     </div>
        // </div>
        
        <div className="LoginWrapper">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            {/* Login Form */}
            <div class="container" id="container">
                <div class="form-container sign-in">
                    <h1 style={{marginBottom : "50px", marginTop : "80px"}}>Sign In</h1>
                    <input type="email" id="name" placeholder="Email"/>
                    <input type="password" id="pwd" placeholder="Password" />
                    <div>
                        <a href="#" style={{marginRight : "10px"}}>Forget Your Password?</a>
                        <button onClick={sendData}>Sign In</button>
                    </div>
                    <div>
                        <div className="LoginOthers">
                            <div>
                                <div>
                                    {/* Checkbox for terms and conditions */}
                                    <a href="/TermsConditions" style={{textDecoration : "none", color : "black"}}>
                                        <div style={{display : "flex", alignItems : "center", gap : "5px", justifyContent : "center"}}>
                                            <div><input type="checkbox" required /></div>
                                            <div>Agree On Terms and Conditions</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Toggle for sign in or sign up */}
                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button class="hidden" id="login">Sign In</button>
                        </div>
                        <div class="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <a href="/signup" style={{textDecoration : "none", color : "white"}}><button class="hidden" id="register">Sign Up</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;