import React, { useState } from "react";
import { Schedule } from "../types/index";
import { atom, useAtom } from "jotai";
import {atomWithStorage} from 'jotai/utils'

const string = JSON.parse(localStorage.getItem("schedules") || "[]");
const schedulesAtom = atomWithStorage<Schedule[]>("schedules", string);

export const useSchedules = () => {
  return useAtom(schedulesAtom);
};

export const useCrud = () => {
  const [, setSchedules] = useSchedules();

  const updateSchedules = () => {
    const schedules: Schedule[] = JSON.parse(
      localStorage.getItem("schedules") || "[]"
    );
    setSchedules(schedules);
  };

  const createSchedule = (schedule: Schedule) => {
    const schedules: Schedule[] = JSON.parse(
      localStorage.getItem("schedules") || "[]"
    );
    schedules.push(schedule);
    localStorage.setItem("schedules", JSON.stringify(schedules));
    updateSchedules();
  };

  

  return {
    createSchedule
  };
};
