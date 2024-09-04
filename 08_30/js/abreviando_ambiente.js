'use strict';

const ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-EXTER-EXTERNO',
    'VTRIA-5-LAB-5022'
];

const ambientesTransformados = ambientes.map(ambiente => {
    // Divide a string pelo caractere '-' e retorna a última parte
    const partes = ambiente.split('-');
    // Junta as últimas duas partes
    return partes.slice(-2).join('-');
});

console.log(ambientesTransformados); 
// Saída: [ 'SALA-3004', 'EXTERNO', 'LAB-5022' ]