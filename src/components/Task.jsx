import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";

function Task({ data: { id, text, isCompleted }, todos, setTodos }) {
  const deleteFunction = () => {
    alert("you're on task: " + id);
    // edit your todo to take in the todos and setTodos prop
    // store todos in a normal variable
    // let x = todos;
    // create a resulting variable that'll be equall to the filtered arr
    // let result = x.filter((el) => el.id !== id);
    // then set todos with the result
    // setTodos(result);
  };

  return (
    <div className="todo">
      <div>
        {isCompleted ? <GoDotFill size={16} /> : <GoDot size={16} />}

        <p style={{ textDecoration: isCompleted && "line-through" }}>{text}</p>
      </div>

      <IoTrashOutline onClick={deleteFunction} className="trashcan" size={16} />
    </div>
  );
}

export default Task;
