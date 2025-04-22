import React, {FC, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/types/navigation';
import {Task} from '@templates';
import {
  Map,
  Menu,
  Plus,
  Search,
  TaskBoard,
  TaskBoardCheck,
  TaskBoardPending,
} from '@assets';
import {TaskType} from '@utils';
import {TaskItem} from '@/types/taskItem';

export type TaskScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Task'
>;
export const TaskScreen: FC<TaskScreenProps> = () => {
  const [activeTab, setActiveTab] = useState('task list');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showUpdateTaskForm, setShowUpdateTaskForm] = useState(false);
  const tabs = [
    {
      label: 'task list',
      icon: (
        <TaskBoard color={activeTab === 'task list' ? '#000000' : '#ffffff'} />
      ),
      onPressTab: () => setActiveTab('task list'),
    },
    {
      label: 'completed tasks',
      icon: (
        <TaskBoardCheck
          color={activeTab === 'completed tasks' ? '#000000' : '#ffffff'}
        />
      ),
      onPressTab: () => setActiveTab('completed tasks'),
    },
    {
      label: 'incomplete tasks',
      icon: (
        <TaskBoardPending
          color={activeTab === 'incomplete tasks' ? '#000000' : '#ffffff'}
        />
      ),
      onPressTab: () => setActiveTab('incomplete tasks'),
    },
  ];
  const buttons = [
    {
      label: 'add',
      icon: <Plus />,
      onPressButton: () => {
        setShowTaskForm(true);
      },
    },
    {label: 'map view', icon: <Map />, onPressButton: () => {}},
    {label: 'filters', icon: <Search />, onPressButton: () => {}},
    {label: 'operations', icon: <Menu />, onPressButton: () => {}},
  ];
  const tasks: TaskItem[] = [
    {
      type: 'Cultivate' as TaskType,
      name: 'Name of task',
      fieldName: 'Field Cane 1',
      crop: 'Beans',
      dueBy: 'My Self',
      dueDate: '2025-02-17T16:30:00',
      lastAction: '2025-02-17T16:30:00',
      instruction: '',
      attachment: '',
    },
  ];
  return (
    <Task
      tabs={tabs}
      activeTab={activeTab}
      buttons={buttons}
      taskItems={tasks}
      showTaskForm={showTaskForm}
      closeTaskForm={() => {
        setShowTaskForm(false);
      }}
      showUpdateTaskForm={showUpdateTaskForm}
      toggleUpdateTaskForm={(state: boolean) => {
        setShowUpdateTaskForm(state);
      }}
    />
  );
};
