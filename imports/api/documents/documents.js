import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Documents = new Mongo.Collection('Documents');
export default Documents;

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
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
    label: 'Customer Starting Balance.',
  },
  status: {
    type: String,
    label: 'Customer Starting Status.',
  },
  company: {
    type: String,
    label: 'The company name.',
  },
  phone1: {
    type: String,
    label: 'The Phone Number.',
  },
  phone2: {
    type: String,
    label: 'The Alternative Number.',
  },

  createdAt: {
    type: Date,
    label: 'Date the document was created.',
    optional: true,
  },
  modifiedAt: {
    type: Date,
    label: 'Date the document was modified.',
  },
  ownedBy: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
});

Documents.attachSchema(Documents.schema);

Factory.define('document', Documents, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
  balance: () => 'Factory Balance',
  status: () => 'Factory Status',
  company: () => 'Factory Company',
  phone1: () => 'Factory Phone 1',
  phone2: () => 'Factory Phone 2',
  createdAt: () => 'Factory Create Date',
  modifiedAt: () => 'Factory Modify Date',
  ownedBy: () => 'Factory User Created',
});
