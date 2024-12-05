// import React from "react";
import { useParams } from "react-router-dom";

function ParamComp() {
  const { id } = useParams();
  return <div>params : {id}</div>;
}

export default ParamComp;
