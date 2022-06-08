import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:pgupta4596@gmail.com">
        <Button>Mail: pgupta4596@gmail.com</Button>
      </a>
        <a className="mailBtn" href="https://www.linkedin.com/in/pratham-gupta-58105b238/">
        <Button>LinkedIn: pratham-gupta-58105b238/</Button>
    </a>
    </div>
  );
};

export default Contact;
