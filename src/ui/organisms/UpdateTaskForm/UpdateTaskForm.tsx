import React, {FC, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  Calendar,
  Close,
  Plant,
  RightCircle,
  Save,
  TaskBoard,
  Undo,
} from '@assets';
import {UpdateTaskFormStyle} from './UpdateTaskFormStyle';
import {FormInputTextGroup} from '@molecules';

export interface UpdateTaskFormProps {
  onClose?: () => void;
  onOpen?: () => void;
}

export const UpdateTaskForm: FC<UpdateTaskFormProps> = props => {
  const [dueDate, setDueDate] = useState('');
  const [dueBy, setDueBy] = useState('');
  const [selectedAction, setSelectedAction] = useState('');
  const styles = UpdateTaskFormStyle;

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

  const renderTaskActionButtons = () => {
    const actions = [
      {id: 'pause', label: 'PAUSE this Task', icon: 'pause-circle-outline'},
      {id: 'cancel', label: 'CANCEL this Task (Abandon)', icon: 'cancel'},
      {id: 'complete', label: 'COMPLETE this Task', icon: 'check-circle'},
    ];

    return (
      <View style={styles.actionButtonsRow}>
        {actions.map(action => (
          <TouchableOpacity
            key={action.id}
            style={[
              styles.actionButton,
              selectedAction === action.id && styles.selectedActionButton,
            ]}
            onPress={() => setSelectedAction(action.id)}>
            <View style={styles.actionButtonContent}>
              <View style={styles.radioButton}>
                {selectedAction === action.id && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
              <Text style={styles.actionButtonText}>{action.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <TaskBoard color="#ffffff" />
            <Text style={styles.title}>Action Task</Text>
          </View>
          <TouchableOpacity onPress={handleOnClose} style={styles.closeButton}>
            <Close color="#ffffff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.formContent}>
          <View style={styles.taskInfoSection}>
            <View style={styles.taskInfoRow}>
              <View style={styles.taskTypeContainer}>
                <Plant color="#fff" />
                <Text style={styles.taskTypeText}>Plant</Text>
              </View>

              <View style={styles.badgeContainer}>
                <View style={styles.circleBadge}>
                  <Text style={styles.circleBadgeText}>+</Text>
                </View>
              </View>

              <View style={styles.dueDateContainer}>
                <Calendar width={20} height={20} color="#f44336" />
                <Text style={styles.dueDateText}>21 July 2024</Text>
                <View style={styles.overdueBadge}>
                  <Text style={styles.overdueBadgeText}>Overdue</Text>
                </View>
              </View>
            </View>
            <View style={styles.taskInfoRow}>
              <View style={styles.fieldInfoContainer}>
                <View style={styles.fieldTag}>
                  <Text style={styles.fieldTagText}>ON</Text>
                </View>
                <Text style={styles.fieldText}>09 - Cane Block I</Text>
              </View>

              <View style={styles.taskActions}>
                <View style={styles.priorityTag}>
                  <Text style={styles.priorityTagNumber}>1</Text>
                </View>

                <View style={styles.viewButton}>
                  <RightCircle color="#555" width={20} height={20} />
                  <Text style={styles.viewButtonText}>VIEW</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.actionSection}>
            <View style={styles.actionHeader}>
              <Text style={styles.actionHeaderText}>
                Select Action for this Task
              </Text>
            </View>
            {renderTaskActionButtons()}
          </View>

          <FormInputTextGroup
            label="On Behalf of"
            tooltip={true}
            value={dueBy}
            onChange={value => setDueBy(value)}
          />
          <FormInputTextGroup
            label="Action Date / Time"
            tooltip
            value={dueDate}
            onChange={value => setDueDate(value)}
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
