// import React from "npmreact";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function AxiosTutorial() {
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      Axios tutorial
      {userData.map((data) => {
        return <h1 key={data}>{data.name}</h1>;
      })}
    </div>
  );
}

export default AxiosTutorial;
