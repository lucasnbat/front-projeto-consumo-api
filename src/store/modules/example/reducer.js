import * as types from '../types';

/**
 * Isso serve para modularizar, basicamente
 * eu tenho um dispactch com uma variavel que
 * contem as ações que eu quero disparar e
 * invoco a clicaBotao() que vai disparar
 * esse type. O type, por sua vez, aciona
 * o reducer que vai fazer a alteração no
 * estado.
 */

export function clicaBotao() {
  return {
    type: types.BOTAO_CLICADO,
  };
}

/**
 * A lógica antes envolvia:
 * 1. arquivo index do Store contendo o reducer com o switch
 * 2. Esse arquivo é acionado por qualquer outro arquivo que use o dispatch()
 * 3. useSelector() é usado para pegar o estado atual. Ele foi usado para mostrar
 *    as alternancias entre true e false ao apertar o botao
 */

/**
 * Agora parece que:
 * 1. Temos o store com todos os reducers e ele carrega eles para o Provider lá no APP
 * 2. Dentro do store temos os modules que possuem, cada um, o seu types (com os tipos
 * de ações possíveis de serem disparadas), o reducer com as manipulações de estado e
 * as actions com as funções que disparam as ações
 */

// estado inicial
const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state }; // copia o estado atual
      newState.botaoClicado = !newState.botaoClicado; // modifica o novo estado para o inverso
      return newState;
    }

    default:
      return state;
  }
}
