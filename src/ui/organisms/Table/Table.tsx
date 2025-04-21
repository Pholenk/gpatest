import React, {FC, useCallback} from 'react';
import {TableStyles} from './TableStyles';
import {FlatList} from 'react-native';
import {RowTable, RowTableProps} from '@molecules';

export interface TableProps {
  data: RowTableProps['cells'][];
}

export const Table: FC<TableProps> = props => {
  const styles = TableStyles;

  const RenderRow = useCallback(({item}: {item: RowTableProps['cells']}) => {
    return <RowTable cells={item} />;
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={props.data}
      renderItem={RenderRow}
    />
  );
};
