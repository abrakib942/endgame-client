import React from "react";

const Task = ({ task, refetch, setEditTask }) => {
  const { text } = task;

  return (
    <tr>
      <td>
        <input type="checkbox" class="checkbox checkbox-accent" />
      </td>
      <td>{text}</td>
      <td>
        <label
          for="edit-modal"
          onClick={() => setEditTask(task)}
          className="btn btn-accent btn-xs mr-3"
        >
          Edit
        </label>
        {/* <button className="btn btn-secondary btn-xs">Delete</button> */}
      </td>
      <td></td>
    </tr>
  );
};

export default Task;
