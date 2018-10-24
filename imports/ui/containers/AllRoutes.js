import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Routes from '../../api/routes/routes.js';
import RoutesList from '../components/AllRoutesList.js';
import Loading from '../components/Loading.js';

// just handover raw data and modify clientside - SO way
const composer = (params, onData) => {
  const subscription = Meteor.subscribe('routes.listAll');
  if (subscription.ready()) {
    let routes = Routes.find().fetch();
    routes = routes.map((x) => {
      const userobject = Meteor.users.findOne({ _id: x.ownedBy });
      const x2 = x;
      if (userobject) {
        // console.log('userobject', userobject);
        x2.userobject = userobject;
      }
      return x2;
    });
    // console.log('AllRoutes.js', routes);
    // console.log('AllRoutes.js users', Meteor.users.find({}).fetch());
    onData(null, { routes });
  }
};

// // try to modify inside here - meteorchef way
// const composer = (params, onData) => {
//   const subscription = Meteor.subscribe('routes.listAll');
//   if (subscription.ready()) {
//     const routes = Routes.find().fetch();
//     console.log('AllRoutes.js', routes);
//     onData(null, { routes });
//   }
// };

export default composeWithTracker(composer, Loading)(RoutesList);
