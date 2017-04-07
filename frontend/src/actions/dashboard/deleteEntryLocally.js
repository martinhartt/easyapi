export const DELETE_ENTRY_LOCALLY = 'DELETE_ENTRY_LOCALLY';

export const deleteEntryLocally = entry => ({
  type: DELETE_ENTRY_LOCALLY,
  entry,
});
