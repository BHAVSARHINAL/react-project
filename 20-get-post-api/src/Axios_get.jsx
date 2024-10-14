// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
function Axios_get() {
  const [useData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setData(response.data)
    });
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {useData.map((data) => {
        return <h1 key={data}>{data.name}</h1>;
      })}
    </div>
  );
}

export default Axios_get;
