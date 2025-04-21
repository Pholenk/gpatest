import React, {FC, useCallback} from 'react';
import {Text, View} from 'react-native';
import {TaskChipStyles} from './TaskChipStyles';
import {Tractor, Water} from '@assets';

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

  const RenderIcon = useCallback(() => {
    if (label === 'cultivate') {
      return (
        <View style={[styles.iconBox, styles.brownIcon]}>
          <Tractor color="#ffffff" width={16} height={16} />
        </View>
      );
    }

    if (label === 'irrigate') {
      return (
        <View style={[styles.iconBox, styles.blueIcon]}>
          <Water color="#ffffff" width={16} height={16} />
        </View>
      );
    }

    return null;
  }, [label, styles.blueIcon, styles.brownIcon, styles.iconBox]);

  return (
    <View style={containerStyle()}>
      <RenderIcon />
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};
