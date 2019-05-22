import { SagaIterator } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { asyncGetRandomText } from '../../service/async-get-random-text';
import { receiveRandomText, requestRandomText } from './modules';

export function* requestRandomTextSaga(): SagaIterator {
  yield take(requestRandomText);
  const text = yield call(asyncGetRandomText);
  yield put(receiveRandomText(text));
}
