function flattenArray(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    let results = [];
    for (let item of array) {
        results = results.concat(flattenArray(item));
    }
    return results;
}



module.exports = flattenArray;
