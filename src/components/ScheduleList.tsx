import classNames from "classnames";
import React from "react";
import { useLocalStorage } from "react-use";
import { useThemeColors } from "../hooks/theme";
import { Schedule } from "../types";
import { useCrud, useSchedules } from "../hooks/crud";
import { Trash } from "react-feather";
import { useState } from "react";
import Modal from 'react-modal'
import Title from './Title'

export const ScheduleItem = (props: Schedule) => {
  const colors = useThemeColors();
  const [open, setOpen] = useState(false);
  const className = classNames(
    `bg-${colors?.bgColor}`,
    `text-${colors?.primary}`,
    `border-2 border-${colors?.primary}`,
    "flex flex-col rounded-xl shadow-xl justify-start items-start px-4 py-2 cursor-pointer"
  );
  return (
    <div className={className} style={{width: "20rem"}}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{props.name}</h1>
        {/* <Trash className={`text-${colors?.primary}`} /> */}
      </div>
      {props.note && <p className="text-lg mt-3">{props.note}</p>}
      <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="VH-center border-2 border-black bg-white p-4 rounded-xl shadow-xl outline-none"
        >
          <div className="flex flex-col space-y-2">
            <Title>Add Schedule.</Title>
            
          </div>
        </Modal>
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
