import _ from 'underscore';

// Esta función crea un nuevo deck

/**
* Esta funcion crea un nuevo deck
* @param {Array<string>} tipoCartas Ejemplo: ['C','D','H','S']
* @param {Array<string>} tipoEspeciales Ejemplo: ['A','J','Q','K']
* @returns {Array} retorna un nuevo deck de cartas
*/

export const crearDeck = (tipoCartas,tipoEspeciales) => {
	
	if ( !tipoCartas  || tipoCartas.length === 0) {
		throw new Error('TiposCartas es obligatorio como un arreglo de string');
	}
	
	if ( !tipoEspeciales  || tipoEspeciales.length === 0) {
		throw new Error('TipoEspeciales obligatorio como un arreglo de string');
	}	
	
	let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoCartas ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}