import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ hasUser }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">LRBC</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(hasUser) }
    </Navbar.Collapse>
  </Navbar>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
