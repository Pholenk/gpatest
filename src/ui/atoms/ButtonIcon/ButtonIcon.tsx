import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface ButtonIconProps {
  buttonLabel: string;
  onPress: () => void;
  icon: () => ReactNode;
  iconPosition: 'Left' | 'Right';
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const ButtonIcon = ({
  buttonLabel,
  onPress,
  disabled,
  icon,
  iconPosition = 'Right',
  ...props
}: ButtonIconProps) => {
  return (
    <TouchableOpacity
      style={[props?.buttonStyle]}
      onPress={onPress}
      disabled={disabled}>
      {iconPosition === 'Left' ? icon() : null}
      <Text style={props?.labelStyle}>{buttonLabel}</Text>
      {iconPosition === 'Right' ? icon() : null}
    </TouchableOpacity>
  );
};
