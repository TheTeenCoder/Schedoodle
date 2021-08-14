import React from "react";
import Input from "../components/Input";
import ScheduleForm from "../components/ScheduleForm";
import Title from "../components/Title";
import { FadeIn } from "../components/animations";
const Schedules = () => {
  return (
    <FadeIn>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-4 mt-10">
          <Title>Schedoodle.</Title>
          <ScheduleForm />
        </div>
      </div>
    </FadeIn>
  );
};

export default Schedules;
