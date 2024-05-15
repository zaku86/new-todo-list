import { FaPlus } from "react-icons/fa";

function Button() {
  return (
    <button className="plus-button">
      <FaPlus />
      <p>New task</p>
    </button>
  );
}
export default Button;
