import React from "react"
import Styles from "./Service.css"
import arrow from "../../img/arrow.svg";

function Service(){
    return(
        <div className = "Service">
            <p style={{textAlign: "center", fontSize : "25px", fontWeight : "400"}}>Service We Provide</p>
            <div style={{display : "flex", gap : "20px", justifyContent: "center"}}>
                <div className="ServiceContainer1" style={{height : "auto"}}>
                    <p>Empower your NGO to connect with supporters globally by seamlessly accepting payments through our social networking platform</p>
                    <button style={{marginBottom : "10px", border: "transparent", backgroundColor : "#FAEA73", fontSize : "15px"}}>
                        <div style={{display : "flex", alignContent : "center", gap : "5px"}}>
                            <div>Learn More</div>
                            <div><img src={arrow} alt="arrow"  style={{height : "15px", width : "15px"}}/></div>
                        </div>
                    </button>
                </div>
                <div className="ServiceContainer2" style={{height : "auto"}}>
                    <p>With our integrated payment system, your NGO can reach donors worldwide, fostering a stronger community and greater impact. Say goodbye to barriers and hello to effortless giving on our platform.</p>
                    <button style={{marginBottom : "10px", border: "transparent", backgroundColor : "#CCEFF6", fontSize : "15px"}}>
                        <div style={{display : "flex", alignContent : "center", gap : "5px"}}>
                            <div>Learn More</div>
                            <div><img src={arrow} alt="arrow"  style={{height : "15px", width : "15px"}}/></div>
                        </div>
                    </button>
                </div>
                <div className="ServiceContainer3" style={{height : "auto"}}>
                    <p>Forge meaningful connections and drive impactful change with our end-to-end networking solution tailored specifically for NGOs.</p>
                    <button style={{marginBottom : "10px", border: "transparent", backgroundColor : "#F7CEDC", fontSize : "15px"}}>
                        <div style={{display : "flex", alignContent : "center", gap : "5px"}}>
                            <div>Learn More</div>
                            <div><img src={arrow} alt="arrow"  style={{height : "15px", width : "15px"}}/></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Service;