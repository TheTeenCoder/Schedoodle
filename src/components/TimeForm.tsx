import React, { useState } from "react";
import Input from "./Input";
import Tippy from "@tippyjs/react";
import { useCrud } from "../hooks/crud";
import { v4 as uuidv4 } from "uuid";
import { useThemeColors } from "../hooks/theme";
import classNames from "classnames";

interface Props {
  id: string;
}

const PlusExtend = (props: any) => {

  return (
    <Tippy content="Add time to schedule.">
      <button
        type="submit"
        className="px-4 py-2 rounded-xl shadow-xl border-2"
        onClick={props.onClick}
      >
        Add Time.
      </button>
    </Tippy>
  );
};

const TimeForm = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const { createTime } = useCrud();

  const create = (e: any) => {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    createTime(props.id, {
      name: name,
      start: start,
      end: end,
      id: uuidv4()
    });
  };

  return (
    <form className="mt-20 flex flex-col justify-center" onSubmit={create}>
      <div className="flex flex-col space-y-2 items-center">
        <Input
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="add new schedule..."
        />
        <Input
          value={start}
          type="time"
          onChange={(e: any) => setStart(e.target.value)}
          placeholder="start..."
        />
        <Input
          type="time"
          value={end}
          onChange={(e: any) => setEnd(e.target.value)}
          placeholder="end..."
        />
        <PlusExtend />
      </div>
    </form>
  );
};

export default TimeForm;
