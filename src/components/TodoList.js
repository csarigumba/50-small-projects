const TodoList = ({ todos, handleDeleteOnclick, handleEditOnClick }) => {
  return todos.map((todo, idx) => (
    <div className="card" key={idx}>
      <div className="card-body">
        <div className="todo-title">{todo}</div>
        <div className="todo-buttons">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleEditOnClick(idx);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDeleteOnclick(idx);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ));
};

export default TodoList;
