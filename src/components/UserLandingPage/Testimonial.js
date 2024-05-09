import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <center><h1 className="primary-heading">What They Are Saying</h1></center>
        <p className="primary-text">
          See what our long time clients had to say about us
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          One of the best Networking site for NGO's and for the people who are in need. Loved the idea and got benefitted, Give it a try!!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar fill="#4d82e2" />
          <AiFillStar fill="#4d82e2"/>
          <AiFillStar fill="#4d82e2"/>
          <AiFillStar fill="#4d82e2"/>
          <AiFillStar fill="#4d82e2"/>
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
