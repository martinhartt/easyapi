export const DELETE_MODEL_LOCALLY = 'DELETE_MODEL_LOCALLY';

export const deleteModelLocally = id => ({
  type: DELETE_MODEL_LOCALLY,
  id,
});
