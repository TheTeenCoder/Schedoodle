import React, { useState } from "react";
import { Plus } from "react-feather";
import Input from "./Input";
import Tippy from "@tippyjs/react";
import { useCrud } from "../hooks/crud";
import { v4 as uuidv4 } from "uuid";

const PlusExtend = (props: any) => {
  return (
    <Tippy content="Add schedule.">
      <button type="submit">
        <Plus className="cursor-pointer" onClick={props.onClick} />
      </button>
    </Tippy>
  );
};

const ScheduleForm = () => {
  const [name, setName] = useState<string>("");
  const { createSchedule } = useCrud();

  const create = (e: any) => {
    e.preventDefault();
    if (!name.trim()) {
    }
    createSchedule({
      name: name,
      times: [],
      id: uuidv4(),
      note: "",
    });
  };

  return (
    <form className="mt-20 flex flex-col justify-center" onSubmit={create}>
      <label>Add Schedule.</label>
      <div className="flex flex-row space-x-2 items-center">
        <Input
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="add new schedule..."
        />
        <PlusExtend />
      </div>
    </form>
  );
};

export default ScheduleForm;
