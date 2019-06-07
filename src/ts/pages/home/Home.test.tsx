import * as React from 'react';
import renderer from 'react-test-renderer';
import { Home } from './Home';

it('Home component', () => {
  expect(renderer.create(<Home text={'XD'} actions={{} as any} isWaiting={true} />).toJSON()).toMatchSnapshot();

  expect(renderer.create(<Home text={'(^^)'} actions={{} as any} isWaiting={false} />).toJSON()).toMatchSnapshot();
});
