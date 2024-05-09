import React from "react";
import HomeFeature from "./HostFeatures";
import Analysis from "../../img/host_analysis.png";

const items = [
    {
        title: "Analysis Of Host",
        subtitle: "Sharp POS system helps you improve your operations for your customers. This includes reducing waiting time, faster scanning of items, quicker payments and many options for your business.",
        line1: "Save time and money with your all-in-one POS system",
        line2: "Better online purchasing & supplier order management",
        line3: "Create reports automatically and multi-store functions",
        img : Analysis,
        order : "0"
    },
    {
        title: "Finding Problems using Feed",
        subtitle: "Sharp POS system helps you improve your operations for your customers. This includes reducing waiting time, faster scanning of items, quicker payments and many options for your business.",
        line1: "Use the same rewarding system across all chain stores",
        line2: "Check the employee performance & reward accordingly",
        line3: "See purchase history of customers to know them better",
        img : Analysis,
        order : "2"
    }
];

function HomeFeatureContent() {
    return (
        <div>
            {items.map((item, index) => (
                <HomeFeature key={index} {...item} />
            ))}
        </div>
    );
}

export default HomeFeatureContent;
