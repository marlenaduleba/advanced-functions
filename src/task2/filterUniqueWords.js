const filterUniqueWords = (text) =>
  text
    .split(/\s+/)
    .filter(
      (value, index, array) => value !== "" && array.indexOf(value) === index
    )
    .sort();

module.exports = filterUniqueWords;
