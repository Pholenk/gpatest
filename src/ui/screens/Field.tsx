import React, {FC, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/types/navigation';
import {Field} from '@templates';
import {
  Map,
  Menu,
  Plus,
  Search,
  TaskBoard,
  TaskBoardCheck,
  TaskBoardPending,
  Tractor,
  Water,
} from '@assets';
import {FieldItem} from '@/types/fieldItem';

export type FieldScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Field'
>;
export const FieldScreen: FC<FieldScreenProps> = () => {
  const [activeTab, setActiveTab] = useState('task list');
  const [showTaskForm, setShowTaskForm] = useState(false);
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
  const fields: FieldItem[] = [
    {
      name: 'Field Cane 1',
      site: 'SNC',
      crop: 'Beans',
      cropYear: 1,
      size: '1.9 ha',
      currentSeason: '2024',
      lastTask: {
        icon: <Tractor color="#ffffff" width={16} height={16} />,
        label: '8 Oct 2024',
      },
      nextTask: {
        icon: <Water color="#ffffff" width={15} height={16} />,
        label: '18 Oct 2024',
      },
      observation: '',
      lastSeasonYield: '',
      lastSeasonCCS: '',
    },
  ];
  return (
    <Field
      tabs={tabs}
      activeTab={activeTab}
      buttons={buttons}
      fieldItems={fields}
      showTaskForm={showTaskForm}
      closeTaskForm={() => {
        setShowTaskForm(false);
      }}
    />
  );
};
