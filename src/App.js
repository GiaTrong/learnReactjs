import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter/Counter2";
import TodoList from "./components/todoList";

function App() {
  
  return (
    <>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/counter">Counter</a></li>
      <li><a href="/todoList">todoList</a></li>
    </ul>
      
      <Routes>
      {/* element sẽ nhận 1 thằng react element  */}
        <Route path="/" element={<Counter />} /> 
        <Route path="/counter" element={<Counter2 />} /> 
        <Route path="/todoList" element={<TodoList />} /> 
      </Routes>
    </>
  );
}

export default App;
