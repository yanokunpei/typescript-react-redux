import * as React from 'react';
import renderer, { act } from 'react-test-renderer';
import { App } from './App';

it('App component', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();

  act(() => tree.children!.find(it => it.type === 'input')!.props.onChange({ target: { value: 'test text' } }));
  // re-rendering
  tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();
});
