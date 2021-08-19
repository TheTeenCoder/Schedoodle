import classNames from "classnames";
import React from "react";
import { useLocalStorage } from "react-use";
import { useThemeColors } from "../hooks/theme";
import { Schedule, Time } from "../types";
import { useCrud, useSchedules } from "../hooks/crud";
import { Trash, X } from "react-feather";
import { useState } from "react";
import Title from "./Title";
import TimeForm from "../components/TimeForm";

interface ItemProps {
  data: Time;
  parentId: string;
}

export const TimeItem = (props: ItemProps) => {
  const { deleteTime } = useCrud();
  
  return (
    <div className="border-2 p-3 rounded-xl shadow-xl">
      <div className="flex justify-end">
        <Trash
          className="cursor-pointer"
          onClick={() => deleteTime(props.parentId, props.data.id)}
        />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl">{props.data.name}</h1>
        <h2>
          {props.data.start} to {props.data.end}
        </h2>
        {/* <Trash className={`text-${colors?.primary}`} /> */}
      </div>
    </div>
  );
};

const TimesList = (props: { id: string }) => {
  const [value] = useSchedules();

  return (
    <div className="space-y-3">
      {/* <h1 className="text-xl">Times.</h1> */}
      {value
        .find((schedule) => schedule.id === props.id)
        ?.times.map((element) => {
          return (
            <TimeItem
              key={props.id}
              data={element}
              parentId={props.id}
            />
          );
        })}
    </div>
  );
};

export default TimesList;
