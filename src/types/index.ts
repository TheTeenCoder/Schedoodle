export type Time = {
  name: string;
  start: string;
  end: string;
  id: string;
};

export interface Schedule {
  name: string;
  times: Time[];
  id: string;
  note: string;
}
