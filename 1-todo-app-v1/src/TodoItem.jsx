function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy milk";
  // let todoDate = "01-01-2024";
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
