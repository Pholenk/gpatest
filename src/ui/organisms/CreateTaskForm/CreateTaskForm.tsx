import React, {FC, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Close, Save, TaskBoard, Undo} from '@assets';
import {CreateTaskFormStyle} from './CreateTaskFormStyle';
import {
  FormInputButtonGroup,
  FormInputDateGroup,
  FormInputTextGroup,
} from '@molecules';

export interface CreateTaskFormProps {
  onClose?: () => void;
  onOpen?: () => void;
}

export const CreateTaskForm: FC<CreateTaskFormProps> = props => {
  const [selectedTaskType, setSelectedTaskType] = useState('');
  const [field, setField] = useState('');
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueBy, setDueBy] = useState('');
  const [instruction, setInstruction] = useState('');
  const [attachments, setAttachments] = useState('');
  const styles = CreateTaskFormStyle;

  const taskTypes = [
    {id: 'cultivate', name: 'Cultivate', icon: 'tractor', color: '#E6A23C'},
    {
      id: 'fertilize',
      name: 'Fertilize',
      icon: 'bottle-tonic',
      color: '#409EFF',
    },
    {id: 'spray', name: 'Spray', icon: 'spray', color: '#67C23A'},
    {id: 'irrigate', name: 'Irrigate', icon: 'water', color: '#409EFF'},
    {id: 'plant', name: 'Plant', icon: 'seed', color: '#67C23A'},
    {id: 'harvest', name: 'Harvest', icon: 'basket', color: '#E6A23C'},
  ];

  const handleSave = () => {
    // TODO: to be implemented
    if (typeof props?.onClose === 'function') {
      props?.onClose();
    }
  };

  const handleOnClose = () => {
    if (typeof props?.onClose === 'function') {
      props?.onClose();
    }
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <TaskBoard color="#ffffff" />
            <Text style={styles.title}>Create a Task</Text>
          </View>
          <TouchableOpacity onPress={handleOnClose} style={styles.closeButton}>
            <Close color="#ffffff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.formContent}>
          <FormInputButtonGroup
            label="Select Task Type"
            tooltip
            taskTypeOptions={taskTypes}
            onChange={value => setSelectedTaskType(value)}
            value={selectedTaskType}
          />
          <FormInputTextGroup
            label="Field"
            tooltip
            value={field}
            onChange={value => setField(value)}
          />
          <FormInputTextGroup
            label="Task Name"
            tooltip
            value={taskName}
            onChange={value => setTaskName(value)}
          />
          <FormInputDateGroup
            label="Due Date Timing"
            tooltip
            dueByValue={dueBy}
            dueDateValue={dueDate}
            onCalendarPress={calendarState => {
              if (calendarState && typeof props?.onClose === 'function') {
                props?.onClose();
              }
              if (!calendarState && typeof props?.onOpen === 'function') {
                props?.onOpen();
              }
            }}
            onChange={(key, value) => {
              if (key === 'dueBy') {
                setDueBy(value);
              } else {
                setDueDate(value);
              }
            }}
          />
          <FormInputTextGroup
            label="Instruction"
            tooltip
            value={instruction}
            onChange={value => setInstruction(value)}
          />
          <FormInputTextGroup
            label="Attachments"
            tooltip
            value={attachments}
            onChange={value => setAttachments(value)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleOnClose}>
              <Undo color="#555" />
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Save color="#ffffff" />
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
