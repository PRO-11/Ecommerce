import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/pgupta_4596";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/pro1/image/upload/v1654480027/avatars/Pro_ltrcqy.jpg"
              alt="Founder"
            />
            <Typography>Pratham Gupta</Typography>
            
            <span>
              This is a wesbite made by me . It is fully responsive webiste with every features of Ecommerce Website
            </span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
