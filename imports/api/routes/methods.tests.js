/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Routes from './routes.js';
import { upsertRoute, removeRoute } from './methods.js';

describe('Routes methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a route into the Routes collection', function () {
    upsertRoute.call({
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getRoute = Routes.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getRoute.body, 'They went nuts!');
  });

  it('updates a route in the Routes collection', function () {
    const { _id } = Factory.create('route');

    upsertRoute.call({
      _id,
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getRoute = Routes.findOne(_id);
    assert.equal(getRoute.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a route from the Routes collection', function () {
    const { _id } = Factory.create('route');
    removeRoute.call({ _id });
    const getRoute = Routes.findOne(_id);
    assert.equal(getRoute, undefined);
  });
});
