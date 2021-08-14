export type Time = {
  name: string;
  start: string;
  end: string;
};

export interface Schedule {
  name: string;
  times: Array<Time>;
  id: string;
  note: string;
}
