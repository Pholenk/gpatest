import {FC, useCallback} from 'react';
import {FormInputTextGroupStyle} from './FormInputTextGroupStyle';
import {InputText, InputTextProps, Label, LabelProps} from '@atoms';
import {View} from 'react-native';

export type FormInputTextGroupProps = Omit<LabelProps, 'children'> &
  Omit<InputTextProps, 'value' | 'onChange'> & {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
  };

export const FormInputTextGroup: FC<FormInputTextGroupProps> = props => {
  const {value} = props;
  const styles = FormInputTextGroupStyle;

  const handleOnChangeValue = useCallback(
    (valueChange: string) => {
      if (typeof props?.onChange === 'function') {
        props?.onChange(valueChange);
      }
    },
    [props],
  );

  return (
    <View style={styles.container}>
      <Label
        labelStyle={props.labelStyle}
        containerStyle={props.containerStyle}>
        {props.label}
      </Label>
      <InputText value={value} onChangeText={handleOnChangeValue} {...props} />
    </View>
  );
};
