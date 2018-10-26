/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertPoolroute } from '../api/poolroutes/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Poolroute updated!' : 'New Poolroute added!';
  const upsert = {
    pooltitle: document.querySelector('[name="pooltitle"]').value.trim(),
    poolbody: document.querySelector('[name="poolbody"]').value.trim(),
    poolbalance: document.querySelector('[name="poolbalance"]').value.trim(),
    poolstatus: document.querySelector('[name="poolstatus"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertPoolroute.call(upsert, (error, { insertedId }) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.poolrouteEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/poolroutes/${insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.poolrouteEditorForm).validate({
    rules: {
      pooltitle: {
        required: true,
      },
      poolbody: {
        required: true,
      },
      poolbalance: {
        required: true,
      },
      poolstatus: {
        required: true,
      },
    },
    messages: {
      pooltitle: {
        required: 'Need a pool title in here, Sir.',
      },
      poolbody: {
        required: 'This needs a pool body, please.',
      },
      poolbalance: {
        required: 'This needs a pool balance, please.',
      },
      poolstatus: {
        required: 'What is this pools status.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function poolrouteEditor(options) {
  component = options.component;
  validate();
}
