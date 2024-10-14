import B from "./Components/B";
export default function A(name) {
  return (
    <>
      <h2>my name id {name}</h2>
      <B name={name} />
      {/* <B /> */}
    </>
  );
}

