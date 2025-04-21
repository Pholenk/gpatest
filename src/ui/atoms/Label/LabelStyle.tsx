import {StyleSheet} from 'react-native';

export const LabelStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 140,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  tooltip: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2C7D3F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipText: {
    color: 'white',
    fontSize: 12,
  },
});
