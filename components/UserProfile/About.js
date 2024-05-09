import React from "react";
import Mukil from "../../img/Mukil.jpg";

const About = () => {
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Mukil} alt="User"/>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Mukilarasan V</h5>
                                <h6>Web Developer</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span>1/10</span></p>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li class="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">TimeLine</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <input type="Submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                        </div>

                        <div ClassName="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>Website</p>
                                    <a href="https://linktr.ee/themukil" target="_mukil">Website</a><br/>
                                </div>

                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default About