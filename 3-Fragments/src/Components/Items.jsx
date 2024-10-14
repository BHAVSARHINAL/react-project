const Items = ({ foodItems }) => {

  const handleButBtnClick = (event) =>{
    console.log(event);
    
    console.log(`${foodItems} button clicked..`)
  }
  return (

    <li className="list-group-item kg-items">
      <span className="kg-span">{foodItems}</span>
      <button className={`styles.button btn btn-info`}  
      onClick={(event)=>  handleButBtnClick(event)}
      >Buy



      </button>
    </li>
  );
};

export default Items;
