import React, { useState } from "react";
import "../style.css";

const TaskTile = ({ title, index, id, tasks, setTasks }) => {
  const [editFlag, setEditFlag] = useState(true);
  const [newTitle, setNewTitle] = useState("");

  function handleDelete(clickedTaskId) {
    const filteredTasks = tasks.filter((task) => task[1] !== clickedTaskId);
    setTasks(filteredTasks);
  }

  function handleEdit() {
    setEditFlag(false);
  }

  function handleEditSave(clickedTaskId) {
    const updatedTasks = tasks.map((task) =>
      task[1] === clickedTaskId ? [newTitle, task[1]] : task
    );
    setTasks(updatedTasks);
    console.log(updatedTasks);
    setEditFlag(true);
  }

  function handleEditCancel() {
    setEditFlag(true);
  }

  return editFlag ? (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>
        <button onClick={() => handleEdit()}>Edit</button>
      </td>
      <td>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{index}</td>
      <td>
        <input
          className="editInput"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </td>
      <td>
        <button onClick={() => handleEditSave(id)}>Save</button>
      </td>
      <td>
        <button onClick={() => handleEditCancel()}>Cancel</button>
      </td>
    </tr>
  );
};

export default TaskTile;
