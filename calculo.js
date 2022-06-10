const paginasTotal = Number(prompt("Digite a quantidade total de páginas"))
const paginasPorDia = Number(prompt("Digite a quantidade de páginas impressas por dia"))
const porcentagem = Number(prompt("Digite a porcentagem"))
let quantidadeDeDias;
let meses;
let resultado;
let stringResultado;
let dia;
let mes;
let contaDias;

// Quantidade de páginas impressas por dia
quantidadeDeDias = paginasTotal / 71;

meses = quantidadeDeDias / 30;

resultado = meses * 5/porcentagem

stringResultado = String(resultado);

[mes, dia] = stringResultado.split('.');

contaDias = Number('0.' + dia) * 30;

console.log(`O toner durará ${mes} Meses e ${contaDias.toFixed(3)} Dias`);
