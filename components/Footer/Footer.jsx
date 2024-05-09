// Footer.js
import React from "react";
import "./Footer.css"; // Correct import path to the CSS file

function Footer() {
    return (
            <footer className="FooterContainer">
                <div  className="FooterContent" style={{marginBottom : "30px",display: "flex", gap : "100px", alignItems : "center", justifyContent: "center"}}>
                    <div>
                        <h2 style={{color : "black", fontWeight : "700", fontSize : "40px"}}>AidNet</h2>
                    </div>
                    <div style={{lineHeight : "1", textAlign : "center"}}>
                        <div style={{marginBottom : "30px"}}>
                            <h2>Contents</h2>
                        </div>
                        <div>
                            <p>Home</p>
                            <p>Messaging</p>
                            <p>Analysis</p>
                            <p>Composing</p>
                        </div>
                    </div>
                    <div style={{lineHeight : "1", textAlign : "center"}}>
                        <div style={{marginBottom : "30px"}}>
                            <h2>Help</h2>
                        </div>
                        <div>
                            <p>Support</p>
                            <p>Contact Us</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy & Policy </p>
                        </div>
                    </div>
                    <div style={{lineHeight : "1", textAlign : "center"}}>
                        <div style={{marginBottom : "30px"}}>
                            <h2>Benefits</h2>
                        </div>
                        <div>
                            <p>Faster Reach</p>
                            <p>Quick Problem Solving</p>
                            <p>Analysis Of Problems</p>
                            <p>Transparency & Accountability</p>
                        </div>
                    </div>
                    <div style={{lineHeight : "1", textAlign : "center"}}>
                        <div style={{marginBottom : "30px"}}>
                            <h2>Social Media</h2>
                        </div>
                        <div>
                            <p>Instagram</p>
                            <p>LinkedIn</p>
                            <p>FaceBook</p>
                            <p>Whatsapp</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p style={{fontWeight : "700"}}>Any Query Email Us</p>
                            <div>
                                <input type="text" style={{width : "200px", height : "30px", borderRadius : "10px"}} />
                                <button style={{marginLeft : "10px", marginTop : "10px",padding: "10px 10px 10px 10px", backgroundColor :"#4d82e2", borderRadius : "10px", color : "white", fontWeight : "700", border : "transparent"}}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
