import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title, userobject }) => (
      <ListGroupItem key={ _id }>
        <a href={`/users/${userobject._id}`}>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
        `${userobject.profile.name.first} ${userobject.profile.name.last}`
        : `${userobject.profile.name}` } </a>
          <i> just updated </i>
        <a href={`/documents/${_id}`}>{ title }</a>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No customers yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
