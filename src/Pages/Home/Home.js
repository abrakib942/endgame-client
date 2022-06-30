import React, { useRef } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const textRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();

    const text = textRef.current.value;

    const addTask = {
      text,
    };

    fetch("http://localhost:5000/todo", {
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
        }
      });

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleAdd} className="text-center mt-16 px-12">
        <input
          ref={textRef}
          type="text"
          placeholder="Add a daily task"
          class="input input-bordered input-primary w-full max-w-lg mb-3"
          required
        />
        <input
          className="btn btn-accent ml-1"
          type="submit"
          value="Add To-do"
        />
      </form>
    </div>
  );
};

export default Home;
