import classNames from "classnames";
import React from "react";
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
  const { deleteSchedule } = useCrud();
  const modalClassName = classNames(
    `text-${colors.textColor}`,
    `border-${colors.bgColor}`,
    `bg-${colors.bgColor}`
  );

  const className = classNames(
    `text-${colors.primary}`,
    `border-2 border-${colors.primary}`,
    "flex flex-col rounded-xl shadow-xl justify-start  px-4 py-2"
  );

  return (
    <div className={className} style={{ width: "20rem" }}>
      <div className="flex justify-end">
        <Trash
          className="cursor-pointer"
          onClick={() => deleteSchedule(props.id)}
        />
      </div>
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">{props.name}</h1>
        </div>
        <p className="text-md mt-3">{props.note ? props.note : "(No notes)"}</p>
      </div>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        key={props.id}
        style={{
          content: {
            maxHeight: "50rem",
            maxWidth: "50rem",
            overflowY: "scroll",
          },
        }}
        className={
          "VH-center w-full flex flex-col border-2 rounded-xl shadow-xl outline-none p-10 " +
          modalClassName
        }
      >
        <div className="items-center flex justify-end">
          <h3 className="text-xs text-black bg-gray-300 p-2 rounded-xl ">
            ESC
          </h3>
          <X onMouseDown={() => setOpen(false)} className="cursor-pointer" />
        </div>
        <div className="flex flex-col space-y-4">
          <Title>Add Time.</Title>
          <TimeForm id={props.id} />
          <TimesList id={props.id} />
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
