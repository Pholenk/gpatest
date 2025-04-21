import {TaskType} from '@utils';

export type TaskItem = {
  type: TaskType;
  fieldName: string;
  name: string;
  dueBy: string;
  dueDate: string;
  instruction: string;
  attachment: string;
};
