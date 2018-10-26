import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const PoolroutesList = ({ poolroutes }) => (
  poolroutes.length > 0 ? <ListGroup className="PoolroutesList">
    {poolroutes.map(({ _id, title, userobject }) => (
      <ListGroupItem key={ _id }>
        <a href={`/users/${userobject._id}`}>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
        `${userobject.profile.name.first} ${userobject.profile.name.last}`
        : `${userobject.profile.name}` } </a>
          <i> just updated </i>
        <a href={`/poolroutes/${_id}`}>{ title }</a>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No customers yet.</Alert>
);

PoolroutesList.propTypes = {
  poolroutes: React.PropTypes.array,
};

export default PoolroutesList;
