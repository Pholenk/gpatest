import {StyleSheet} from 'react-native';

export const UpdateTaskFormStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  formContainer: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2C7D3F',
    paddingHorizontal: 16,
    height: 48,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  closeButton: {
    padding: 4,
  },
  formContent: {
    // padding: 16,
    maxHeight: 600,
  },
  taskInfoSection: {
    backgroundColor: 'white',
    padding: 12,
  },
  taskInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  taskTypeContainer: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  taskTypeText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  circleBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBadgeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dueDateText: {
    marginLeft: 5,
    marginRight: 5,
  },
  overdueBadge: {
    backgroundColor: '#f44336',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  overdueBadgeText: {
    color: 'white',
    fontSize: 12,
  },

  fieldInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldTag: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  fieldTagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fieldText: {
    marginLeft: 5,
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priorityTag: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  priorityTagNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f5f5f5',
  },
  viewButtonText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#555',
  },
  actionSection: {
    marginTop: 12,
  },
  actionHeader: {
    backgroundColor: '#00b195',
    padding: 12,
  },
  actionHeaderText: {
    color: 'white',
    fontWeight: 'bold',
  },

  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  actionButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 4,
    backgroundColor: 'white',
  },
  selectedActionButton: {
    borderColor: '#00b195',
  },
  actionButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00b195',
  },
  actionButtonText: {
    fontSize: 10,
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 2,
  },
  actionIcon: {
    marginLeft: 4,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
    flex: 1,
    marginRight: 8,
  },
  cancelButtonText: {
    color: '#555',
    marginLeft: 4,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#2C7D3F',
    flex: 1,
    marginLeft: 8,
  },
  saveButtonText: {
    color: 'white',
    marginLeft: 4,
  },
});
