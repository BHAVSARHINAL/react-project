// import React from "react";
import "./Navbar.css";
function Contact() {
  let contactImage = {
    marginLeft: "0",
    marginTop: "0",
    height: "70vh",
    width: "100%",
    backgroundImage:
      'url("https://www.shutterstock.com/image-photo/contact-us-telephone-envelope-letter-600nw-2369194627.jpg")',
    display: "flex",
    backgroundSize: "cover",
    flexDirection: "row",
    backgroudPosition: "center",
    backgroundRepeat: "no-repeat",
    // flexDirection: "column",
    justifyContent: "center",
  };
  return (
    <div style={contactImage}>
      <h1 className="data" style={{color:'black'}}>Contact page</h1>
    </div>
  );
}

export default Contact;
