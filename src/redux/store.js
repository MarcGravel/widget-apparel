import { createStore, applyMiddleware } from 'redux';
//logger just catches the actions, logs it, and mvoes it along. it is middleware used to see data changes
import logger from 'redux-logger';
import rootReducer from './root-reducer';
// persist store
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

//pass this store to the Provider that is wrapping the entire app. (in this case index.js)