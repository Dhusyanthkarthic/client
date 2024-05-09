//#FFF9F3
import React from "react";
import Styles from "./HostFeature.css";
import analysis from "../../img/host_analysis.png"
import Right from "../../img/hand-right.svg"

function HostFeature({ title, subtitle, line1, line2, line3, img, order}){
    return(
        <div className="FeatureContainer">
            <div style={{ order : order}}>
                <div><p className="HHFeatureTitle">{title}</p></div>
                <div><p className="HHFeatureSubContent">{subtitle}</p></div>
                <div>
                    <div style={{display: "flex", gap : "10px", alignItems : "center"}}>
                        <div>
                            <img src={Right} alt = "Hand Right"  style={{height : "20px", width : "20px"}}/>
                        </div>
                        <div>
                            <p style={{fontWeight : "600"}}>{line1}</p>
                        </div>
                    </div>
                    <div style={{display: "flex", gap : "10px", alignItems : "center"}}>
                        <div>
                            <img src={Right} alt = "Hand Right"  style={{height : "20px", width : "20px"}}/>
                        </div>
                        <div>
                            <p style={{fontWeight : "600"}}>{line2}</p>
                        </div>
                    </div>
                    <div style={{display: "flex", gap : "10px", alignItems : "center"}}>
                        <div>
                            <img src={Right} alt = "Hand Right"  style={{height : "20px", width : "20px"}}/>
                        </div>
                        <div>
                            <p style={{fontWeight : "600"}}>{line3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop : "40px"}} >
                <img src={img} alt = "" style={{width : "700px", height : "500px"}} />
            </div>
        </div>
    );
}

export default HostFeature;