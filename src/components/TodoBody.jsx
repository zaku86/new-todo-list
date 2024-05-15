import Todo from "./Todo";
import Button from "./Button";
import React, { useState } from "react";

const data = [
  { id: 1, text: "Styleguide creation", isCompleted: true },
  { id: 2, text: "Send wireframes", isCompleted: false },
  { id: 3, text: "Readability About page", isCompleted: false },
  { id: 4, text: " Check color contrast", isCompleted: true },
];

function TodoBody() {
  return (
    <div className="todo-body">
      <div>
        {data.map((el) => {
          return <Todo key={el.id} data={el} />;
        })}
      </div>
      <Button />
    </div>
  );
}

export default TodoBody;
