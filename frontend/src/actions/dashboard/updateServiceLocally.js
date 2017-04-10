export const UPDATE_SERVICE_LOCALLY = 'UPDATE_SERVICE_LOCALLY';

export const updateServiceLocally = changes => ({
  type: UPDATE_SERVICE_LOCALLY,
  changes,
});
