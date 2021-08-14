import classNames from "classnames";
import React from "react";
import { useLocalStorage } from "react-use";
import { useThemeColors } from "../hooks/theme";
import { Schedule } from "../types";
import { useSchedules } from "../hooks/crud";

export const ScheduleItem = (props: Schedule) => {
  const colors = useThemeColors();
  const className = classNames(
    `bg-${colors?.bgColor}`,
    `text-${colors?.primary}`,
    `border-2 border-${colors?.primary}`,
    "flex flex-col rounded-xl shadow-xl justify-start items-start px-4 py-2"
  );
  return (
    <div className={className}>
      <h1 className="text-2xl">{props.name}</h1>
      {props.note && <p className="text-lg mt-3">{props.note}</p>}
    </div>
  );
};

const ScheduleList = () => {
  

  const [value] = useSchedules();

  return (
    <div className="space-y-3">
      {value.map((element) => {
        return (
          <ScheduleItem
            name={element.name}
            id={element.id}
            note={element.note}
            times={element.times}
            key={element.id}
          />
        );
      })}
    </div>
  );
};

export default ScheduleList;
