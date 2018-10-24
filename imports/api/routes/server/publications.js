import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Routes from '../routes';

const _ = require('lodash');

// Meteor.publish('routes.list', function docPub() { return Routes.find({ownedBy: this.userId}) });
Meteor.publish('routes.list', function docPub(_id) {
  check(_id, String);
  // console.log('doc.list', _id);
  // return Routes.find({ ownedBy: _id });
  const routeCursor = Routes.find({ ownedBy: _id });
  const profileCursor = Meteor.users.find(
    {
      _id,
    },
    {
      fields: { profile: 1 },
    });
  return [routeCursor, profileCursor];
});

// just handover raw data and modify clientside - SO way
Meteor.publish('routes.listAll', function() {
  const routeCursor = Routes.find({});
  const ownerIds = routeCursor.map(function(d) {
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
  return [routeCursor, profileCursor];
});


Meteor.publish('routes.view', function docPub(_id) {
  check(_id, String);
  return Routes.find({ _id, ownedBy: this.userId });
});

// // try to modify inside here - meteorchef way
// Meteor.publish('routes.listAll', function docPub() {
//   const cursor = Routes.find({});
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

// Meteor.publish('routes.listAll', function docPub() {
//    let cursor = Routes.find({});
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
