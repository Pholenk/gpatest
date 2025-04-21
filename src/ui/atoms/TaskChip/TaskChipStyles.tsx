import {StyleSheet} from 'react-native';

export const TaskChipStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  blue: {
    backgroundColor: '#5ad0f8',
  },
  brown: {
    backgroundColor: '#c4846a',
  },
  label: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  whiteLabel: {
    color: '#ffffff',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 20,
    width: 24,
  },
  blueIcon: {
    backgroundColor: '#00a5d7',
  },
  brownIcon: {
    backgroundColor: '#a5664c',
  },
});
