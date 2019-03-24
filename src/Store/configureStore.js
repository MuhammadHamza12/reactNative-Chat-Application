import { createStore , applyMiddleware , compose  } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';
import { persistStore , persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
const persistConfig = {
  key:'root',
  storage:AsyncStorage,
};







const middleware = [];
if(__DEV__){

  middleware.push(createLogger());
}


const persistedReducer = persistReducer(persistConfig,rootReducer);

export function configureStore(initailState) {
  return createStore(
    persistedReducer,
    initailState,
    compose(applyMiddleware(thunk,...middleware)),
  );
}
export const persistor = persistStore(configureStore());    