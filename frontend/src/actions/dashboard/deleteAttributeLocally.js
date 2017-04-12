export const DELETE_ATTRIBUTE_LOCALLY = 'DELETE_ATTRIBUTE_LOCALLY';

export const deleteAttributeLocally = id => ({
  type: DELETE_ATTRIBUTE_LOCALLY,
  id,
});
