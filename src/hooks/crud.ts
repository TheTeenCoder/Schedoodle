import React, { useState } from "react";
import { Schedule } from "../types/index";

export const useSchedules = () => {
  return useState<Schedule[]>(
    JSON.parse(localStorage.getItem("schedules") || "[]")
  );
};

export const useCrud = () => {

  const [stateSchedules, setSchedules] = useSchedules();

  const createSchedule = (schedule: Schedule) => {
    const schedules: Array<Schedule> = JSON.parse(
      localStorage.getItem("schedules") || "[]"
    );
    schedules.push(schedule);
    localStorage.setItem("schedules", JSON.stringify(schedules));
    setSchedules(schedules);
    console.log(stateSchedules)
    console.log('updated')
  };

  return {
    createSchedule,
  };
};
