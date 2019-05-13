import * as React from 'react';
import { useState } from 'react';
import * as styles from '../css/app.css';

export const App = () => {
  const [text, setText] = useState('');
  return (
    <div className={styles.colorBlue}>
      {text || 'hello, world!'}
      <br />
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};
