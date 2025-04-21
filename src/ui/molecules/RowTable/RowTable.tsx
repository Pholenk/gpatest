import React, {FC, useState} from 'react';
import {RowTableStyles} from './RowTableStyles';
import {LayoutChangeEvent, View} from 'react-native';
import {TableCell, TableCellProps} from '@atoms';

export interface RowTableProps {
  cells: TableCellProps['children'][];
  cellStyle?: TableCellProps['style'];
}

export const RowTable: FC<RowTableProps> = props => {
  const styles = RowTableStyles;
  const [minHeight, setMinHeight] = useState(0);

  const keyEtractor = (length: number, index = 0) =>
    `${length / (length - 1) - index}`;

  const onCellLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setMinHeight(height);
  };

  return (
    <View style={styles.container} onLayout={onCellLayout}>
      {props.cells.map((cell, index) => (
        <TableCell
          key={keyEtractor(props.cells.length ?? 0, index)}
          style={[props.cellStyle, {minHeight: minHeight}]}>
          {cell}
        </TableCell>
      ))}
    </View>
  );
};
