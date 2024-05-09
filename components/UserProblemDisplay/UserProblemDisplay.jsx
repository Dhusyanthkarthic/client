import React from "react";
import UserHeader from "../UserHeader/Userheader";
import Footer from "../Footer/Footer";
import Problems from "./Problems";


function UserProblemDisplay(){
    return (
        <div>
            <UserHeader />
            <Problems />
            <Footer />
        </div>
    );
}

export default UserProblemDisplay;