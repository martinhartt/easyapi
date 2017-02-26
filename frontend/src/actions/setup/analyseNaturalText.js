// @flow

import { annotateNaturalText } from './annotateNaturalText';
import { updateNaturalText } from './updateNaturalText';

export const ANALYSE_NATURAL_TEXT = 'ANALYSE_NATURAL_TEXT';

console.log(annotateNaturalText)

export function analyseNaturalText(text: string) {
  return function (dispatch) {
    dispatch(updateNaturalText(text));

    return fetch('/api/service/scratch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text,
    })})
    .then(res => res.json())
    .then(result => dispatch(annotateNaturalText(text, result)))
    .catch(console.log);
  }
}