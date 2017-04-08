export const UPDATE_VALUE_LOCALLY = 'UPDATE_VALUE_LOCALLY';

export const updateValueLocally = (entry, id, value) => ({
  type: UPDATE_VALUE_LOCALLY,
  entry,
  id,
  value,
});
