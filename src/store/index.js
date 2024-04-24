import { createStore } from 'redux';

// createStore recebe o reducer
// reducer escuta a ação feita, cria novo estado que copia o estado atual
// modifica esse novo estado com as alterações da ação
// retorna o novo estado
// state é o estado inicial

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
