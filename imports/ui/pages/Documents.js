import React from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';
import AllDocuments from '../containers/AllDocuments.js';

const Documents = () => (
  <div className="Documents">
    <Row>
      <Col sm={ 12 }>
        <DocumentsList />
      </Col>
      <Col className="aside-right" sm={ 3 }>
        <h3 class="pull-right">Recent Activity</h3>
        <AllDocuments />
      </Col>
    </Row>
  </div>
);

export default Documents;


        // <div className="page-header clearfix">
        //   <h4 className="pull-left">My Documents</h4>
        //   <Button
        //     bsStyle="success"
        //     className="pull-right"
        //     href="/documents/new"
        //   >New Document</Button>
        // </div>
