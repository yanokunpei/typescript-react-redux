import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { HomeAction } from './pages/home/actions';
import { homeReducer, HomeState } from './pages/home/reducer';
import { rootSaga } from './rootSaga';

const middleware = [];
declare const process: { env: { NODE_ENV: string } };
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    diff: true,
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
