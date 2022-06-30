import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Completed = () => {
  const {
    data: completes,
    isLoading,
    refetch,
  } = useQuery(
    "completes",
    fetch("http://localhost:5000/complete").then((res) => res.json())
  );

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-12 text-accent">
        Completed Tasks
      </h2>
    </div>
  );
};

export default Completed;
