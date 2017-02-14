import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '/imports/api/redux/store';

import AppContainer from '/imports/ui/containers/AppContainer';

const JWZLive = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="*" />
      </Route>
    </Router>
  </Provider>
);

export default JWZLive;
