/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import routeEditor from '../../modules/route-editor.js';

export default class RouteEditor extends React.Component {
  componentDidMount() {
    routeEditor({ component: this });
    setTimeout(() => { route.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.routeEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Route Name</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Enter the Route Name"
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
        { doc && doc._id ? 'Save Changes' : 'Add Route' }
      </Button>
    </form>);
  }
}

RouteEditor.propTypes = {
  doc: React.PropTypes.object,
};
