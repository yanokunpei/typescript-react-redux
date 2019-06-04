import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { asyncGetRandomText } from '../../service/async-get-random-text';
import { HomeActionTypes, receiveRandomText } from './actions';

export function* requestRandomTextSaga(): SagaIterator {
  const text = yield call(asyncGetRandomText);
  yield put(receiveRandomText(text));
}

export function* handleRequestRandomText(): SagaIterator {
  yield takeLatest(HomeActionTypes.RequestRandomText, requestRandomTextSaga);
}
