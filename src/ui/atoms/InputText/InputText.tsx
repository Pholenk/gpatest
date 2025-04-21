import React, {FC, useMemo} from 'react';
import {TextInputProps, View, TextInput} from 'react-native';
import {inputTextStyles} from './InputTextStyle';

export interface InputTextProps
  extends Omit<TextInputProps, 'value' | 'onChange'> {
  value?: string;
}

export const InputText: FC<InputTextProps> = props => {
  const styles = inputTextStyles;
  const value = useMemo(() => props.value, [props.value]);
  const onChangeHandler = (textValue: string) => {
    if (typeof props?.onChangeText === 'function') {
      props.onChangeText(textValue);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#adadad"
        onChangeText={onChangeHandler}
        {...props}
      />
    </View>
  );
};
