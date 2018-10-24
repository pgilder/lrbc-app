/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertRoute } from '../api/routes/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Route updated!' : 'New Route added!';
  const upsert = {
    title: route.querySelector('[name="title"]').value.trim(),
    body: route.querySelector('[name="body"]').value.trim(),
    balance: route.querySelector('[name="balance"]').value.trim(),
    status: route.querySelector('[name="status"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertRoute.call(upsert, (error, { insertedId }) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.routeEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/routes/${insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.routeEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      body: {
        required: true,
      },
      balance: {
        required: true,
      },
      status: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Sir.',
      },
      body: {
        required: 'This needs a body, please.',
      },
      balance: {
        required: 'This needs a balance, please.',
      },
      status: {
        required: 'What is this items status.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function routeEditor(options) {
  component = options.component;
  validate();
}
