import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { requestRandomTextSaga } from './pages/home/saga';

export function* rootSaga(): SagaIterator {
  yield fork(requestRandomTextSaga);
}
