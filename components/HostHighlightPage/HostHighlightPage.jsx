import React from 'react'
import Styles from './HostHighlightPage.css'
import Analysis from "../../img/analysis.svg";


function HostHighlightPage(){
    return (
        <div className='HomeHighlightContainer'>
            <div>
                <div className="HHTitle">
                    <h1 className="HomeHighlightTitle">Connect to a make a positive change</h1>
                </div>
                <div className="HHSubtitle">
                    <p>Building Bridges, Inspiring Action: Harnessing the Power of Connection to Drive Meaningful and Lasting Positive Change in Our Communities and Beyond</p>
                </div>
                <div className="HHButtonContainer">
                    <div><a href="./hostfeed" ><button style={{ padding : "15px 15px 15px 15px", borderRadius : "30px", backgroundColor : "#4d82e2", color : "white", fontWeight : "400", fontWeight : "600",border : "transparent", fontSize : "120%" }}>Go To Feed</button></a></div>
                    <div>
                        <button style={{ padding : "15px 15px 15px 15px", borderRadius : "30px", backgroundColor : "#F480D4", border : "transparent", fontSize : "120%", color : "white", fontWeight : "400" , alignItems : "center"}}><img src = {Analysis} alt = "analysis" style={{height :"20px", width : "20px"}} /> View Analysis</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostHighlightPage;