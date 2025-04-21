import React, {FC, useCallback} from 'react';
import {TableStyles} from './TableStyles';
import {FlatList} from 'react-native';
import {RowTable, RowTableProps} from '@molecules';

export interface TableProps {
  data: RowTableProps['cells'][];
  header?: RowTableProps['cells'];
}

export const Table: FC<TableProps> = props => {
  const styles = TableStyles;

  const RenderHeader = useCallback(() => {
    const header = [...(props?.header ?? [])];

    if (header.length > 0) {
      return <RowTable cells={header} cellStyle={styles.header} />;
    }

    return null;
  }, [props?.header, styles.header]);

  const RenderRow = useCallback(
    ({item}: {item: RowTableProps['cells']}) => {
      return <RowTable cells={item} cellStyle={styles.cellItem} />;
    },
    [styles.cellItem],
  );

  return (
    <FlatList
      ListHeaderComponent={RenderHeader}
      style={styles.container}
      data={props.data}
      renderItem={RenderRow}
    />
  );
};
