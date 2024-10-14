import Items from "./Items";

const FoodItems = ({ items }) => {
  // let foodItems = ["Vagetables", "Fruits", "butter", "Ghee", "Cheese", "wheet"];
  return (
    <ul className="list-group">
      {items.map((itemss) => (
        <Items key="itemss" foodItems={itemss}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
