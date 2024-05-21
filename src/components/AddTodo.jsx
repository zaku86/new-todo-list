import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function AddTodo({ todos, setTodos }) {
  const [text, setText] = useState("");

  const handleClick = () => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      isCompleted: false,
    };
    console.log(newTodo);
    setTodos([newTodo, ...todos]);

    setText("");
  };

  return (
    <div className="add-todo">
      <Input text={text} setText={setText} placeholder={"Enter task"} />
      <Button addFunction={handleClick} text={"Add Todo"} />
    </div>
  );
}

export default AddTodo;
