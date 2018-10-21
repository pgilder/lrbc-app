import React from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

const DocumentsList = ({ documents, userName }) => (
  <div>
    <div className="page-header clearfix">
      <h3 className="pull-left">{ userName } Customers</h3>
      <Button
        bsStyle="success"
        className="pull-right btn-add"
        href="/documents/new"
      >New Customer</Button>
    </div>
    { documents.length > 0 ? <ListGroup className="DocumentsList">
      {documents.map(({ _id, title, body, balance, status, createdAt }) => (
        userName === 'My' ?
        <ListGroupItem key={ _id } href={`/documents/${_id}`}>
          <img className="avatar" src="img/avatar.jpg"></img>
          <h5 className="agencyTitle">{ title }</h5>
          <h5 className="agencyBody">{}</h5>
          <h5 className="agencyBalance">{ balance }</h5>
          <a className="pull-right btn btn-edit" href={`/documents/${_id}/edit`}>Edit</a>
          <h5 className="agencyStatus">{ status }</h5><br/>
          <h5 className="submitDate">{ `12 Days Ago` }</h5>
        </ListGroupItem> :
        <ListGroupItem key={ _id }>{ title }
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">No credit items yet.</Alert> }
  </div>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
  userName: React.PropTypes.string,
};

export default DocumentsList;

        // <i> by </i>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
        // `${userobject.profile.name.first} ${userobject.profile.name.last}`
        // : `${userobject.profile.name}` }
