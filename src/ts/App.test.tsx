import * as React from 'react';
import renderer, { act, ReactTestRendererJSON } from 'react-test-renderer';
import { App } from './App';

it('App component', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();

  act(() =>
    (tree.children!.find(it => typeof it !== 'string' && it.type === 'input')! as ReactTestRendererJSON).props.onChange(
      { target: { value: 'test text' } }
    )
  );
  // re-rendering
  tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();
});
