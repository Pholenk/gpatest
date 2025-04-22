import {FC, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Close, Save, TaskBoard, Undo} from '@assets';
import {CreateFieldFormStyle} from './CreateFieldFormStyle';
import {FormInputTextGroup} from '@molecules';

export interface CreateFieldFormProps {
  onClose?: () => void;
  onOpen?: () => void;
}

export const CreateFieldForm: FC<CreateFieldFormProps> = props => {
  const [fieldName, setFieldName] = useState('');
  const [fieldCode, setFieldCode] = useState('');
  const [fieldColor, setFieldColor] = useState('');
  const [description, setDescription] = useState('');
  const [primaryCrop, setPrimaryCrop] = useState('');
  const [rowWidth, setRowWidth] = useState('');
  const [direction, setDirection] = useState('');
  const styles = CreateFieldFormStyle;

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
          <View style={styles.actionSection}>
            <View style={styles.actionHeader}>
              <Text style={styles.actionHeaderText}>Field Details</Text>
            </View>
          </View>
          <View style={styles.formRow}>
            <FormInputTextGroup
              containerStyle={styles.inputContainer}
              label="Field Name"
              tooltip={true}
              value={fieldName}
              onChange={value => setFieldName(value)}
            />
            <FormInputTextGroup
              containerStyle={styles.inputContainer}
              label="Field Code"
              tooltip={true}
              value={fieldCode}
              onChange={value => setFieldCode(value)}
            />
          </View>
          <FormInputTextGroup
            label="Description"
            tooltip
            value={description}
            onChange={value => setDescription(value)}
          />
          <View style={styles.formRow}>
            <Text style={styles.label}>Field Geometry</Text>

            <Text style={styles.label}>
              Field boundaries and AB Lines must be uploaded by the system
              administrator
            </Text>
          </View>
          <View style={styles.formRow}>
            <FormInputTextGroup
              containerStyle={styles.inputContainer}
              label="Primary Crop"
              tooltip={true}
              value={primaryCrop}
              onChange={value => setPrimaryCrop(value)}
            />
            <FormInputTextGroup
              containerStyle={styles.inputContainer}
              label="Row Width"
              tooltip={true}
              value={rowWidth}
              onChange={value => setRowWidth(value)}
            />
          </View>
          <View style={styles.formRow}>
            <FormInputTextGroup
              containerStyle={styles.inputContainer}
              label="Field Color"
              tooltip
              value={fieldColor}
              onChange={value => setFieldColor(value)}
            />
            <FormInputTextGroup
              containerStyle={styles.inputContainer}
              label="Row Direction"
              tooltip
              value={direction}
              onChange={value => setDirection(value)}
            />
          </View>
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
