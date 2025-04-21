import React, {FC, PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TableCellStyles} from './TableCellStyles';

export interface TableCellProps extends PropsWithChildren {
  cellStyle?: StyleProp<ViewStyle>;
}

export const TableCell: FC<TableCellProps> = props => {
  const styles = TableCellStyles;

  return (
    <View style={[styles.container, props.cellStyle]}>{props.children}</View>
  );
};
