import {StyleSheet} from 'react-native';

export const TaskStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableHeaderLabel: {
    fontSize: 14,
    color: '#000000',
  },
  status: {
    alignItems: 'center',
    backgroundColor: '#ff0011',
    flexDirection: 'row',
    gap: 8,
  },
  statusLabel: {
    color: '#ffffff',
  },
  action: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderColor: '#000000',
  },
  actionLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#000000',
  },
});
