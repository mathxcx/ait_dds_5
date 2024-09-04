'use strict';

function abreviaUc(unidade_curricular){

    let uc = unidade_curricular.split(' ');
    uc.splice(-2);
    uc = uc[0].substring(4,0)+'. '+uc[uc.length-1];
    return uc;
}

export default abreviaUc;