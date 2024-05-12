import "./App.css";
import { useReducer, useRef } from "react";
// 1. Init state
const initState = {
  job: "",
  jobs: [],
};

// 2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// 3. Reducer
const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      let newState = [...state.jobs];

      newState.splice(action.payload, 1);

      return {
        ...state,
        jobs: [...newState],
      };

    default:
      throw new Error("Invalid action");
  }
};

// 4. Dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));

    state.job = "";

    inputRef.current.focus();
  };

  return (
    <>
      <div style={{ padding: "0 20px" }}>
        <h3>To Do</h3>
        <input
          ref={inputRef}
          value={job}
          placeholder="Enter to do ..."
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />

        <button onClick={handleSubmit}>Add</button>

        <ul>
          {jobs.map((item, index) => (
            <li key={index}>
              {item} <span onClick={() => dispatch(deleteJob(index))}>x</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
