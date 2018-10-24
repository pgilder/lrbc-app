import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Services from './services';
import rateLimit from '../../modules/rate-limit.js';

export const upsertService = new ValidatedMethod({
  name: 'services.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
    balance: { type: String, optional: true },
    status: { type: String, optional: true },
  }).validator(),
  run(service) {
    if (service._id) {
      service.modifiedAt = new Date();
    } else {
      service.createdAt = new Date();
      service.modifiedAt = service.createdAt;
      service.ownedBy = Meteor.user()._id;
    }
    return Services.upsert({ _id: service._id }, { $set: service });
  },
});

export const removeService = new ValidatedMethod({
  name: 'services.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Services.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertService,
    removeService,
  ],
  limit: 5,
  timeRange: 1000,
});
