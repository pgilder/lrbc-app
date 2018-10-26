import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Poolroutes from '../poolroutes';

const _ = require('lodash');

// Meteor.publish('poolroutes.list', function docPub() { return Poolroutes.find({ownedBy: this.userId}) });
Meteor.publish('poolroutes.list', function docPub(_id) {
  check(_id, String);
  // console.log('doc.list', _id);
  // return Poolroutes.find({ ownedBy: _id });
  const poolrouteCursor = Poolroutes.find({ ownedBy: _id });
  const profileCursor = Meteor.users.find(
    {
      _id,
    },
    {
      fields: { profile: 1 },
    });
  return [poolrouteCursor, profileCursor];
});

// just handover raw data and modify clientside - SO way
Meteor.publish('poolroutes.listAll', function() {
  const poolrouteCursor = Poolroutes.find({});
  const ownerIds = poolrouteCursor.map(function(d) {
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
  return [poolrouteCursor, profileCursor];
});


Meteor.publish('poolroutes.view', function docPub(_id) {
  check(_id, String);
  return Poolroutes.find({ _id, ownedBy: this.userId });
});

// // try to modify inside here - meteorchef way
// Meteor.publish('poolroutes.listAll', function docPub() {
//   const cursor = Poolroutes.find({});
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

// Meteor.publish('poolroutes.listAll', function docPub() {
//    let cursor = Poolroutes.find({});
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
