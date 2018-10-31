/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertDocument } from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Customer profile updated!' : 'New Customer added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
    balance: document.querySelector('[name="balance"]').value.trim(),
    status: document.querySelector('[name="status"]').value.trim(),
    company: document.querySelector('[name="company"]').value.trim(),
    phone1: document.querySelector('[name="phone1"]').value.trim(),
    phone2: document.querySelector('[name="phone2"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertDocument.call(upsert, (error, { insertedId }) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.documentEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/documents/${insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.documentEditorForm).validate({
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
      company: {
        required: true,
      },
      phone1: {
        required: true,
      },
      phone2: {
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
      company: {
        required: 'What is this items status.',
      },
      phone1: {
        required: 'What is this items status.',
      },
      phone2: {
        required: 'What is this items status.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function documentEditor(options) {
  component = options.component;
  validate();
}
