/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Poolroutes from './poolroutes.js';
import { upsertPoolroute, removePoolroute } from './methods.js';

describe('Poolroutes methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a poolroute into the Poolroutes collection', function () {
    upsertPoolroute.call({
      pooltitle: 'You can\'t arrest me, I\'m the Cake Boss!',
      poolbody: 'They went nuts!',
    });

    const getPoolroute = Poolroutes.findOne({ pooltitle: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getPoolroute.poolbody, 'They went nuts!');
  });

  it('updates a poolroute in the Poolroutes collection', function () {
    const { _id } = Factory.create('poolroute');

    upsertPoolroute.call({
      _id,
      pooltitle: 'You can\'t arrest me, I\'m the Cake Boss!',
      poolbody: 'They went nuts!',
    });

    const getPoolroute = Poolroutes.findOne(_id);
    assert.equal(getPoolroute.pooltitle, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a poolroute from the Poolroutes collection', function () {
    const { _id } = Factory.create('poolroute');
    removePoolroute.call({ _id });
    const getPoolroute = Poolroutes.findOne(_id);
    assert.equal(getPoolroute, undefined);
  });
});
