import * as React from 'react';
import { connect } from 'react-redux';
import styles from '../../../css/app.css';
import { Loading } from '../../components/Loading';
import { AppState } from '../../store';
import { HomeActionDispatcher } from './dispatcher';

interface Props {
  text: string;
  isWaiting: boolean;
  actions: HomeActionDispatcher;
}

export const Home = (props: Props) => {
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
      {props.isWaiting ? <Loading /> : undefined}
    </section>
  );
};

export const HomeContainer = connect(
  (state: AppState) => state.home,
  dispatch => ({ actions: new HomeActionDispatcher(dispatch) })
)(Home);
