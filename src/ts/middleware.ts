import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

declare let DEVELOPMENT: boolean;

export const getMiddleware = () => {
  const list: Middleware[] = [];
  if (DEVELOPMENT) {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    });
    list.push(logger);
  }

  const sagaMiddleware = createSagaMiddleware();
  list.push(sagaMiddleware);
  return {
    list,
    sagaMiddleware,
  };
};
