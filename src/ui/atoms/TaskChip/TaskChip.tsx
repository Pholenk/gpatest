import React, {FC, useCallback} from 'react';
import {Text, View} from 'react-native';
import {TaskChipStyles} from './TaskChipStyles';
import {Calendar, Plant, Tractor, Water} from '@assets';

export interface TaskChipProps {
  label: string;
}

export const TaskChip: FC<TaskChipProps> = ({label}) => {
  const styles = TaskChipStyles;
  const labelStyle =
    label.toLowerCase() === 'cultivate' || label.toLowerCase() === 'irrigate'
      ? [styles.label, styles.whiteLabel]
      : styles.label;

  const containerStyle = () => {
    if (label.toLowerCase() === 'cultivate') {
      return [styles.container, styles.brown];
    }

    if (label.toLowerCase() === 'irrigate') {
      return [styles.container, styles.blue];
    }

    if (label.toLowerCase() === 'beans') {
      return [styles.container, styles.green];
    }

    if (label.toLowerCase() === 'snc' || /^20/g.test(label.toLowerCase())) {
      return [styles.container, styles.darkBlue];
    }
    return styles.container;
  };

  const RenderIcon = useCallback(() => {
    if (label.toLowerCase() === 'cultivate') {
      return (
        <View style={[styles.iconBox, styles.brownIcon]}>
          <Tractor color="#ffffff" width={16} height={16} />
        </View>
      );
    }

    if (label.toLowerCase() === 'irrigate') {
      return (
        <View style={[styles.iconBox, styles.blueIcon]}>
          <Water color="#ffffff" width={16} height={16} />
        </View>
      );
    }

    if (label.toLowerCase() === 'beans') {
      return (
        <View style={[styles.iconBox, styles.greenLightIcon]}>
          <Plant color="#000000" width={16} height={16} />
        </View>
      );
    }

    if (label.toLowerCase() === 'snc' || /^20/g.test(label.toLowerCase())) {
      return (
        <View style={[styles.iconBox, styles.darkBlueIcon]}>
          <Calendar color="#ffffff" width={16} height={16} />
        </View>
      );
    }

    return null;
  }, [
    label,
    styles.blueIcon,
    styles.brownIcon,
    styles.darkBlueIcon,
    styles.greenLightIcon,
    styles.iconBox,
  ]);

  return (
    <View style={containerStyle()}>
      <RenderIcon />
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};
