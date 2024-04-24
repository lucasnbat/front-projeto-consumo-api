import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// createStore recebe o reducer
// reducer escuta a ação feita, cria novo estado que copia o estado atual
// modifica esse novo estado com as alterações da ação
// retorna o novo estado
// state é o estado inicial

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// criando o middleware saga
const sagaMiddleware = createSagaMiddleware();

// criando o store, passando reducer e middleware saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// linha adicional para rodar o middleware saga
sagaMiddleware.run(rootSaga);

export default store;
