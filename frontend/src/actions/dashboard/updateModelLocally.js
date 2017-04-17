export const UPDATE_MODEL_LOCALLY = 'UPDATE_MODEL_LOCALLY';

export const updateModelLocally = (id, changes) => ({
  type: UPDATE_MODEL_LOCALLY,
  id,
  changes,
});
