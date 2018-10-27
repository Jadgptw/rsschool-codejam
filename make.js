module.exports = function make(...args) {
    const numbers = [];
    const func = ((...args) => {
        if (args.length === 1 && args[0] instanceof Function){
            const result = numbers.reduce((sum, x) => args[0](sum, x), 0);
            numbers.length = 0;
            return result;
        }
        args.forEach(x => numbers.push(x));
        return func;
    });
    return func(...args);
};
