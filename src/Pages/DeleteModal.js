import React from "react";

const DeleteModal = () => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500 text-center">
            Are you sure you want to Delete
          </h3>

          <div className="modal-action">
            <button className="btn btn-secondary btn-xs">Delete</button>
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
