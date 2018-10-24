import React from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import RoutesList from '../containers/RoutesList.js';

const Routes = () => (
  <div className="Routes">
    <Row>
      <Col xs={ 12 }>
        <RoutesList />
      </Col>
    </Row>
  </div>
);

export default Routes;


        // <div className="page-header clearfix">
        //   <h4 className="pull-left">My Routes</h4>
        //   <Button
        //     bsStyle="success"
        //     className="pull-right"
        //     href="/routes/new"
        //   >New Route</Button>
        // </div>
