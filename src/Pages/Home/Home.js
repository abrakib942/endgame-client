import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import Task from "../Todo/Task";
import EditModal from "../Todo/EditModal";

const Home = () => {
  const textRef = useRef();
  const [editTask, setEditTask] = useState(null);

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("tasks", () =>
    fetch("https://boiling-escarpment-24505.herokuapp.com/todo").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleAdd = (e) => {
    e.preventDefault();

    const text = textRef.current.value;

    const addTask = {
      text,
    };

    fetch("https://boiling-escarpment-24505.herokuapp.com/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("task added");
          refetch();
        }
      });

    e.target.reset();
  };

  return (
    <div className="h-screen">
      <form onSubmit={handleAdd} className="text-center mt-16 px-12">
        <input
          ref={textRef}
          type="text"
          placeholder="Add a daily task"
          className="input input-bordered input-primary w-full max-w-lg mb-3"
          required
        />
        <input
          className="btn btn-accent ml-1"
          type="submit"
          value="Add To-do"
        />
      </form>

      <div className="lg:px-52 mb-12">
        <h2 className="text-center text-2xl font-bold text-primary mt-16 mb-8">
          To-Do Tasks
        </h2>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>completion</th>
                <th>Tasks</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task) => (
                <Task
                  key={task._id}
                  task={task}
                  refetch={refetch}
                  setEditTask={setEditTask}
                />
              ))}
            </tbody>
          </table>
        </div>
        {editTask && (
          <EditModal
            editTask={editTask}
            setEditTask={setEditTask}
            refetch={refetch}
          ></EditModal>
        )}
      </div>
    </div>
  );
};

export default Home;
