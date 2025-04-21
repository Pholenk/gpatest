import {StyleSheet} from 'react-native';

export const ButtonGroupHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 2,
    paddingHorizontal: 4,
  },
  buttonLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#000000',
  },
});
