// import React from "react";
import { useState } from "react";
function AgeValidation() {
  const [isAgeValid, setAge] = useState(true);
  // Element Variable
  //   let age;
  //   if (isAgeValid) {
  //     age = <div>You can vote</div>;
  //   } else {
  //     age = <div>You cannot vote</div>;
  //   }
  //   return <div>{age}</div>;
  // }
  return (
    <>
      {/* Ternary Operator */}
      {/* {isAgeValid ?  <div>You can vote</div> :  <div>You can not vote</div>} */}

      {/* Short circuit operator */}
      {isAgeValid && <div>you can vote</div>}
    </>
  );
}

export default AgeValidation;
