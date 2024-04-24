import { createStore } from 'redux';

// createStore recebe o reducer
// reducer escuta a ação feita, cria novo estado que copia o estado atual
// modifica esse novo estado com as alterações da ação
// retorna o novo estado
// state é o estado inicial

/**
 * A lógica envolve:
 * 1. arquivo index do Store contendo o reducer com o switch
 * 2. Esse arquivo é acionado por qualquer outro arquivo que use o dispatch()
 * 3. useSelector() é usado para pegar o estado atual. Ele foi usado para mostrar
 *    as alternancias entre true e false ao apertar o botao
 */

// estado inicial
const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state }; // copia o estado atual
      newState.botaoClicado = !newState.botaoClicado; // modifica o novo estado para o inverso
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
