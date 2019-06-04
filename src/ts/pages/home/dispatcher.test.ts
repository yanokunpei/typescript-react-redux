import * as sinon from 'sinon';
import { HomeActionTypes } from './actions';
import { HomeActionDispatcher } from './dispatcher';

it('home action dispatcher', () => {
  const spy = sinon.spy();

  const dispatcher = new HomeActionDispatcher(spy);

  dispatcher.changeText('xxx');
  dispatcher.requestRandomText();

  const calls = spy.getCalls();
  expect(calls.length).toBe(2);

  expect(calls[0].lastArg).toStrictEqual({
    type: HomeActionTypes.ChangeText,
    payload: 'xxx',
  });

  expect(calls[1].lastArg).toStrictEqual({
    type: HomeActionTypes.RequestRandomText,
  });
});
