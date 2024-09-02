'use strict';  //Impede uso de variáveis não declaradas

let nome = 'Matheus';

let sobrenome = 'Brunelli';

console.log(sobrenome);

const instrutor = 'EDUARDO LUIZ FERREIRA SILVA';

//Split separa uma stirng em um array de strings com o separador escolhido

const pieces = instrutor.split(' ');

console.log(pieces);

//pop remove e retorna o último elemento
console.log(pieces[0],pieces.pop());

let array = [1,2,3,4,5,6]
console.log(array);
let numero = array.pop();
console.log(numero);
console.log(array);

//push emmpurra ao final do array
array.push(7);
console.log(array);

// shift remove e retorna o primeiro
console.log(array.shift());
console.log(array);

// unshift adiciona na primeira posição
array.unshift(0);
console.log(array);

let cores = ['verde','azul','roxo','rosa'];

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

console.log('For Simplificado');

for (let cor of cores){
    console.log(cor);

}