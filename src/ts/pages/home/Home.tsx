import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import styles from '../../../css/app.css';
import { AppState } from '../../store';
import { changeText, requestRandomText } from './actions';

interface Props {
  text: string;
  actions: ActionDispatcher;
}

class ActionDispatcher {
  constructor(private dispatch: Dispatch<Action<unknown>>) {}
  changeText = (text: string) => {
    this.dispatch(changeText(text));
  };
  requestRandomText = () => {
    this.dispatch(requestRandomText());
  };
}

const Home = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => props.actions.changeText(e.target.value);
  return (
    <section className={styles.app}>
      <h1>Home</h1>
      <img src={'./images/logo.svg'} alt={'logo'} height={16} width={16} />
      {props.text || 'hello, world!'}
      <br />
      <input type={'text'} value={props.text} onChange={handleChange} />
      <br />
      <button onClick={props.actions.requestRandomText}>async random text</button>
    </section>
  );
};

export const HomeContainer = connect(
  (state: AppState) => state.home,
  dispatch => ({ actions: new ActionDispatcher(dispatch) })
)(Home);
