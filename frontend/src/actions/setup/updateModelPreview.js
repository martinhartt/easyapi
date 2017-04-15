
export const UPDATE_MODEL_PREVIEW = 'UPDATE_MODEL_PREVIEW';

export function updateModelPreview(preview) {
  return {
    type: UPDATE_MODEL_PREVIEW,
    preview,
  };
}
