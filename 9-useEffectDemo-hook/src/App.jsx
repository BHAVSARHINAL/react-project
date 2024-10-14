import UseRefDemo from "./Components/UseRefDemo";
// import Test from "./Components/Test";
import A from "./Components/A";
// import B from "./Components/B";
// import C from "./Components/C";
function App() {
  const name = "hinal";
  return (
    <>
      {/* <Test></Test> */}
      <UseRefDemo />
      <A name={name} />
    </>
  );
}

export default App;
