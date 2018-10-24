import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Services from '../services';

const _ = require('lodash');

// Meteor.publish('services.list', function docPub() { return Services.find({ownedBy: this.userId}) });
Meteor.publish('services.list', function docPub(_id) {
  check(_id, String);
  // console.log('doc.list', _id);
  // return Services.find({ ownedBy: _id });
  const serviceCursor = Services.find({ ownedBy: _id });
  const profileCursor = Meteor.users.find(
    {
      _id,
    },
    {
      fields: { profile: 1 },
    });
  return [serviceCursor, profileCursor];
});

// just handover raw data and modify clientside - SO way
Meteor.publish('services.listAll', function() {
  const serviceCursor = Services.find({});
  const ownerIds = serviceCursor.map(function(d) {
    return d.ownedBy;
  });
  const uniqueOwnerIds = _.uniq(ownerIds);
  const profileCursor = Meteor.users.find(
    {
      _id: { $in: uniqueOwnerIds },
    },
    {
      fields: { profile: 1 },
    });
  return [serviceCursor, profileCursor];
});


Meteor.publish('services.view', function docPub(_id) {
  check(_id, String);
  return Services.find({ _id, ownedBy: this.userId });
});

// // try to modify inside here - meteorchef way
// Meteor.publish('services.listAll', function docPub() {
//   const cursor = Services.find({});
//   console.log('cursor',cursor);
//   const DocsWithUserObject = cursor ? cursor.map((doc) => {
//     const userobject = Meteor.users.findOne({ _id: doc.ownedBy });
//     const doc2 = doc;
//     if (userobject) {
//       doc2.userobject = userobject.profile;
//     }
//     return doc2;
//     // else {
//     //   return this.ready();
//     // }
//   }) : cursor;
//   return DocsWithUserObject;
// });

// Meteor.publish('services.listAll', function docPub() {
//    let cursor = Services.find({});
//    let DocsWithUserObject = cursor.map((doc) => {
//      const userobject = Meteor.users.findOne({ _id: doc.ownedBy });
//      if (userobject) {
//        doc.userobject = userobject.profile;
//        return doc
//      }
//    });
//    console.log('DocsWithUserObject',DocsWithUserObject);
//   return DocsWithUserObject;
// })
