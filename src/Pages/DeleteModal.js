import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ deleted, refetch, setDeleted }) => {
  const { _id } = deleted;

  const handleDelete = () => {
    fetch(`https://boiling-escarpment-24505.herokuapp.com/complete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          setDeleted(null);
          toast("delete successful");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500 text-center">
            Are you sure you want to Delete
          </h3>

          <div className="modal-action">
            <label onClick={handleDelete} className="btn btn-secondary btn-xs">
              Delete
            </label>
            <label for="delete-modal" className="btn btn-primary btn-xs">
              Not Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
