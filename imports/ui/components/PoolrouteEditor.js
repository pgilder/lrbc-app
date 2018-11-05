/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Label, Input } from 'react-bootstrap';
import poolrouteEditor from '../../modules/poolroute-editor.js';

export default class PoolrouteEditor extends React.Component {
  componentDidMount() {
    poolrouteEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="pooltitle"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.poolrouteEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >

      <FormGroup className="pooltype">
        <ControlLabel className="pooltype-title">Select A Pool Type</ControlLabel>
        <ControlLabel><img className="img-pool" src="/icons/pool.png"></img></ControlLabel>
        <FormControl
          type="radio"
          name="pooltype"
          defaultValue={ doc && doc.pooltype }
          placeholder="Select a Pool Type"
        />
        <ControlLabel><img className="img-spa" src="/icons/spa.png"></img></ControlLabel>
        <FormControl
          type="radio"
          name="pooltype"
          defaultValue={ doc && doc.pooltype }
          placeholder="Select a Pool Type"
        />
        <ControlLabel><img className="img-pool-spa" src="/icons/poolandspa.png"></img></ControlLabel>
        <FormControl
          type="radio"
          name="pooltype"
          defaultValue={ doc && doc.pooltype }
          placeholder="Select a Pool Type"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Poolroute Name</ControlLabel>
        <FormControl
          type="text"
          name="pooltitle"
          defaultValue={ doc && doc.pooltitle }
          placeholder="Enter the Poolroute Name"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Account Number</ControlLabel>
        <FormControl
          type="text"
          name="poolbody"
          defaultValue={ doc && doc.poolbody }
          placeholder="Add the account number here."
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Current Balance</ControlLabel>
        <FormControl
          type="text"
          name="poolbalance"
          defaultValue={ doc && doc.poolbalance }
          placeholder="$123,456"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Poolroute</ControlLabel>
        <FormControl
          type="text"
          name="poolstatus"
          defaultValue={ doc && doc.poolstatus }
          placeholder="Choose a poolroute"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Poolroute' }
      </Button>
    </form>);
  }
}

PoolrouteEditor.propTypes = {
  doc: React.PropTypes.object,
};
