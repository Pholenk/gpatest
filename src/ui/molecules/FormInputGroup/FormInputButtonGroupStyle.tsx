import {StyleSheet} from 'react-native';

export const FormInputButtonGroupStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    width: '100%',
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 16,
    backgroundColor: '#409EFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  taskTypeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  taskTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: 180,
    height: 52,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: 'white',
    marginHorizontal: 4,
  },
  taskTypeText: {
    fontSize: 13,
  },
  tractorBackground: {backgroundColor: '#E6A23C'},
  waterBackground: {backgroundColor: '#409EFF'},
  selectedTaskType: {
    borderColor: '#2C7D3F',
    borderWidth: 2,
  },
});
