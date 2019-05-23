import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { asyncGetRandomText } from '../../service/async-get-random-text';
import { HomeActionTypes, receiveRandomText } from './actions';

function* requestRandomTextSaga(): SagaIterator {
  const text = yield call(asyncGetRandomText);
  yield put(receiveRandomText(text));
}

export function* handleRequestRandomText(): SagaIterator {
  yield takeEvery(HomeActionTypes.RequestRandomText, requestRandomTextSaga);
}
