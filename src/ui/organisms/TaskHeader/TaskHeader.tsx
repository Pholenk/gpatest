import React, {FC} from 'react';
import {View} from 'react-native';
import {TaskHeaderStyles} from './TaskHeaderStyle';
import {
  ButtonGroupHeader,
  ButtonGroupHeaderProps,
  TabHeader,
  TabHeaderProps,
} from '@molecules';

export type TaskHeaderProps = TabHeaderProps & ButtonGroupHeaderProps;

export const TaskHeader: FC<TaskHeaderProps> = props => {
  const styles = TaskHeaderStyles;

  return (
    <View style={styles.container}>
      <TabHeader tabs={props.tabs} activeTab={props.activeTab} />
      <ButtonGroupHeader buttons={props.buttons} />
    </View>
  );
};
