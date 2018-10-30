import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Poolroutes = new Mongo.Collection('Poolroutes');
export default Poolroutes;

Poolroutes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Poolroutes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Poolroutes.schema = new SimpleSchema({
  pooltitle: {
    type: String,
    label: 'The title of the pool item.',
  },
  poolbody: {
    type: String,
    label: 'The body of the pool item.',
  },
  poolbalance: {
    type: String,
    label: 'The pool item balance.',
  },
  poolstatus: {
    type: String,
    label: 'The pool item status.',
  },
  createdAt: {
    type: Date,
    label: 'Date the poolroute was created.',
    optional: true,
  },
  modifiedAt: {
    type: Date,
    label: 'Date the poolroute was modified.',
  },
  ownedBy: {
    type: String,
    label: 'User who created the poolroute.',
    optional: true,
  },
});

Poolroutes.attachSchema(Poolroutes.schema);

Factory.define('poolroute', Poolroutes, {
  pooltitle: () => 'Factory Title',
  poolbody: () => 'Factory Body',
  poolbalance: () => 'Factory Balance',
  poolstatus: () => 'Factory Status',
  createdAt: () => 'Factory Create Date',
  modifiedAt: () => 'Factory Modify Date',
  ownedBy: () => 'Factory User Created',
});
