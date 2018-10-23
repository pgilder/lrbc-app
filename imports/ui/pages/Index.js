import React from 'react';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
// import { Row, Col, Button } from 'react-bootstrap';
import AllDocuments from '../containers/AllDocuments.js';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

const Index = () => (
  <div className="Index pool-1-bg">
    <Jumbotron className="text-center brand-overlay">
      <h2>Welcome to Pool App</h2>
      <LoginButtons />
      <p><a className="btn btn-success" href="documents" role="button">Manage Accounts</a></p>
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



// import React from 'react';

// const Documents = () => (
// );

// export default Documents;
