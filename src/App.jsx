import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";
import "./style.css";

function App() {
  return (
    <div className="main-container">
      <div className="todo-container">
        <TodoHeader />
        <TodoBody />
      </div>
    </div>
  );
}

export default App;
