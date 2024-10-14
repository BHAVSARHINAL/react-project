const ErrorMessage = ({ items }) => {
  // let foodItems = ["Vagetables", "Fruits", "butter", "Ghee", "Cheese", "wheet"];

  return <>{items.length === 0 && <h5>Empty..</h5>} </>;
};

export default ErrorMessage;
