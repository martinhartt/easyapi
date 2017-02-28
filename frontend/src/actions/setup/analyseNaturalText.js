// @flow

import { annotateNaturalText } from './annotateNaturalText';
import { updateNaturalText } from './updateNaturalText';
import { extractModelFromText } from '../../utils/API';

export const ANALYSE_NATURAL_TEXT = 'ANALYSE_NATURAL_TEXT';


export function analyseNaturalText(text: string) {
  return function (dispatch) {
    dispatch(updateNaturalText(text));

    return extractModelFromText(text)
      .then(result => dispatch(annotateNaturalText(text, result)))
      .catch(console.log);
  }
}
