import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { getMiddleware } from './middleware';
import { HomeAction } from './pages/home/actions';
import { homeReducer, HomeState } from './pages/home/reducer';
import { rootSaga } from './rootSaga';

const middleware = getMiddleware();
export const store: Store<AppState, AppAction> = createStore(
  combineReducers({
    home: homeReducer,
  }),
  applyMiddleware(...middleware.list)
);

middleware.sagaMiddleware.run(rootSaga);
export interface AppState {
  home: HomeState;
}

export type AppAction = HomeAction;
