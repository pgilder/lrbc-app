/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import documentEditor from '../../modules/document-editor.js';

export default class DocumentEditor extends React.Component {
  componentDidMount() {
    documentEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Customer Name</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Enter the Customer Name"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Account Number</ControlLabel>
        <FormControl
          type="text"
          name="body"
          defaultValue={ doc && doc.body }
          placeholder="Add the account number here."
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Current Balance</ControlLabel>
        <FormControl
          type="text"
          name="balance"
          defaultValue={ doc && doc.balance }
          placeholder="$123,456"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Route</ControlLabel>
        <FormControl
          type="text"
          name="status"
          defaultValue={ doc && doc.status }
          placeholder="Choose a route"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Customer' }
      </Button>
    </form>);
  }
}

DocumentEditor.propTypes = {
  doc: React.PropTypes.object,
};
