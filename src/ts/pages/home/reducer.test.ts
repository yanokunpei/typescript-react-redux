import { receiveRandomText, requestRandomText } from './actions';
import { homeReducer } from './reducer';

it('homeReducer requestRandomText', () => {
  expect(homeReducer(undefined, requestRandomText())).toStrictEqual({
    text: '',
    isWaiting: true,
  });
});

it('homeReducer receiveRandomText', () => {
  expect(homeReducer(undefined, receiveRandomText('rand'))).toStrictEqual({
    text: 'rand',
    isWaiting: false,
  });
});
