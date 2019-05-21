import * as History from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { HomeContainer } from './pages/home/Home';
import { store } from './store';
const history = History.createBrowserHistory();

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <BrowserRouter>
          <Route path="/" component={HomeContainer} />
        </BrowserRouter>
      </Router>
    </Provider>
  );
};
