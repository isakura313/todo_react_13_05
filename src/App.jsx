import { useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);

  function addItem() {
    setTodo([...todo, inputRef.current.value]);
    inputRef.current.value = "";
  }
  function deleteItem(i) {
    console.log(i);
    const newTodo = todo.filter((item) => item != i);
    setTodo(newTodo);
  }
  function eventPress(e) {
    console.log(e)
    if (e.keyCode === 13) {
      addItem();
    }
  }

  const TodoList = () =>
    todo.map((item, index) => (
      <div key={index}>
        {item} <Button handleClick={() => deleteItem(item)} text="del" />
      </div>
    ));

  return (
    <>
      <input
        type="text"
        className="input_todo"
        ref={inputRef}
        onKeyDown={(e) => eventPress(e)}
      />
      <Button text={"addItem"} handleClick={addItem} />
      <TodoList />
    </>
  );
}

export default App;
