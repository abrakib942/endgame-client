import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="h-screen px-10">
      <h2 className="text-center text-3xl mb-12 font-bold mt-12 text-primary">
        Calendar
      </h2>

      <div className="lg:ml-[460px]">
        <DayPicker mode="single" selected={date} onSelect={setDate} />
      </div>
      <h2 className="text-center text-accent font-bold text-xl">
        You Pick {date && format(date, "PP")}{" "}
      </h2>
    </div>
  );
};

export default Calendar;
