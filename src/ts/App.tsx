import * as React from "react";
import * as styles from "../css/app.css";
interface State {
  text: string;
}
export function t(a: string): string {
  return a === "" ? "hello, world!" : a;
}

export class App extends React.Component<{}, State> {
  state = { text: "" };
  render() {
    return (
      <div className={styles.colorBlue}>
        {t(this.state.text)}
        <br />
        <input
          value={this.state.text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
      </div>
    );
  }
}
