import React from "react"
import Hostheader from "../hostheader/hostheader"
import HomePageHighlight from "../HostHighlightPage/HostHighlightPage"
import Service from "../Service/Service"
import HomeFeatures from "../HostFeatures/HostFeatureContent"
import Benefits from "../benefits/benefits";
import {Cookies} from "react-cookie"
import Footer from "../Footer/Footer"

function hostlandingpage(){
    return (
        <div>
            <Hostheader />
            <HomePageHighlight />
            <Service />
            <HomeFeatures />
            <Benefits />
            <Footer />
        </div>
    );
}

export default hostlandingpage;