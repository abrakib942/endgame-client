import React from "react";
import { useQuery } from "react-query";

const Todo = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("tasks", () =>
    fetch("http://localhost:5000/todo").then((res) => res.json())
  );

  return (
    <div className="lg:px-52">
      <h2 className="text-center text-2xl font-bold text-primary mt-16 mb-8">
        To-Do Tasks
      </h2>

      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>completion</th>
              <th>Tasks</th>
              <th>Edit/delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <>
                <tr>
                  <td>
                    <input type="checkbox" class="checkbox checkbox-accent" />
                  </td>
                  <td>{task.text}</td>
                  <td>
                    <button className="btn btn-primary btn-xs mr-3">
                      Edit
                    </button>
                    <button className="btn btn-secondary btn-xs">Delete</button>
                  </td>
                  <td></td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
