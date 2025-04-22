import React, {FC, useCallback} from 'react';
import {Modal, Text, View} from 'react-native';
import {TaskStyles} from './TaskStyles';
import {CreateTaskForm, Table, TaskHeader, UpdateTaskForm} from '@organisms';
import {ButtonGroupHeaderProps, TabHeaderProps} from '@molecules';
import {ButtonIcon, TaskChip} from '@atoms';
import {TaskItem} from '@/types/taskItem';
import {dateToString} from '@utils';
import {Warning} from '@assets';

export type TaskProps = TabHeaderProps &
  ButtonGroupHeaderProps & {
    taskItems: TaskItem[];
    showTaskForm: boolean;
    showUpdateTaskForm: boolean;
    closeTaskForm: () => void;
    toggleUpdateTaskForm: (state: boolean) => void;
  };

export const Task: FC<TaskProps> = props => {
  const now = new Date();
  const styles = TaskStyles;
  const tableHeader = [
    <Text style={styles.tableHeaderLabel}>Task</Text>,
    <Text style={styles.tableHeaderLabel}>Name</Text>,
    <Text style={styles.tableHeaderLabel}>Field</Text>,
    <Text style={styles.tableHeaderLabel}>Crop</Text>,
    <Text style={styles.tableHeaderLabel}>Status</Text>,
    <Text style={styles.tableHeaderLabel}>Due By</Text>,
    <Text style={styles.tableHeaderLabel}>Started</Text>,
    <Text style={styles.tableHeaderLabel}>Last Action</Text>,
    <Text style={styles.tableHeaderLabel}>Summary</Text>,
    <Text style={styles.tableHeaderLabel}>Action</Text>,
  ];
  const RenderStatusIcon = useCallback((status: string) => {
    if (status.toLowerCase() === 'overdue') {
      return <Warning color="#ffffff" />;
    }
    return null;
  }, []);

  const generateTableData = (tasks: TaskItem[]) => {
    return tasks.map(task => {
      const dueDate = new Date(task.dueDate);
      const status = now > dueDate ? 'Overdue' : 'On Track';

      return [
        <TaskChip label={task.type} />,
        <Text>{task.name}</Text>,
        <Text>{task.fieldName}</Text>,
        <TaskChip label={task.crop} />,
        <ButtonIcon
          buttonLabel={status}
          onPress={() => {}}
          disabled
          icon={() => RenderStatusIcon(status)}
          iconPosition={'Left'}
          labelStyle={status === 'Overdue' ? styles.statusLabel : {}}
          buttonStyle={status === 'Overdue' ? styles.status : {}}
        />,
        <Text>{task.dueBy}</Text>,
        <Text>{dateToString(task.dueDate)}</Text>,
        <Text>{dateToString(task.lastAction)}</Text>,
        <Text>{task.instruction}</Text>,
        <ButtonIcon
          buttonLabel={'Actions'}
          onPress={() => {
            if (typeof props?.toggleUpdateTaskForm === 'function') {
              props?.toggleUpdateTaskForm(!props.showUpdateTaskForm);
            }
          }}
          icon={() => null}
          iconPosition={'Left'}
          buttonStyle={styles.action}
          labelStyle={styles.actionLabel}
        />,
      ];
    });
  };

  const handleOnCloseModal = () => {
    if (typeof props?.closeTaskForm === 'function') {
      props?.closeTaskForm();
    }
  };

  const handleOnCloseUpdateModal = () => {
    if (typeof props?.toggleUpdateTaskForm === 'function') {
      props?.toggleUpdateTaskForm(!props.showUpdateTaskForm);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TaskHeader
          tabs={props.tabs}
          buttons={props.buttons}
          activeTab={props.activeTab}
        />
        <Table data={generateTableData(props.taskItems)} header={tableHeader} />
      </View>
      <Modal
        key={'create task'}
        visible={props.showTaskForm}
        animationType="slide"
        backdropColor={'rgba(0,0,0,0.5)'}>
        <CreateTaskForm onClose={handleOnCloseModal} />
      </Modal>
      <Modal
        key={'update task'}
        visible={props.showUpdateTaskForm}
        animationType="slide"
        backdropColor={'rgba(0,0,0,0.5)'}>
        <UpdateTaskForm onClose={handleOnCloseUpdateModal} />
      </Modal>
    </>
  );
};
