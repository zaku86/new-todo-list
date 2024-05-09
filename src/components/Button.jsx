import { FaPlus } from "react-icons/fa";

function Button({ Icon, text = "New Task" }) {
  console.log(Icon);
  return (
    <button className="task-button">
      {/* <FaPlus  /> */}
      {Icon ? <Icon size={10} /> : <FaPlus size={10} />}
      {/* {Icon && <Icon size={10} />} */}
      <p>{text}</p>
    </button>
  );
}

export default Button;
