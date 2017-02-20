
export const ANNOTATE_NATURAL_TEXT = 'ANNOTATE_NATURAL_TEXT';

export function annotateNaturalText(text, annotations) {
  return {
    type: ANNOTATE_NATURAL_TEXT,
    text,
    annotations,
  };
}
