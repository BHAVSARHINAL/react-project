// import React from 'react'
import "./Navbar.css";
function About() {
  let aboutImage = {
    marginTop: "0",
    marginLeft: "0",
    height: "88vh",
    width: "100%",
    backgroundImage:
      'url("https://img.freepik.com/free-vector/background-wave-minimalist-modern-style_483537-5220.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // color: "rgb(96, 219, 232)",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div style={aboutImage}>
      <h1 className="data" style={{ textAlign: "center", marginTop: "10px" ,color:'black'}}>
        About Us
      </h1>
      <center>
        <div
          style={{ fontSize: "20px", marginTop: "50px", marginLeft: "60px" }}
        >
          <p>
            Welcome to our website! We are dedicated to providing the best
            services and solutions to our customers.<br></br> Our team is
            passionate about delivering excellence and ensuring that every
            interaction with our brand is a positive one.
          </p>

          <p>
            Our journey started with a simple idea: to create a space where
            technology meets creativity, making it easier for our users to
            achieve their goals. <br></br>Since then, we have grown into a
            dynamic team of professionals committed to innovation and customer
            satisfaction.
          </p>
        </div>
        <div
          style={{
            fontSize: "20px",
            marginTop: "40px",
            // display: "flex",
            // width: "100px",
            marginLeft: "60px",
          }}
        >
          <p>
            We believe in continuous improvement and strive to stay ahead of the
            curve by embracing new technologies and industry trends.<br></br>{" "}
            Our mission is to empower individuals and businesses alike, offering
            solutions that are not only effective but also user-friendly and
            accessible.
          </p>
          <p>
            Thank you for being a part of our story. We look forward to growing
            together and achieving new milestones!
          </p>
        </div>
      </center>
    </div>
  );
}

export default About;
