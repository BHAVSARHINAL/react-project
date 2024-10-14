// import React from 'react'

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function AxiosPrectice() {
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {userData.map((data) => {
        return <h1>{data.name}</h1>;
      })}
    </div>
  );
}

export default AxiosPrectice;
