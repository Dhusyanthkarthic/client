import React from "react";
import "./PandP.css";
import Header from "../UserHeader/Userheader";
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";
import Footer from "../Footer/Footer";
import { color } from "@mui/system";

function PandP() {
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
            <h1 className="text-blk heading" style={{textAlign: "center", color : "#4c4c4c"}}>Privacy Policy</h1>
            <p className="text-blk subHeading">
            "At AidNet, accessible at AidNet.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Email@AidNet.com
            This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Website Name. This policy is not applicable to any information collected offline or via channels other than this website."</p>
        </div>
        
        <div className="TeamMembers">
            <div style={{display : "flex", gap : "30px", justifyContent : "center"}}>
                
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>Consent</h1>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                </div>
            </div>
            <div style={{display : "flex", gap : "30px", justifyContent : "center"}}>
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>Information we collect</h1>
                      <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                      <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                      {/* <div>
                        <ul>
                          <li>Republish material from Website Name</li>
                          <li>Sell, rent or sub-license material from Website Name</li>
                          <li>Reproduce, duplicate or copy material from Website Name</li>
                          <li>Redistribute content from Website Name</li>
                        </ul>
                      </div> */}
                      <p>When you register for an Account, we may ask for your contact information, including items such as name, AidNet, address, email address, and telephone number.</p>
                </div>
                
            </div>
            <div style={{display : "flex", gap : "30px", justifyContent : "center"}}>
              
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>How we use your information</h1>
                    <p>We use the information we collect in various ways, including to:</p>
                    <div>
                      <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                      </ul>
                    </div>
                    
                    <h1 style={{color :"#4c4c4c"}}>Log Files</h1>
                    <p>AidNet follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                    <h1 style={{color :"#4c4c4c"}}>Cookies and Web Beacons</h1>
                    <p>Like any other website, AidNet uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                    <h1 style={{color :"#4c4c4c"}}>DoubleClick DART Cookie</h1>
                    <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.AidNet.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads.</p>
                    <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>
                    <div>
                      <ul>
                        <li>Google<br></br>https://policies.google.com/technologies/ads</li>
                      </ul>
                    </div>
                    <h1 style={{color :"#4c4c4c"}}>Advertising Partners Privacy Policies</h1>
                    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of AidNet.</p>
                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on AidNet, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                    <p>Note that AidNet has no access to or control over these cookies that are used by third-party advertisers.</p>
                    <h1 style={{color :"#4c4c4c"}}>Third-Party Privacy Policies</h1>
                    <p>AidNet's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
                    <h1 style={{color :"#4c4c4c"}}>CCPA Privacy Policy (Do Not Sell My Personal Information)</h1>
                    <p>Under the CCPA, among other rights, Consumers have the right to:</p>
                    <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
                    <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
                    <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
                    <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                    <h1 style={{color :"#4c4c4c"}}>GDPR Privacy Policy (Data Protection Rights)</h1>
                    <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <div>
                      <ol type='1'>
                        <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                      </ol>
                    </div>
                    <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                    <h1 style={{color :"#4c4c4c"}}>Children's Information</h1>
                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p>AidNet does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                </div>
                
            </div>
        </div>
        <div style={{display : "block"}}>
            <div style={{margin : "0 auto", marginBottom : "50px", marginTop : "50px"}}>
                <a>
                <button className="explore" style={{marginTop : "30px", backgroundColor:"#4d82e2"}}>Explore our Services</button>
                </a>
            </div>
            <div style={{margin : "0 auto", width : "70%", marginBottom : "50px", marginTop : "50px"}}>
                <h3 style={{color :"#4c4c4c"}}>Join Us in Making a Difference</h3>
                <p>Whether you're an NGO looking to expand your reach, a volunteer eager to lend a helping hand, or an individual seeking support, AifNet welcomes you to join our community. Together, we can harness the power of collective action to address social challenges and create a brighter future for all.</p>
            </div>
        </div>
        <div>
           <Footer />
        </div>
      </div>
    </div>
  );
}

export default PandP;
