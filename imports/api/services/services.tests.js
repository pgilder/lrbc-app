/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Services from './services.js';

describe('Services collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Services, 'object');
  });
});
