const operations = require("./operations");
const funcoes = require("./funcoes");
const { adicao, subtracao } = require("./funcoes2");

console.log(operations.var1);
console.log(operations.var2);

const resultado = funcoes(1);
console.log(resultado.msg, resultado.par);

console.log(adicao(1, 5));
console.log(subtracao(1, 39));