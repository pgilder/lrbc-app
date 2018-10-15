import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeDocument } from '../../api/documents/methods.js';

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/documents');
      }
    });
  }
};

const ViewDocument = ({ doc }) => !doc ? <div>This document either doesn't exist or you don't have permission to see it</div> : (
  <div className="ViewDocument">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ doc.title }</h4>
      <ButtonToolbar className="pull-right">
        <ButtonGroup bsSize="small">
          <Button href={`/documents/${doc._id}/edit`}>Edit</Button>
          <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    <div className="ItemBody">{ doc.body }</div>
    <div className="ItemBalance">{ doc.balance }</div>
    <div className="ItemStatus">{ doc.status }</div>
    <br/><br/>
    <b>Created:</b> { doc.createdAt.toLocaleString() }
    <br/>
    <b>Modified:</b> { doc.modifiedAt.toLocaleString() }
  </div>
);

// ViewDocument.propTypes = {
//   doc: React.PropTypes.object.isRequired, // commented out to allow null value for doc
// };

export default ViewDocument;
