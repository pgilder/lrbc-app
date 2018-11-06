import React from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading.js';
import SearchBox from '../components/SearchBox.js';


const Tutorials = () => (
  <div className="Tutorials">
    <Row>
      <Col xs={ 12 }>
        <h1>Hello Tutorials</h1>
        <p>Add a container to get started</p>
      </Col>
    </Row>
  </div>
);

export default Tutorials;
