import React from "react";
import Header from "../UserHeader/Userheader";
import UserProfilePage from "../UserProfilePage/userprofilepage";
import Footer from "../Footer/Footer";


function UserProfile(){
    return (
        <div>
            <Header />
            <UserProfilePage />
            <Footer />
        </div>
    );
}

export default UserProfile;