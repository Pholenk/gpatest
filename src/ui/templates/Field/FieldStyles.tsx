import {StyleSheet} from 'react-native';

export const FieldStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  badge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },

  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 20,
    width: 20,
  },
  blueIcon: {
    backgroundColor: '#00a5d7',
  },
  brownIcon: {
    backgroundColor: '#a5664c',
  },
});
