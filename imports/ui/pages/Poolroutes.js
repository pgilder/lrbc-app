import React from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import PoolroutesList from '../containers/PoolroutesList.js';

const Poolroutes = () => (
  <div className="Poolroutes">
    <Row>
      <Col xs={ 12 }>
        <PoolroutesList />
      </Col>
    </Row>
  </div>
);

export default Poolroutes;


        // <div className="page-header clearfix">
        //   <h4 className="pull-left">My Poolroutes</h4>
        //   <Button
        //     bsStyle="success"
        //     className="pull-right"
        //     href="/poolroutes/new"
        //   >New Poolroute</Button>
        // </div>
