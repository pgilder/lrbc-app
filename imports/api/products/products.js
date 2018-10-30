import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Products = new Mongo.Collection('Products');
export default Products;

Products.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Products.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Products.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the service item.',
  },
  body: {
    type: String,
    label: 'The body of the service item.',
  },
  balance: {
    type: String,
    label: 'The service item balance.',
  },
  status: {
    type: String,
    label: 'The service item status.',
  },
  createdAt: {
    type: Date,
    label: 'Date the service was created.',
    optional: true,
  },
  modifiedAt: {
    type: Date,
    label: 'Date the service was modified.',
  },
  ownedBy: {
    type: String,
    label: 'User who created the service.',
    optional: true,
  },
});

Products.attachSchema(Products.schema);

Factory.define('service', Products, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
  balance: () => 'Factory Balance',
  status: () => 'Factory Status',
  createdAt: () => 'Factory Create Date',
  modifiedAt: () => 'Factory Modify Date',
  ownedBy: () => 'Factory User Created',
});
