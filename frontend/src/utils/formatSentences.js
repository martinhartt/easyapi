const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function formatSentences(str) {
  return  str.split(/\.\s+/)
             .map(capitalize)
             .join('. ')
            //  .replace(/\s+/g, ' ')
            //  .replace(/\s+\./, '.')
            //  .replace(/([,.])[,.]+/, '$1');
 // TODO Improve sentence splitting

}

export default formatSentences;
