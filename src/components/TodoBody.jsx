import Task from "./Task";
import React, { useState } from "react";
import AddTodo from "./AddTodo";

function TodoBody() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-body">
      {todos.length === 0 && <p>No todos added yet...</p>}
      {todos.length > 0 && (
        <div className="todos">
          {todos.map((el) => {
            return (
              <Task key={el.id} data={el} todos={todos} setTodos={setTodos} />
            );
          })}
        </div>
      )}

      <AddTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoBody;
