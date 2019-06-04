import { Action, Dispatch } from 'redux';
import { changeText, requestRandomText } from './actions';

export class HomeActionDispatcher {
  constructor(private dispatch: Dispatch<Action<unknown>>) {}
  changeText = (text: string) => {
    this.dispatch(changeText(text));
  };
  requestRandomText = () => {
    this.dispatch(requestRandomText());
  };
}
