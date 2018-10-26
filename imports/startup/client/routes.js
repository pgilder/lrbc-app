/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';
import Documents from '../../ui/pages/Documents.js';
import Routes from '../../ui/pages/Routes.js';
import Users from '../../ui/pages/Users.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import NewRoute from '../../ui/pages/NewRoute.js';
import EditDocument from '../../ui/containers/EditDocument.js';
import EditRoute from '../../ui/containers/EditRoute.js';
import ViewDocument from '../../ui/containers/ViewDocument.js';
import ViewRoute from '../../ui/containers/ViewRoute.js';
import Index from '../../ui/pages/Index.js';
import Features from '../../ui/pages/Features.js';
import Pricing from '../../ui/pages/Pricing.js';
import Tutorials from '../../ui/pages/Tutorials.js';
import Dashboard from '../../ui/pages/Dashboard.js';
import Accounts from '../../ui/pages/Accounts.js';
import History from '../../ui/pages/History.js';
import Settings from '../../ui/pages/Settings.js';
import Login from '../../ui/pages/Login.js';
import Signup from '../../ui/pages/Signup.js';
import Test from '../../ui/pages/Test.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
// import Signup from '../../ui/pages/Signup.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />
        <Route name="routes" path="/routes" component={ Routes } onEnter={ authenticate } />
        <Route name="newRoute" path="/routes/new" component={ NewRoute } onEnter={ authenticate } />
        <Route name="editRoute" path="/routes/:_id/edit" component={ EditRoute } onEnter={ authenticate } />
        <Route name="viewRoute" path="/routes/:_id" component={ ViewRoute } onEnter={ authenticate } />
        <Route name="users" path="/users/:_id" component={ Users } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="features" path="/features" component={ Features } />
        <Route name="pricing" path="/pricing" component={ Pricing } />
        <Route name="tutorials" path="/tutorials" component={ Tutorials } />
        <Route name="dashboard" path="/dashboard" component={ Dashboard } />
        <Route name="accounts" path="/accounts" component={ Accounts } />
        <Route name="history" path="/history" component={ History } />
        <Route name="settings" path="/settings" component={ Settings } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route name="test" path="/test" component={ Test } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')

  );
});

// <IndexRoute name="index" component={ Index } onEnter={ authenticate } />
// <Route name="signup" path="/signup" component={ Signup } />
