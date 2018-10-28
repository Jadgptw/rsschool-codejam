module.exports = function make(...args) {
    const numbers = [];
    const func = ((...args) => {
        if (args.length === 1 && args[0] instanceof Function){
            return numbers.reduce((sum, x) => args[0](sum, x), 0);
        }
        args.forEach(x => numbers.push(x));
        return func;
    });
    return func(...args);
};
