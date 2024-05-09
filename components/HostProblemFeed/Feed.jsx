import React, { useState, useEffect } from "react";
import "./Feed.css"
import User from "../../img/user.svg";
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";
import { Cookies } from "react-cookie";
import axios from "axios";

function Feed() {
    const [problems, setProblems] = useState([]);
    const [isDropdownClicked, setIsDropdownClicked] = useState(false);

    const fetchData = async () => {
        const cookie = new Cookies();
        const NGOname = cookie.get("NGOname");
        try {
            const res = await axios.get("https://db-28im.onrender.com/getServices", {
                params: { NGOname },
            });
            console.log(res)
            if (res.data.success) {
                const services = res.data.services;
                console.log(services);
                const pendingProblemsRes = await axios.get("https://db-28im.onrender.com/getPendingProblems");
                const pendingProblems = pendingProblemsRes.data;
                console.log(pendingProblemsRes);

                const hostProblems = pendingProblems.filter(problem =>
                    services.includes(problem.service)
                );
                setProblems(hostProblems);
            } else {
                console.log("Invalid credentials");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const acceptProblem = async (problemId) => {
        const cookie = new Cookies();
        const NGOname = cookie.get("NGOname");
        await axios({
            url: `https://db-28im.onrender.com/acceptProblem?problemId=${problemId}&NGOname=${NGOname}`,
            method: "post"
        }).then((res => {
            if (res.data.success) {
                fetchData()
            }
        })).catch(err => {
            console.log("error reason : ", err.message)
        })
    };

    return (
        <div className="FeedContainer">
            <div>
                <h1 style={{ textAlign: "left" }}>Problems Feed :</h1>
            </div>
            {problems.length > 0 ? (
                problems.map((problem, index) => (
                    <div className="FeedContent" key={index}>
                        <div>
                            <img src={User} alt="User" height="300px" width="300px" />
                        </div>
                        <div style={{ display: "block" }}>
                            <div className="ProblemFeedChoice">
                                <div>
                                    <h1 style={{ textAlign: "left", color: "white" }}>{problem.ProblemHeading}</h1>
                                </div>
                                <div className="FeedChoice">
                                    <button className="AcceptButton" onClick={() => acceptProblem(problem._id)}>Accept</button>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "60px" }}>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                    <div><img src={Location} alt="Location" height="30px" width="30px" /></div>
                                    <div><p style={{ fontWeight: "bolder", fontSize: "120%", color: "white" }}>{problem.area}</p></div>
                                </div>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                    <div><img src={Service} alt="Location" height="30px" width="30px" /></div>
                                    <div><p style={{ fontWeight: "bolder", fontSize: "120%", color: "white" }}>{problem.service}</p></div>
                                </div>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                    <div><img src={User} alt="Location" height="30px" width="30px" /></div>
                                    <div><p style={{ fontWeight: "bolder", color: "white", fontSize: "120%" }}>{problem.user}</p></div>
                                </div>
                            </div>
                            <div><p style={{ fontWeight: "bolder", textAlign: "left", fontSize: "18px", color: "white" }}>{problem.description}</p></div>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <h1>All tasks are assigned</h1>
                </div>
            )}
        </div>
    );
}

export default Feed;
