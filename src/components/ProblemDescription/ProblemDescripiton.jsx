import React from "react";
import Header from "../UserHeader/Userheader";
import Footer from "../Footer/Footer";
import DescriptionContainer from "./DescriptionContainer";

function ProblemDescription(){
    return (
        <div>
            <Header />
            <DescriptionContainer />
            <Footer />
        </div>
    );
}

export default ProblemDescription;