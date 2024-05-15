import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";

function Todo({ data: { id, text, isCompleted } }) {
  return (
    <div className="todo">
      <div>
        {isCompleted ? <GoDotFill size={16} /> : <GoDot size={16} />}

        <p style={{ textDecoration: isCompleted && "line-through" }}>{text}</p>
      </div>

      <IoTrashOutline className="trashcan" size={16} />
    </div>
  );
}

export default Todo;
