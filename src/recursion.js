module.exports = function recursion(head) {
    const result = [];
    let level = 0;
    const func = head => {
        if (head !== undefined) {
            result[level] = result[level] || [];
            level++;
            func(head['left']);
            func(head['right']);
            level--;
            result[level].push(head['value']);
        }
    };
    func(head);
    return result;
};
