import React, {FC, useCallback, useState} from 'react';
import {FormInputDateGroupStyle} from './FormInputDateGroupStyle';
import {InputText, InputTextProps, Label, LabelProps} from '@atoms';
import {Text, TouchableOpacity, View} from 'react-native';

export type FormInputDateGroupProps = Omit<LabelProps, 'children'> &
  Omit<InputTextProps, 'value' | 'onChange'> & {
    label: string;
    dueByValue?: string;
    dueDateValue?: string;
    onChange?: (key: string, value: string) => void;
    onCalendarPress: (state: boolean) => void;
  };

export const FormInputDateGroup: FC<FormInputDateGroupProps> = props => {
  const {dueByValue, dueDateValue} = props;
  const styles = FormInputDateGroupStyle;
  const [showCalendar, setShowCalendar] = useState(true);

  const handleOnChangeValue = useCallback(
    (valueChange: string) => {
      if (typeof props?.onChange === 'function') {
        props?.onChange('dueBy', valueChange);
      }
    },
    [props],
  );

  // TODO: tobe implemented
  // const handleOnChangeDateValue = useCallback(
  //   (valueChange: DateData) => {
  //     if (typeof props?.onChange === 'function') {
  //       props?.onChange(
  //         'dueDate',
  //         `${valueChange.year}-${valueChange.month}-${valueChange.day}T${valueChange.timestamp}`,
  //       );
  //     }
  //   },
  //   [props],
  // );

  const handleOnShowCalendar = () => {
    // TODO: tobe implemented
    // if (typeof props.onCalendarPress === 'function') {
    //   props.onCalendarPress(!showCalendar);
    // }

    setShowCalendar(!showCalendar);
  };

  return (
    <View style={styles.container}>
      <Label
        labelStyle={props.labelStyle}
        containerStyle={props.containerStyle}>
        {props.label}
      </Label>

      <View style={styles.dateContainer}>
        <InputText
          value={dueByValue}
          onChangeText={handleOnChangeValue}
          {...props}
        />
        <TouchableOpacity
          style={styles.calendarButton}
          onPress={handleOnShowCalendar}>
          <Text>{dueDateValue || 'Select date'}</Text>
        </TouchableOpacity>
      </View>
      {/* TODO: tobe implemented {showCalendar && (
        <Calendar
          onDayPress={handleOnChangeDateValue}
          markedDates={
            dueDateValue
              ? {
                  [dueDateValue]: {selected: true, selectedColor: '#2C7D3F'},
                }
              : {}
          }
          style={styles.calendar}
        />
      )} */}
    </View>
  );
};
