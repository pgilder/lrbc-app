import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Poolroutes from '../../api/poolroutes/poolroutes.js';
import PoolroutesList from '../components/PoolroutesList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const myid = params._id ? params._id : Meteor.userId();
  const subscription = Meteor.subscribe('poolroutes.list', myid);
  if (subscription.ready()) {
    const userData = Meteor.users.findOne({ _id: myid });
    let userName;
    if (params._id) {
      userName = Object.prototype.hasOwnProperty.call(userData.profile.name, 'first') ? `${userData.profile.name.first}'s` : userData.profile.name;
    } else {
      userName = 'My';
    }
    let poolroutes = Poolroutes.find().fetch();
    poolroutes = poolroutes.map((x) => {
      const userobject = Meteor.users.findOne({ _id: x.ownedBy });
      const x2 = x;
      if (userobject) {
        x2.userobject = userobject;
      }
      return x2;
    });
    // console.log('AllPoolroutes.js users', Meteor.users.find({}).fetch());
    onData(null, { poolroutes, userName });
  }
};

export default composeWithTracker(composer, Loading)(PoolroutesList);


// const composer = (params, onData) => {
//   const subscription = Meteor.subscribe('poolroutes.list');
//   if (subscription.ready()) {
//     const poolroutes = Poolroutes.find().fetch();
//     console.log('PoolroutesList.js', poolroutes);
//     onData(null, { poolroutes });
//   }
// };
