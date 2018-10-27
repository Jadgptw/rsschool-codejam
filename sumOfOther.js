module.exports = function sumOfOther(array) {
    const result = [];
    array.forEach(i => {
        result.push(array
            .filter(y => y !== i)
            .reduce((sum, x) => sum + x, 0)
        )
    });
    return result;
};