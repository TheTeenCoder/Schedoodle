import React from "react";
import { Plus } from "react-feather";
import Input from "./Input";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import Modal from "react-modal";
import { useCrud } from "../hooks/crud";
import { v4 as uuidv4 } from 'uuid';

Modal.setAppElement("#root");

const PlusExtend = (props: any) => {
  return (
    <Tippy content="Add schedule.">
      <Plus className="cursor-pointer" onClick={props.onClick} />
    </Tippy>
  );
};

const ScheduleForm = () => {
  const [name, setName] = useState<string>("");
  const { createSchedule } = useCrud();
  
  const create = (e: any) => {

    if(!name.trim()){

    }
    createSchedule({
      name: name,
      times: [],
      id: uuidv4(),
      note: ''
    })
  };

  return (
    <form className="mt-20 flex flex-col justify-center">
      <label>Add Schedule.</label>
      <div className="flex flex-row space-x-2 items-center">
        <Input
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="add new schedule..."
        />
        <PlusExtend onClick={create} />
        {/* <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="VH-center border-2 border-black bg-white p-4 rounded-xl shadow-xl outline-none"
        >
          <div className="flex flex-col space-y-2">
            <Title>Add Schedule.</Title>
            
          </div>
        </Modal> */}
      </div>
    </form>
  );
};

export default ScheduleForm;
