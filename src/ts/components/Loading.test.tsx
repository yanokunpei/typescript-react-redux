import * as React from 'react';
import renderer from 'react-test-renderer';
import { Loading } from './Loading';

it('Loading component', () => {
  const component = renderer.create(<Loading />);
  const tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();
});
