import React, {FC} from 'react';
import {View} from 'react-native';
import {TaskStyles} from './TaskStyles';
import {TaskHeader} from '@organisms';
import {ButtonGroupHeaderProps, TabHeaderProps} from '@molecules';

export type TaskProps = TabHeaderProps & ButtonGroupHeaderProps;

export const Task: FC<TaskProps> = props => {
  const styles = TaskStyles;

  return (
    <View style={styles.container}>
      <TaskHeader
        tabs={props.tabs}
        buttons={props.buttons}
        activeTab={props.activeTab}
      />
    </View>
  );
};
