import React from 'react';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
// import { Row, Col, Button } from 'react-bootstrap';
import AllDocuments from '../containers/AllDocuments.js';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

const Index = () => (
  <div className="Index pool-11-bg">
    <Jumbotron className="text-center brand-overlay">
      <div className="pool-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"/><circle cx="16.5" cy="5.5" r="2.5"/><path fill="none" d="M0 0h24v24H0z"/></svg>
      </div>
      <h2 className="feature-title">Do you own a Pool Business?</h2>
      <h3 className="feature-text">Create and track your pools with ease, manage invetory, activities and more.</h3>
      <p><a className="btn btn-success" href="signup" role="button">Create An Account</a></p>
      <p><a className="btn btn-success" href="documents" role="button">Manage Your Pools Now</a></p>
    </Jumbotron>

   <div className="Documents">
      <Row>
        <Col xs={ 12 }>
          <div className="page-header clearfix">
            <h4 className="pull-left">Recently Submitted</h4>
            <Button
              bsStyle="success"
              className="pull-right"
              href="/documents/new"
            >Add New Customer</Button>
          </div>
          <AllDocuments />
        </Col>
      </Row>
    </div>
  </div>
);

export default Index;


// <LoginButtons />
// import React from 'react';

// const Documents = () => (
// );

// export default Documents;
