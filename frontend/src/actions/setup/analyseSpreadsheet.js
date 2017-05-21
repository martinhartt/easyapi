

import { updateModelPreview } from './updateModelPreview';
import { showError } from '../other/showError';
import { postAnalyzeSpreadsheet } from '../../utils/API';

export function analyseSpreadsheet(file) {
  return function (dispatch) {
    return postAnalyzeSpreadsheet(file)
      .then(result => dispatch(updateModelPreview(result)))
      .catch(showError);
  };
}
