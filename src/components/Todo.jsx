import { GoDotFill } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { GoDot } from "react-icons/go";

function Todo({ text }) {
  return (
    <div className="Todo-container">
      {/* <GoDotFill /> */}
      <div className="todo-div">
        <GoDot size={24} />
        <p>{text}</p>
      </div>
      <IoTrashOutline className="trash-icon" size={20} />
    </div>
  );
}

export default Todo;
