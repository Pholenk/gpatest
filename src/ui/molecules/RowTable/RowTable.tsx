import React, {FC} from 'react';
import {RowTableStyles} from './RowTableStyles';
import {View} from 'react-native';
import {TableCell, TableCellProps} from '@atoms';

export interface RowTableProps {
  cells: TableCellProps['children'][];
  cellStyle?: TableCellProps['style'];
}

export const RowTable: FC<RowTableProps> = props => {
  const styles = RowTableStyles;

  const keyEtractor = (length: number, index = 0) =>
    `${length / (length - 1) - index}`;

  return (
    <View style={styles.container}>
      {props.cells.map((cell, index) => (
        <TableCell
          key={keyEtractor(props.cells.length ?? 0, index)}
          style={props.cellStyle}>
          {cell}
        </TableCell>
      ))}
    </View>
  );
};
