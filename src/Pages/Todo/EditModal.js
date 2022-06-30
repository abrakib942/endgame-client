import React, { useRef } from "react";
import { toast } from "react-toastify";

const EditModal = ({ editTask, setEditTask, refetch }) => {
  const { _id } = editTask;
  const textRef = useRef();

  const handleEdit = (e) => {
    e.preventDefault();
    const text = textRef.current.value;

    const task = {
      text,
    };

    fetch(`https://boiling-escarpment-24505.herokuapp.com/todo/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setEditTask(null);
          toast.success("task edited");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500 text-center">
            Edit Task
          </h3>

          <div className="modal-action">
            <div className="px-12 text-center">
              <form onSubmit={handleEdit}>
                <input
                  ref={textRef}
                  type="text"
                  placeholder="Edit your Task"
                  className="input input-bordered input-primary w-full max-w-lg mb-3"
                  required
                />
                <input
                  type="submit"
                  value="Edit"
                  className="btn btn-accent btn-xs ml-1 mr-3"
                />
                <label
                  htmlFor="edit-modal"
                  className="btn btn-secondary btn-xs"
                >
                  Not Now
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
