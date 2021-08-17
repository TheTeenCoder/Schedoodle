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

export const TimeItem = (props: Time) => {
  const colors = useThemeColors();

  const className = classNames(
    `text-${colors?.bgColor}`,
    `border-2 border-${colors?.bgColor}`,
    "flex flex-col rounded-xl shadow-xl justify-around items-start px-4 py-2"
  );
  return (
    <div className={className}>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl">{props.name}</h1>
        <h2>{props.start} to {props.end}</h2>
        {/* <Trash className={`text-${colors?.primary}`} /> */}
      </div>
    </div>
  );
};

const TimesList = (props: { id: string }) => {
  const [value] = useSchedules();

  return (
    <div className="space-y-3">
      <h1 className="text-xl">Times.</h1>
      {value
        .find((schedule) => schedule.id === props.id)
        ?.times.map((element) => {
          return (
            <TimeItem
              name={element.name}
              id={element.id}
              start={element.start}
              end={element.end}
              key={element.id}
            />
          );
        })}
    </div>
  );
};

export default TimesList;
