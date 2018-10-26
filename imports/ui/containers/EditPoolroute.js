import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Poolroutes from '../../api/poolroutes/poolroutes.js';
import EditPoolroute from '../pages/EditPoolroute.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('poolroutes.view', params._id);

  if (subscription.ready()) {
    const doc = Poolroutes.findOne();
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditPoolroute);
