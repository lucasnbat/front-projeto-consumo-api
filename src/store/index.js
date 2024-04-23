import { createStore } from 'redux';

// createStore recebe o reducer
// reducer escuta a ação feita, cria novo estado que copia o estado atual
// modifica esse novo estado com as alterações da ação
// retorna o novo estado

const reducer = (state, action) => {
  console.log(action);
  return state;
};

const store = createStore(reducer);

export default store;
