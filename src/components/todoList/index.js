import { useEffect, useState } from "react";

function TodoList() {
    // ??: nếu đằng trước là UNDIFIND || NULL => lấy vế sau
//   let todo = localStorage.getItem("todo");
  let todo = ["hello", "hello2"];

  const [job, setJob] = useState(todo);
  const [inputValue, setInputValue] = useState("");
  const [inputValueTime, setInputValueTime] = useState("");

  useEffect(() => {
    // const listJob = document.querySelectorAll("[inputlist]");
  }, [job]);

  const changeValueInput = (e) => {
    setInputValue(e.target.value);
  };

  const changeValueInputTime = (e) => {
    setInputValueTime(e.target.value);
  };

  const addJob = () => {
    // job = (prev) => [...prev, `lam ${inputValue} trong ${inputValueTime}`];

    // localStorage.setItem("todo", JSON.stringify(job));
    // // set value in input = ""
    // setInputValue("");
    // setInputValueTime("");
    // setJob(job);
    setJob(prev => {
        console.log(...prev, Math.random())

        return prev
    })
  };

//   console.log(job);

  return (
    <>
      <input
        onChange={changeValueInput}
        value={inputValue}
        placeholder="Nhap day"
      />
      <br />
      <input
        onChange={changeValueInputTime}
        value={inputValueTime}
        placeholder="Time"
      />
      <br />

      {/* btn */}
      <button onClick={addJob}>Add</button>
      <br />

      {job.map((item, index) => {
        return (
          <div key={item}>
            <br />
            <input inputlist={item} value={item} type="checkbox" /> {item}
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
