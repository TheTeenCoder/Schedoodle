import React from "react";
import { Plus } from "react-feather";
import Input from "./Input";
import Tippy from "@tippyjs/react";

const ScheduleForm = () => {
  return (
    <form className="mt-20 flex flex-col justify-center">
      <label>Add Schedule.</label>
      <div className="flex flex-row space-x-2 items-center">
        <Input />
        <Tippy content="Add schedule.">
          <Plus />
        </Tippy>
      </div>
    </form>
  );
};

export default ScheduleForm;
