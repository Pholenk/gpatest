import {TaskType} from '@utils';

export type TaskItem = {
  type: TaskType;
  fieldName: string;
  name: string;
  crop: string;
  dueBy: string;
  dueDate: string;
  lastAction: string;
  instruction: string;
  attachment: string;
};
