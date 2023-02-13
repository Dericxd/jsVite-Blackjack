//import { pedirCarta } from './pedir-carta';

/**
* Esta funcion crea un nuevo deck
* @param {String} Carta
* @returns {Number} retorna Valor de la carta
*/

// pedirCarta();
export const valorCarta = ( carta ) => {
	
	if(!carta === 0) {
        throw new Error('Carta es obligatorio como un arreglo de string');
    }	

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}