import React from "react"
import Styles from "./benefits.css"


function benefits(){
    return(
        <div className="benefitsContainer">
            <div className="benefitsheading">
                <h1 style={{fontWeight : "500", fontSize : "50px"}}>On this platform, we offer various benefits for your use</h1>
            </div>
            <div className="benefits">
                <div classame="benefit1" style={{backgroundColor : "#FFF9F3",width : "25%", paddingLeft: "30px", borderRadius : "30px",boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.4)" }}>
                    <h4>Networking Opportunities</h4>
                    <div style={{ width : "350px"}}>
                        <p>Connect with like-minded NGOs and professionals to share resources and collaborate on projects.</p>
                    </div>
                </div>
                <div classame="benefit1" style={{backgroundColor : "#FFF9F3" , width : "25%", paddingLeft: "30px", borderRadius : "30px",boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.4)" }}>
                    <h4>Resource Sharing</h4>
                    <div style={{ width : "350px"}}>
                        <p>Access a wealth of resources, including funding opportunities, toolkits, and best practices, to enhance your organization's impact.</p>
                    </div>
                </div>
                <div classame="benefit1" style={{backgroundColor : "#FFF9F3" , width : "25%", paddingLeft: "30px", borderRadius : "30px",boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.4)" }}>
                    <h4>Training and Workshops</h4>
                    <div style={{ width : "350px"}}>
                        <p>Participate in training sessions and workshops tailored to the needs of NGOs, covering topics such as fundraising, program management, and advocacy.</p>
                    </div>
                </div>
                <div classame="benefit1" style={{backgroundColor : "#FFF9F3" , width : "25%", paddingLeft: "30px", borderRadius : "30px",boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.4)" }}>
                    <h4>Visibility and Outreach</h4>
                    <div style={{ width : "350px"}}>
                        <p>Increase your organization's visibility and reach a wider audience through our platform's promotional features and networking events.</p>
                    </div>
                </div>
                <div classame="benefit1" style={{backgroundColor : "#FFF9F3" , width : "25%", paddingLeft: "30px", borderRadius : "30px",boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.4)" }}>
                    <h4>Partnership Opportunities</h4>
                    <div style={{ width : "350px"}}>
                        <p> Explore potential partnerships with other NGOs, corporate entities, and governmental organizations to amplify your impact and scale your initiatives.</p>
                    </div>
                </div>
                <div classame="benefit1" style={{backgroundColor : "#FFF9F3" , width : "25%", paddingLeft: "30px", borderRadius : "30px",boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.4)" }}>
                    <h4>Technical Support</h4>
                    <div style={{ width : "350px"}}>
                        <p>Receive technical assistance and guidance on using digital tools, implementing technology solutions, and optimizing your online presence for greater efficiency and impact.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default benefits;
