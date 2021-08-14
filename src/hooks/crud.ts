import React from "react";

type Time = {
  start: string;
  end: string;
};

interface Schedule {
  name: string;
  times: Array<Time>;
  id: string;
  note: string;
}

const useCrud = () => {
  const createSchedule = (schedule: Schedule) => {
    const schedules: Array<Schedule> =
      JSON.parse(localStorage.getItem("schedules") || '[]');
    schedules.push(schedule);
    localStorage.setItem("schedules", JSON.stringify(schedules));
  };

  return {
    createSchedule,
  };
};

export default useCrud;
