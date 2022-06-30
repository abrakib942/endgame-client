import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import EditModal from "./EditModal";
import Task from "./Task";

const Todo = () => {
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

  return (
    <div className="lg:px-52">
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
  );
};

export default Todo;
