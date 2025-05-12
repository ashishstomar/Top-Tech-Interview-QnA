import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import TaskTile from "./components/TaskTile";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleTasks() {
    const id = String(Date.now());

    const taskArr = [input, id, true];

    setTasks((prev) => [...tasks, taskArr]);

    console.log(tasks);
    setInput("");
  }

  return (
    <>
      <div>
        <input
          placeholder="sup?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => handleTasks()}>Save</button>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>tasks</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => {
              return (
                <TaskTile
                  key={task[1]}
                  title={task[0]}
                  id={task[1]}
                  index={index + 1}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

// ReactDOM.createRoot(document.getElementById("root")).render(<TodoApp />);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<TodoApp />);
