import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Poolroutes from './poolroutes';
import rateLimit from '../../modules/rate-limit.js';

export const upsertPoolroute = new ValidatedMethod({
  name: 'poolroutes.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    pooltitle: { type: String, optional: true },
    poolbody: { type: String, optional: true },
    poolbalance: { type: String, optional: true },
    poolstatus: { type: String, optional: true },
  }).validator(),
  run(poolroute) {
    if (poolroute._id) {
      poolroute.modifiedAt = new Date();
    } else {
      poolroute.createdAt = new Date();
      poolroute.modifiedAt = poolroute.createdAt;
      poolroute.ownedBy = Meteor.user()._id;
    }
    return Poolroutes.upsert({ _id: poolroute._id }, { $set: poolroute });
  },
});

export const removePoolroute = new ValidatedMethod({
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
    upsertPoolroute,
    removePoolroute,
  ],
  limit: 5,
  timeRange: 1000,
});
