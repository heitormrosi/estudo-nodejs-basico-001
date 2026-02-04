const lodash = require("lodash");

const array = [
    1, 2, 3,
    6, 3, 6,
    7, 3, 6,
    4, 6, 8,
    5, 7, 4,
    6
];

console.log("Imprimindo de 3 em 3.");

lodash.chunk(array, 3).forEach(part => {
    console.log("----------");
    part.forEach(i => console.log(i + "!"));
});