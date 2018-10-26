import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import AllDocuments from '../containers/AllDocuments.js';

const handleLogout = () => {
  Meteor.logout(() => browserHistory.push('/'));
  Bert.alert('Logged out', 'success');
};


const userName = () => {
  const user = Meteor.user();
  let name = user && user.profile ? user.profile.name : '';
  name = Object.prototype.hasOwnProperty.call(name, 'first') ? `${name.first} ${name.last}` : name;
  return user ? name : '';
};

const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Customers</NavItem>
      </LinkContainer>
      <LinkContainer to="/poolroutes">
        <NavItem eventKey={ 3 } href="/poolroutes">Pool Routes</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <Nav>
        <MenuItem>
          <img className="profile-pic" src="/img/pgilder.jpg"></img>
        </MenuItem>
      </Nav>
      <NavDropdown eventKey={ 3 } className="profile-pic" src="/img/pgilder.jpg" title={ userName() } id="basic-nav-dropdown">
        <MenuItem className="pad-top-10">
          My Profile
        </MenuItem>
        <MenuItem>
          Edit Account
        </MenuItem>
        <MenuItem>
          Notifications
        </MenuItem>
        <MenuItem>
          Manage Users
        </MenuItem>
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout } className="btn-logout">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
          Logout
        </MenuItem>
      </NavDropdown>
    </Nav>
    <div className="toolbar-nav">
      <Nav className="toolnav-left">
        <IndexLinkContainer to="/dashboard">
          <NavItem eventKey={ 1 } href="/dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            Dashboard
          </NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/accounts">
          <NavItem eventKey={ 2 } href="/accounts">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            Accounts
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/history">
          <NavItem eventKey={ 3 } href="/history">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            History
          </NavItem>
        </LinkContainer>

      </Nav>
      <Nav pullRight className="toolnav-right">
        <LinkContainer to="/documents/new">
          <NavItem eventKey={ 3 } href="/documents/new">
            <svg aria-hidden="true" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
            Add Customer
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/poolroutes/new">
          <NavItem eventKey={ 3 } href="/poolroutes/new">
            <svg aria-hidden="true" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
            Add Pool
            </NavItem>
        </LinkContainer>
      </Nav>
    </div>

  </div>

);

/*
const AuthenticatedAppbar = () => (
  <div className="appbar">
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Dashboard</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>

  </div>
); */

export default AuthenticatedNavigation;
// export default AuthenticatedAppbar;
