import {StyleSheet} from 'react-native';

export const TabHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#00804e',
    alignItems: 'center',
    gap: 8,
  },
  row: {
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    padding: 4,
    minWidth: 120,
  },
  tabLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#ffffff',
  },
  activeTab: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 4,
    minWidth: 120,
  },
  activeTabLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#000000',
  },
});
