import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {ButtonGroupHeaderStyles} from './ButtonGroupHeaderStyle';
import {ButtonIcon} from '@atoms';

type Button = {
  label: string;
  icon?: ReactNode;
  onPressButton?: () => void;
};

export interface ButtonGroupHeaderProps {
  buttons: Button[];
}

export const ButtonGroupHeader: FC<ButtonGroupHeaderProps> = props => {
  const {buttons} = props;
  const styles = ButtonGroupHeaderStyles;

  const handleOnPressTab = (callBack?: () => void) => {
    if (typeof callBack === 'function') {
      callBack();
    }
  };

  return (
    <View style={[styles.container, styles.row]}>
      {buttons.map((button: Button) => {
        return (
          <ButtonIcon
            key={`${button.label}`}
            buttonLabel={button.label}
            onPress={() => handleOnPressTab(button.onPressButton)}
            icon={() => button.icon}
            iconPosition={button.label === 'operations' ? 'Right' : 'Left'}
            buttonStyle={[styles.button, styles.row]}
            labelStyle={styles.buttonLabel}
          />
        );
      })}
    </View>
  );
};
