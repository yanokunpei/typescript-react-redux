import * as React from 'react';
import { useState } from 'react';
import * as styles from '../css/app.css';

export const App = () => {
  const [text, setText] = useState('');
  return (
    <div className={styles.app}>
      <img height={'16px'} width={'16px'} src={'./images/logo.svg'} alt={'logo'} />
      {text || 'hello, world!'}
      <br />
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};
