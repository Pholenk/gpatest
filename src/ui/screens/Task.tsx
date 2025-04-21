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

export type TaskScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Task'
>;
export const TaskScreen: FC<TaskScreenProps> = props => {
  const [activeTab, setActiveTab] = useState('task list');
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
    {label: 'add', icon: <Plus />, onPressButton: () => {}},
    {label: 'map view', icon: <Map />, onPressButton: () => {}},
    {label: 'filters', icon: <Search />, onPressButton: () => {}},
    {label: 'operations', icon: <Menu />, onPressButton: () => {}},
  ];
  return <Task tabs={tabs} activeTab={activeTab} buttons={buttons} />;
};
