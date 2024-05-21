import { FaPlus } from "react-icons/fa";

function Button({ text, addFunction }) {
  return (
    <button onClick={addFunction} className="plus-button">
      <FaPlus />
      <p>{text}</p>
    </button>
  );
}
export default Button;
