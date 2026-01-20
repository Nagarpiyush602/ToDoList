import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [todolist, setTodolist] = useState([]);
  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname];
      setTodolist(finalDolist);
    } else {
      alert("Todo name allready exists");
    }
    event.preventDefault();
  };
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItem
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form action="" onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <br />
        <br />
        <button>Save</button>
      </form>
      <div className="outerdiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    setTodolist(finalData);
  };
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completeTodo" : ""} onClick={checkStatus}>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
