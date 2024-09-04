'use strict';

function abreviaAmbiente(ambiente){

    let salas = ambiente.split('-');
    salas.splice(0,2);
    salas = salas.join('-');
    return salas;
}

export default abreviaAmbiente;