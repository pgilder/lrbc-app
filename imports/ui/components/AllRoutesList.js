import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const RoutesList = ({ routes }) => (
  routes.length > 0 ? <ListGroup className="RoutesList">
    {routes.map(({ _id, title, userobject }) => (
      <ListGroupItem key={ _id }>
        <a href={`/users/${userobject._id}`}>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
        `${userobject.profile.name.first} ${userobject.profile.name.last}`
        : `${userobject.profile.name}` } </a>
          <i> just updated </i>
        <a href={`/routes/${_id}`}>{ title }</a>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No customers yet.</Alert>
);

RoutesList.propTypes = {
  routes: React.PropTypes.array,
};

export default RoutesList;
