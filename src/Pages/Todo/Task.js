import { toast } from "react-toastify";

const Task = ({ task, refetch, setEditTask }) => {
  const { text, _id } = task;

  const handleComplete = () => {
    const completeTask = {
      text,
    };

    fetch("https://boiling-escarpment-24505.herokuapp.com/complete", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(completeTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("task completed");
          refetch();
        }
      });

    fetch(`https://boiling-escarpment-24505.herokuapp.com/todo/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
        }
      });
  };

  return (
    <tr>
      <td>
        <input
          onClick={handleComplete}
          type="checkbox"
          className="checkbox checkbox-accent"
        />
      </td>
      <td>{text}</td>
      <td>
        <label
          htmlFor="edit-modal"
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
