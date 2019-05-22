import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { HomeAction, homeReducer, HomeState } from './pages/home/modules';
import { rootSaga } from './saga';

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    diff: true,
    collapsed: true,
  });
  middleware.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
export const store: Store<AppState, AppAction> = createStore(
  combineReducers({
    home: homeReducer,
  }),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export interface AppState {
  home: HomeState;
}

export type AppAction = HomeAction;
