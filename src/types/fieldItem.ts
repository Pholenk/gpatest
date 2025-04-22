import {ReactElement} from 'react';

type Task = {
  icon?: ReactElement;
  label: string;
};

export type FieldItem = {
  name: string;
  site: string;
  crop: string;
  cropYear: number;
  size: string;
  currentSeason: string;
  lastTask: Task;
  nextTask: Task;
  observation: string;
  lastSeasonYield: string;
  lastSeasonCCS: string;
};
