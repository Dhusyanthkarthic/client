import React from "react";
import "./TandC.css";
import Header from "../UserHeader/Userheader";
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";
import Footer from "../Footer/Footer";
import { color } from "@mui/system";

function TandC() {
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
            <h1 className="text-blk heading" style={{textAlign: "center", color : "#4c4c4c"}}>Terms and Conditions</h1>
            <p className="text-blk subHeading">
            Welcome to AidNet!
These terms and conditions outline the rules and regulations for the use of AidNet's Website, located at AidNet.com.
By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.

            </p>
            <br></br>
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
        </div>
        
        <div className="TeamMembers">
            <div style={{display : "flex", gap : "30px", justifyContent : "center"}}>
                
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>Cookies</h1>
                    <p>We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the AidNet's Privacy Policy.<br></br>
                        Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>
                </div>
            </div>
            <div style={{display : "flex", gap : "30px", justifyContent : "center"}}>
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>License</h1>
                      <p>Unless otherwise stated, AidNet and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.</p>
                      <p>You must not:</p>
                      <div>
                        <ul>
                          <li>Republish material from Website Name</li>
                          <li>Sell, rent or sub-license material from Website Name</li>
                          <li>Reproduce, duplicate or copy material from Website Name</li>
                          <li>Redistribute content from Website Name</li>
                        </ul>
                      </div>
                      <p>This Agreement shall begin on the date hereof.</p>
                      <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. AidNet does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of AidNet,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, AidNet shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                      <p>AidNet reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                      <p>You warrent and represent that:</p>
                      <div>
                        <ul>
                          <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                          <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                          <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                          <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                        </ul>
                      </div>
                      <p>You hereby grant AidNet a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
                
                </div>
                
            </div>
            <div style={{display : "flex", gap : "30px", justifyContent : "center"}}>
              
                <div className="TeamMembersContent">
                    <h1 style={{color :"#4c4c4c"}}>Hyperlinking to our Context</h1>
                    <p>The following organizations may link to our Website without prior written approval:</p>
                    <div>
                      <ul>
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                      </ul>
                    </div>
                    <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p>
                    <p>We may consider and approve other link requests from the following types of organizations:</p>
                    <div>
                      <ul>
                        <li>commonly-known consumer and/or business information sources;</li>
                        <li>dot.com community sites;</li>
                        <li>associations or other groups representing charities;</li>
                        <li>online directory distributors;</li>
                        <li>internet portals;</li>
                        <li>accounting, law and consulting firms; and</li>
                        <li>educational institutions and trade associations.</li>
                      </ul>
                    </div>
                    <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of AidNet; and (d) the link is in the context of general resource information.</p>
                    <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
                    <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to AidNet. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
                    <p>Approved organizations may hyperlink to our Website as follows:</p>
                    <div>
                      <ul>
                        <li>By use of our corporate name; or</li>
                        <li>Approved organizations may hyperlink to our Website as follows:</li>
                        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
                      </ul>
                    </div>
                    <p>No use of AidNet's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
                    <h1 style={{color :"#4c4c4c"}}>iFrames</h1>
                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
                    <h1 style={{color :"#4c4c4c"}}>Content Liability</h1>
                    <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
                    <h1 style={{color :"#4c4c4c"}}>Reservation of Rights</h1>
                    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                    <h1 style={{color :"#4c4c4c"}}>Removal of links from our website</h1>
                    <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                    <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
                    <h1 style={{color :"#4c4c4c"}}>Disclaimer</h1>
                    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                    <div>
                      <ul>
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                      </ul>
                    </div>
                    <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
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

export default TandC;
