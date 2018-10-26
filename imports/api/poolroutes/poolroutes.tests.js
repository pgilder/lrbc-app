/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Poolroutes from './poolroute.js';

describe('Poolroutes collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Poolroutes, 'object');
  });
});
