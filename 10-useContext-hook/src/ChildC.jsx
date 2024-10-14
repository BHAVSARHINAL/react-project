// import App from "./App";
import { useContext } from "react";
import { data, data1 } from "./App";
function ChildC() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      {/* <h1>hello</h1>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h2>
                    my name is {name} and gender is :{gender}
                  </h2>
                );
              }}
            </data1.Consumer>
            // <h2>my name is {name}</h2>
          );
        }}
      </data.Consumer> */}

<h1>hi my name is {name} and my gender is {gender}</h1>


    </>
  );
}
export default ChildC;
