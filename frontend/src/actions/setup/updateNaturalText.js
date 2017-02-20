
export const UPDATE_NATURAL_TEXT = 'UPDATE_NATURAL_TEXT';

export function updateNaturalText(text) {
  return {
    type: UPDATE_NATURAL_TEXT,
    text,
  };
}
