import {FC} from 'react';
import {Text, View} from 'react-native';
import {TaskChipStyles} from './TaskChipStyles';

export interface TaskChipProps {
  label: string;
}

export const TaskChip: FC<TaskChipProps> = ({label}) => {
  const styles = TaskChipStyles;
  const labelStyle =
    label === 'cultivate' || label === 'irrigate'
      ? [styles.label, styles.whiteLabel]
      : styles.label;

  const containerStyle = () => {
    if (label === 'cultivate') {
      return [styles.container, styles.brown];
    }

    if (label === 'irrigate') {
      return [styles.container, styles.blue];
    }

    return styles.container;
  };

  return (
    <View style={containerStyle()}>
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};
