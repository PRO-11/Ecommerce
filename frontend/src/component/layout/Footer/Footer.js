import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Pratham Gupta</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>

<a href="http://instagram.com/pgupta_4596" > <InstagramIcon className="instagramSvgIcon my-3" style={{"color":"red"}}/></a>
 
 
<a href="https://m.facebook.com/pratham.gupta.522"><FacebookIcon className="instagramSvgIcon my-3" style={{"color":"red"}}/></a>
 
<a href="https://www.linkedin.com/in/pratham-gupta-58105b238"><LinkedInIcon className="instagramSvgIcon my-3" style={{"color":"red"}}/></a>

      
      </div>
    </footer>
  );
};

export default Footer;
