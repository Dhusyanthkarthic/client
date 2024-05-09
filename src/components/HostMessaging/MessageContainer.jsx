import React, { useEffect, useState } from "react";
import "./HostMessaging.css";
import Send from "../../img/PaperPlane.svg";
import { Cookies } from "react-cookie";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function MessageContainer() {
    const cookie = new Cookies();
    const [messages, setMessages] = useState([
        {user:"you",message:"How are you"}
    ])
    const NGOname = cookie.get("NGOname");
    const username = window.location.href.split("?")[1].split("=")[1].replaceAll("%20"," ");
    const roomid = [username, NGOname].sort().join("");
    useEffect(() => {   
        socket.emit("JOIN_ROOM", )
        socket.on("receive", ({msg, user}) => {
            setMessages((prev) => [...prev, {
                message:msg, user,roomid
            }])
        })
    }, [])

    const sendMessge = () => {
        socket.emit("send", {msg: document.getElementById("msg").value,user:NGOname})
    }

    return (
        <div style={{marginTop : "5%"}}>
            <div className="MCContainer">
                <div style={{marginBottom : "0px", paddingTop : "10px"}}>
                    <h1 style={{color : "#4c4c4c"}}>Start Messaging to {username}</h1>
                </div>
                <div className="MessageScrollableHost">
                    {messages.map((m,i) => { 
                        return <p>
                            {m.message} - {m.user}
                        </p>
                    })}
                </div>
                <div className="MCInput">
                    <div>
                        <input id="msg" style={{outline : "none", background : "transparent", border: "transparent", width :"500px", padding : "10px 10px 10px 10px"}} width = "500px" placeholder = "Enter Message......" />
                    </div>
                    <div>
                        <button onClick={sendMessge} style={{padding : "8px 8px 8px 8px", borderRadius : "50%", background: "white"}}>
                            <div>
                                <img src={Send} alt="Images" width = "20px" height="20px" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageContainer;