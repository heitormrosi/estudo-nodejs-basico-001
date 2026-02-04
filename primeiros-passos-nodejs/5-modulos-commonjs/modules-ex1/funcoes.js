module.exports = (num) => {
    const par = () => num % 2 == 0;

    return {
        msg: "O valor é par?",
        par: par()
    };
};