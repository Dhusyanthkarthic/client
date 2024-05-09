import React from "react";
import PickMeals from "../../Assets/write.png";
import ChooseMeals from "../../Assets/analysis.png";
import DeliveryMeals from "../../Assets/rating.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Compose",
      text: "Post a problem along with photo that needs to be resolved.",
      reference : "./composedproblems"
    },
    {
      image: ChooseMeals,
      title: "Analyse",
      text: "See the Analysis on various NGO's and the service they provide",
      reference : "./analysis"
    },
    {
      image: DeliveryMeals,
      title: "Messaging",
      text: "Messaging and Review the NGO's based on the work done",
      reference : "./messages"
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Post your problem in AidNet and get it resolved in moments of time. Chat with the NGO's to get a transparent idea on resolving the need. Rate and review the NGO based on their performance.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <a href={data.reference} style={{textDecoration : "none"}}>
            <div className="work-section-info"key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
