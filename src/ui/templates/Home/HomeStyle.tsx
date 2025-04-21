import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    backgroundColor: '#ffffff',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  buttonMenu: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#000000',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
});
