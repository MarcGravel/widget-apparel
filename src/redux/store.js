import { createStore, applyMiddleware } from 'redux';
//logger just catches the actions, logs it, and mvoes it along. it is middleware used to see data changes
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

//pass this store to the Provider that is wrapping the entire app. (in this case index.js)