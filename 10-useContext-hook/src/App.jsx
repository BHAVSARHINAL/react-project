// import { createContext } from "react";
// import ChildA from "./ChildA";

import { createContext } from "react";
import ChildA from "./ChildA";

// const data = createContext();
// const data1 = createContext();

const data = createContext();
const data1 = createContext();
function App() {
  // const name = "hinuu";
  // const gender = "female";
  // return (
  //   <>
  //     <data.Provider value={name} >
  //       <data1.Provider value={gender}>
  //       <ChildA />
  //       </data1.Provider>
  //     </data.Provider>
  //   </>
  // );

  //create , context , provider

  const name = "hinal";
  const gender = "female";
  return(
  <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
        <ChildA />
      </data1.Provider>
    </data.Provider>
  </>);
}

export default App;
// export { data ,data1};
