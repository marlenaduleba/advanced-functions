const filterUniqueWords = text => text.split(/\s+/)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort();
