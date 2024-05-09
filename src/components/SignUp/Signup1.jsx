import React, { useState, useEffect } from "react";
import Styles from "./SignUp.css";
import Email from "../../img/email.svg";
import Password from "../../img/password.svg";

function Login() {
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


    return (
        <div className="SignUpContainer">
            <div className="SignUpPageContainer" style={{order : "2"}}>
                <div>
                    <div className="SelectType">
                        <div>
                            <input type="radio" name="type" value="User" checked={selectedOption === "User"} onChange={handleSelectedOption} />
                            <label htmlFor="user">User</label>
                        </div>
                        <div>
                            <input type="radio" name="type" value="Host" checked={selectedOption === "Host"} onChange={handleSelectedOption} />
                            <label htmlFor="host">Host</label>
                        </div>
                    </div>

                    {selectedOption === "Host" && (
                        <div>
                            <div className="NGOName">
                                name
                            </div>
                            <div className="Service">
                                Host Content: Services
                            </div>
                            <div className="ContactDetails"> {/* Phone number, email, website, social media handles */}
                                Host Content: Contact Details
                            </div>
                            <div className="PhotosVerification">
                                Host Content: Photos Verification
                            </div>
                            <div className="BranchName"> {/* Address */}
                                Host Content: Branch Name
                            </div>
                        </div>
                    )}
                    {selectedOption === "User" && (
                        <div>
                            <div className="Name">
                                Name : <input type="text" placeholder="Name" style={{border : "transparent", outline : "none"}} />
                            </div>
                            <div className="Email">
                                User Content: Email
                            </div>
                            <div className="Mobile">
                                User Content: Mobile
                            </div>
                            <div className="DOB">
                                User Content: Date of Birth
                            </div>
                            <div className="Gender"> {/* Male, Female, Custom RatherNotToSay */}
                                User Content: Gender
                            </div>
                            <div className="Address">{/* Street, city, state, pincode, country */}
                                User Content: Address
                            </div>
                            <div className="Password">
                                User Content: Password
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="SignUpSlogan" >
                <h1 className="SignSlogan">{printedSlogan}</h1>
            </div>
        </div>
    );
}

export default Login;
