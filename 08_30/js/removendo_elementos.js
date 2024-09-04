'use strict';

let municipios = ['serra', 'cariacica','vila velha', 'viana','vitoria','guarapari'];

console.log(municipios[0].toUpperCase());

console.log(municipios);
//Removendo dois elementos a partir do 1º 
municipios.slice(1,2);
console.log(municipios);

//Removendo dois elementos no final
municipios.slice(-2,1);
console.log(municipios);

//Para juntar um array usamos o join e podemos definir um separador
let texto = municipios.join('-');

console.log(texto);