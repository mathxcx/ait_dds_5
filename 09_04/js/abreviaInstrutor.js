'use strict';

function abreviaInstrutor(instrutor){
    let nome = instrutor.split(' ');
    nome = nome[0]+' '+nome[nome.length-1];
    return nome;
   
        
    
}

export default abreviaInstrutor;