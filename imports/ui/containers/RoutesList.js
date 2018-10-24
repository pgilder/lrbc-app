import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Routes from '../../api/routes/routes.js';
import RoutesList from '../components/RoutesList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const myid = params._id ? params._id : Meteor.userId();
  const subscription = Meteor.subscribe('routes.list', myid);
  if (subscription.ready()) {
    const userData = Meteor.users.findOne({ _id: myid });
    let userName;
    if (params._id) {
      userName = Object.prototype.hasOwnProperty.call(userData.profile.name, 'first') ? `${userData.profile.name.first}'s` : userData.profile.name;
    } else {
      userName = 'My';
    }
    let routes = Routes.find().fetch();
    routes = routes.map((x) => {
      const userobject = Meteor.users.findOne({ _id: x.ownedBy });
      const x2 = x;
      if (userobject) {
        x2.userobject = userobject;
      }
      return x2;
    });
    // console.log('AllRoutes.js users', Meteor.users.find({}).fetch());
    onData(null, { routes, userName });
  }
};

export default composeWithTracker(composer, Loading)(RoutesList);


// const composer = (params, onData) => {
//   const subscription = Meteor.subscribe('routes.list');
//   if (subscription.ready()) {
//     const routes = Routes.find().fetch();
//     console.log('RoutesList.js', routes);
//     onData(null, { routes });
//   }
// };
