import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Routes from './routes';
import rateLimit from '../../modules/rate-limit.js';

export const upsertRoute = new ValidatedMethod({
  name: 'routes.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
    balance: { type: String, optional: true },
    status: { type: String, optional: true },
  }).validator(),
  run(route) {
    if (route._id) {
      route.modifiedAt = new Date();
    } else {
      route.createdAt = new Date();
      route.modifiedAt = route.createdAt;
      route.ownedBy = Meteor.user()._id;
    }
    return Routes.upsert({ _id: route._id }, { $set: route });
  },
});

export const removeRoute = new ValidatedMethod({
  name: 'routes.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Routes.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertRoute,
    removeRoute,
  ],
  limit: 5,
  timeRange: 1000,
});
