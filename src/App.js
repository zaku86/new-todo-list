import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";
import "./style.css";

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <TodoHeader />
        <TodoBody />
      </div>
    </div>
  );
}

export default App;
