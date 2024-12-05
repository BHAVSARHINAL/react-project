// import React from 'react'
import "./Navbar.css";
function Home() {
  let imageStyle = {
    marginLeft: "0", // Reset margin for full coverage
    marginTop: "0", // Reset margin for full coverage
    height: "88vh", // Full viewport height
    width: "100%", // Full width
    backgroundImage:
      'url("https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg")',
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents repeating
    color: "white",
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
 
  };


  return (
    <div className="image" style={imageStyle}>
      <center>
        {/* <h2>...</h2> */}
        <h2 >Welcome to my website..</h2>
        <p style={{marginTop:'60px',fontSize:'20px'}}>
          This is the home page of our website, <br></br>where you can find the latest
          updates, explore different sections, and get in touch with us.<br></br> We are
          excited to share our journey with you. Feel free to explore and let us
          know if you have any questions!
        </p>
    
      </center>
           <center><footer style={{ marginTop: "80px", fontSize: "0.9em" }}>
        &copy; 2024 My Website. All rights reserved.
      </footer></center>
    </div>
  );
}

export default Home;
