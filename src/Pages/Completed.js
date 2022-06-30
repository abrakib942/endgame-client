import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import del from "../assets/delete.png";
import DeleteModal from "./DeleteModal";

const Completed = () => {
  const [deleted, setDeleted] = useState(null);
  const {
    data: completed,
    isLoading,
    refetch,
  } = useQuery("completed", () =>
    fetch("https://boiling-escarpment-24505.herokuapp.com/complete").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="lg:px-16 px-8 h-screen">
      <h2 className="text-center text-2xl font-bold mt-12 text-accent">
        Completed Tasks: {completed?.length}
      </h2>

      <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-4">
        {completed?.map((complete) => (
          <>
            <div className="  card bg-base-100 shadow-xl">
              <div className=" flex items-center justify-between p-8">
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  checked
                />
                <p className="px-3">{complete?.text}</p>

                <label onClick={() => setDeleted(complete)} for="delete-modal">
                  <img className="cursor-pointer" src={del} alt="" />
                </label>
              </div>
            </div>
          </>
        ))}
      </div>
      {deleted && (
        <DeleteModal
          deleted={deleted}
          setDeleted={setDeleted}
          refetch={refetch}
        ></DeleteModal>
      )}
    </div>
  );
};

export default Completed;
