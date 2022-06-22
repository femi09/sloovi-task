import { createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./middlewares";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistConfig = {
    key: 'sloovi',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    : applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  store.__persistor = persistStore(store);

  return store;
};

export default configureStore;
