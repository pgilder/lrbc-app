import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Documents from './documents';
import rateLimit from '../../modules/rate-limit.js';

export const upsertDocument = new ValidatedMethod({
  name: 'documents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
    balance: { type: String, optional: true },
    company: { type: String, optional: true },
    phone1: { type: String, optional: true },
    phone2: { type: String, optional: true },
    status: { type: String, optional: true },
  }).validator(),
  run(document) {
    if (document._id) {
      document.modifiedAt = new Date();
    } else {
      document.createdAt = new Date();
      document.modifiedAt = document.createdAt;
      document.ownedBy = Meteor.user()._id;
    }
    return Documents.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
