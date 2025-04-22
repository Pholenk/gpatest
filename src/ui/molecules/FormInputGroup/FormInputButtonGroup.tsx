import React, {FC, useCallback} from 'react';
import {FormInputButtonGroupStyle} from './FormInputButtonGroupStyle';
import {InputTextProps, Label, LabelProps} from '@atoms';
import {Text, TouchableOpacity, View} from 'react-native';
import {Tractor, Water} from '@assets';

export type TaskTypeOption = {
  id: string;
  name: string;
  icon?: string;
  color?: string;
};

export type FormInputButtonGroupProps = Omit<LabelProps, 'children'> &
  Omit<InputTextProps, 'value' | 'onChange'> & {
    label: string;
    value?: string;
    taskTypeOptions?: TaskTypeOption[];
    onChange?: (value: string) => void;
  };

export const FormInputButtonGroup: FC<FormInputButtonGroupProps> = props => {
  const {value} = props;
  const styles = FormInputButtonGroupStyle;

  const handleOnChangeValue = useCallback(
    (valueChange: string) => {
      if (typeof props?.onChange === 'function') {
        props?.onChange(valueChange);
      }
    },
    [props],
  );

  const RenderTaskTypeButtons = useCallback(() => {
    return (
      <View style={styles.taskTypeContainer}>
        {props?.taskTypeOptions?.map(type => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.taskTypeButton,
              value === type.id && styles.selectedTaskType,
            ]}
            onPress={() => handleOnChangeValue(type.id)}>
            {type.id === 'cultivate' && (
              <View style={[styles.iconContainer, styles.tractorBackground]}>
                <Tractor color="#FFF" />
              </View>
            )}
            {type.id === 'irrigate' && (
              <View style={[styles.iconContainer, styles.waterBackground]}>
                <Water color="#FFF" />
              </View>
            )}
            <Text style={styles.taskTypeText}>{type.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }, [
    handleOnChangeValue,
    props?.taskTypeOptions,
    styles.iconContainer,
    styles.selectedTaskType,
    styles.taskTypeButton,
    styles.taskTypeContainer,
    styles.taskTypeText,
    styles.tractorBackground,
    styles.waterBackground,
    value,
  ]);

  return (
    <View style={styles.container}>
      <Label
        labelStyle={props.labelStyle}
        tooltip={props.tooltip}
        containerStyle={props.containerStyle}>
        {props.label}
      </Label>
      <RenderTaskTypeButtons />
    </View>
  );
};
