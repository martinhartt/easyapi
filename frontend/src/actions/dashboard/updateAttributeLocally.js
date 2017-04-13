export const UPDATE_ATTRIBUTE_LOCALLY = 'UPDATE_ATTRIBUTE_LOCALLY';

export const updateAttributeLocally = (id, changes) => ({
  type: UPDATE_ATTRIBUTE_LOCALLY,
  id,
  changes,
});
