import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Documents from './poolroutes';
import rateLimit from '../../modules/rate-limit.js';

export const upsertDocument = new ValidatedMethod({
  name: 'poolroutes.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    pooltitle: { type: String, optional: true },
    poolbody: { type: String, optional: true },
    poolbalance: { type: String, optional: true },
    poolstatus: { type: String, optional: true },
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
  name: 'poolroutes.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Poolroutes.remove(_id);
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
