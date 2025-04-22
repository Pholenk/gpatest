import React, {FC} from 'react';
import {Modal, Text, View} from 'react-native';
import {FieldStyles} from './FieldStyles';
import {CreateFieldForm, Table, TaskHeader} from '@organisms';
import {ButtonGroupHeaderProps, TabHeaderProps} from '@molecules';
import {ButtonIcon, TaskChip} from '@atoms';
import {FieldItem} from '@/types/fieldItem';

export type FieldProps = TabHeaderProps &
  ButtonGroupHeaderProps & {
    fieldItems: FieldItem[];
    showTaskForm: boolean;
    closeTaskForm: () => void;
  };

export const Field: FC<FieldProps> = props => {
  const styles = FieldStyles;
  const tableHeader = [
    <Text style={styles.tableHeaderLabel}>Field</Text>,
    <Text style={styles.tableHeaderLabel}>Farm Site</Text>,
    <Text style={styles.tableHeaderLabel}>Crop Varieties</Text>,
    <Text style={styles.tableHeaderLabel}>Crop Year</Text>,
    <Text style={styles.tableHeaderLabel}>Size</Text>,
    <Text style={styles.tableHeaderLabel}>Current Season</Text>,
    <Text style={styles.tableHeaderLabel}>Last Task</Text>,
    <Text style={styles.tableHeaderLabel}>Next Task</Text>,
    <Text style={styles.tableHeaderLabel}>Observations</Text>,
    <Text style={styles.tableHeaderLabel}>Last Season Yield</Text>,
    <Text style={styles.tableHeaderLabel}>Last Season CCS</Text>,
    <Text style={styles.tableHeaderLabel}>Actions</Text>,
  ];

  const generateTableData = (fields: FieldItem[]) => {
    return fields.map(field => {
      return [
        <Text>{field.name}</Text>,
        <TaskChip label={field.site} />,
        <TaskChip label={field.crop} />,
        <View style={styles.badge}>
          <Text style={styles.badgeLabel}>{field.cropYear}</Text>
        </View>,
        <Text>{field.size}</Text>,
        <TaskChip label={field.currentSeason} />,
        <View style={styles.row}>
          <View style={[styles.iconBox, styles.brownIcon]}>
            {field.lastTask.icon}
          </View>
          <Text>{field.lastTask.label}</Text>
        </View>,
        <View style={styles.row}>
          <View style={[styles.iconBox, styles.blueIcon]}>
            {field.nextTask.icon}
          </View>
          <Text>{field.nextTask.label}</Text>
        </View>,
        <Text>{field.observation}</Text>,
        <Text>{field.lastSeasonYield}</Text>,
        <Text>{field.lastSeasonYield}</Text>,
        <ButtonIcon
          buttonLabel={'Actions'}
          onPress={() => {}}
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

  return (
    <>
      <View style={styles.container}>
        <TaskHeader
          tabs={props.tabs}
          buttons={props.buttons}
          activeTab={props.activeTab}
        />
        <Table
          data={generateTableData(props.fieldItems)}
          header={tableHeader}
        />
      </View>
      <Modal
        key={'create task'}
        visible={props.showTaskForm}
        animationType="slide"
        backdropColor={'rgba(0,0,0,0.5)'}>
        <CreateFieldForm onClose={handleOnCloseModal} />
      </Modal>
    </>
  );
};
