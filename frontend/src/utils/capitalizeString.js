const capitalizeWord = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function capitalizeString(str) {
  return str.split(/\s+/).map(capitalizeWord).join(' ');
}

export default capitalizeString;
