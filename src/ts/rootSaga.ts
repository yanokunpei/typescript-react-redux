import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { handleRequestRandomText } from './pages/home/sagas';

export function* rootSaga(): SagaIterator {
  yield all([fork(handleRequestRandomText)]);
}
