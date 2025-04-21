import {StyleSheet} from 'react-native';

export const LoginFormStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#00804e',
  },
  headerContent: {
    width: '100%',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: '#ffffff',
    padding: 4,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 48,
    backgroundColor: '#ffffff',
  },
  footer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonLogin: {
    backgroundColor: '#34c759',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonLoginLabel: {
    color: '#ffffff',
    fontSize: 16,
    padding: 4,
  },
});
