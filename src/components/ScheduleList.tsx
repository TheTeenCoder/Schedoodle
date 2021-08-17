import classNames from "classnames";
import React from "react";
import { useLocalStorage } from "react-use";
import { useThemeColors } from "../hooks/theme";
import { Schedule } from "../types";
import { useCrud, useSchedules } from "../hooks/crud";
import { Trash, X } from "react-feather";
import { useState } from "react";
import Modal from "react-modal";
import Title from "./Title";
import TimeForm from "../components/TimeForm";
import TimesList from "../components/TimesList";


Modal.setAppElement("#root");

export const ScheduleItem = (props: Schedule) => {
  const colors = useThemeColors();
  const [open, setOpen] = useState(false);

  const className = classNames(
    `text-${colors?.primary}`,
    `border-2 border-${colors?.primary}`,
    "flex flex-col rounded-xl shadow-xl justify-start items-start px-4 py-2 cursor-pointer"
  );
  return (
    <div
      className={className}
      style={{ width: "20rem" }}
      onClick={() => setOpen(true)}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{props.name}</h1>
        {/* <Trash className={`text-${colors?.primary}`} /> */}
      </div>
      <p className="text-md mt-3">{props.note ? props.note : "(No notes)"}</p>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        className="VH-center border-2 border-black bg-white rounded-xl shadow-xl outline-none p-24"
      >
        <div className="justify-end items-center flex">
          <h3 className="text-xs text-black bg-gray-300 p-2 rounded-xl ">
            ESC
          </h3>
          <X
            onMouseDown={() => setOpen(false)}
            className="text-black cursor-pointer"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <Title>Add Time.</Title>
          <TimeForm id={props.id} />
          <TimesList id={props.id}/>
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
