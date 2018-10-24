import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Routes = new Mongo.Collection('Routes');
export default Routes;

Routes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Routes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Routes.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the credit item.',
  },
  body: {
    type: String,
    label: 'The body of the credit item.',
  },
  balance: {
    type: String,
    label: 'The credit item balance.',
  },
  status: {
    type: String,
    label: 'The credit item status.',
  },
  createdAt: {
    type: Date,
    label: 'Date the route was created.',
    optional: true,
  },
  modifiedAt: {
    type: Date,
    label: 'Date the route was modified.',
  },
  ownedBy: {
    type: String,
    label: 'User who created the route.',
    optional: true,
  },
});

Routes.attachSchema(Routes.schema);

Factory.define('route', Routes, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
  balance: () => 'Factory Balance',
  status: () => 'Factory Status',
  createdAt: () => 'Factory Create Date',
  modifiedAt: () => 'Factory Modify Date',
  ownedBy: () => 'Factory User Created',
});
