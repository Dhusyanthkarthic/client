import React from "react";
import "./AboutUs.css";
import Header from "../UserHeader/Userheader";
import NGOImage from "../../img/ngo-images.jpg";
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";
import Footer from "../Footer/Footer";

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="responsive-container-block bigContainer">
        <div style={{width : "70%", margin : "0 auto"}}>
            <h1 className="text-blk heading" style={{textAlign: "center", color : "#4c4c4c"}}>About Us</h1>
            <p className="text-blk subHeading">
                Welcome to AidNet, the social networking platform dedicated to connecting NGOs and individuals to resolve people's issues effectively. At AidNet, we believe in the power of collaboration and community-driven solutions to address the diverse challenges faced by society.            
            </p>
            <br></br>
        </div>
        <div className="responsive-container-block Container">
          <div className="imgContainer">
            {/* <img class="blueDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg" />
            <img class="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg" /> */}
            <img className="" src={NGOImage} width = "400px" height = "auto"/>
          </div>
          <div className="responsive-container-block textSide">
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading" style={{color : "#4c4c4c"}}>Connecting Changemakers</p>
                <p className="text-blk cardSubHeading" style={{fontSize : "14px", textAlign : "left"}}>AidNet serves as a central hub where NGOs, volunteers, and individuals can connect, share ideas, and collaborate on initiatives to address pressing social issues.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading" style={{color : "#4c4c4c"}}>Empowering NGOs: </p>
                <p className="text-blk cardSubHeading" style={{fontSize : "14px", textAlign : "left"}}>We provide NGOs with a platform to showcase their work, connect with potential partners and volunteers, and access resources to support their missions.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading" style={{color :"#4c4c4c"}}>Engaging Communities:</p>
                <p className="text-blk cardSubHeading" style={{fontSize : "14px", textAlign : "left"}}>AifNet offers a space for individuals to discover volunteer opportunities, support causes they care about, and engage with like-minded individuals and Organizations.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading" style={{color :"#4c4c4c"}}>Community-Centric Approach: </p>
                <p className="text-blk cardSubHeading" style={{fontSize : "14px", textAlign : "left"}}> We prioritize community needs and actively work towards building a supportive and inclusive environment where everyone can contribute to positive change.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading" style={{color : "#4c4c4c"}}>Transparency and Trust: </p>
                <p className="text-blk cardSubHeading" style={{fontSize : "14px", textAlign : "left"}}> AifNet is committed to transparency in all our operations. We strive to build trust among our users by ensuring open communication, data security, and ethical practices.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading" style={{color :"#4c4c4c"}}>Impact-driven Solutions: </p>
                <p className="text-blk cardSubHeading" style={{fontSize : "14px", textAlign : "left"}}> Our platform is designed to facilitate collaboration and innovation, enabling stakeholders to implement effective solutions that create tangible, lasting impact in communities.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{display : "block"}}>
            <div style={{margin : "0 auto", marginBottom : "50px", marginTop : "50px"}}>
                <a href="/userlandingpage">
                <button className="explore" style={{marginTop : "30px", backgroundColor:"#4d82e2"}}>Explore our Services</button>
                </a>
            </div>
            <div style={{margin : "0 auto", width : "70%", marginBottom : "50px", marginTop : "50px"}}>
                <h1 style={{color :"#4c4c4c"}}>Join Us in Making a Difference:</h1>
                <p style={{fontSize : "20px"}}>Whether you're an NGO looking to expand your reach, a volunteer eager to lend a helping hand, or an individual seeking support, AifNet welcomes you to join our community. Together, we can harness the power of collective action to address social challenges and create a brighter future for all.</p>
            </div>
            <div style={{margin : "0 auto", marginBottom : "50px", marginTop : "50px"}}>
                <p style={{fontSize : "20px"}}>Join AifNet today and be a part of the movement towards positive change!</p>
            </div>
        </div>
        <div className="TeamMembers">
            <div style={{display : "flex", gap : "30px", alignItems : "center", justifyContent : "center"}}>
                <div>
                    <p>Image</p>
                </div>
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>Hariharan I S</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.</p>
                </div>
            </div>
            <div style={{display : "flex", gap : "30px", alignItems : "center", justifyContent : "center"}}>
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>Mukilarasan V</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.</p>
                </div>
                <div>
                    <p>Image</p>
                </div>
            </div>
            <div style={{display : "flex", gap : "30px", alignItems : "center", justifyContent : "center"}}>
                <div>
                    <p>Image</p>
                </div>
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>Jeevesh P G</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.</p>
                </div>
            </div>
        </div>
        <div>
           <Footer />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
