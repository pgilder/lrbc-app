import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Routes from '../../api/routes/routes.js';
import ViewRoute from '../pages/ViewRoute.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('routes.view', params._id);

  if (subscription.ready()) {
    const doc = Routes.findOne();
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ViewRoute);
