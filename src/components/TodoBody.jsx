import Todo from "./Todo";
import Button from "./Button";

const data = [
  "Styleguide creation",
  "Send wireframes",
  "Readability About page",
  "Check color contrast",
];

function TodoBody() {
  return (
    <div className="todoBody">
      <div className="todos">
        {data.map((el, i) => (
          <Todo text={el} key={i} />
        ))}
      </div>

      <div className="button-div">
        <Button />
      </div>
    </div>
  );
}

export default TodoBody;
