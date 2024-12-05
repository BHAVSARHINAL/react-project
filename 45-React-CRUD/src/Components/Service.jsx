// import React from 'react'
import "./Navbar.css";
function Service() {
  let serviceImage = {
    marginLeft: "0",
    marginTop: "0",
    height: "88vh",
    width: "100%",
    backgroundImage:
      'url("https://www.cedarsofttech.com/blog/wp-content/uploads/2014/03/how-website-design-help-business-grow.png")',
    backgroundSize: "cover",
  };
  return <div className="image" style={serviceImage}></div>;
}

export default Service;
