import React, { useState } from "react";
import { Schedule, Time } from "../types/index";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const string = JSON.parse(localStorage.getItem("schedules") || "[]");
const schedulesAtom = atomWithStorage<Schedule[]>("schedules", string);

export const useSchedules = () => {
  return useAtom(schedulesAtom);
};

export const useCrud = () => {
  const [setSchedulesValue, setSchedules] = useSchedules();

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
    schedules.find((schedule) => schedule.id === id)?.times.push(Time);
    setSchedules(schedules);
  };

  const deleteSchedule = (id: string) => {
    const schedules: Schedule[] = JSON.parse(
      localStorage.getItem("schedules") || "[]"
    );
    var removeIndex = schedules.map((item) => item.id).indexOf(id);
    schedules.splice(removeIndex, 1);
    setSchedules(schedules);
  };

  const deleteTime = (ScheduleId: string, TimeId: string) => {
    const schedules: Schedule[] = JSON.parse(
      localStorage.getItem("schedules") || "[]"
    );

    const removeIndex = schedules
      .find((schedule) => schedule.id === ScheduleId)
      ?.times.map((item) => item.id)
      .indexOf(TimeId);
    console.log(removeIndex);

    if (removeIndex === null) {
      return;
    }

    console.log(removeIndex);
    schedules
      .find((schedule) => schedule.id === ScheduleId)
      ?.times.splice(removeIndex || -1, 1);
    setSchedules(schedules);
  };

  return {
    createSchedule,
    createTime,
    deleteSchedule,
    deleteTime,
  };
};
