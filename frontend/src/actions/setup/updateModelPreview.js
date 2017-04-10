
export const UPDATE_MODEL_PREVIEW = 'UPDATE_MODEL_PREVIEW';

export function updateModelPreview(annotations) {
  return {
    type: UPDATE_MODEL_PREVIEW,
    annotations,
  };
}
