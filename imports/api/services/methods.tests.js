/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Services from './services.js';
import { upsertService, removeService } from './methods.js';

describe('Services methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a service into the Services collection', function () {
    upsertService.call({
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getService = Services.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getService.body, 'They went nuts!');
  });

  it('updates a service in the Services collection', function () {
    const { _id } = Factory.create('service');

    upsertService.call({
      _id,
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getService = Services.findOne(_id);
    assert.equal(getService.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a service from the Services collection', function () {
    const { _id } = Factory.create('service');
    removeService.call({ _id });
    const getService = Services.findOne(_id);
    assert.equal(getService, undefined);
  });
});
