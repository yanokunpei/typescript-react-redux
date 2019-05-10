import * as React from 'react';
import { ChangeEvent } from 'react';
import * as styles from '../css/app.css';

interface State {
  text: string;
}

export class App extends React.Component<{}, State> {
  state = { text: '' };
  handleChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value });
  render() {
    return (
      <div className={styles.colorBlue}>
        {this.state.text ? this.state.text : 'hello, world!'}
        <br />
        <input value={this.state.text} onChange={this.handleChange} />
      </div>
    );
  }
}
