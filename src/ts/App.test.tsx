import * as React from 'react';
import renderer from 'react-test-renderer';
import { App } from './App';

test('App component', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();

  tree.children!.find(it => it.type === 'input')!.props.onChange({ target: { value: 'test text' } });
  // re-rendering
  tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();
});
