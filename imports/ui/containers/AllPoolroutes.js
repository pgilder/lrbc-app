import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Poolroutes from '../../api/poolroutes/poolroutes.js';
import PoolroutesList from '../components/AllPoolroutesList.js';
import Loading from '../components/Loading.js';

// just handover raw data and modify clientside - SO way
const composer = (params, onData) => {
  const subscription = Meteor.subscribe('poolroutes.listAll');
  if (subscription.ready()) {
    let poolroutes = Poolroutes.find().fetch();
    poolroutes = poolroutes.map((x) => {
      const userobject = Meteor.users.findOne({ _id: x.ownedBy });
      const x2 = x;
      if (userobject) {
        // console.log('userobject', userobject);
        x2.userobject = userobject;
      }
      return x2;
    });
    // console.log('AllPoolroutes.js', poolroutes);
    // console.log('AllPoolroutes.js users', Meteor.users.find({}).fetch());
    onData(null, { poolroutes });
  }
};

// // try to modify inside here - meteorchef way
// const composer = (params, onData) => {
//   const subscription = Meteor.subscribe('poolroutes.listAll');
//   if (subscription.ready()) {
//     const poolroutes = Poolroutes.find().fetch();
//     console.log('AllPoolroutes.js', poolroutes);
//     onData(null, { poolroutes });
//   }
// };

export default composeWithTracker(composer, Loading)(PoolroutesList);
