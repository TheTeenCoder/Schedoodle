import React, { useState } from "react";
import { Schedule, Time } from "../types/index";
import { useAtom } from "jotai";
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
    setSchedules(schedules);
  };

  const createTime = (id: string, Time: Time) => {
    const schedules: Schedule[] = JSON.parse(
      localStorage.getItem("schedules") || "[]"
    );
    schedules.find(schedule => schedule.id === id)?.times.push(Time);
    setSchedules(schedules);
  };

  

  return {
    createSchedule,
    createTime
  };
};
