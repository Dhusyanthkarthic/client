import React from "react";
import HostHeader from "../hostheader/hostheader";
import Footer from "../Footer/Footer";
import Feed from "./Feed";

function HostProblemFeed(){
    return (
        <div>
            <HostHeader />
            <Feed />
            <Footer />
        </div>
    );
}

export default HostProblemFeed;

