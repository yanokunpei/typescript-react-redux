import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { HomeAction, homeReducer, HomeState } from './pages/home/modules';

// tslint:disable-next-line:no-any
let middleware: any | undefined;
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    diff: true,
    collapsed: true,
  });
  middleware = applyMiddleware(logger);
}

export const store: Store<AppState, AppAction> = createStore(
  combineReducers({
    home: homeReducer,
  }),
  middleware
);

export interface AppState {
  home: HomeState;
}

export type AppAction = HomeAction;
