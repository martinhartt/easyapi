export const UPDATE_MODEL_LOCALLY = 'UPDATE_MODEL_LOCALLY';

export const updateModelLocally = (id, name) => ({
  type: UPDATE_MODEL_LOCALLY,
  id,
  name,
});
