import { getMiddleware } from './middleware';

it('middleware', () => {
  expect(getMiddleware().list.length).toBe(1);
});

it('middleware', () => {
  Object.defineProperty(global, 'DEVELOPMENT', { value: true });
  expect(getMiddleware().list.length).toBe(2);
});
