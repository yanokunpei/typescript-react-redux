import * as styles from 'loaders.css/loaders.css';
import * as React from 'react';

const cubeColor1 = '#2196f3';
const cubeColor2 = '#ff96f3';
const cubeSize = '30px';
const cubeStyle = {
  width: cubeSize,
  height: cubeSize,
};
export const Loading = () => (
  <div
    className={styles['cube-transition']}
    style={{ display: 'inline-block', height: '1rem', transform: 'scale(.2)' }}>
    <div style={{ ...cubeStyle, background: cubeColor1 }} />
    <div style={{ ...cubeStyle, background: cubeColor2 }} />
  </div>
);
