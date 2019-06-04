import { expectSaga } from 'redux-saga-test-plan';
import { HomeActionTypes } from './actions';
import { requestRandomTextSaga } from './sagas';

it('random text', () => {
  return expectSaga(requestRandomTextSaga)
    .put.actionType(HomeActionTypes.ReceiveRandomText)
    .run();
});
